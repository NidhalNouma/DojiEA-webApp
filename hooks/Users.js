import { useState, createContext, useContext } from "react";
import { signIn, signUp, getActiveUser } from "./firebase";

export const UserContext = createContext(null);

export function useUserContext() {
  return useContext(UserContext);
}

function User() {
  const [user, setUser] = useState(null);

  function SignInHook() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function submit() {
      if (!email) {
        return { err: "Please enter a valid email address" };
      }
      if (!password) {
        return { err: "Please enter a valid password" };
      }
      const r = await signIn(email, password);
      return r;
    }

    return { email, password, setPassword, setEmail, submit };
  }

  function SignUpHook() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cpassword, setCPassword] = useState("");

    async function submit() {
      if (!email) {
        return { err: "Please enter a valid email address" };
      }
      if (!password) {
        return { err: "Please enter a valid password" };
      }
      if (password !== cpassword) {
        return { err: "Password not valid" };
      }
      const r = await signUp(email, password);
      return r;
    }

    return {
      email,
      password,
      cpassword,
      setPassword,
      setCPassword,
      setEmail,
      submit,
    };
  }

  return { user, setUser, SignUpHook, SignInHook, UserContext, useUserContext };
}

export default User;
