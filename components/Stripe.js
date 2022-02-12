import { useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { Button4Spin } from "./utils/Buttons";
import { H4 } from "./utils/Titles";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    if (elements == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    console.log(paymentMethod);
  };

  return (
    <div className="flex flex-col">
      <CardElement
        className="p-4 rounded-lg bg-slate-100"
        options={{ hidePostalCode: true }}
      />
      <Button4Spin
        label="Pay"
        className="rounded-lg mt-4"
        onClick={async () => await handleSubmit()}
      />
    </div>
  );
};

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

export const CheckoutForm1 = ({ price = 0, title = "None" }) => {
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
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </div>
  );
};
