import { useTranslation } from "react-i18next";
import Breadcrumbs from "../components/Breadcrumbs";
import { ChevronDownIcon, LinkIcon, LockClosedIcon, PlusIcon, QueueListIcon, Squares2X2Icon } from "@heroicons/react/24/outline";
import {PlayIcon } from "@heroicons/react/24/solid";
import UserProfile from "../components/user_profile";
import { useState } from "react";

export default function Home() {
  const [locale] = useTranslation("global");
  const [display, setDisplay] = useState<string>('list');
  const [linkCopied, setLinkCopied] = useState<boolean>(false);

  const handleCopyLink = () => {
    setLinkCopied(true);
    setTimeout(() => {
      setLinkCopied(false);
    }, 2000);
  };
  const avatarClass: string = "-ml-2 border border-white dark:border-graphite rounded-full";
  return (
    <div className="px-3 sm:px-10 py-3 sm:py-10">
      <div className="flex items-start ms:items-center justify-between max-sm:flex-col gap-3">
        <Breadcrumbs />
        <p className="text-sm sm:text-md text-black dark:text-soft-gray max-sm:w-full max-sm:text-right">
          {locale("fromApril")}
        </p>
      </div>
      <div className="flex justify-end items-center mt-4 gap-2">
        <div className="dark:border-graphite top-0 right-0 w-2 h-2 bg-green-500 rounded-full"></div>
        <p className="text-sm text-gray-400">{locale("updatedAt")}</p>
      </div>
      <h2 className="text-2xl sm:text-4xl font-bold text-black dark:text-white mb-8">
        {locale("webDesign")}
      </h2>
      <div className="flex max-sm:flex-col gap-3 sm:items-center justify-between">
        <div className="flex items-center gap-4 max-sm:justify-between">
          <div className="flex items-center gap-3">
            <LockClosedIcon className="w-4 h-4 text-gray-400"/>
            <p className="text-sm sm:text-md text-black dark:text-soft-gray">
              {locale("limitedAccess")}
            </p>
            <ChevronDownIcon className="w-4 h-4 text-gray-400"/>
          </div>
          <div className="flex gap-4 pl-5 border-l border-soft-gray dark:border-graphite">
            <div className="flex">
              <UserProfile path="/user1.jpg"/>
              <UserProfile path="/user2.jpg" customClass={avatarClass}/>
              <UserProfile path="/user3.jpg" customClass={avatarClass}/>
              <div className={`flex items-center justify-center w-9 h-9 relative rounded-full bg-gray-400 ${avatarClass}`}>
                <p className="text-white text-sm">+2</p>
              </div>
            </div>
            <div className='flex items-center justify-center w-9 h-9 relative rounded-full bg-blue-800'>
                <PlusIcon className="w-6 h-6 text-white"/>
              </div>
          </div>
        </div>
        <div className="max-sm:w-full flex gap-5 items-center max-sm:justify-end">
          <button
            className="group relative"
            onClick={handleCopyLink}
          >
            <LinkIcon className="w-4 h-4 text-gray-400 hover:text-blue-800"/>
            <div className="group-hover:block hidden absolute -left-9 -bottom-14 bg-blue-800 p-2 rounded-lg">
              <PlayIcon className="absolute -top-2 inset-x-0 mx-auto -bottom-2 w-3 h-6 bg-blue-800 rotate-45 text-blue-800 transform"/>
              <p className="text-nowrap text-sm text-white">
                {linkCopied ? locale("linkCopied") : locale("copyLink")}
              </p>
            </div>
          </button>
          <div className="border-l border-soft-gray dark:border-graphite h-8"></div>
          <button
            className={`${display == 'list' ? 'bg-blue-800' : ''} p-2 rounded-md`}
            onClick={() => setDisplay('list')}
          >
            <QueueListIcon className="w-4 h-4 text-gray-400"/>
          </button>
          <button
            className={`${display == 'grid' ? 'bg-blue-800' : ''} p-2 rounded-md`}
            onClick={() => setDisplay('grid')}
          >
            <Squares2X2Icon className="w-4 h-4 text-gray-400"/>
          </button>
        </div>
      </div>
    </div>
  )
}