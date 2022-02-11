import React from "react";

function Pricing() {
  return (
    <div
      className=""
      data-aos="fade-up"
      data-aos-delay="200"
      data-aos-duration="1000"
    >
      <div className="w-full bg-blue pt-24">
        <div className="flex flex-col sm:flex-row justify-center mb-6 sm:mb-0">
          {/* <Item Title="Free" Price="0" No="0" /> */}
          <Item Title="Basic" Price="97" No="2" />
          <Item Title="Advanced" Price="189" No="6" show={!true} />
          <Item Title="Pro" Price="259" No="18" />
          <ItemLimit Price="959" No="10" expire={10} show={true} />
        </div>
      </div>
    </div>
  );
}

export default Pricing;

export function Pricing1() {
  return (
    <div className="flex flex-col sm:flex-row justify-center mb-6 sm:mb-0">
      {/* <Item Title="Free" Price="0" No="0" top={false} /> */}
      <Item Title="Basic" Price="97" No="2" top={false} />
      <Item Title="Advanced" Price="189" No="6" top={false} />
      <Item Title="Pro" Price="259" No="18" top={false} />
      <ItemLimit Price="959" No="10" expire={10} top={false} />
    </div>
  );
}

function Item({ Title, Price, No, show = false, top = true }) {
  return (
    <div
      className={
        show
          ? "flex-1 lg:flex-initial lg:w-1/4 rounded-t-lg bg-c2 mt-4 sm:-mt-4 shadow-lg z-30 flex flex-col"
          : top
          ? "flex-1 lg:flex-initial lg:w-1/4 rounded-t-lg bg-c2 mt-4 flex flex-col"
          : "flex-1 lg:flex-initial lg:w-1/4 rounded-b-lg bg-c2 mt-4 flex flex-col"
      }
    >
      <div className="text-slate-100 w-full p-8 text-3xl font-bold text-center">
        {Title}
      </div>
      <div className="border-0 border-slate-700 border-t border-solid text-sm">
        <div className="text-teal-500 font-bold text-center border-0 border-slate-700 border-b border-solid py-4">
          {No} Real Account License
        </div>
        <div className="text-slate-200 text-center border-0 border-slate-700 border-b border-solid py-4">
          Unlimited Demo Account
        </div>
        <div className="text-slate-200 text-center border-0 border-slate-700 border-b border-solid py-4">
          Free Update Forever
        </div>
        <div className="text-slate-200 text-center border-0 border-slate-700 border-b border-solid py-4">
          All Broker
        </div>
        <div className="text-slate-200 text-center border-0 border-slate-700 border-b border-solid py-4">
          All Desktop Support
        </div>
      </div>
      <div className="mt-auto text-center pt-8 pb-10">
        <span className="text-teal-500 border-slate-300 border-b-4 text-center text-xl px-2 py-4 pb-1 rounded">
          ${Price}
          <span className="ml-1 text-slate-300 text-base">/ Month</span>
        </span>
      </div>
      <div className="w-full text-center mb-8 mt-auto px-10 sm:px-0">
        <button className="px-8 py-3 rounded-full text-c2 font-medium bg-slate-100 w-full sm:w-auto sm:ml-4">
          {top ? "Sign Up" : "Select"}
        </button>
      </div>
    </div>
  );
}

function ItemLimit({
  Title = "Life Time",
  Price,
  expire,
  No,
  show = false,
  top = true,
}) {
  return (
    <div
      className={
        show
          ? "flex-1 lg:flex-initial lg:w-1/4 rounded-t-lg bg-c2 mt-4 sm:-mt-4 shadow-lg z-30 flex flex-col"
          : top
          ? "flex-1 lg:flex-initial lg:w-1/4 rounded-t-lg bg-c2 mt-4 flex flex-col"
          : "flex-1 lg:flex-initial lg:w-1/4 rounded-b-lg bg-c2 mt-4 flex flex-col"
      }
    >
      <div className="text-c4 p-8 pb-2 text-3xl font-bold text-center">
        {Title}
      </div>
      <div className="text-c4 p-2 pt-0 text-center">
        Offer Expire in {expire} days
      </div>
      <div className="border-0 border-slate-700 border-t border-solid text-sm">
        <div className="text-teal-500 font-bold text-center border-0 border-slate-700 border-b border-solid py-4">
          {No} Real Account License
        </div>
        <div className="text-slate-200 text-center border-0 border-slate-700 border-b border-solid py-4">
          Unlimited Demo Account
        </div>
        <div className="text-slate-200 text-center border-0 border-slate-700 border-b border-solid py-4">
          Free Update Forever
        </div>
        <div className="text-slate-200 text-center border-0 border-slate-700 border-b border-solid py-4">
          All Broker
        </div>
        <div className="text-slate-200 text-center border-0 border-slate-700 border-b border-solid py-4">
          All Desktop Support
        </div>
      </div>
      <div className="mt-auto text-center pt-8">
        <span className="text-teal-500 border-slate-300 border-b-4 text-center text-xl px-2 py-4 pb-1 rounded">
          ${Price}
        </span>
      </div>
      <div className="text-center pt-8 mb-8 mt-auto px-10 sm:px-0">
        <button className="px-8 py-3 rounded-full text-c2 font-medium bg-slate-100 w-full sm:w-auto sm:ml-4">
          {top ? "Sign Up" : "Select"}
        </button>
      </div>
    </div>
  );
}
