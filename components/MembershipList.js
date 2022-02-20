import React, { useState } from "react";
import moment from "moment";
import { useUserContext } from "../hooks/Users";
import { P1 } from "./utils/Text";
import { LinkT4 } from "./utils/Links";
import { TrashIcon } from "@heroicons/react/outline";
import CancelMessage from "./CancelMessage";
import Overlay from "./utils/Overlay";
import {
  cancelSubscription,
  validSubscriptions,
  validLifeTime,
} from "../hooks/Stripe";
import { getNameByPriceId, paths } from "../Constants";

export default function MembershipList({ hideDelete }) {
  const { user, setUser } = useUserContext();
  const data = validSubscriptions(user?.stripe?.subscription?.data);
  const data1 = validLifeTime(user?.stripe?.intent?.data);

  return (
    <React.Fragment>
      {data?.length + data1?.length > 0 ? (
        <React.Fragment>
          {data.map((sub, i) => (
            <Subscription
              key={i}
              i={sub}
              user={user}
              setUser={setUser}
              hideDelete={hideDelete}
            />
          ))}
          {data1.map((int, i) => (
            <Intent key={i} i={int} />
          ))}
        </React.Fragment>
      ) : (
        <P1>
          You have no active membership click{" "}
          <LinkT4 label="here" href={paths.membership} /> to make a new one
        </P1>
      )}
    </React.Fragment>
  );
}

function Subscription({ i, user, setUser, hideDelete }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="py-2 px-1 border border-slate-500 rounded my-3 cursor cursor-pointer hover:bg-c1 flex items-center">
      <div className="flex flex-col mx-4 items-start w-full">
        <div className="flex items-center justify-between min-w-full">
          <span className="text-lg font-bold text-teal-400 py-1">
            {getNameByPriceId(i.plan.id)} Membership
          </span>
          {!hideDelete && (
            <TrashIcon
              className="w-4 h-4 text-c2"
              onClick={() => setOpen(true)}
            />
          )}
        </div>
        <span className="text-slate-300 text-sm font-medium">
          Renew{" "}
          <span className="text-sm text-slate-400">
            {moment(i.current_period_end * 1000).format("MMMM Do YYYY")}
          </span>
        </span>
      </div>

      <Overlay open={open} setOpen={setOpen}>
        <CancelMessage
          title="Cancel subscription"
          message="Are you sure you want to cancel your subscription? All of your data will be permanently removed. This action cannot be undone."
          close={() => setOpen(false)}
          onAgree={async () => {
            let subscription = await cancelSubscription(i.id, user.customerId);

            if (subscription) {
              const nu = {
                ...user,
                stripe: { ...user.stripe, subscription },
              };
              setUser(nu);
              setOpen(false);
            }
          }}
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
