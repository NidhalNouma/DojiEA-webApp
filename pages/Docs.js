import React, { useState, useRef, useEffect } from "react";
import Header from "../components/Header";
// import Image from "next/image";
import { files } from "../Constants";
import { H1, H2, H4 } from "../components/utils/Titles";
import { P1 } from "../components/utils/Text";
import Overlay from "../components/utils/Overlay";
import { LinkT4 } from "../components/utils/Links";
import { ButtonT4 } from "../components/utils/Buttons";
import { paths, questions, email, team, followUs } from "../Constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  ArrowCircleDownIcon,
  ArrowCircleRightIcon,
  CreditCardIcon,
  UserGroupIcon,
  LightBulbIcon,
  AdjustmentsIcon,
  DownloadIcon,
  DotsHorizontalIcon,
} from "@heroicons/react/solid";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  fab,
  faYoutube,
  faFacebook,
  faTelegram,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";
// import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons";

library.add(fab, faYoutube, faFacebook, faTelegram, faDiscord);

function HowToUse() {
  const [etap, setEtap] = useState(0);
  const instalationRef = useRef(null);
  const setupRef = useRef(null);
  const managmentRef = useRef(null);
  const qandasRef = useRef(null);
  const contactRef = useRef(null);
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
      const { clientHeight: ah } = managmentRef.current;
      const { clientHeight: qh } = qandasRef.current;
      const { clientHeight: ch } = contactRef.current;

      if (scroll < ih && etap !== 0) setEtap(0);
      else if (scroll > ih && scroll < sh + ih && etap !== 1) setEtap(1);
      else if (scroll > sh + ih && scroll < sh + ih + ah && etap !== 2)
        setEtap(2);
      else if (
        scroll > sh + ih + ah &&
        scroll < sh + ih + ah + qh &&
        etap !== 3
      )
        setEtap(3);
      else if (
        scroll > sh + ih + ah + qh &&
        scroll < sh + ih + ah + qh + ch &&
        etap !== 4
      )
        setEtap(4);
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
          <H1 label="Documentation" />

          <main>
            <div className="max-w-7xl mx-auto py-3 sm:px-6 lg:px-8">
              <div className="px-4 py-3 sm:px-0">
                <div className="relative flex">
                  <div className="sticky top-24 h-96 sm:block hidden flex-col justify-start items-start">
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
                      Accounts
                    </Ha>
                    <Ha
                      active={etap === 3}
                      onClick={() => handleScroll(qandasRef)}
                    >
                      Q&As
                    </Ha>
                    <Ha
                      active={etap === 4}
                      onClick={() => handleScroll(contactRef)}
                    >
                      Contact us
                    </Ha>
                  </div>

                  <div className="sm:ml-12 col-span-4 w-full">
                    <div className="mb-20" ref={instalationRef}>
                      <Instalation />
                    </div>
                    <div className="mb-20" ref={setupRef}>
                      <Setup />
                    </div>
                    <div className="mb-20" ref={managmentRef}>
                      <Managment />
                    </div>
                    <div className="mb-20" ref={qandasRef}>
                      <QandAs />
                    </div>
                    <div className="mb-20" ref={contactRef}>
                      <ContactUs />
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
  const [open, setOpen] = useState(false);

  return (
    <React.Fragment>
      <H2 label="Instalation" className="!pl-0 pt-0" />
      <P1 className="!text-base mt-0">
        The instalation is very straightforward and simple click{" "}
        <ButtonT4 label="here" onClick={() => setOpen(true)} /> to watch a video
        of how to install our EA, or feel free to follow the steps bellow.
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
      <P1 className="!text-base mt-0">
        Once you have downloaded the EA, you need to extract and copy the file,
        so just open the{" "}
        <span className="font-extrabold text-slate-300">Download</span> folder,
        extract the zip file then right click on the file and click copy or
        select the file and hit ctr+c.
      </P1>

      <img
        className="my-6 rounded"
        src="https://firebasestorage.googleapis.com/v0/b/ea-website-5968a.appspot.com/o/gifs%2FDownloadExpertFile.gif?alt=media&token=7cbb799a-9872-47f1-aa1b-87b2b9b75996"
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
        src="https://firebasestorage.googleapis.com/v0/b/ea-website-5968a.appspot.com/o/gifs%2FOpenDataFolder.gif?alt=media&token=345e930d-18be-4741-9a3f-3559fee5f3e2"
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
        past or just click{" "}
        <span className="font-extrabold text-slate-300">Ctr+v</span>.
      </P1>

      <img
        className="my-6 rounded"
        src="https://firebasestorage.googleapis.com/v0/b/ea-website-5968a.appspot.com/o/gifs%2FPastFile.gif?alt=media&token=a3291b25-c57f-420b-bc45-499a2e0e8245"
        alt="Copy EA to clipboard"
      />

      <P1 className="!text-base mt-0">
        Everything is good now you can go back to your MT4 or MT5 terminal, and
        refresh the expert tab. If you didn&apos;t see the EA for some reason,
        just close the terminal and open it again and you should be good.
      </P1>

      <img
        className="my-6 rounded"
        src="https://firebasestorage.googleapis.com/v0/b/ea-website-5968a.appspot.com/o/gifs%2FRefreshExpertSection.gif?alt=media&token=17d839e3-b3d6-4fe3-ab1b-38f248b26498"
        alt="Copy EA to clipboard"
      />

      <P1 className="!text-base mt-0">
        <span className="font-extrabold text-slate-300">
          Congratulations you have successfully install the EA
        </span>
        , Now let&apos;s move to the setup section.
      </P1>

      <Overlay open={open} setOpen={setOpen} className="sm:!max-w-6xl ">
        <div className="flex m-3">
          <video className="my-auto mx-auto w-full h-full" controls>
            <source
              src="https://firebasestorage.googleapis.com/v0/b/dojibot-29cb7.appspot.com/o/videos%2FInstalation.mp4?alt=media&token=ed300bd2-130a-4473-b2f1-263b4b651c09"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          {/* <iframe
            // className="w-full h-full"
            src="https://player.vimeo.com/video/684646634?h=531e6e4cb9"
            style={{
              height: "80vh",
              width: "100%",
            }}
          ></iframe> */}
        </div>
      </Overlay>
    </React.Fragment>
  );
}

function Setup() {
  return (
    <React.Fragment>
      <H2 label="Setup" className="!pl-0 pt-0" />
      <P1 className="!text-base mt-0">
        Setup is also just a few simple steps that you need to follow. First
        make sure that you have installed the EA and you have it in your MT4 or
        MT5 platform.
      </P1>
      <P1 className="!text-base mt-0">
        the first step is to open the options tab and make sure that you allow
        autmaic trading also allow the EA to use the DLL. DLL is imortant for
        the connection between the EA and our servers.
      </P1>

      <img
        className="my-6 rounded"
        src="https://firebasestorage.googleapis.com/v0/b/ea-website-5968a.appspot.com/o/gifs%2FAllowAutoTrading.gif?alt=media&token=6dd4248e-8838-425f-b985-41172948b7db"
        alt="Copy EA to clipboard"
      />

      <P1 className="!text-base mt-0">
        At this point everything is ready to start running the EA, Go back to
        the navigation tab and add the EA to the chart, you can do that by
        double-clicking on the EA or just drag it to the chart.
      </P1>

      <P1 className="!text-base mt-0">
        Once you&rsquo;ve done that you will see the input section.
      </P1>

      <img
        className="my-6 rounded"
        src="https://firebasestorage.googleapis.com/v0/b/ea-website-5968a.appspot.com/o/gifs%2FAddingEAtoChart.gif?alt=media&token=2d0ad9f2-37d6-4a2f-853a-22a5b600f34c"
        alt="Copy EA to clipboard"
      />

      <P1 className="!text-base mt-0">
        The final step is to get an ID from our{" "}
        <LinkT4 label="Accounts" href={paths.accounts} /> and start using the
        EA.{" "}
        <span className="font-extrabold text-slate-300">
          Notice that to run the EA on a live chart you need to be subscribed to
          at least one of our plans.
        </span>
      </P1>

      <P1 className="!text-base mt-0">
        If you don&rsquo;t have any active subscription, click{" "}
        <LinkT4 label="here" href={paths.membership} /> here to get one.
      </P1>
    </React.Fragment>
  );
}

function Managment() {
  return (
    <React.Fragment>
      <H2 label="Accounts" className="!pl-0 pt-0" />
      <P1 className="!text-base mt-0">
        Managment your accounts is also simple, once you have downloaded and
        setup the EA, go back to the{" "}
        <LinkT4 label="Accounts" href={paths.accounts} /> page and click the{" "}
        <span className="font-extrabold text-slate-300">Generate new ID</span>{" "}
        button.
      </P1>

      <P1 className="!text-base mt-0">
        You will get a new ID that you can use in the EA, so the next step will
        be to copy the new ID.
      </P1>

      <img
        className="my-6 rounded"
        src="https://firebasestorage.googleapis.com/v0/b/ea-website-5968a.appspot.com/o/gifs%2FRefreshAccounts.gif?alt=media&token=ed6c3710-5113-46e4-b9e2-68e08d22172b"
        alt="Copy EA to clipboard"
      />

      <P1 className="!text-base mt-0">
        Now the last step is to go back to your MT4 or MT5 platfor and past the
        ID, and click OK.
      </P1>

      <img
        className="my-6 rounded"
        src="https://firebasestorage.googleapis.com/v0/b/ea-website-5968a.appspot.com/o/gifs%2FEnableDisable.gif?alt=media&token=d8137fa9-0836-4db0-a675-52dc1638da7f"
        alt="Copy EA to clipboard"
      />

      <P1 className="!text-base mt-0">
        Once that done you can check if the account is active by clicking the
        refresh icon, and if you set everything right you will see that your
        account is active and running.
      </P1>

      <img
        className="my-6 rounded"
        src="https://firebasestorage.googleapis.com/v0/b/ea-website-5968a.appspot.com/o/gifs%2FEnableDisable.gif?alt=media&token=d8137fa9-0836-4db0-a675-52dc1638da7f"
        alt="Copy EA to clipboard"
      />
    </React.Fragment>
  );
}

export function QandAs() {
  function Qa({ question, answer }) {
    const [show, setShow] = useState(false);
    return (
      <div className="px-4 py-2 bg-c2 rounded-lg mb-4">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => setShow((e) => !e)}
        >
          <H4 label={question} className="ml-0" />
          {show ? (
            <ArrowCircleDownIcon className="w-5 h-5 text-slate-300" />
          ) : (
            <ArrowCircleRightIcon className="w-5 h-5 text-slate-300" />
          )}
        </div>
        {show && <P1>{answer}</P1>}
      </div>
    );
  }

  return (
    <React.Fragment>
      <H2 label="Q&As" className="!pl-0 pt-0" />

      {questions?.map((q, i) => (
        <Qa key={i} question={q.question} answer={q.answer} />
      ))}
    </React.Fragment>
  );
}

export function ContactUs() {
  function Card({ label, children, onClick }) {
    return (
      <div
        onClick={() => {
          window.open(
            "https://mail.google.com/mail/?view=cm&fs=1&to=" +
              email.address +
              "&su=" +
              label +
              "&body="
          );
        }}
        className="px-6 py-10 rounded-lg bg-c2 transition hover:bg-c3 flex flex-col justify-center items-center cursor-pointer"
      >
        <div className="">{children}</div>
        <H4 label={label} className="" />
      </div>
    );
  }

  function A({ className, href, children }) {
    return href ? (
      <a
        className={className}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ) : (
      <React.Fragment></React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <H2 label="Contact us" className="!pl-0 pt-0" />

      <P1 className="!text-base mt-0">
        Feel free to contact us if you find any bugs or questions, if you have
        any idea to improve our service we will be happy to hear from you
      </P1>
      <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4">
        <Card label="Instalation and setup">
          <DownloadIcon className="h-10 w-10 text-slate-200" />
        </Card>
        <Card label="Membership">
          <CreditCardIcon className="h-10 w-10 text-slate-200" />
        </Card>
        <Card label="Accounts">
          <UserGroupIcon className="h-10 w-10 text-slate-200" />
        </Card>
        <Card label="Have an idea?">
          <LightBulbIcon className="h-10 w-10 text-slate-200" />
        </Card>
        <Card label="Settings">
          <AdjustmentsIcon className="h-10 w-10 text-slate-200" />
        </Card>
        <Card label="Other">
          <DotsHorizontalIcon className="h-10 w-10 text-slate-200" />
        </Card>
      </div>
      {team?.length > 0 && (
        <div className="mt-8">
          <P1 className="!text-base mt-0">
            Want to make a custom robot? contact our team
          </P1>
          {team?.map((t, i) => (
            <div key={i} className="p-4 border-2 border-c3 rounded-lg mb-4">
              <h1 className="text-slate-200 font-bold">{t.name}</h1>
              <A className="text-slate-500 block mt-2" href={t.freelancer}>
                Hire me on freelancer
              </A>
              <A className="text-slate-500 block mt-2" href={t.upwork}>
                Hire me on upwork
              </A>
              <A className="text-slate-500 block mt-2" href={t.fiver}>
                Hire me on Fiver
              </A>
            </div>
          ))}
        </div>
      )}
      <div className="mt-6">
        <P1 className="!text-base mt-0">Follow us on</P1>
        <div className="flex items-center">
          <A className="mr-5" href={followUs.youtube}>
            <FontAwesomeIcon
              icon="fa-brands fa-youtube"
              className="h-12 w-12 text-slate-50"
            />
          </A>

          <A className="mr-5" href={followUs.facebook}>
            <FontAwesomeIcon
              icon="fa-brands fa-facebook"
              className="h-10 w-10 text-slate-50"
            />
          </A>

          <A className="mr-5" href={followUs.twitter}>
            <FontAwesomeIcon
              icon="fa-brands fa-twitter"
              className="h-10 w-10 text-slate-50"
            />
          </A>

          <A className="mr-5" href={followUs.discord}>
            <FontAwesomeIcon
              icon="fa-brands fa-discord"
              className="h-10 w-10 text-slate-50"
            />
          </A>

          <A className="mr-5" href={followUs.telegram}>
            <FontAwesomeIcon
              icon="fa-brands fa-telegram"
              className="h-10 w-10 text-slate-50"
            />
          </A>
        </div>
      </div>
    </React.Fragment>
  );
}
