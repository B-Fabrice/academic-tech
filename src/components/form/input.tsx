export default function FormInput({ placeholder, suffix }: { placeholder: string, suffix?: JSX.Element }) {
  return (
    <div className="w-full bg-white-bg dark:bg-dark-bg flex items-center bg-slate-100 rounded-md px-3 py-2">
      <input
        type="text"
        placeholder={placeholder}
        className="border-none outline-none text-sm w-full bg-transparent text-black dark:text-white"
      />
      { suffix && <div className="ml-2">
        {suffix}
      </div>}
    </div>
  )
}