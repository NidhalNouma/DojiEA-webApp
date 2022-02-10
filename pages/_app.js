import Router from "next/router";
import AOS from "aos";
import "../styles/globals.css";
import "aos/dist/aos.css";
import { useEffect } from "react";
import User, { UserContext } from "../hooks/Users";

function MyApp({ Component, pageProps }) {
  const { user, setUser } = User();

  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);

  useEffect(() => {
    const { pathname } = Router;
    if (pathname !== "/" && !user) {
      Router.push("/");
    }
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Component {...pageProps} />
    </UserContext.Provider>
  );
}

export default MyApp;
