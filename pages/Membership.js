import React from "react";
import Header from "../components/Header";
import { H1 } from "../components/utils/Titles";
import { Pricing1 } from "../components/Pricing";

import { CheckoutForm1 } from "../components/Stripe";

function Membership() {
  return (
    <div>
      <Header />
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Hero content */}
        <div className="pt-12 pb-12 md:pt-20 md:pb-20">
          <H1 label="Membership" />
          <Pricing1 />
          <CheckoutForm1 />
        </div>
      </div>
    </div>
  );
}

export default Membership;
