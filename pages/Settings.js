import React, { useState } from "react";
import Header from "../components/Header";
import Overlay from "../components/utils/Overlay";
import ChangePassword from "../components/ChangePassword";
import { H1, H4 } from "../components/utils/Titles";
import { ButtonT4Spin, ButtonT4 } from "../components/utils/Buttons";
import { LinkT4 } from "../components/utils/Links";
import User, { useUserContext } from "../hooks/Users";
import { Input } from "../components/utils/Inputs";
import { Label, P1 } from "../components/utils/Text";

function Settings() {
  const { signOutf } = User();
  const { user } = useUserContext();
  const [opencp, setOpenCP] = useState(false);

  return (
    <div>
      <Header />
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Hero content */}
        <div className="pt-12 pb-12 md:pt-20 md:pb-20">
          <H1 label="Settings" />

          <Sect label="Account" className="mt-2">
            <Input
              type="email"
              value={user?.email}
              disabled={true}
              label="Your Email"
            />
            <Label label="Your password" />
            <P1>
              Click <ButtonT4 label="here" onClick={() => setOpenCP(true)} /> to
              change your password{" "}
            </P1>
            <Overlay open={opencp} setOpen={setOpenCP}>
              <ChangePassword />
            </Overlay>
          </Sect>

          <Sect label="Membership">
            <P1>
              You have no active membership click{" "}
              <LinkT4 label="here" href="/Membership" /> to make a new one
            </P1>
          </Sect>

          <Sect label="Payment & Financials">
            <P1>You have no active payment method</P1>
          </Sect>

          <ButtonT4Spin label="Sign out" onClick={signOutf} />
        </div>
      </div>
    </div>
  );
}

export default Settings;

function Sect({ className, label, children }) {
  return (
    <div className={className + " my-6 mx-6 sm:mx-40 bg-c2 rounded-lg p-3"}>
      <H4 label={label} className="ml-4" />
      <div className="my-4 mx-6 lg:mx-40">{children}</div>
    </div>
  );
}
