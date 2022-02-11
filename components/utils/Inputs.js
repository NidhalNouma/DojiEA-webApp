export function Input({
  className,
  label,
  type,
  placeholder,
  value,
  setValue,
  disabled = false,
}) {
  return (
    <div>
      <label className="block mb-2 text-sm font-medium text-slate-400">
        {label}
      </label>
      <input
        disabled={disabled}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type={type}
        name="email"
        className={
          className +
          " bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
        }
        placeholder={placeholder}
        required=""
      />
    </div>
  );
}
