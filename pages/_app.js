import { useState, useEffect } from "react";
import Router from "next/router";
import Head from "next/head";
import AOS from "aos";
import "../styles/globals.css";
import "aos/dist/aos.css";
import User, { UserContext } from "../hooks/Users";
import { paths } from "../Constants";

function MyApp({ Component, pageProps }) {
  const { user, setUser, checkUser, getActiveUser } = User();
  const [done, setDone] = useState(0);

  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });

    checkUser(setUser, setDone, done);
  }, []);

  useEffect(() => {
    if (done === 1) {
      const { pathname } = Router;
      if (pathname !== paths.home && !user) Router.push(paths.home);
      else if (pathname === paths.home && user) Router.push(paths.dashboard);
    }
  }, [user, done]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Head>
        <link rel="shortcut icon" href="/favicon.svg" />
        <title>Doji Bot</title>
      </Head>
      {done === 2 ? (
        <Component {...pageProps} />
      ) : (
        <Loading done={done} setDone={setDone} />
      )}
    </UserContext.Provider>
  );
}

export default MyApp;

function Loading({ done, setDone }) {
  const [completed, setCompleted] = useState(0);

  useEffect(() => {
    if (done === 1) {
      setCompleted(100);
      setTimeout(() => setDone(2), 500);
    } else if (done === 0)
      setTimeout(() => {
        if (completed === 0) setCompleted(40);
      }, 600);
  }, [done]);

  return (
    <div className="flex w-full h-full fixed top-0 left-0 bg-c1">
      <div className="mx-auto w-5/12 bg-slate-500 rounded-full h-1 my-auto">
        <div
          className="bg-c4 h-1 rounded-full"
          style={{
            width: `${completed}%`,
            transition: "width 0.5s ease-in-out",
          }}
        ></div>
      </div>
    </div>
  );
}
