import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function Breadcrumbs() {
  const [locale] = useTranslation("global");
  const breadcrumbs: breadcrumb[] = [
    { name: locale("workspace"), path: "/" },
    { name: locale("creative"), path: "/" },
    { name: locale("creative_website"), path: "/" },
  ]
  return (
    <div className="flex items-center gap-3">
      {breadcrumbs.map(({ name, path }, index) => (
        <>
          <Link to={path} className={`text-sm sm:text-md ${index == breadcrumbs.length - 1 ? 'text-black dark:text-soft-gray' : 'text-gray-400'} `}>
            {name}
          </Link>
          {index !== breadcrumbs.length - 1 && <ChevronRightIcon className="w-4 h-4 text-gray-400"/>}
        </>
      ))}
    </div>
  )
}