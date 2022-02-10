import Link from "next/link";

export function Link4({ className, label, href }) {
  return (
    <Link href={href} passHref={true}>
      <span
        className={
          className +
          " text-slate-50 bg-c4 font-medium text-sm px-5 py-2.5 text-center cursor-pointer"
        }
      >
        {label}
      </span>
    </Link>
  );
}

export function LinkT4({ className, label, href }) {
  return (
    <Link href={href} passHref={true}>
      <span
        className={
          className + " text-sm text-c4 hover:underline cursor-pointer"
        }
      >
        {label}
      </span>
    </Link>
  );
}
