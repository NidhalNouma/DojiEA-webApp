import React from "react";
import { Button4Spin, ButtonT4 } from "./utils/Buttons";
import User from "../hooks/Users";
import { ErrorI, SuccessI } from "./utils/Alert";
import { Input } from "./utils/Inputs";

function ChangePassword() {
  const { ChangePasswordHook } = User();

  const {
    msg,
    error,
    npassword,
    cpassword,
    password,
    setNPassword,
    setCPassword,
    setPassword,
    submit,
  } = ChangePasswordHook();

  return (
    <React.Fragment>
      <div className="px-6 pb-4 space-y-6 lg:px-8 sm:pb-6 xl:pb-8">
        <h3 className="text-xl font-medium text-white">Change your password</h3>
        <Input
          label="Current password"
          type="password"
          placeholder="••••••••"
          value={cpassword}
          setValue={setCPassword}
        />
        <Input
          label="New password"
          type="password"
          placeholder="••••••••"
          value={npassword}
          setValue={setNPassword}
        />
        <Input
          label="Confirm password"
          type="password"
          placeholder="••••••••"
          value={password}
          setValue={setPassword}
        />
        <div className="">{error && <ErrorI message={error} />}</div>
        <div className="">
          {msg ? (
            <SuccessI message={msg} />
          ) : (
            <Button4Spin
              className="w-full rounded-lg"
              label="Save changes"
              onClick={async () => {
                const r = await submit();
                console.log(r);
              }}
            />
          )}
        </div>
      </div>
    </React.Fragment>
  );
}

export default ChangePassword;
