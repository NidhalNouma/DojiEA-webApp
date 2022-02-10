export function H1({ className, label }) {
  return (
    <div className={className + " max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8"}>
      <h1 className="text-3xl font-bold text-slate-100">{label}</h1>
    </div>
  );
}

export function H2({ className, label }) {
  return (
    <div className={className + " max-w-7xl mx-auto py-4 px-4 sm:px-2 lg:px-2"}>
      <h1 className="text-2xl font-bold text-slate-200">{label}</h1>
    </div>
  );
}

export function H3({ className, label }) {
  return (
    <div className={className + " max-w-7xl mx-auto py-3 px-1 sm:px-1 lg:px-2"}>
      <h1 className="text-xl font-bold text-slate-200">{label}</h1>
    </div>
  );
}

export function H4({ className, label }) {
  return (
    <div className={className + " max-w-7xl mx-auto py-1"}>
      <h1 className="text-lg font-bold text-slate-200">{label}</h1>
    </div>
  );
}
