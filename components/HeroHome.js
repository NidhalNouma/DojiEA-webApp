import React from "react";

// import HeroImage from "../images/hero-image.png";

function HeroHome() {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Section header */}
          <div className="text-center pb-12 md:pb-16">
            <h1
              className="text-white text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4"
              data-aos="zoom-y-out"
            >
              Make your trading{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r to-slate-300 from-teal-400">
                wonderful
              </span>
            </h1>
            <div className="max-w-3xl mx-auto">
              <p
                className="text-xl mb-8 text-slate-500 px-14 py-6"
                data-aos="zoom-y-out"
                data-aos-delay="150"
              >
                With the most wanted forex robot trading in the market. With our
                flawless algorithm, we can guarantee a consistent profit every
                month for you. Proove it your self now!.
              </p>
              <div
                className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center"
                data-aos="zoom-y-out"
                data-aos-delay="300"
              >
                <div>
                  <button
                    className="px-10 py-4 rounded-full text-c2 font-semibold bg-slate-100 w-full mb-4 sm:w-auto sm:mb-0"
                    href="#0"
                  >
                    Get Free version
                  </button>
                </div>
                <div>
                  <button
                    className="px-10 py-4 rounded-full text-slate-100 font-medium bg-slate-600 w-full sm:w-auto sm:ml-4"
                    href="#0"
                  >
                    How to use it?
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroHome;
