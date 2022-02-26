import React, { useState, useEffect } from "react";
import { P1 } from "./utils/Text";
import { ButtonT4 } from "./utils/Buttons";
import { TrashIcon } from "@heroicons/react/outline";
import AddPaymentCard from "./AddPaymentCard";
import CancelMessage from "./CancelMessage";
import Overlay from "./utils/Overlay";

import { useUserContext } from "../hooks/Users";
import { DetachPaymentMethod } from "../hooks/Payments";

export default function PaymentMethods({
  onSelect = (e) => {},
  selected,
  opend,
  hideDelete = false,
}) {
  const [open, setOpen] = useState(false);
  const { user, setUser } = useUserContext();
  const data = user?.stripe?.paymentMethods?.data;

  useEffect(() => {
    if (data?.length > 0) onSelect(data[data.length - 1]);
  }, [data]);

  useEffect(() => {
    if (opend > 0) setOpen(true);
  }, [opend]);

  return (
    <React.Fragment>
      {data?.length > 0 ? (
        data.map((paymentMethod, i) => (
          <Card
            key={i}
            i={paymentMethod}
            onClick={onSelect}
            pm={selected}
            user={user}
            setUser={setUser}
            hideDelete={hideDelete}
          />
        ))
      ) : (
        <P1>You have no active payment method. </P1>
      )}
      <P1>
        Click <ButtonT4 label="here" onClick={() => setOpen(true)} /> to add new
        payment card.
      </P1>
      <Overlay open={open} setOpen={setOpen}>
        <AddPaymentCard
          user={user}
          setUser={setUser}
          close={() => setOpen(false)}
        />
      </Overlay>
    </React.Fragment>
  );
}

function Card({ i, onClick, pm, user, setUser, hideDelete }) {
  const [open, setOpen] = useState(false);
  const { submit } = DetachPaymentMethod(user, setUser);

  return (
    <div
      onClick={() => onClick(i)}
      className={
        (pm?.id === i.id ? "bg-c1" : "") +
        " py-1 px-1 border border-slate-500 rounded my-3 cursor cursor-pointer hover:bg-c1 flex items-center"
      }
    >
      <span className="ml-1 my-2 py-2 px-3 bg-slate-500 text-white rounded">
        {i.card.brand === "visa" ? (
          <Visa />
        ) : i.card.brand === "mastercard" ? (
          <Mastercard />
        ) : (
          i.card.brand
        )}
      </span>

      <div className="flex flex-col mx-4 items-start w-full">
        <div className="flex items-center justify-between min-w-full">
          <span className="text-sm text-slate-400"> ****{i.card.last4} </span>
          {/* <ButtonT4Spin label="Retrive" /> */}
          {!hideDelete && (
            <TrashIcon
              className="w-4 h-4 text-c2"
              onClick={() => setOpen(true)}
            />
          )}
        </div>
        <span className="text-slate-300 text-sm font-medium">
          Expire on {i.card.exp_month}/{i.card.exp_year}
        </span>
      </div>
      <Overlay open={open} setOpen={setOpen}>
        <CancelMessage
          title="Detach payment card"
          message="Are you sure you want to detach your payment card? All of your data will be permanently removed. This action cannot be undone."
          close={() => setOpen(false)}
          onAgree={async () => {
            await submit(i);
            setOpen(false);
          }}
        />
      </Overlay>
    </div>
  );
}

function Mastercard() {
  return (
    <svg
      version="1.1"
      id="Capa_1"
      x="0px"
      y="0px"
      width="30px"
      viewBox="0 0 504 504"
      style={{ enableBackground: "new 0 0 504 504" }}
    >
      <path
        style={{ fill: "#FFB600" }}
        d="M504,252c0,83.2-67.2,151.2-151.2,151.2c-83.2,0-151.2-68-151.2-151.2l0,0
	c0-83.2,67.2-151.2,150.4-151.2C436.8,100.8,504,168.8,504,252L504,252z"
      />
      <path
        style={{ fill: "#F7981D" }}
        d="M352.8,100.8c83.2,0,151.2,68,151.2,151.2l0,0c0,83.2-67.2,151.2-151.2,151.2
	c-83.2,0-151.2-68-151.2-151.2"
      />
      <path
        style={{ fill: "#FF8500" }}
        d="M352.8,100.8c83.2,0,151.2,68,151.2,151.2l0,0c0,83.2-67.2,151.2-151.2,151.2"
      />
      <path
        style={{ fill: "#FF5050" }}
        d="M149.6,100.8C67.2,101.6,0,168.8,0,252s67.2,151.2,151.2,151.2c39.2,0,74.4-15.2,101.6-39.2l0,0l0,0
	c5.6-4.8,10.4-10.4,15.2-16h-31.2c-4-4.8-8-10.4-11.2-15.2h53.6c3.2-4.8,6.4-10.4,8.8-16h-71.2c-2.4-4.8-4.8-10.4-6.4-16h83.2
	c4.8-15.2,8-31.2,8-48c0-11.2-1.6-21.6-3.2-32h-92.8c0.8-5.6,2.4-10.4,4-16h83.2c-1.6-5.6-4-11.2-6.4-16H216
	c2.4-5.6,5.6-10.4,8.8-16h53.6c-3.2-5.6-7.2-11.2-12-16h-29.6c4.8-5.6,9.6-10.4,15.2-15.2c-26.4-24.8-62.4-39.2-101.6-39.2
	C150.4,100.8,150.4,100.8,149.6,100.8z"
      />
      <path
        style={{ fill: "#E52836" }}
        d="M0,252c0,83.2,67.2,151.2,151.2,151.2c39.2,0,74.4-15.2,101.6-39.2l0,0l0,0
	c5.6-4.8,10.4-10.4,15.2-16h-31.2c-4-4.8-8-10.4-11.2-15.2h53.6c3.2-4.8,6.4-10.4,8.8-16h-71.2c-2.4-4.8-4.8-10.4-6.4-16h83.2
	c4.8-15.2,8-31.2,8-48c0-11.2-1.6-21.6-3.2-32h-92.8c0.8-5.6,2.4-10.4,4-16h83.2c-1.6-5.6-4-11.2-6.4-16H216
	c2.4-5.6,5.6-10.4,8.8-16h53.6c-3.2-5.6-7.2-11.2-12-16h-29.6c4.8-5.6,9.6-10.4,15.2-15.2c-26.4-24.8-62.4-39.2-101.6-39.2h-0.8"
      />
      <path
        style={{ fill: "#CB2026" }}
        d="M151.2,403.2c39.2,0,74.4-15.2,101.6-39.2l0,0l0,0c5.6-4.8,10.4-10.4,15.2-16h-31.2
	c-4-4.8-8-10.4-11.2-15.2h53.6c3.2-4.8,6.4-10.4,8.8-16h-71.2c-2.4-4.8-4.8-10.4-6.4-16h83.2c4.8-15.2,8-31.2,8-48
	c0-11.2-1.6-21.6-3.2-32h-92.8c0.8-5.6,2.4-10.4,4-16h83.2c-1.6-5.6-4-11.2-6.4-16H216c2.4-5.6,5.6-10.4,8.8-16h53.6
	c-3.2-5.6-7.2-11.2-12-16h-29.6c4.8-5.6,9.6-10.4,15.2-15.2c-26.4-24.8-62.4-39.2-101.6-39.2h-0.8"
      />
      <g>
        <path
          style={{ fill: "#FFFFFF" }}
          d="M204.8,290.4l2.4-13.6c-0.8,0-2.4,0.8-4,0.8c-5.6,0-6.4-3.2-5.6-4.8l4.8-28h8.8l2.4-15.2h-8l1.6-9.6
		h-16c0,0-9.6,52.8-9.6,59.2c0,9.6,5.6,13.6,12.8,13.6C199.2,292.8,203.2,291.2,204.8,290.4z"
        />
        <path
          style={{ fill: "#FFFFFF" }}
          d="M210.4,264.8c0,22.4,15.2,28,28,28c12,0,16.8-2.4,16.8-2.4l3.2-15.2c0,0-8.8,4-16.8,4
		c-17.6,0-14.4-12.8-14.4-12.8H260c0,0,2.4-10.4,2.4-14.4c0-10.4-5.6-23.2-23.2-23.2C222.4,227.2,210.4,244.8,210.4,264.8z
		 M238.4,241.6c8.8,0,7.2,10.4,7.2,11.2H228C228,252,229.6,241.6,238.4,241.6z"
        />
        <path
          style={{ fill: "#FFFFFF" }}
          d="M340,290.4l3.2-17.6c0,0-8,4-13.6,4c-11.2,0-16-8.8-16-18.4c0-19.2,9.6-29.6,20.8-29.6
		c8,0,14.4,4.8,14.4,4.8l2.4-16.8c0,0-9.6-4-18.4-4c-18.4,0-36.8,16-36.8,46.4c0,20,9.6,33.6,28.8,33.6
		C331.2,292.8,340,290.4,340,290.4z"
        />
        <path
          style={{ fill: "#FFFFFF" }}
          d="M116.8,227.2c-11.2,0-19.2,3.2-19.2,3.2L95.2,244c0,0,7.2-3.2,17.6-3.2c5.6,0,10.4,0.8,10.4,5.6
		c0,3.2-0.8,4-0.8,4s-4.8,0-7.2,0c-13.6,0-28.8,5.6-28.8,24c0,14.4,9.6,17.6,15.2,17.6c11.2,0,16-7.2,16.8-7.2l-0.8,6.4H132l6.4-44
		C138.4,228,122.4,227.2,116.8,227.2z M120,263.2c0,2.4-1.6,15.2-11.2,15.2c-4.8,0-6.4-4-6.4-6.4c0-4,2.4-9.6,14.4-9.6
		C119.2,263.2,120,263.2,120,263.2z"
        />
        <path
          style={{ fill: "#FFFFFF" }}
          d="M153.6,292c4,0,24,0.8,24-20.8c0-20-19.2-16-19.2-24c0-4,3.2-5.6,8.8-5.6c2.4,0,11.2,0.8,11.2,0.8
		l2.4-14.4c0,0-5.6-1.6-15.2-1.6c-12,0-24,4.8-24,20.8c0,18.4,20,16.8,20,24c0,4.8-5.6,5.6-9.6,5.6c-7.2,0-14.4-2.4-14.4-2.4
		l-2.4,14.4C136,290.4,140,292,153.6,292z"
        />
        <path
          style={{ fill: "#FFFFFF" }}
          d="M472.8,214.4l-3.2,21.6c0,0-6.4-8-15.2-8c-14.4,0-27.2,17.6-27.2,38.4c0,12.8,6.4,26.4,20,26.4
		c9.6,0,15.2-6.4,15.2-6.4l-0.8,5.6h16l12-76.8L472.8,214.4z M465.6,256.8c0,8.8-4,20-12.8,20c-5.6,0-8.8-4.8-8.8-12.8
		c0-12.8,5.6-20.8,12.8-20.8C462.4,243.2,465.6,247.2,465.6,256.8z"
        />
        <path
          style={{ fill: "#FFFFFF" }}
          d="M29.6,291.2l9.6-57.6l1.6,57.6H52l20.8-57.6L64,291.2h16.8l12.8-76.8H67.2l-16,47.2l-0.8-47.2H27.2
		l-12.8,76.8H29.6z"
        />
        <path
          style={{ fill: "#FFFFFF" }}
          d="M277.6,291.2c4.8-26.4,5.6-48,16.8-44c1.6-10.4,4-14.4,5.6-18.4c0,0-0.8,0-3.2,0
		c-7.2,0-12.8,9.6-12.8,9.6l1.6-8.8h-15.2L260,292h17.6V291.2z"
        />
        <path
          style={{ fill: "#FFFFFF" }}
          d="M376.8,227.2c-11.2,0-19.2,3.2-19.2,3.2l-2.4,13.6c0,0,7.2-3.2,17.6-3.2c5.6,0,10.4,0.8,10.4,5.6
		c0,3.2-0.8,4-0.8,4s-4.8,0-7.2,0c-13.6,0-28.8,5.6-28.8,24c0,14.4,9.6,17.6,15.2,17.6c11.2,0,16-7.2,16.8-7.2l-0.8,6.4H392l6.4-44
		C399.2,228,382.4,227.2,376.8,227.2z M380.8,263.2c0,2.4-1.6,15.2-11.2,15.2c-4.8,0-6.4-4-6.4-6.4c0-4,2.4-9.6,14.4-9.6
		C380,263.2,380,263.2,380.8,263.2z"
        />
        <path
          style={{ fill: "#FFFFFF" }}
          d="M412,291.2c4.8-26.4,5.6-48,16.8-44c1.6-10.4,4-14.4,5.6-18.4c0,0-0.8,0-3.2,0
		c-7.2,0-12.8,9.6-12.8,9.6l1.6-8.8h-15.2L394.4,292H412V291.2z"
        />
      </g>
      <g>
        <path
          style={{ fill: "#DCE5E5" }}
          d="M180,279.2c0,9.6,5.6,13.6,12.8,13.6c5.6,0,10.4-1.6,12-2.4l2.4-13.6c-0.8,0-2.4,0.8-4,0.8
		c-5.6,0-6.4-3.2-5.6-4.8l4.8-28h8.8l2.4-15.2h-8l1.6-9.6"
        />
        <path
          style={{ fill: "#DCE5E5" }}
          d="M218.4,264.8c0,22.4,7.2,28,20,28c12,0,16.8-2.4,16.8-2.4l3.2-15.2c0,0-8.8,4-16.8,4
		c-17.6,0-14.4-12.8-14.4-12.8H260c0,0,2.4-10.4,2.4-14.4c0-10.4-5.6-23.2-23.2-23.2C222.4,227.2,218.4,244.8,218.4,264.8z
		 M238.4,241.6c8.8,0,10.4,10.4,10.4,11.2H228C228,252,229.6,241.6,238.4,241.6z"
        />
        <path
          style={{ fill: "#DCE5E5" }}
          d="M340,290.4l3.2-17.6c0,0-8,4-13.6,4c-11.2,0-16-8.8-16-18.4c0-19.2,9.6-29.6,20.8-29.6
		c8,0,14.4,4.8,14.4,4.8l2.4-16.8c0,0-9.6-4-18.4-4c-18.4,0-28.8,16-28.8,46.4c0,20,1.6,33.6,20.8,33.6
		C331.2,292.8,340,290.4,340,290.4z"
        />
        <path
          style={{ fill: "#DCE5E5" }}
          d="M95.2,244.8c0,0,7.2-3.2,17.6-3.2c5.6,0,10.4,0.8,10.4,5.6c0,3.2-0.8,4-0.8,4s-4.8,0-7.2,0
		c-13.6,0-28.8,5.6-28.8,24c0,14.4,9.6,17.6,15.2,17.6c11.2,0,16-7.2,16.8-7.2l-0.8,6.4H132l6.4-44c0-18.4-16-19.2-22.4-19.2
		 M128,263.2c0,2.4-9.6,15.2-19.2,15.2c-4.8,0-6.4-4-6.4-6.4c0-4,2.4-9.6,14.4-9.6C119.2,263.2,128,263.2,128,263.2z"
        />
        <path
          style={{ fill: "#DCE5E5" }}
          d="M136,290.4c0,0,4.8,1.6,18.4,1.6c4,0,24,0.8,24-20.8c0-20-19.2-16-19.2-24c0-4,3.2-5.6,8.8-5.6
		c2.4,0,11.2,0.8,11.2,0.8l2.4-14.4c0,0-5.6-1.6-15.2-1.6c-12,0-16,4.8-16,20.8c0,18.4,12,16.8,12,24c0,4.8-5.6,5.6-9.6,5.6"
        />
        <path
          style={{ fill: "#DCE5E5" }}
          d="M469.6,236c0,0-6.4-8-15.2-8c-14.4,0-19.2,17.6-19.2,38.4c0,12.8-1.6,26.4,12,26.4
		c9.6,0,15.2-6.4,15.2-6.4l-0.8,5.6h16l12-76.8 M468.8,256.8c0,8.8-7.2,20-16,20c-5.6,0-8.8-4.8-8.8-12.8c0-12.8,5.6-20.8,12.8-20.8
		C462.4,243.2,468.8,247.2,468.8,256.8z"
        />
        <path
          style={{ fill: "#DCE5E5" }}
          d="M29.6,291.2l9.6-57.6l1.6,57.6H52l20.8-57.6L64,291.2h16.8l12.8-76.8h-20l-22.4,47.2l-0.8-47.2h-8.8
		l-27.2,76.8H29.6z"
        />
        <path
          style={{ fill: "#DCE5E5" }}
          d="M260.8,291.2h16.8c4.8-26.4,5.6-48,16.8-44c1.6-10.4,4-14.4,5.6-18.4c0,0-0.8,0-3.2,0
		c-7.2,0-12.8,9.6-12.8,9.6l1.6-8.8"
        />
        <path
          style={{ fill: "#DCE5E5" }}
          d="M355.2,244.8c0,0,7.2-3.2,17.6-3.2c5.6,0,10.4,0.8,10.4,5.6c0,3.2-0.8,4-0.8,4s-4.8,0-7.2,0
		c-13.6,0-28.8,5.6-28.8,24c0,14.4,9.6,17.6,15.2,17.6c11.2,0,16-7.2,16.8-7.2l-0.8,6.4H392l6.4-44c0-18.4-16-19.2-22.4-19.2
		 M388,263.2c0,2.4-9.6,15.2-19.2,15.2c-4.8,0-6.4-4-6.4-6.4c0-4,2.4-9.6,14.4-9.6C380,263.2,388,263.2,388,263.2z"
        />
        <path
          style={{ fill: "#DCE5E5" }}
          d="M395.2,291.2H412c4.8-26.4,5.6-48,16.8-44c1.6-10.4,4-14.4,5.6-18.4c0,0-0.8,0-3.2,0
		c-7.2,0-12.8,9.6-12.8,9.6l1.6-8.8"
        />
      </g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
    </svg>
  );
}

function Visa() {
  return (
    <svg
      version="1.1"
      id="Capa_1"
      x="0px"
      y="0px"
      width="30px"
      viewBox="0 0 504 504"
      style={{ enableBackground: "new 0 0 504 504" }}
    >
      <polygon
        style={{ fill: "#3C58BF" }}
        points="184.8,324.4 210.4,180.4 250.4,180.4 225.6,324.4 "
      />
      <polygon
        style={{ fill: "#293688" }}
        points="184.8,324.4 217.6,180.4 250.4,180.4 225.6,324.4 "
      />
      <path
        style={{ fill: "#3C58BF" }}
        d="M370.4,182c-8-3.2-20.8-6.4-36.8-6.4c-40,0-68.8,20-68.8,48.8c0,21.6,20,32.8,36,40
	s20.8,12,20.8,18.4c0,9.6-12.8,14.4-24,14.4c-16,0-24.8-2.4-38.4-8l-5.6-2.4l-5.6,32.8c9.6,4,27.2,8,45.6,8
	c42.4,0,70.4-20,70.4-50.4c0-16.8-10.4-29.6-34.4-40c-14.4-7.2-23.2-11.2-23.2-18.4c0-6.4,7.2-12.8,23.2-12.8
	c13.6,0,23.2,2.4,30.4,5.6l4,1.6L370.4,182L370.4,182z"
      />
      <path
        style={{ fill: "#293688" }}
        d="M370.4,182c-8-3.2-20.8-6.4-36.8-6.4c-40,0-61.6,20-61.6,48.8c0,21.6,12.8,32.8,28.8,40
	s20.8,12,20.8,18.4c0,9.6-12.8,14.4-24,14.4c-16,0-24.8-2.4-38.4-8l-5.6-2.4l-5.6,32.8c9.6,4,27.2,8,45.6,8
	c42.4,0,70.4-20,70.4-50.4c0-16.8-10.4-29.6-34.4-40c-14.4-7.2-23.2-11.2-23.2-18.4c0-6.4,7.2-12.8,23.2-12.8
	c13.6,0,23.2,2.4,30.4,5.6l4,1.6L370.4,182L370.4,182z"
      />
      <path
        style={{ fill: "#3C58BF" }}
        d="M439.2,180.4c-9.6,0-16.8,0.8-20.8,10.4l-60,133.6h43.2l8-24h51.2l4.8,24H504l-33.6-144H439.2z
	 M420.8,276.4c2.4-7.2,16-42.4,16-42.4s3.2-8.8,5.6-14.4l2.4,13.6c0,0,8,36,9.6,44h-33.6V276.4z"
      />
      <path
        style={{ fill: "#293688" }}
        d="M448.8,180.4c-9.6,0-16.8,0.8-20.8,10.4l-69.6,133.6h43.2l8-24h51.2l4.8,24H504l-33.6-144H448.8z
	 M420.8,276.4c3.2-8,16-42.4,16-42.4s3.2-8.8,5.6-14.4l2.4,13.6c0,0,8,36,9.6,44h-33.6V276.4z"
      />
      <path
        style={{ fill: "#3C58BF" }}
        d="M111.2,281.2l-4-20.8c-7.2-24-30.4-50.4-56-63.2l36,128h43.2l64.8-144H152L111.2,281.2z"
      />
      <path
        style={{ fill: "#293688" }}
        d="M111.2,281.2l-4-20.8c-7.2-24-30.4-50.4-56-63.2l36,128h43.2l64.8-144H160L111.2,281.2z"
      />
      <path
        style={{ fill: "#FFBC00" }}
        d="M0,180.4l7.2,1.6c51.2,12,86.4,42.4,100,78.4l-14.4-68c-2.4-9.6-9.6-12-18.4-12H0z"
      />
      <path
        style={{ fill: "#F7981D" }}
        d="M0,180.4L0,180.4c51.2,12,93.6,43.2,107.2,79.2l-13.6-56.8c-2.4-9.6-10.4-15.2-19.2-15.2L0,180.4z"
      />
      <path
        style={{ fill: "#ED7C00" }}
        d="M0,180.4L0,180.4c51.2,12,93.6,43.2,107.2,79.2l-9.6-31.2c-2.4-9.6-5.6-19.2-16.8-23.2L0,180.4z"
      />
      <g>
        <path
          style={{ fill: "#051244" }}
          d="M151.2,276.4L124,249.2l-12.8,30.4l-3.2-20c-7.2-24-30.4-50.4-56-63.2l36,128h43.2L151.2,276.4z"
        />
        <polygon
          style={{ fill: "#051244" }}
          points="225.6,324.4 191.2,289.2 184.8,324.4 	"
        />
        <path
          style={{ fill: "#051244" }}
          d="M317.6,274.8L317.6,274.8c3.2,3.2,4.8,5.6,4,8.8c0,9.6-12.8,14.4-24,14.4c-16,0-24.8-2.4-38.4-8
		l-5.6-2.4l-5.6,32.8c9.6,4,27.2,8,45.6,8c25.6,0,46.4-7.2,58.4-20L317.6,274.8z"
        />
        <path
          style={{ fill: "#051244" }}
          d="M364,324.4h37.6l8-24h51.2l4.8,24H504L490.4,266l-48-46.4l2.4,12.8c0,0,8,36,9.6,44h-33.6
		c3.2-8,16-42.4,16-42.4s3.2-8.8,5.6-14.4"
        />
      </g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
    </svg>
  );
}
