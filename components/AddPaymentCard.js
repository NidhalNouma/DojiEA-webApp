import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { Button4Spin } from "./utils/Buttons";
import { ErrorI } from "./utils/Alert";

import { AttachPaymentMethod } from "../hooks/Payments";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

export const CheckoutForm1 = ({ props }) => {
  const { user, setUser, close } = props;
  const { submit, error } = AttachPaymentMethod(user, setUser);
  const stripe = useStripe();
  const elements = useElements();

  return (
    <React.Fragment>
      <CardElement
        className="p-4 rounded-lg bg-slate-100 mt-4 mb-4"
        options={{ hidePostalCode: true }}
      />
      {error && <ErrorI message={error} />}
      <Button4Spin
        label="Add card"
        className="rounded-lg mt-3"
        onClick={async () => await submit(stripe, elements, CardElement, close)}
      />
    </React.Fragment>
  );
};

export default function Form(props) {
  return (
    <React.Fragment>
      <div className="px-6 pb-4 space-y-6 lg:px-8 sm:pb-6 xl:pb-8">
        <h3 className="text-xl font-medium text-white">
          Enter your card details.
        </h3>

        <div className="flex flex-col">
          <Elements stripe={stripePromise}>
            <CheckoutForm1 props={props} />
          </Elements>
        </div>
      </div>
    </React.Fragment>
  );
}
