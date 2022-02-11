export function ErrorI({ message }) {
  return (
    <div className="flex justify-start items-center m-0 font-medium py-3 px-2 rounded text-red-600 bg-red-200 border border-red-100 ">
      <div slot="avatar">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-alert-octagon w-4 h-4 mx-1"
        >
          <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>
          <line x1="12" y1="8" x2="12" y2="12"></line>
          <line x1="12" y1="16" x2="12.01" y2="16"></line>
        </svg>
      </div>
      <div className="text-sm font-medium max-w-full flex-initial">
        {message}
      </div>
    </div>
  );
}

export function SuccessI({ message }) {
  return (
    <div className="flex justify-start items-center m-1 font-medium py-3 px-2 rounded text-green-600 bg-green-200 border border-green-100 ">
      <div slot="avatar">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-check-circle w-4 h-4 mx-1"
        >
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
          <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
      </div>
      <div className="text-sm font-medium  max-w-full flex-initial">
        {message}
      </div>
    </div>
  );
}
