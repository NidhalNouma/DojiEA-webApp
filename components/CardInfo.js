import React from "react";

function CardInfo({ className, color, value, title }) {
  return (
    <div className={`${className} bg-c1 rounded border border-b-0 border-c1`}>
      <div className="p-3 pb-1">
        <span className="text-slate-300 whitespace-nowrap">
          <span className={`${color} !bg-c1 font-bold`}>{value}</span> {title}
        </span>
      </div>
      <div className={`${color} pt-1 rounded`}></div>
    </div>
  );
}

export default CardInfo;
