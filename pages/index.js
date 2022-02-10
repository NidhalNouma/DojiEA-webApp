import React from "react";
import Header from "../components/Header";
import HeroHome from "../components/HeroHome";
import FeaturesBlocks from "../components/FeaturesBlocks";
import Features from "../components/Features";
import Pricing from "../components/Pricing";

function Index() {
  return (
    <div>
      <Header />
      <HeroHome />
      <Features />
      <FeaturesBlocks />
      <Pricing />
    </div>
  );
}

export default Index;
