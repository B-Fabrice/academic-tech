import { EllipsisVerticalIcon, ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/outline";
import UserProfile from "./user_profile";

export default function TaskCard({ task, category }: { task: Task, category?: TaskCategory }) {
  return (
    <div className={`cursor-pointer rounded-2xl p-7 bg-white dark:bg-slate ${task.banner && 'row-span-2'}`}>
      <div className="flex justify-between items-center mb-5">
        <p className={`text-sm py-1 px-2 rounded-lg w-fit ${category?.textColor} ${category?.bgColor}`}>{category?.name}</p>
        <button>
          <EllipsisVerticalIcon className="w-7 h-7 text-gray-400" />
        </button>
      </div>
      {task.banner && <img src={task.banner} alt="banner" className="w-full h-auto rounded-2xl object-cover mb-5" />}
      <h3 className="text-ellipsis overflow-hidden text-nowrap text-xl font-bold text-black dark:text-white mb-2">{task.name}</h3>
      <p className="text-ellipsis overflow-hidden text-nowrap text-md text-gray-400">{task.description}</p>
      <div className="flex justify-between items-center mt-4 pt-4 border-t border-soft-gray dark:border-graphite">
        <div className="flex">
          <UserProfile path="/user1.jpg" />
          <UserProfile path="/user2.jpg" customClass="user-avatar" />
          <UserProfile path="/user3.jpg" customClass="user-avatar" />
        </div>
        <div className="flex gap-3 items-center">
          <ChatBubbleOvalLeftEllipsisIcon className="w-7 h-7 text-gray-400" />
          <p className="text-md sm:text-lg text-gray-400">8</p>
        </div>
      </div>
    </div>
  );
}