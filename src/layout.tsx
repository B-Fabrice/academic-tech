import { useState } from "react";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import { XCircleIcon } from "@heroicons/react/24/outline";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [showSidebar, setShowSidebar] = useState<boolean>(false);
  return (
    <div className="relative">
      <div className="max-sm:hidden w-24 h-screen fixed top-0 left-0">
            <Sidebar />
      </div>
      {showSidebar && <div
        className="sm:hidden fixed inset-0 z-20 w-full h-screen bg-slate/80 dark:bg-slate/50"
        onClick={(event: React.MouseEvent<HTMLDivElement>) => {
          if (event.target === event.currentTarget) {
            setShowSidebar(false);
          }
        }}
      >
        <div className="w-24 h-screen ml-auto">
          <Sidebar/>
        </div>
        <button className="absolute top-2 left-2 w-10 h-10 rounded-lg" onClick={() => setShowSidebar(!showSidebar)}>
            <XCircleIcon className="text-gray-400"/>
          </button>
      </div>}
      <div className="sm:ml-24 relative">
          <div className="sticky top-0 z-10">
              <Navbar  setShowSidebar={setShowSidebar} />
          </div>
          <main>{children}</main>
      </div>
    </div>
  )
}