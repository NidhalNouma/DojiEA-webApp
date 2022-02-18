import React, { useState } from "react";

export function Button4({ className, label, onClick }) {
  return (
    <button
      className={
        className +
        " text-slate-50 bg-c4 font-medium text-sm px-5 py-2.5 text-center"
      }
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export function ButtonT4({ className, label, onClick }) {
  return (
    <button
      className={className + " text-sm text-c4 hover:underline"}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export function ButtonT4Spin({ className, classNameSpin, label, onClick }) {
  const [spin, setSpin] = useState(false);

  return (
    <React.Fragment>
      {spin ? (
        <Spinner4 className={className} classNameSpin={classNameSpin} />
      ) : (
        <div className="flex justify-center items-center">
          <button
            className={className + " text-sm text-c4 hover:underline"}
            onClick={async () => {
              setSpin(true);
              await onClick();
              setSpin(false);
            }}
          >
            {label}
          </button>
        </div>
      )}
    </React.Fragment>
  );
}

export function Button4Spin({ className, label, onClick }) {
  const [spin, setSpin] = useState(false);

  return (
    <React.Fragment>
      {spin ? (
        <Spinner4 className={className} />
      ) : (
        <button
          className={
            className +
            " text-slate-50 bg-c4 font-medium text-sm px-5 py-2.5 text-center"
          }
          onClick={async () => {
            setSpin(true);
            await onClick();
            setSpin(false);
          }}
        >
          {label}
        </button>
      )}
    </React.Fragment>
  );
}

export function Spinner4({ className, classNameSpin }) {
  return (
    <div className={className + " flex justify-center items-center"}>
      <svg
        role="status"
        className={
          classNameSpin + " inline h-8 w-8 animate-spin mr-2 text-c4 fill-white"
        }
        viewBox="0 0 100 101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
          fill="currentColor"
        />
        <path
          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
          fill="currentFill"
        />
      </svg>
    </div>
  );
}

export function GoogleBtn({ className, classNameSpin, label, onClick }) {
  const [spin, setSpin] = useState(false);

  return (
    <React.Fragment>
      {spin ? (
        <Spinner4
          className={className}
          classNameSpin={classNameSpin + " !text-slate-100 !fill-c2"}
        />
      ) : (
        <div className="flex justify-center items-center">
          <button
            className={
              className +
              " text-c1 bg-slate-100 font-medium text-sm px-5 py-2.5 text-center flex justify-center items-center"
            }
            onClick={async () => {
              setSpin(true);
              await onClick();
              setSpin(false);
            }}
          >
            <GoogleSvg />
            <span className="ml-1">{label}</span>
          </button>
        </div>
      )}
    </React.Fragment>
  );
}

function GoogleSvg() {
  return (
    <svg
      fill="#000000"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 30 30"
      width="20px"
      height="20xpx"
    >
      {" "}
      <path d="M 15.003906 3 C 8.3749062 3 3 8.373 3 15 C 3 21.627 8.3749062 27 15.003906 27 C 25.013906 27 27.269078 17.707 26.330078 13 L 25 13 L 22.732422 13 L 15 13 L 15 17 L 22.738281 17 C 21.848702 20.448251 18.725955 23 15 23 C 10.582 23 7 19.418 7 15 C 7 10.582 10.582 7 15 7 C 17.009 7 18.839141 7.74575 20.244141 8.96875 L 23.085938 6.1289062 C 20.951937 4.1849063 18.116906 3 15.003906 3 z" />
    </svg>
  );
}
