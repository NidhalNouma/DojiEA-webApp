import { RefreshIcon } from "@heroicons/react/outline";
import { useState } from "react";
import { useUserContext } from "../hooks/Users";
import { P1 } from "../components/utils/Text";
import { ButtonT4Spin, Spinner4 } from "../components/utils/Buttons";
import { disableOrEnableAccount, getAccounts } from "../hooks/firebase";
import CardInfo from "./CardInfo";
import {
  allowedAccounts,
  getNoStatus,
  allowedAccountsLifeMember,
} from "../hooks/Stripe";

export default function AccountsList() {
  const { user } = useUserContext();
  const accounts = user?.accounts;

  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="mb-6 flex">
            <CardInfo
              color="text-slate-100 bg-slate-400"
              value={
                allowedAccounts(user?.stripe?.subscription?.data) +
                allowedAccountsLifeMember(user?.stripe?.intent?.data) -
                getNoStatus(accounts, true)
              }
              title="Availble to use"
            />
            <CardInfo
              color="bg-teal-400 text-teal-400"
              value={getNoStatus(accounts, true)}
              title="Active account"
              className="mx-4"
            />
            <CardInfo
              color="text-red-400 bg-red-400"
              value={getNoStatus(accounts, false)}
              title="Inactive account"
            />
          </div>
          <Table />
        </div>
      </div>
    </div>
  );
}

function Table() {
  const [spin, setSpin] = useState(false);
  const { user, setUser } = useUserContext();
  const accounts = user?.accounts;

  return (
    <div className="shadow overflow-hidden border-b border-c2 sm:rounded-lg">
      <table className="min-w-full divide-y divide-slate-600">
        <thead className="bg-c2">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-slate-100 uppercase tracking-wider"
            >
              Name
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-slate-100 uppercase tracking-wider"
            >
              Number
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-slate-100 uppercase tracking-wider"
            >
              Server
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
                    const accounts = await getAccounts(user.uid);
                    setUser({ ...user, accounts });
                    setSpin(false);
                  }}
                />
              )}
            </th>
          </tr>
        </thead>
        <tbody className="bg-c1 divide-y divide-c2">
          {accounts.map((val, i) => (
            <Raw key={i} val={val} />
          ))}
        </tbody>
      </table>
      {accounts.length === 0 && (
        <P1 className="text-center py-3">No account are being used</P1>
      )}
    </div>
  );
}

function Raw({ val }) {
  const { user, setUser } = useUserContext();

  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm font-medium text-slate-400">
          {val.accountName}
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm font-medium text-slate-400">
          {val.accountNumber}
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-slate-400">{val.accountServer}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
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
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        {!val.isActive ? (
          <ButtonT4Spin
            label="Enable"
            className="ml-auto"
            classNameSpin="ml-auto !w-5 !h-5"
            onClick={async () => {
              const accounts = await disableOrEnableAccount(
                user.uid,
                val.id,
                true
              );
              setUser({ ...user, accounts });
            }}
          />
        ) : (
          <ButtonT4Spin
            label="Disable"
            className="ml-auto !text-slate-500"
            classNameSpin="ml-auto !text-slate-500 !w-5 !h-5"
            onClick={async () => {
              const accounts = await disableOrEnableAccount(
                user.uid,
                val.id,
                false
              );
              setUser({ ...user, accounts });
            }}
          />
        )}
      </td>
    </tr>
  );
}
