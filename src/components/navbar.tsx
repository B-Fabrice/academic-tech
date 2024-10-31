import FormInput from "./form/input";
import { useTheme } from "../use_theme";
import { Bars3Icon, BellIcon, MagnifyingGlassIcon, MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Navbar({ setShowSidebar }: { setShowSidebar: React.Dispatch<React.SetStateAction<boolean>> }) {
  const { theme, setTheme } = useTheme();
  const [locale] = useTranslation("global");

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  return (
    <div className="flex items-center justify-between w-full px-3 sm:px-10 py-4 bg-white dark:bg-slate">
      <div className="w-8/12 max-w-60 max-sm:hidden">
        <FormInput
          placeholder={locale("search")}
          suffix={<MagnifyingGlassIcon className="w-6 h-6 text-gray-400"/>}
        />
      </div>
      <Link to="/" className="sm:hidden block w-8">
        <img className="mx-auto" src="/logo.png" alt="logo" />
      </Link>
      <div className="flex items-center gap-4">
        <button className="bg-slate/10 dark:bg-dark-bg w-8 h-8 p-[6px] rounded-lg">
          <MoonIcon onClick={toggleTheme} className="text-slate dark:hidden"/>
          <SunIcon onClick={toggleTheme} className="text-soft-gray hidden dark:block"/>
        </button>
        <button className="bg-slate/10 dark:bg-dark-bg w-8 h-8 p-[6px] rounded-lg relative">
          <BellIcon className="text-slate dark:text-soft-gray"/>
          <div className="absolute top-1 right-2 w-2 h-2 bg-red-500 rounded-full"></div>
        </button>
        <button
          className="sm:hidden w-8 h-8 p-[6px] rounded-lg"
          onClick={() => setShowSidebar(true)}
        >
          <Bars3Icon className="text-slate dark:text-soft-gray"/>
        </button>
      </div>
    </div>
  )
}