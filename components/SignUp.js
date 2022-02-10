import React from "react";
import { useRouter } from "next/router";
import { Button4Spin, ButtonT4 } from "./utils/Buttons";
import { Input } from "./utils/Inputs";
import User, { useUserContext } from "../hooks/Users";

function SignIn({ back }) {
  const { SignUpHook } = User();
  const { setUser } = useUserContext();
  const router = useRouter();
  const {
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
        <Button4Spin
          className="w-full rounded-lg"
          label="Login to your account"
          onClick={async () => {
            const r = await submit();
            if (!r.err) {
              setUser(r.user);
              router.push("/Dashboard");
            }
          }}
        />
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
