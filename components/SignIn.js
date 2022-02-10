import React, { useState } from "react";
import { useRouter } from "next/router";
import { Button4Spin, ButtonT4 } from "./utils/Buttons";
import { Input } from "./utils/Inputs";
import SignUp from "./SignUp";
import User, { useUserContext } from "../hooks/Users";

function SignIn() {
  const router = useRouter();
  const [dis, setDis] = useState(0);
  const { SignInHook } = User();
  const { email, password, setPassword, setEmail, submit } = SignInHook();
  const { setUser } = useUserContext();

  return (
    <React.Fragment>
      {dis === 1 ? (
        <SignUp back={() => setDis(0)} />
      ) : (
        <React.Fragment>
          <div className="px-6 pb-4 space-y-6 lg:px-8 sm:pb-6 xl:pb-8">
            <h3 className="text-xl font-medium text-white">
              Sign in to our platform
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
            <div className="flex justify-between">
              <div className="flex items-start">
                {/* <div className="flex items-center h-5">
              <input
                id="remember"
                aria-describedby="remember"
                type="checkbox"
                className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                required=""
              />
            </div>
            <div className="ml-3 text-sm">
              <label className="font-medium text-gray-900 dark:text-gray-300">
                Remember me
              </label>
            </div> */}
              </div>
              <ButtonT4
                className=""
                label="Lost Password?"
                onClick={async () => {
                  const r = await submit();
                  console.log(r);
                }}
              />
            </div>
            <Button4Spin
              className="w-full rounded-lg"
              label="Login to your account"
              onClick={async () => {
                const r = await submit();
                console.log(r);
                if (!r.err) {
                  setUser(r.user);
                  router.push("/Dashboard");
                }
              }}
            />
            <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
              Not registered?{" "}
              <ButtonT4
                className=""
                label="Create account"
                onClick={() => {
                  setDis(1);
                }}
              />
            </div>
          </div>
        </React.Fragment>
      )}
    </React.Fragment>
  );
}

export default SignIn;
