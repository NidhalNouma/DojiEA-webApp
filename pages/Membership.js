import React, { useState } from "react";
import Header from "../components/Header";
import { H1 } from "../components/utils/Titles";
import Pricing from "../components/Pricing";

import { CheckoutForm1 } from "../components/Stripe";

function Membership() {
  const [selectedPricing, setSelected] = useState(null);

  return (
    <div>
      <Header />
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Hero content */}
        <div className="pt-12 pb-12 md:pt-20 md:pb-20">
          <H1 label="Membership" />
          <Pricing select={setSelected} selected={selectedPricing} />
          {selectedPricing && (
            <CheckoutForm1
              price={selectedPricing.Price}
              title={selectedPricing.name}
              id={selectedPricing.id}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Membership;
