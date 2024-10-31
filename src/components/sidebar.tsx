import { Link } from "react-router-dom"
import UserProfile from "./user_profile"
import { HomeIcon, EnvelopeIcon,  FolderIcon,  PlusIcon, Cog8ToothIcon, UserIcon, FolderMinusIcon, ChartBarIcon } from "@heroicons/react/24/outline"

export default function Sidebar() {
  const iconsClassName: string = "w-6 h-6 mx-auto";
  return (
    <div className="bg-white dark:bg-slate border-r border-soft-gray dark:border-graphite py-5 h-screen overflow-y-auto no-scrollbar">
      <Link to="/" className="px-6 block max-sm:hidden">
        <img className="mx-auto" src="/logo.png" alt="logo" />
      </Link>
      <div className="sm:mt-10 d-flex flex-col gap-2 items-center">
        <SideLink icon={<HomeIcon className={iconsClassName} />} to="/" isActive={true} />
        <SideLink icon={<EnvelopeIcon className={iconsClassName} />} to="/" />
        <SideLink icon={<FolderMinusIcon className={iconsClassName} />} to="/" />
        <SideLink icon={<FolderIcon className={iconsClassName} />} to="/" />
        <SideLink icon={<ChartBarIcon className={iconsClassName} />} to="/" />
      </div>
      <div className="border-y border-y-slate-soft-gray dark:border-y-graphite flex flex-col gap-4 py-5 my-5 items-center">
        <UserProfile path="/user1.jpg" active={true} />
        <UserProfile path="/user2.jpg" active={true} />
        <UserProfile path="/user3.jpg" active={true} />
        <button className="flex p-2 border border-gray-400 border-dashed flex-col items-center w-10 h-10 relative rounded-full">
          <PlusIcon className="w-6 h-6 text-gray-400"/>
        </button>
      </div>
      <div className="">
        <SideLink icon={<Cog8ToothIcon className={iconsClassName} />} to="/" />
        <SideLink icon={<UserIcon className={iconsClassName} />} to="/" />
      </div>
    </div>
  )
}

function SideLink({ icon, to, isActive=false }: { icon: React.ReactNode, to: string, isActive?: boolean }) {
  return (
    <Link to={to} className={`text-gray-400 block hover:text-slate-700 px-4 py-3 ${isActive && 'border-l-4 border-l-blue-800 bg-gradient-to-r from-blue-400/20 to-transparent'}`}>
      {icon}
    </Link>
  )
}