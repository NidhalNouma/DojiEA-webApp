export function Label({ className, label }) {
  return (
    <label
      className={className + " block my-2 text-sm font-medium text-slate-400"}
    >
      {label}
    </label>
  );
}

export function P1({ className, children }) {
  return (
    <p className={className + " block my-2 text-sm font-medium text-slate-400"}>
      {children}
    </p>
  );
}
