import React from "react";
import { ExclamationIcon } from "@heroicons/react/outline";
import { ButtonT4Spin, Button4Spin } from "./utils/Buttons";
// import { ErrorI } from "./utils/Alert";

export default function CancelMessage({ onAgree, close, title, message }) {
  return (
    <React.Fragment>
      <div className="px-4 pb-4">
        <div className="sm:flex sm:items-start">
          <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
            <ExclamationIcon
              className="h-6 w-6 text-red-600"
              aria-hidden="true"
            />
          </div>
          <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
            <h3 className="text-xl font-medium text-white">{title}</h3>
            <div className="mt-2">
              <p className="text-sm text-slate-400">{message}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 pb-2 my-2 sm:px-6 sm:flex sm:flex-row-reverse items-center">
        <Button4Spin
          label="Cancel"
          className="rounded-lg w-full mb-3 sm:w-auto"
          onClick={close}
        />
        <ButtonT4Spin
          label="Agree"
          className="rounded-lg sm:mr-6 mb-3"
          onClick={async () => await onAgree()}
        />
      </div>
    </React.Fragment>
  );
}
