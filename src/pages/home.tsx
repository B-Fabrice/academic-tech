import { useTranslation } from "react-i18next";
import Breadcrumbs from "../components/Breadcrumbs";
import { AdjustmentsHorizontalIcon, ChevronDownIcon, LinkIcon, LockClosedIcon, PlusIcon, QueueListIcon, Squares2X2Icon } from "@heroicons/react/24/outline";
import {PlayIcon } from "@heroicons/react/24/solid";
import UserProfile from "../components/user_profile";
import { useState } from "react";
import TaskCard from "../components/task_card";
import TaskDetails from "../components/project_overview";


export default function Home() {
  const [locale] = useTranslation("global");
  const [display, setDisplay] = useState<string>('list');
  const [linkCopied, setLinkCopied] = useState<boolean>(false);
  const [taskCategory, setTaskCategory] = useState<string>('');

  const taskCategories: TaskCategory[] = [
    { name: locale("allTasks"), count: 23, type: '', textColor: 'text-blue-800', bgColor: 'bg-blue-800/10', borderColor: 'border-b-blue-800' },
    { name: locale("todo"), count: 3, type: 'todo', textColor: 'text-amber-800', bgColor: 'bg-amber-800/30', borderColor: 'border-b-amber-800' },
    { name: locale("inProgress"), count: 6, type: 'inProgress', textColor: 'text-cyan-800', bgColor: 'bg-cyan-800/20', borderColor: 'border-b-cyan-800' },
    { name: locale("completed"), count: 14, type: 'completed', textColor: 'text-green-800', bgColor: 'bg-green-800/20', borderColor: 'border-b-green-800'},
  ];

  const tasks: Task[] = [
    {
      name: 'Task 1',
      status: 'todo',
      startDate: new Date(),
      endDate: new Date(),
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.',
      assignees: [
        { name: 'User 1', avatar: '/user1.jpg' },
        { name: 'User 2', avatar: '/user2.jpg' },
        { name: 'User 3', avatar: '/user3.jpg' },
      ],
    },
    {
      name: 'Task 2',
      status: 'inProgress',
      startDate: new Date(),
      endDate: new Date(),
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.',
      assignees: [
        { name: 'User 1', avatar: '/user1.jpg' },
        { name: 'User 2', avatar: '/user2.jpg' },
        { name: 'User 3', avatar: '/user3.jpg' },
      ],
      banner: '/task1.png',
    },
    {
      name: 'Task 3',
      status: 'completed',
      startDate: new Date(),
      endDate: new Date(),
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.',
      assignees: [
        { name: 'User 1', avatar: '/user1.jpg' },
        { name: 'User 2', avatar: '/user2.jpg' },
        { name: 'User 3', avatar: '/user3.jpg' },
      ],
    },
    {
      name: 'Task 4',
      status: 'todo',
      startDate: new Date(),
      endDate: new Date(),
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.',
      assignees: [
        { name: 'User 1', avatar: '/user1.jpg' },
        { name: 'User 2', avatar: '/user2.jpg' },
        { name: 'User 3', avatar: '/user3.jpg' },
      ],
    },
    {
      name: 'Task 5',
      status: 'inProgress',
      startDate: new Date(),
      endDate: new Date(),
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.',
      assignees: [
        { name: 'User 1', avatar: '/user1.jpg' },
        { name: 'User 2', avatar: '/user2.jpg' },
        { name: 'User 3', avatar: '/user3.jpg' },
      ],
      banner: '/task2.png',
    },
    {
      name: 'Task 6',
      status: 'completed',
      startDate: new Date(),
      endDate: new Date(),
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.',
      assignees: [
        { name: 'User 1', avatar: '/user1.jpg' },
        { name: 'User 2', avatar: '/user2.jpg' },
        { name: 'User 3', avatar: '/user3.jpg' },
      ],
    },
    {
      name: 'Task 7',
      status: 'completed',
      startDate: new Date(),
      endDate: new Date(),
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.',
      assignees: [
        { name: 'User 1', avatar: '/user1.jpg' },
        { name: 'User 2', avatar: '/user2.jpg' },
        { name: 'User 3', avatar: '/user3.jpg' },
      ],
    },
  ];

  const handleCopyLink = () => {
    setLinkCopied(true);
    setTimeout(() => {
      setLinkCopied(false);
    }, 2000);
  };

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
      <h2 className="text-2xl sm:text-4xl font-bold text-black dark:text-white mb-5">
        {locale("webDesign")}
      </h2>
      <div className="flex max-sm:flex-col gap-3 sm:items-center justify-between mb-5">
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
              <UserProfile path="/user2.jpg" customClass='user-avatar'/>
              <UserProfile path="/user3.jpg" customClass='user-avatar'/>
              <div className='flex items-center justify-center w-9 h-9 relative rounded-full bg-gray-400 user-avatar'>
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
      <div className="max-sm:py-5 flex justify-between sm:items-center max-sm:flex-col max-sm:gap-4 rounded-2xl px-3 bg-white dark:bg-slate overflow-x-auto no-scrollbar">
        <div className="flex">
          {taskCategories.map(({ name, count, type, textColor, bgColor, borderColor }, index) => (
            <div
              key={index}
              className={`py-4 flex items-center gap-2 px-4 cursor-pointer select-none text-sm ${type == taskCategory ? `${textColor} border-b-4 ${borderColor}` : 'text-gray-400'}`}
              onClick={() => setTaskCategory(type)}
              >
              <p className="text-nowrap">{name}</p>
              <p className={`py-1 px-[8px] ${type == taskCategory ? `${bgColor}` : 'bg-gray-400/30 text-dark-bg dark:text-white-bg'} rounded-lg`}>{count}</p>
            </div>
          ))}
        </div>
        <div className="flex gap-4">
          <button className="border rounded-lg p-2 border-gray-400 flex items-center gap-2 text-black dark:text-white">
            <AdjustmentsHorizontalIcon className="w-4 h-4"/>
            <p className="text-sm">{locale("filter_sort")}</p>
          </button>
          <button className="border rounded-lg p-2 border-gray-400 flex items-center gap-2 text-black dark:text-white">
            <PlusIcon className="w-4 h-4"/>
            <p className="text-sm">{locale("newTask")}</p>
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
        {tasks.map((task, index) => {
          const category = taskCategories.find(category => category.type == task.status);
          return <TaskCard key={index} task={task} category={category} />
        })}
      </div>
      <TaskDetails />
    </div>
  )
}