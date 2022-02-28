import React, { useState, useEffect } from "react";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import { useRouter } from "next/router";

import { useUserContext } from "../hooks/Users";

import Header from "../components/Header";
import { H1, H4 } from "../components/utils/Titles";
import { P1 } from "../components/utils/Text";
import { LinkT4 } from "../components/utils/Links";
import Pricing from "../components/Pricing";
import { Form } from "../components/Stripe";
import MembershipList from "../components/MembershipList";
import Overlay from "../components/utils/Overlay";
import SignIn from "../components/SignIn";

import { getAvailablePlans } from "../hooks/Plans";
import { paths, prices } from "../Constants";

function Membership() {
  const { user } = useUserContext();
  const plans = getAvailablePlans(user?.plans);
  const router = useRouter();

  const [selectedPricing, setSelected] = useState(null);
  const [done, setDone] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sel = router.query?.sel;
    if (sel)
      for (const key in prices) {
        const v = prices[key];
        if (v.name === sel) setSelected(v);
      }
  }, [router.query]);

  return (
    <div>
      <Header />
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Hero content */}
        <div className="py-12 pb-6 md:py-20">
          <H1 label="Membership" />
          {plans?.length > 0 && (
            <main>
              <div className="max-w-7xl mx-auto py-3 sm:px-6 lg:px-8">
                <H4 label={`You have ${plans.length} available plan`} />
                <MembershipList hideDelete={true} />
                <P1>Feel free to select and add more if you need</P1>
              </div>
            </main>
          )}
          <Pricing
            select={(e) => {
              if (user) {
                setSelected(e);
                setDone(false);
              } else {
                setOpen(true);
              }
            }}
            selected={selectedPricing}
          />
          {selectedPricing && !done && (
            <Form
              price={selectedPricing.Price}
              title={selectedPricing.name}
              type={selectedPricing.type}
              accounts={selectedPricing.accounts}
              id={selectedPricing.id}
              user={user}
              done={() => setDone(true)}
            />
          )}
          {done && selectedPricing && (
            <div className="pt-20">
              <Done title={selectedPricing.name} />{" "}
            </div>
          )}
        </div>
      </div>
      <Overlay open={open} setOpen={setOpen}>
        <SignIn start={1} close={() => setOpen(false)} />
      </Overlay>
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
              Click <LinkT4 label="here" href={paths.howtouse} /> to see how to
              use our bot.
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
