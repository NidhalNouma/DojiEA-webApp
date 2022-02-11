import Router from "next/router";
import Head from "next/head";
import AOS from "aos";
import "../styles/globals.css";
import "aos/dist/aos.css";
import { useEffect } from "react";
import User, { UserContext } from "../hooks/Users";

function MyApp({ Component, pageProps }) {
  const { user, setUser, checkUser, getActiveUser } = User();

  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });

    checkUser(setUser);
  }, []);

  useEffect(() => {
    const { pathname } = Router;
    if (pathname !== "/" && !user) Router.push("/");
    else if (pathname === "/" && user) Router.push("/Dashboard");

    // if (!user) getActiveUser(setUser);
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Head>
        <link rel="shortcut icon" href="/favicon.svg" />
        <title>FirstBot EA</title>
      </Head>
      <Component {...pageProps} />
    </UserContext.Provider>
  );
}

export default MyApp;
