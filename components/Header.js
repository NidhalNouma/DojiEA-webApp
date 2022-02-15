import React, { useState, useEffect } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Link from "next/link";
import Overlay from "./utils/Overlay";
import SignIn from "./SignIn";
import { Button4 } from "./utils/Buttons";
import { LinkT4 } from "./utils/Links";
import { useUserContext } from "../hooks/Users";

const navigation = [
  { name: "Dashboard", href: "/Dashboard", current: false },
  { name: "Accounts", href: "/Accounts", current: false },
  { name: "Membership", href: "/Membership", current: false },
  { name: "How to use", href: "/HowToUse", current: false },
  { name: "Settings", href: "/Settings", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Header({ copen = false }) {
  const { user } = useUserContext();
  const [top, setTop] = useState(true);
  const [open, setOpen] = useState(copen);

  // detect whether user has scrolled the page down by 10px
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <Disclosure as="nav" className="bg-gray-800 z-20">
      {({ openm }) => (
        <header
          className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out bg-c1 ${
            !top && "bg-c1 backdrop-blur-sm shadow-lg"
          }`}
        >
          <div className="max-w-6xl mx-auto px-5 sm:px-6">
            <div className="flex items-center justify-between h-16 md:h-20">
              {/* Site branding */}
              <div className="flex-shrink-0 mr-4">
                {/* Logo */}
                <IconSvg to={user ? "/" : "/"} />
              </div>

              {/* Site navigation */}
              <nav className="flex flex-grow">
                <ul className="flex flex-grow justify-end flex-wrap items-center">
                  {user ? (
                    <React.Fragment>
                      {navigation.map((item) => (
                        <li key={item.name} className="pl-8 hidden sm:block">
                          <LinkT4 href={item.href} label={item.name} />
                        </li>
                      ))}

                      <Disclosure.Button className="sm:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                        <span className="sr-only">Open main menu</span>
                        {openm ? (
                          <XIcon className="block h-6 w-6" aria-hidden="true" />
                        ) : (
                          <MenuIcon
                            className="block h-6 w-6"
                            aria-hidden="true"
                          />
                        )}
                      </Disclosure.Button>
                    </React.Fragment>
                  ) : (
                    <li>
                      <Button4
                        className="cursor-pointer rounded-full"
                        onClick={() => {
                          setOpen(true);
                        }}
                        label="Sign In"
                      />
                    </li>
                  )}
                </ul>
              </nav>
            </div>
          </div>
          <Overlay open={open} setOpen={setOpen}>
            <SignIn />{" "}
          </Overlay>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-0 pb-3 space-y-1 bg-c1">
              {navigation.map((item) => (
                <LinkT4
                  key={item.name}
                  label={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                />
              ))}
            </div>
          </Disclosure.Panel>
        </header>
      )}
    </Disclosure>
  );
}

export default Header;

function IconSvg({ to }) {
  return (
    <Link href={to} className="block" passHref={true}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        // xmlns:xlink="http://www.w3.org/1999/xlink"
        width="45"
        height="45"
        viewBox="0 0 34 35"
        className="cursor-pointer"
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
    </Link>
  );
}
