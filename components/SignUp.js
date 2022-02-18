import React from "react";
import Router, { useRouter } from "next/router";
import { Button4Spin, ButtonT4, GoogleBtn } from "./utils/Buttons";
import { Input } from "./utils/Inputs";
import User, { useUserContext } from "../hooks/Users";
import { ErrorI, SuccessI } from "./utils/Alert";
import { paths } from "../Constants";

function SignIn({ back, close }) {
  const { SignUpHook, continueWithGoogle } = User();
  const { setUser } = useUserContext();
  const router = useRouter();
  const { pathname } = Router;
  const {
    msg,
    error,
    email,
    password,
    cpassword,
    setPassword,
    setCPassword,
    setEmail,
    submit,
  } = SignUpHook();

  return (
    <React.Fragment>
      <div className="px-6 pb-4 space-y-6 lg:px-8 sm:pb-6 xl:pb-8">
        <h3 className="text-xl font-medium text-white">
          Sign up to our platform
        </h3>
        <Input
          label="Your email"
          type="email"
          placeholder="name@company.com"
          value={email}
          setValue={setEmail}
        />
        <Input
          label="Your password"
          type="password"
          placeholder="••••••••"
          value={password}
          setValue={setPassword}
        />
        <Input
          label="Confirm password"
          type="password"
          placeholder="••••••••"
          value={cpassword}
          setValue={setCPassword}
        />
        {error && (
          <div className="">
            <ErrorI message={error} />
          </div>
        )}
        {msg && (
          <div className="">
            <SuccessI message={msg} />
          </div>
        )}
        {!msg && (
          <React.Fragment>
            <Button4Spin
              className="w-full rounded-lg !mt-10"
              label="Login to your account"
              onClick={async () => {
                const r = await submit();
                if (!r.err) {
                  setUser(r.user);
                  if (
                    pathname !== paths.membership &&
                    pathname !== paths.howtouse
                  )
                    router.push(paths.dashboard);
                  close();
                }
              }}
            />
            <p className="text-center text-slate-300 mt-0">Or</p>
            <GoogleBtn
              onClick={async () => {
                const r = await continueWithGoogle();
                console.log(r);
                if (!r.err) {
                  setUser(r.user);
                  if (
                    pathname !== paths.membership &&
                    pathname !== paths.howtouse
                  )
                    router.push(paths.dashboard);
                  close();
                }
              }}
              label="Continue with google"
              className="rounded-lg w-full"
            />
          </React.Fragment>
        )}
        <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
          You have an account?{" "}
          <ButtonT4
            className=""
            label="Sign in"
            onClick={() => {
              back();
            }}
          />
        </div>
      </div>
    </React.Fragment>
  );
}

export default SignIn;
