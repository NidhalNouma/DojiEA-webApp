import React, { useEffect, useState } from "react";
import { Button4Spin } from "./utils/Buttons";
import { H4 } from "./utils/Titles";
import PaymentMethods from "./PaymentCard";

import { useUserContext } from "../hooks/Users";
import { createSub } from "../hooks/Stripe";
import { ErrorI } from "./utils/Alert";

export const Form = (props) => {
  const { user, setUser } = useUserContext();
  const { title, price, id, done, type, accounts } = props;
  const [pm, setPm] = useState(null);
  const [open, setOpen] = useState(0);
  const [error, setError] = useState("");

  const submit = async () => {
    setError("");
    if (!pm) {
      setOpen(open + 1);
      return;
    }

    const { subscriptions, intents, r, error } = await createSub(
      user.uid,
      user.customerId,
      pm.id,
      id,
      price,
      title,
      type,
      accounts
    );

    if (error) {
      setError(error.message);
      return;
    } else if (r.error) {
      setError(r.error.raw.message);
      return;
    } else {
      const nu = {
        ...user,
        stripe: {
          ...user.stripe,
          subscription: subscriptions,
          intent: intents,
        },
      };
      setUser(nu);
      done(false);
    }
  };

  useEffect(() => {
    window.scroll({
      top: document.body.scrollHeight,
      left: 0,
      behavior: "smooth",
    });
  }, [price]);

  return (
    <div className="mt-20 bg-c2 rounded-lg p-4">
      <div className="mb-8">
        <H4 label="Enter your card details." />
        <H4 label="Your subscription will start now." />
        <p className="text-slate-400 pt-4">
          → Total due now <span className="text-c4">${price}</span>
        </p>
        <p className="text-slate-400 pt-1">
          {" "}
          → Subscribing to{" "}
          <span className="text-slate-300 font-bold">{title}</span>
        </p>
      </div>

      <div className="flex flex-col">
        <PaymentMethods
          opend={open}
          selected={pm}
          onSelect={(e) => setPm(e)}
          hideDelete={true}
        />

        {error && (
          <div className="mt-2">
            <ErrorI message={error} />
          </div>
        )}

        <Button4Spin
          label={pm ? "Pay" : "Add Payment Card"}
          className="rounded-lg mt-5"
          onClick={async () => {
            if (!pm) setOpen(true);
            else await submit();
          }}
        />
      </div>
    </div>
  );
};
