import { CalendarDaysIcon, EllipsisVerticalIcon, InformationCircleIcon, MicrophoneIcon, PaperAirplaneIcon, StarIcon, UsersIcon } from "@heroicons/react/24/outline";
import {useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import UserProfile from "./user_profile";

export default function TaskDetails() {
  const [open, setOpen] = useState<boolean>(false);
  const [didOpen, setDidOpen] = useState<boolean>(false);
  const [locale] = useTranslation("global");

  const messages: Message[] = [
    { user: { name: 'User 1', avatar: '/user1.jpg' }, date: new Date(), message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.', type: 'sent' },
    { user: { name: 'User 2', avatar: '/user2.jpg' }, date: new Date(), message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.', type: 'received' },
    { user: { name: 'User 3', avatar: '/user3.jpg' }, date: new Date(), message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.', type: 'sent' },
    { user: { name: 'User 4', avatar: '/user2.jpg' }, date: new Date(), message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.', type: 'received' },
    { user: { name: 'User 5', avatar: '/user3.jpg' }, date: new Date(), message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.', type: 'sent' },
    { user: { name: 'User 6', avatar: '/user2.jpg' }, date: new Date(), message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.', type: 'received' },
  ];

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [open]);

  return (
    <>
      <div className="fixed bottom-5 right-5 sm:bottom-10 sm:right-10 w-fit h-fit">
        <button
          className={`${!didOpen && 'animate-bounce'} bg-white/70 dark:bg-slate/70 p-2 rounded-full shadow-2xl shadow-slate dark:shadow-white-bg`}
          onClick={() => {
            setOpen(!open);
            setDidOpen(true);
          }}
        >
          <>
            <InformationCircleIcon className="w-8 h-8 text-gray-400 hover:rotate-12 hover:scale-125 transition-all duration-300 transform" />
          </>
        </button>
      </div>

      <div
        className={`fixed inset-0 z-30 backdrop-blur bg-slate/20 ${open ? 'w-full' : 'w-0'} ml-auto transition-all duration-300 ease-in-out`}
        onClick={(e: React.MouseEvent<HTMLDivElement>) => {
          if (e.target === e.currentTarget) {
            setOpen(false);
          }
        }}
      >
        <div className="flex flex-col w-11/12 sm:w-full h-full sm:max-w-96 bg-white dark:bg-slate ml-auto px-3 sm:px-10 py-3 sm:py-10 overflow-y-auto no-scrollbar">
          <div className="flex items-center justify-between mb-5">
            <h3 className="text-lg sm:text-xl font-bold text-black dark:text-white">
              {locale("projectOverview")}
            </h3>
            <p className="text-md text-gray-400">{locale("seeAll")}</p>
          </div>
          <div className="rounded-lg p-5 bg-white-bg dark:bg-dark-bg grid grid-cols-1 gap-4 mb-5">
            <div className="flex items-center gap-3">
              <CalendarDaysIcon className="w-6 h-6 text-gray-400" />
              <p className="flex-auto w-fit text-sm text-gray-400">{locale("timeline")}:</p>
              <p className="flex-auto w-1/2 pl-5 text-sm text-black dark:text-white">{locale("aprToMay")}</p>
            </div>
            <div className="flex items-center gap-3">
              <UsersIcon className="w-6 h-6 text-gray-400" />
              <p className="flex-auto w-fit text-sm text-gray-400">{locale("team")}:</p>
              <div className="flex flex-auto w-1/2 pl-9">
                <UserProfile path="/user1.jpg" />
                <UserProfile path="/user2.jpg" customClass="user-avatar" />
                <UserProfile path="/user3.jpg" customClass="user-avatar" />
              </div>
            </div>
            <div className="flex items-center gap-3">
              <StarIcon className="w-6 h-6 text-gray-400" />
              <p className="flex-auto w-fit text-sm text-gray-400">{locale("status")}:</p>
              <p className="flex-auto w-1/2 pl-5 text-sm text-black dark:text-white">{locale("inProgress")}</p>
            </div>
          </div>
          <div className="flex-1 h-full flex flex-col">
            <div className="flex items-center mb-5">
              <h3 className="text-lg sm:text-xl font-bold text-black dark:text-white">
                {locale("teamChat")}
              </h3>
              <p className="flex-1 ml-5 text-md text-gray-400">{locale("date")}</p>
              <EllipsisVerticalIcon className="w-7 h-7 text-gray-400" />
            </div>
            <div className="flex-1 h-full border-t border-soft-gray pb-5 dark:border-graphite">
              <div className={`flex flex-col-reverse gap-10 overflow-y-auto no-scrollbar max-h-[360px]`}>
                {messages.map((message: Message, index: number) => (
                  <div key={index} className={`flex ${message.type == 'sent' ? 'flex-row-reverse' : 'flex-row'} items-start gap-3`}>
                    <UserProfile path={message.user.avatar} active={false} />
                    <div className="flex-1">
                      <div className={`mb-2 w-full flex items-end gap-2 ${message.type == 'sent' ? 'justify-end' : 'justify-start'}`}>
                        <h4 className="text-md font-semibold text-black dark:text-white">{message.user.name}</h4>
                        <p className="text-gray-400 text-sm">{message.date.toLocaleTimeString()}</p>
                      </div>
                      <div className={`text-black dark:text-white text-sm bg-white-bg dark:bg-dark-bg p-3 rounded-xl ${message.type == 'sent' ? 'rounded-se-none' : 'rounded-ss-none'}`}>
                        {message.message}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder={`${locale('yourMessages')}...`}
                className="bg-white-bg dark:bg-dark-bg p-4 pr-20 rounded-lg w-full outline-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 text-black dark:text-white"
              />
              <div className="absolute px-3 py-5 right-0 inset-y-0 w-fit flex items-center">
                <MicrophoneIcon className="w-5 h-5 text-gray-400" />
                <div className="border-l border-gray-400 h-full mx-3"></div>
                <PaperAirplaneIcon className="w-5 h-5 text-blue-800" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}