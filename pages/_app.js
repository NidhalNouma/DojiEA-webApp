import { useState, useEffect } from "react";
import Router from "next/router";
import Head from "next/head";
import "../styles/globals.css";
import User, { UserContext } from "../hooks/Users";
import { paths } from "../Constants";

function MyApp({ Component, pageProps }) {
  const { user, setUser, checkUser, getActiveUser } = User();
  const [done, setDone] = useState(0);

  useEffect(() => {
    checkUser(setUser, setDone, done);
  }, []);

  useEffect(() => {
    if (done === 1) {
      const { pathname } = Router;
      let redirect404 = true;

      for (const p in paths) {
        if (pathname === paths[p]) redirect404 = false;
      }
      if (redirect404) {
        if (!user) Router.push(paths.home);
        else Router.push(paths.dashboard);
      }
      if (
        pathname !== paths.home &&
        pathname !== paths.howtouse &&
        pathname !== paths.membership &&
        !user
      )
        Router.push(paths.home);
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
      <div className="mx-auto my-auto w-full text-center">
        <div className="mb-14 text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="60"
            viewBox="0 0 34 35"
            className="cursor-pointer mx-auto border-2 border-c2 rounded-full"
          >
            <defs>
              <linearGradient
                id="linear-gradient"
                x1="0.725"
                y1="0.062"
                x2="0.056"
                y2="1.357"
                gradientUnits="objectBoundingBox"
              >
                <stop offset="0" stopColor="#082032" />
                <stop offset="1" stopColor="#082032" />
              </linearGradient>
            </defs>
            <g
              id="Group_35"
              // dataName="Group 35"
              transform="translate(-1258 -6081.956)"
            >
              <ellipse
                id="Ellipse_1"
                // dataName="Ellipse 1"
                cx="17"
                cy="17.5"
                rx="17"
                ry="17.5"
                transform="translate(1258 6081.956)"
                fill="url(#linear-gradient)"
              />
              <g
                id="_9043935_chart_candlestick_icon"
                // dataName="9043935_chart_candlestick_icon"
                transform="translate(1262.582 6086.848)"
              >
                <path
                  id="Path_37"
                  // dataName="Path 37"
                  d="M24.8,9.2H23.2V6H21.6V9.2H20v9.59h1.6v3.2h1.6v-3.2h1.6Zm-1.6,7.992H21.6V10.8h1.6Z"
                  transform="translate(-6.217 -1.263)"
                  fill="#71b7a6"
                />
                <path
                  id="Path_38"
                  // dataName="Path 38"
                  d="M12.8,7.2H11.2V4H9.6V7.2H8v7.992H9.6v3.2h1.6v-3.2h1.6ZM11.2,13.59H9.6V8.8h1.6Z"
                  transform="translate(-2.807 -0.362)"
                  fill="#d64d30"
                />
                <rect
                  id="_Transparent_Rectangle_"
                  // data-name="&lt;Transparent Rectangle&gt;"
                  width="25"
                  height="25"
                  transform="translate(0.418 0.109)"
                  fill="none"
                />
              </g>
            </g>
          </svg>
        </div>
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
    </div>
  );
}
