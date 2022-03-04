import React, { useState, useEffect } from "react";
import Router from "next/router";
import Header from "../components/Header";
import Pricing from "../components/Pricing";
import Overlay from "../components/utils/Overlay";
import SignIn from "../components/SignIn";
import { H4 } from "../components/utils/Titles";
import { useUserContext } from "../hooks/Users";

import {
  MailIcon,
  ClockIcon,
  AdjustmentsIcon,
  CogIcon,
  LightBulbIcon,
  LightningBoltIcon,
  ShieldCheckIcon,
} from "@heroicons/react/outline";

import AOS from "aos";
import "aos/dist/aos.css";

import { paths } from "../Constants";

function Index() {
  const [open, setOpen] = useState(false);
  const { user } = useUserContext();

  useEffect(() => {
    AOS.init({
      once: true,
      // disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);

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
        <Pricing
          top={true}
          redirect={user ? true : false}
          select={
            user ? (i) => Router.push(paths.membership + `?sel=${i}`) : setOpen
          }
          wfree={false}
        />
      </div>
      <Overlay open={open} setOpen={setOpen}>
        <SignIn start={1} close={() => setOpen(false)} />{" "}
      </Overlay>
    </div>
  );
}

export default Index;

function HeroHome() {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Hero content */}
        <div className="pt-28 pb-4 md:pt-36 md:pb-8">
          {/* Section header */}
          <div className="text-center pt-20 pb-12 md:pb-16">
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
                className="text-xl mb-0 text-slate-500 md:px-14 pt-6"
                data-aos="zoom-y-out"
                data-aos-delay="150"
              >
                You are in the right place to improve your trading and make some
                passive income.
              </p>
              <p
                className="text-xl mb-3 text-slate-500 md:px-14 pb-6"
                data-aos="zoom-y-out"
                data-aos-delay="150"
              >
                We offer one of the best and powerful trading robots, with our
                flawless algorithm, we can guarantee a consistent profit every
                month for you.
              </p>

              <iframe
                className="rounded m-auto w-full h-96 shadow-xl shadow-slate-500 border border-slate-600"
                src="//www.fxblue.com/fxbluechart.aspx?c=ch_cumulativeprofit&id=30895597"
                frameBorder="0"
                data-aos="fade-up"
              >
                <a href="//www.fxblue.com">
                  FX Blue - free tools and services for FX and CFD traders
                </a>
              </iframe>
              <div
                className="mt-14"
                // className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center"
                data-aos="zoom-y-out"
                data-aos-delay="300"
              >
                <H4 label="Supported for" />
                <div className="mt-6 flex justify-center">
                  <h1 className="text-teal-400 text-2xl font-extrabold pb-0 border-b-8 border-c2 rounded">
                    Metatrader 4
                  </h1>
                  <h1 className="ml-8 text-teal-400 text-2xl font-extrabold pb-0 border-b-8 border-c2 rounded">
                    Metatrader 5
                  </h1>
                </div>
                {/* <div>
                  <button
                    className="px-10 py-4 rounded-full text-c2 font-semibold bg-slate-100 w-full mb-4 sm:w-auto sm:mb-0"
                    href="#0"
                    onClick={files.ex4}
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
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section className="relative">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-8">
          {/* Section header */}
          <div
            className="max-w-3xl mx-auto text-center pb-12 md:pb-16"
            data-aos="zoom-y-out"
            data-aos-delay="400"
          >
            <h1 className="h2 mb-4 text-slate-100 font-bold">
              Explore the solutions
            </h1>
            <p className="text-xl text-slate-500">
              This is the time for you to make your trading profit for a living.
              We have the top notch trading system that will shock entire
              market, other traders have proven DojiBot Expert Advisor
              performance.
            </p>
          </div>

          {/* Section content */}
          <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
            {/* Content */}
            <div
              className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6"
              data-aos="fade-up"
            >
              <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-8">
                <h3 className="h3 mb-3 text-slate-100">Powerful tools</h3>
                <p className="text-xl text-slate-500">
                  In a second you will change your life, because you are about
                  to discover the most shocking underground algorithm and
                  technology in the market right now.
                </p>
              </div>
              {/* Tabs buttons */}
              <div className="mb-8 md:mb-0">
                <div className="flex items-center text-lg p-5 rounded mb-3 bg-slate-800">
                  <div>
                    <div className="text-slate-100 font-bold leading-snug tracking-tight mb-1">
                      Good return
                    </div>
                    <div className="text-slate-300">
                      Our system can give a good monthly return amount and
                      without a limit.
                    </div>
                  </div>
                </div>
                <div className="flex items-center text-lg p-5 rounded mb-3 bg-slate-700">
                  <div>
                    <div className="text-slate-100 font-bold leading-snug tracking-tight mb-1">
                      Low risk
                    </div>
                    <div className="text-slate-200">
                      Our system provide a low risk and a good protection for
                      the account.
                    </div>
                  </div>
                </div>
                <div className="flex items-center text-lg p-5 rounded mb-3 bg-slate-600">
                  <div>
                    <div className="text-slate-100 font-bold leading-snug tracking-tight mb-1">
                      Play safe
                    </div>
                    <div className="text-slate-200">
                      Play safe without worrying about losing all of your
                      account, our system is not based on a martingale or
                      hedgeing.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tabs items */}
            <div className="flex-col justify-content items-center max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1">
              {/* <iframe
                className="rounded m-auto w-full h-96 shadow-xl shadow-slate-500 border border-slate-600"
                src="//www.fxblue.com/fxbluechart.aspx?c=ch_cumulativeprofit&id=30895597"
                frameBorder="0"
                data-aos="fade-up"
              >
                <a href="//www.fxblue.com">
                  FX Blue - free tools and services for FX and CFD traders
                </a>
              </iframe> */}
              <iframe
                className="rounded m-auto w-full h-auto shadow-xl bg-white shadow-slate-500 border border-slate-600"
                src="//www.fxblue.com/fxbluechart.aspx?c=ch_accountstats&id=30895597"
                framebBrder="0"
                data-aos="fade-up"
              >
                <a href="//www.fxblue.com">
                  FX Blue - free tools and services for FX and CFD traders
                </a>
              </iframe>
              <iframe
                className="rounded m-auto w-full h-auto shadow-xl bg-white shadow-slate-500 border border-slate-600"
                src="//www.fxblue.com/fxbluechart.aspx?c=ch_accountrisk&id=30895597"
                frameBorder="0"
                data-aos="fade-up"
              >
                <a href="//www.fxblue.com">
                  FX Blue - free tools and services for FX and CFD traders
                </a>
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturesBlocks() {
  return (
    <div>
      <section className="relative">
        {/* Section background (needs .relative class on parent and next sibling elements) */}
        <div
          className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-c2 pointer-events-none"
          aria-hidden="true"
        ></div>
        <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-20">
            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center pb-6 md:pb-6">
              <h2 className="h2 mb-4 text-slate-100">About Us</h2>
              <p className="text-xl text-slate-500">
                We are a group of professional programmers & technical analysts
                providing perfect and flawless algorithm. We provide custom made
                trading strategy that gives profit from the sideways as well as
                trending market conditions. Our system works no matter what the
                market is doing.
              </p>
            </div>
            <div className="flex w-full justify-center mb-20">
              <a
                href="https://mail.google.com/mail/?view=cm&amp;fs=1&amp;to=dojibot@gmail.com&amp;su=Asking%20Question&amp;body=My%20Question%20is%20:"
                className="flex justify-center items-center mx-auto px-10 py-4 rounded-full text-slate-100 font-medium bg-slate-600"
                target="_blank"
                rel="noreferrer"
              >
                <MailIcon className="w-6 h-6 mr-2" />
                Contact us
              </a>
            </div>

            {/* Items */}
            <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">
              {/* 1st item */}
              <Sect1
                Title="Time Selection"
                Description="Our algorithm knows the best time to trade. Anti news time prevention has been installed"
              >
                <ClockIcon className="w-14 h-14 p-3 mb-3 bg-blue-400 text-slate-100 rounded-full" />
              </Sect1>

              {/* 2nd item */}
              <Sect1
                Title="Painless Set Up"
                Description="We are using complex and unique MQL library, even though you have bajillion in your meta trader, that won't crash the EA."
              >
                <CogIcon className="w-12 h-12 p-3 mb-3 bg-blue-400 text-slate-100 rounded-full" />
              </Sect1>

              {/* 3rd item */}
              <Sect1
                Title="Requote Prevention"
                Description="We maintain the transaction even though some slick broker play foul our with trader."
              >
                <LightBulbIcon className="w-14 h-14 p-3 mb-3 bg-blue-400 text-slate-100 rounded-full" />
              </Sect1>

              {/* 4th item */}
              <Sect1
                Title="Initial Setting"
                Description="If you dont understand the setting, the Exper Advisor initial setting is also the best set up to use."
              >
                <AdjustmentsIcon className="w-12 h-12 p-3 mb-3 bg-blue-400 text-slate-100 rounded-full" />
              </Sect1>

              {/* 5th item */}
              <Sect1
                Title="Qualified Trading System"
                Description="No matter timeframes you are using, DojiBot will calculate
                and take the proper action for you."
              >
                <LightningBoltIcon className="w-12 h-12 p-3 mb-3 bg-blue-400 text-slate-100 rounded-full" />
              </Sect1>

              {/* 6th item */}
              <Sect1
                Title="Behind Shadow Trading"
                Description="Our EA activity will not be easy to be suspected as a robot. Our AI will behave such a person."
              >
                <ShieldCheckIcon className="w-12 h-12 p-3 mb-3 bg-blue-400 text-slate-100 rounded-full" />
              </Sect1>
            </div>
          </div>
        </div>
      </section>

      <div
        className="relative max-w-6xl mx-auto px-4 sm:px-6"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <div className="rounded-xl mb-10 shadow-slate-500 shadow-xl">
          <iframe
            className="rounded w-full"
            src="//www.fxblue.com/fxblueview.aspx?id=30895597"
            frameBorder="no"
            height="750"
          >
            <a href="//www.fxblue.com/users/30895597">
              FX Blue - free tools and services for FX and CFD traders
            </a>
          </iframe>
        </div>
      </div>
    </div>
  );
}

function Sect1({ children, Title, Description }) {
  return (
    <div className="relative flex flex-col items-center p-6 bg-slate-500 rounded shadow-xl">
      {children}
      <h4 className="text-slate-50 text-xl font-bold leading-snug tracking-tight mb-1">
        {Title}
      </h4>
      <p className="text-slate-300 text-center">{Description}</p>
    </div>
  );
}
