import { useState } from "react";
import { RefreshIcon } from "@heroicons/react/outline";
import { P1 } from "../components/utils/Text";
import {
  ButtonT4Spin,
  Spinner4,
  Button5Spin,
} from "../components/utils/Buttons";
import { LinkT4 } from "./utils/Links";
import CardInfo from "./CardInfo";
import CancelMessage from "./CancelMessage";
import Overlay from "./utils/Overlay";
import { ErrorI } from "./utils/Alert";

import { useUserContext } from "../hooks/Users";
import {
  AccountsHook,
  getAccountsByType,
  getNoStatus,
  getAvailableToUseAccounts,
} from "../hooks/Accounts";
import { paths, accountsTypes } from "../Constants";

export default function AccountsList() {
  const { user, setUser } = useUserContext();
  const allowedReal = getAvailableToUseAccounts(
    user?.plans,
    accountsTypes.real
  );
  const allowedDemo = getAvailableToUseAccounts(
    user?.plans,
    accountsTypes.demo
  );
  const allowed = allowedReal + allowedDemo;

  const real = getAccountsByType(user?.accounts, accountsTypes.real);
  const demo = getAccountsByType(user?.accounts, accountsTypes.demo);

  const { accounts, error, addAccount, removeAccount, getAccounts } =
    AccountsHook(user, setUser, allowed);

  const availableToAdd =
    allowed -
    getNoStatus(user?.accounts, true) -
    getNoStatus(user?.accounts, false);

  return (
    <div className="flex flex-col">
      <div className="-mb-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="pb-2 align-middle min-w-full sm:px-6 lg:px-8">
          <div className="flex w-full justify-between items-center text-center mb-2">
            <CardInfo
              color="text-slate-400 bg-slate-400"
              value={demo + "/" + allowedDemo}
              title="Demo account"
              className="sm:hidden"
            />
            <div className="hidden sm:block"></div>
            <CardInfo
              color="text-slate-100 bg-slate-100"
              value={availableToAdd > 0 ? availableToAdd : 0}
              title="Availble to add"
              className="bg-c1"
            />
          </div>
          <div className="mb-5 flex w-full justify-between items-center">
            <div className="flex">
              <CardInfo
                color="bg-teal-400 text-teal-400"
                value={real + "/" + allowedReal}
                title="Real account"
                className="mr-4"
              />
              <CardInfo
                color="text-slate-400 bg-slate-400"
                value={demo + "/" + allowedDemo}
                title="Demo account"
                className="hidden sm:block pb-0"
              />
            </div>
            <Button5Spin
              className="rounded ml-2"
              label="Generate new ID"
              onClick={addAccount}
            />
          </div>
          {error && (
            <ErrorI className="mb-4">
              Unfortunately you don&rsquo;t have enough available to use
              accounts, if you want to add a new accounts consider taking a new
              plan, click{" "}
              <LinkT4
                className="text-2xl font-extrabold text-red-700"
                label="here"
                href={paths.membership}
              />{" "}
              to get one.
            </ErrorI>
          )}
          <Table
            accounts={accounts}
            removeAccount={removeAccount}
            getAccounts={getAccounts}
          />
        </div>
      </div>
    </div>
  );
}

function Table({ accounts, removeAccount, getAccounts }) {
  const [spin, setSpin] = useState(false);

  return (
    <div className="shadow overflow-x-auto border-b border-c2 sm:rounded-lg">
      <table className="min-w-full divide-y divide-slate-600">
        <thead className="bg-c2">
          <tr>
            <th
              scope="col"
              className="w-1/3 px-6 py-3 text-left text-xs font-medium text-slate-100 uppercase tracking-wider"
            >
              ID
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-slate-100 uppercase tracking-wider"
            >
              NAME
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-slate-100 uppercase tracking-wider"
            >
              NUMBER
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-slate-100 uppercase tracking-wider"
            >
              TYPE
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-slate-100 uppercase tracking-wider"
            >
              Status
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-right text-xs font-medium text-slate-100 uppercase tracking-wider"
            >
              {spin ? (
                <Spinner4 classNameSpin="!mr-0 ml-auto !h-5 !w-5 !text-slate-500" />
              ) : (
                <RefreshIcon
                  className="text-slate-300 inline h-5 w-5 cursor-pointer"
                  aria-hidden="true"
                  onClick={async () => {
                    setSpin(true);
                    await getAccounts();
                    setSpin(false);
                  }}
                />
              )}
            </th>
          </tr>
        </thead>
        <tbody className="bg-c1 divide-y divide-c2">
          {accounts?.map((val, i) => (
            <Raw key={i} val={val} removeAccount={removeAccount} />
          ))}
        </tbody>
      </table>
      {accounts.length === 0 && (
        <P1 className="text-center py-3">No account are being used</P1>
      )}
    </div>
  );
}

function Raw({ val, removeAccount }) {
  const [open, setOpen] = useState(false);
  const [copy, setCopy] = useState(0);

  return (
    <tr>
      <td className="px-4 py-3 whitespace-nowrap">
        <div
          onMouseEnter={() => setCopy(1)}
          onMouseLeave={() => setCopy(0)}
          onClick={() => {
            navigator.clipboard.writeText(val.id).then(
              function () {
                console.log("Async: Copying to clipboard was successful!");
                setCopy(2);
              },
              function (err) {
                console.error("Async: Could not copy text: ", err);
                setCopy(0);
              }
            );
          }}
          className="w-full text-sm font-medium text-slate-400 px-1 py-1 bg-slate-600 rounded cursor-pointer"
        >
          {copy === 0 ? (
            <span className="w-full">{val.id}</span>
          ) : copy === 1 ? (
            <p className="text-center text-slate-200 w-full">Click to copy</p>
          ) : (
            <p className="text-center text-slate-200 w-full">Copied</p>
          )}
        </div>
      </td>
      <td className="px-6 py-2 whitespace-nowrap">
        <div className="text-sm font-medium text-slate-400">
          {val.accountName ? val.accountName : <span className="ml-4">-</span>}
        </div>
      </td>
      <td className="px-6 py-2 whitespace-nowrap">
        <div className="text-sm text-slate-400">
          {val.accountNumber ? (
            val.accountNumber
          ) : (
            <span className="ml-5">-</span>
          )}
        </div>
      </td>
      <td className="px-6 py-2 whitespace-nowrap">
        <div className="text-sm text-slate-400">
          {val.type ? val.type : <span className="ml-3">-</span>}
        </div>
      </td>
      <td className="px-6 py-2 whitespace-nowrap">
        {val.isActive ? (
          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-c1">
            Active
          </span>
        ) : (
          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-c1">
            Inactive
          </span>
        )}
      </td>
      <td className="px-6 py-2 whitespace-nowrap">
        {/* <ButtonT4Spin
          label="Disable"
          className="ml-auto !text-slate-500"
          classNameSpin="ml-auto !w-5 !h-5 !text-slate-500"
          onClick={() => setOpen(true)}
        />
        <span className="text-slate-300 mx-2">|</span> */}

        <ButtonT4Spin
          label="Delete"
          className="ml-auto !text-slate-500"
          classNameSpin="ml-auto !w-5 !h-5 !text-slate-500"
          onClick={() => setOpen(true)}
        />
      </td>

      <Overlay open={open} setOpen={setOpen}>
        <CancelMessage
          title="Delete account"
          message="Are you sure you want to remove this account? All of your data will be permanently removed. This action cannot be undone."
          close={() => setOpen(false)}
          onAgree={async () => {
            await removeAccount(val.id);
            setOpen(false);
          }}
        />
      </Overlay>
    </tr>
  );
}
