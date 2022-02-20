import { useState, createContext, useContext } from "react";
import {
  signIn,
  signUp,
  signOutf,
  changePassword,
  getActiveUser,
  resetPassword,
  checkUser,
  continueWithGoogle,
} from "./firebase";

export const UserContext = createContext(null);

export function useUserContext() {
  return useContext(UserContext);
}

function User() {
  const [user, setUser] = useState(null);

  function SignInHook() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [msg, setMsg] = useState("");

    async function submit() {
      setError("");
      if (!email) {
        const err = "Please enter a valid email address";
        setError(err);
        return { err };
      }
      if (!password) {
        const err = "Please enter a valid password";
        setError(err);
        return { err };
      }
      const r = await signIn(email, password);
      if (r.err) {
        setError(r.err);
      } else {
        setError("");
        setMsg("You successfully signed in, you will be redirect in a sec!");
      }
      return r;
    }

    return { msg, error, email, password, setPassword, setEmail, submit };
  }

  function SignUpHook() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cpassword, setCPassword] = useState("");
    const [error, setError] = useState("");
    const [msg, setMsg] = useState("");

    async function submit() {
      setError("");
      if (!email) {
        const err = "Please enter a valid email address";
        setError(err);
        return { err };
      }
      if (!password) {
        const err = "Please enter a valid password";
        setError(err);
        return { err };
      }
      if (password.length < 6) {
        const err = "Password should be at least 6 characters";
        setError(err);
        return { err };
      }
      if (password !== cpassword) {
        const err = "Password not valid";
        setError(err);
        return { err };
      }
      const r = await signUp(email, password);
      if (r.err) {
        setError(r.err);
      } else {
        setError("");
        setMsg("You successfully signed up, you will be redirect in a sec!");
      }
      return r;
    }

    return {
      msg,
      error,
      email,
      password,
      cpassword,
      setPassword,
      setCPassword,
      setEmail,
      submit,
    };
  }

  function ResetLinkHook() {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [msg, setMsg] = useState("");

    async function submit() {
      if (!email) {
        const err = "Please enter a valid email address";
        setError(err);
        return { err };
      }
      const r = await resetPassword(email);
      if (r.err) {
        setError(r.err);
      } else {
        setError("");
        setMsg("Email sent successfully!");
      }
      return r;
    }

    return { msg, error, email, setEmail, submit };
  }

  function ChangePasswordHook() {
    const [password, setPassword] = useState("");
    const [npassword, setNPassword] = useState("");
    const [cpassword, setCPassword] = useState("");
    const [error, setError] = useState("");
    const [msg, setMsg] = useState("");

    async function submit() {
      if (!password) {
        const err = "Please enter a valid password";
        setError(err);
        return { err };
      }
      if (npassword !== password) {
        const err = "Password not valid";
        setError(err);
        return { err };
      }
      const r = await changePassword(password);
      if (r.err) {
        setError(r.err);
      } else {
        setError("");
        setMsg("Password have been changed successfully!");
      }
      return r;
    }

    return {
      msg,
      error,
      password,
      cpassword,
      npassword,
      setPassword,
      setCPassword,
      setNPassword,
      submit,
    };
  }
  return {
    user,
    setUser,
    SignUpHook,
    SignInHook,
    signOutf,
    ResetLinkHook,
    ChangePasswordHook,
    UserContext,
    useUserContext,
    getActiveUser,
    checkUser,
    continueWithGoogle,
  };
}

export default User;
