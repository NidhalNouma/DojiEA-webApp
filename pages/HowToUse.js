import React, { useState, useRef, useEffect } from "react";
import Header from "../components/Header";
import { files } from "../Constants";
import { H1, H4 } from "../components/utils/Titles";
import { P1 } from "../components/utils/Text";

function HowToUse() {
  const [etap, setEtap] = useState(0);
  const instalationRef = useRef(null);
  const setupRef = useRef(null);
  const managmentRef = useRef(null);
  const [scroll, setScroll] = useState(0);

  const handleScroll = (ref) => {
    window.scrollTo({
      behavior: "smooth",
      top: ref.current.offsetTop,
    });
  };

  useEffect(() => {
    if (instalationRef.current && setupRef.current) {
      const { clientHeight: ih } = instalationRef.current;
      const { clientHeight: sh } = setupRef.current;

      if (scroll < ih && etap !== 0) setEtap(0);
      else if (scroll > ih && scroll < sh + ih && etap !== 1) setEtap(1);
      else if (scroll > sh + ih && etap !== 2) setEtap(2);
    }

    const onScroll = (e) => {
      setScroll(e.target.documentElement.scrollTop);
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scroll]);

  return (
    <div>
      <Header />
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Hero content */}
        <div className="pt-12 pb-12 md:pt-20 md:pb-20">
          <H1 label="How to use" />

          <main>
            <div className="max-w-7xl mx-auto py-3 sm:px-6 lg:px-8">
              <div className="px-4 py-3 sm:px-0">
                <div className="relative flex">
                  <div className="sticky top-24 h-96 block flex-col justify-start items-start">
                    <Ha
                      active={etap === 0}
                      onClick={() => handleScroll(instalationRef)}
                    >
                      Instalation
                    </Ha>
                    <Ha
                      active={etap === 1}
                      onClick={() => handleScroll(setupRef)}
                    >
                      Setup
                    </Ha>
                    <Ha
                      active={etap === 2}
                      onClick={() => handleScroll(managmentRef)}
                    >
                      Managment
                    </Ha>
                  </div>

                  <div className="ml-12 col-span-4 w-full">
                    <div className="mb-20" ref={instalationRef}>
                      <Instalation />
                    </div>
                    <div className="mb-20" ref={setupRef}>
                      {/* <Setup /> */}
                    </div>
                    <div className="mb-20" ref={managmentRef}>
                      {/* <Managment /> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default HowToUse;

function Ha({ onClick, className, children, active }) {
  const sclass = active ? "text-c2 bg-slate-200 py-2" : "text-slate-200 py-1";
  return (
    <div
      className={className + " py-2 w-full cursor-pointer"}
      onClick={onClick}
    >
      <h1
        className={
          sclass + " px-3 text-base md:w-40 font-semibold w-full rounded"
        }
      >
        {children}
      </h1>
    </div>
  );
}

function Instalation() {
  return (
    <React.Fragment>
      <P1 className="!text-base mt-0">
        The instalation is very straightforward and simple click here to watch a
        video of how to install any EA, or feel free to follow the steps bellow.
      </P1>
      <P1 className="!text-base mt-0">
        the frst step is to download the EA file by clicking on the button
        bellow
      </P1>
      <div className="mb-8 mt-5 mx-auto w-full block md:flex justify-center text-center">
        <button
          className="md:mr-6 px-6 py-3 rounded-full text-c2 font-semibold bg-slate-100"
          onClick={files.ex4}
        >
          Download MT4 version
        </button>
        <button
          className="mt-3 md:mt-0 px-6 py-3 rounded-full text-c2 font-semibold bg-slate-100"
          onClick={files.ex5}
        >
          Download MT5 version
        </button>
      </div>
      <div className="mb-96">
        <P1 className="mb-96"></P1>

        <div className="mb-96"></div>
      </div>
      <P1 className="!text-base mt-0">
        Once you have downloaded the EA, you need to copy the file, so just open
        the <span className="font-extrabold text-slate-300">Download</span>{" "}
        folder, right click on the file and click copy or select the file and
        hit ctr+c.
      </P1>

      <img
        className="my-6 rounded"
        src="/images/CopyEAFile.gif"
        alt="Copy EA to clipboard"
      />

      <P1 className="!text-base mt-0">
        After that the next step will be to go ahead and open your MT4 or MT5
        terminal.
      </P1>
      <P1 className="!text-base mt-0">
        Clcik <span className="font-extrabold text-slate-300">Files</span> on
        the top left cornor and then selct{" "}
        <span className="font-extrabold text-slate-300">Open data folder.</span>{" "}
      </P1>

      <img
        className="my-6 rounded"
        src="/images/CopyEAFile.gif"
        alt="Copy EA to clipboard"
      />

      <P1 className="!text-base mt-0">
        Now open the <span className="font-extrabold text-slate-300">MQL</span>{" "}
        folder by double-clicking on it, the open the{" "}
        <span className="font-extrabold text-slate-300">Expert</span> folder
        same way by double-clicking.
      </P1>

      <P1 className="!text-base mt-0">
        Then <span className="font-extrabold text-slate-300">past</span> the EA
        file that you have downloaded, for that you can right click and click
        past or just click the top left cornor and then selct{" "}
        <span className="font-extrabold text-slate-300">Ctr+v</span>.
      </P1>

      <img
        className="my-6 rounded"
        src="/images/CopyEAFile.gif"
        alt="Copy EA to clipboard"
      />

      <P1 className="!text-base mt-0">
        Everything is good now you can go back to your MT4 or MT5 terminal, and
        refresh the expert tab. If you didn&apos;t see the EA for some reason,
        just close the terminal and open it again and you should be good.
      </P1>

      <img
        className="my-6 rounded"
        src="/images/CopyEAFile.gif"
        alt="Copy EA to clipboard"
      />

      <P1 className="!text-base mt-0">
        <span className="font-extrabold text-slate-300">
          Congratulations you have successfully install the EA
        </span>
        , Now let&apos;s move to the setup section.
      </P1>
    </React.Fragment>
  );
}

function Setup() {
  return (
    <React.Fragment>
      <P1 className="!text-base mt-0">
        Setup is also just a simple step that you need to follow. First make
        sure that you have installed the EA and you have it in your MT4 or MT5
        platform.
      </P1>
      <P1 className="!text-base mt-0">
        the first step is to open the options tab and make sure that you allow
        autmaic trading also allow the EA to use the DLL. DLL is imortant for
        the connection between the EA and our servers.
      </P1>

      <img
        className="my-6 rounded"
        src="/images/CopyEAFile.gif"
        alt="Copy EA to clipboard"
      />

      <P1 className="!text-base mt-0">
        Everything is good now you can go back to your MT4 or MT5 terminal, and
        refresh the expert tab. If you didn&apos;t see the EA for some reason,
        just close the terminal and open it again and you should be good.
      </P1>

      <img
        className="my-6 rounded"
        src="/images/CopyEAFile.gif"
        alt="Copy EA to clipboard"
      />
    </React.Fragment>
  );
}

function Managment() {
  return (
    <React.Fragment>
      <P1 className="!text-base mt-0">
        Setup is also just a simple step that you need to follow. First make
        sure that you have installed the EA and you have it in your MT4 or MT5
        platform.
      </P1>
      <P1 className="!text-base mt-0">
        the first step is to open the options tab and make sure that you allow
        autmaic trading also allow the EA to use the DLL. DLL is imortant for
        the connection between the EA and our servers.
      </P1>

      <img
        className="my-6 rounded"
        src="/images/CopyEAFile.gif"
        alt="Copy EA to clipboard"
      />

      <P1 className="!text-base mt-0">
        Everything is good now you can go back to your MT4 or MT5 terminal, and
        refresh the expert tab. If you didn&apos;t see the EA for some reason,
        just close the terminal and open it again and you should be good.
      </P1>

      <img
        className="my-6 rounded"
        src="/images/CopyEAFile.gif"
        alt="Copy EA to clipboard"
      />
    </React.Fragment>
  );
}
