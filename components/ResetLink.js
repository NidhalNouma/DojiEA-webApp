import React from "react";
import { Button4Spin, ButtonT4 } from "./utils/Buttons";
import { Input } from "./utils/Inputs";
import User from "../hooks/Users";
import { ErrorI, SuccessI } from "./utils/Alert";

function ResetLink({ back }) {
  const { ResetLinkHook } = User();
  const { msg, error, email, setEmail, submit } = ResetLinkHook();

  return (
    <React.Fragment>
      <div className="px-6 pb-4 space-y-6 lg:px-8 sm:pb-6 xl:pb-8">
        <h3 className="text-xl font-medium text-white">
          Let’s get you back up on your feet
        </h3>
        <h3 className="text-base font-medium text-slate-400">
          Enter the email address you used when you signed up for your account,
          and we’ll email you a link to reset your password.
        </h3>
        <Input
          label="Your email"
          type="email"
          placeholder="name@company.com"
          value={email}
          setValue={setEmail}
        />
        <div className="">{error && <ErrorI message={error} />}</div>
        <div className="">{msg && <SuccessI message={msg} />}</div>
        <Button4Spin
          className="w-full rounded-lg"
          label="Send reset link"
          onClick={async () => {
            const r = await submit();
            if (!r.err) {
            }
          }}
        />
        <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
          <ButtonT4
            className=""
            label="Back"
            onClick={() => {
              back();
            }}
          />
        </div>
      </div>
    </React.Fragment>
  );
}

export default ResetLink;
