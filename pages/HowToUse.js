import React from "react";
import Header from "../components/Header";
import { H1 } from "../components/utils/Titles";

function HowToUse() {
  return (
    <div>
      <Header />
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Hero content */}
        <div className="pt-12 pb-12 md:pt-20 md:pb-20">
          <H1 label="How to use" />
        </div>
      </div>
    </div>
  );
}

export default HowToUse;
