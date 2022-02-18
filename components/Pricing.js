import React from "react";
import { prices } from "../Constants";

export default function Pricing({ select, selected, top = false }) {
  return (
    <div className=" flex flex-col sm:flex-row justify-center mb-6 sm:mb-0">
      {prices.map((val, i) => (
        <Item
          key={i}
          val={val}
          top={top}
          selected={
            val.id === selected?.id
              ? true
              : val.expire && top && !selected
              ? true
              : false
          }
          onClick={() => select(top ? true : val)}
        />
      ))}
    </div>
  );
}

function Item({ val, selected, onClick, top }) {
  const { name: Title, Price, accounts: No, expire, show, lifetime } = val;
  const className =
    (selected ? `${top ? "sm:-mt-4" : "sm:-mb-4"} shadow-lg z-10 ` : " ") +
    (top ? "rounded-t-lg" : "rounded-b-lg") +
    " flex-1 lg:flex-initial lg:w-1/4 bg-c2 mt-4 flex flex-col ";

  return (
    <div className={className}>
      {expire ? (
        <React.Fragment>
          <div className="text-c4 p-8 pb-2 text-3xl font-bold text-center">
            {Title}
          </div>
          <div className="text-c4 p-2 pt-0 text-center">
            Offer Expire in {expire} days
          </div>
        </React.Fragment>
      ) : (
        <div className="text-slate-100 w-full p-8 text-3xl font-bold text-center">
          {Title}
        </div>
      )}
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
          <span className="ml-1 text-slate-300 text-base">
            {!lifetime ? "/ Month" : "life time"}
          </span>
        </span>
      </div>
      <div className="w-full text-center mb-8 mt-auto px-10 sm:px-0">
        <button
          onClick={onClick}
          className="px-8 py-3 rounded-full text-c2 font-medium bg-slate-100 w-full sm:w-auto sm:ml-4"
        >
          {top ? "Sign Up" : selected ? "Selected" : "Select"}
        </button>
      </div>
    </div>
  );
}