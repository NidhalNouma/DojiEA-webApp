import React, { useState } from "react";
import Header from "../components/Header";
import HeroHome from "../components/HeroHome";
import FeaturesBlocks from "../components/FeaturesBlocks";
import Features from "../components/Features";
import Pricing from "../components/Pricing";
import Overlay from "../components/utils/Overlay";
import SignIn from "../components/SignIn";

function Index() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Header />
      <HeroHome />
      <Features />
      <FeaturesBlocks />
      <div
        className="mt-48"
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="1000"
      >
        <Pricing top={true} select={setOpen} />
      </div>
      <Overlay open={open} setOpen={setOpen}>
        <SignIn start={1} />{" "}
      </Overlay>
    </div>
  );
}

export default Index;
