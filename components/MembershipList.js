import React, { useState } from "react";
import moment from "moment";
import { P1 } from "./utils/Text";
import { LinkT4 } from "./utils/Links";
import { ButtonT4 } from "./utils/Buttons";
import { TrashIcon } from "@heroicons/react/outline";
import CancelMessage from "./CancelMessage";
import Overlay from "./utils/Overlay";

import { useUserContext } from "../hooks/Users";
import { CancelSubscription } from "../hooks/Payments";
import { getAvailablePlans, getCanceledPlans } from "../hooks/Plans";
import { paths } from "../Constants";

export default function MembershipList({ hideDelete }) {
  const { user, setUser } = useUserContext();
  const [viewc, setViewc] = useState(false);
  const plans = getAvailablePlans(user?.plans);
  const canceledPlans = getCanceledPlans(user?.plans);

  return (
    <React.Fragment>
      {plans?.length > 0 ? (
        <React.Fragment>
          {plans.map((v, i) =>
            v?.lifeTime === true ? (
              <Intent key={i} i={v} />
            ) : (
              <Subscription
                key={i}
                i={v}
                user={user}
                setUser={setUser}
                hideDelete={hideDelete}
              />
            )
          )}
        </React.Fragment>
      ) : (
        <P1>
          You have no active membership click{" "}
          <LinkT4 label="here" href={paths.membership} /> to make a new one
        </P1>
      )}
      {canceledPlans.length > 0 && (
        <React.Fragment>
          <ButtonT4
            label={viewc ? "Hide canceled plans" : "View canceled plans"}
            onClick={() => setViewc(!viewc)}
          />
          {viewc &&
            canceledPlans.map((v, i) => (
              <Subscription key={i} i={v} hideDelete={true} active={false} />
            ))}
        </React.Fragment>
      )}
    </React.Fragment>
  );
}

function Subscription({ i, user, setUser, hideDelete, active = true }) {
  const [open, setOpen] = useState(false);
  const { submit } = CancelSubscription(user, setUser);

  return (
    <div className="py-2 px-1 border border-slate-500 rounded my-3 cursor cursor-pointer hover:bg-c1 flex items-center">
      <div className="flex flex-col mx-4 items-start w-full">
        <div className="flex items-center justify-between min-w-full">
          <span
            className={`${
              active ? "text-teal-400 " : "text-red-400 "
            } text-lg font-bold py-1`}
          >
            {i.metadata?.name} Membership
          </span>
          {!hideDelete && (
            <TrashIcon
              className="w-4 h-4 text-c2"
              onClick={() => setOpen(true)}
            />
          )}
        </div>
        <span className="text-slate-300 text-sm font-medium">
          {active ? "Renew " : "End on "}
          <span className="text-sm text-slate-400">
            {moment(i.renew * 1000).format("MMMM Do YYYY")}
          </span>
        </span>
      </div>

      <Overlay open={open} setOpen={setOpen}>
        <CancelMessage
          title="Cancel subscription"
          message="Are you sure you want to cancel your subscription? All of your data will be permanently removed. This action cannot be undone."
          close={() => setOpen(false)}
          onAgree={async () => await submit(i.id, setOpen)}
        />
      </Overlay>
    </div>
  );
}

function Intent({ i }) {
  return (
    <div className="py-2 px-1 border border-slate-500 rounded my-3 cursor cursor-pointer hover:bg-c1 flex items-center">
      <div className="flex flex-col mx-4 items-start w-full">
        <div className="flex items-center justify-between min-w-full">
          <span className="text-lg font-bold text-teal-400 py-1">
            {i.metadata?.name} Membership
          </span>
        </div>
        <span className="text-slate-300 text-sm font-medium">Life time</span>
      </div>
    </div>
  );
}
