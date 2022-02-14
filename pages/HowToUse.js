import React from "react";
import Header from "../components/Header";
import { files } from "../Constants";
import { H1, H3 } from "../components/utils/Titles";
import { P1 } from "../components/utils/Text";

function HowToUse() {
  return (
    <div>
      <Header />
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Hero content */}
        <div className="pt-12 pb-12 md:pt-20 md:pb-20">
          <H1 label="How to use" />

          <main>
            <div className="max-w-7xl mx-auto py-3 sm:px-6 lg:px-8">
              <div className="px-4 py-3 sm:px-0 text-center">
                <P1 className="!text-base mt-0">
                  Download the DojiBot file from here and follow the steps for
                  easy setup.
                </P1>
                <div className="mt-6">
                  <button
                    className="px-10 py-3 rounded-full text-c2 font-semibold bg-slate-100 w-full mb-4 sm:w-auto sm:mb-0"
                    href="#0"
                    onClick={files.ex4}
                  >
                    Download file
                  </button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default HowToUse;
