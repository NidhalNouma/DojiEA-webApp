import React, { useState } from "react";
import { Player, Controls } from "@lottiefiles/react-lottie-player";

import { useUserContext } from "../hooks/Users";

import Header from "../components/Header";
import { H1, H4 } from "../components/utils/Titles";
import { P1 } from "../components/utils/Text";
import { LinkT4 } from "../components/utils/Links";
import Pricing from "../components/Pricing";
import { Form } from "../components/Stripe";

function Membership() {
  const { user } = useUserContext();

  const [selectedPricing, setSelected] = useState(null);
  const [done, setDone] = useState(false);

  return (
    <div>
      <Header />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        {/* Hero content */}
        <div className="pt-12 pb-12 md:pt-20 md:pb-20">
          <H1 label="Membership" />
          <Pricing
            select={(e) => {
              setSelected(e);
              setDone(false);
            }}
            selected={selectedPricing}
          />
          {selectedPricing && !done && (
            <Form
              price={selectedPricing.Price}
              title={selectedPricing.name}
              id={selectedPricing.id}
              user={user}
              done={() => setDone(true)}
            />
          )}
        </div>
        {done && selectedPricing && <Done title={selectedPricing.name} />}
      </div>
    </div>
  );
}

export default Membership;

function Done({ title = "Membership" }) {
  return (
    <React.Fragment>
      <div className="">
        <div className="mb-20 bg-c2 rounded-lg p-4">
          <div className="mt8">
            <H4 label="Congratulations!!" />
            <P1 className="!text-slate-300 font-bold text-medium">
              {" "}
              You have successfully subscribed to the
              <span className="text-teal-500 text-lg font-semibold">
                {" "}
                {title} plan
              </span>
              .
            </P1>
            <P1 className="!text-slate-300 font-bold text-medium">
              Click <LinkT4 label="here" href="/HowToUse" /> to see how to use
              our bot.
            </P1>
          </div>
        </div>
      </div>
      <div className="relative">
        <Play l={0} />
        <Play l={1} />
      </div>
    </React.Fragment>
  );
}

function Play({ l }) {
  const src = "https://assets7.lottiefiles.com/packages/lf20_lg6lh7fp.json";
  const style = {
    position: "absolute",
    bottom: "0px",
    left: `${l === 0 ? 0 : "auto"}`,
    right: `${l === 1 ? 0 : "auto"}`,
    zIndex: 0,
    pointerEvents: "none",
  };

  return (
    <Player autoplay loop src={src} style={style}>
      <Controls
        visible={false}
        buttons={["play", "repeat", "frame", "debug"]}
      />
    </Player>
  );
}
