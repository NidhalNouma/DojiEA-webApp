import React from "react";

function CardInfo({ className, color, value, title }) {
  return (
    <div className={`${className} bg-c2 rounded border border-b-0 border-c1`}>
      <div className="p-3 pb-2">
        <p className="text-slate-300">
          <span className={`${color} !bg-c2 font-bold`}>{value}</span> {title}
        </p>
      </div>
      <div className={`${color} pt-1 rounded`}></div>
    </div>
  );
}

export default CardInfo;
