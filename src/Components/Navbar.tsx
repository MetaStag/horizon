import { Search, Bell, User, Settings } from "lucide-react";

export default function Navbar() {
  return (
    <div className="bg-gray-400/40 rounded-lg p-2 m-2 flex flex-row w-[84vw] h-14">
      <div className="bg-gray-300/40 rounded-lg px-3 py-1 w-96 flex flex-row items-center gap-x-2">
      <Search />
      <input type="text" className="w-96 outline-none bg-transparent" placeholder="Search for games..." />
      </div>

      <div className="flex flex-row ml-auto items-center gap-x-4">
      <div className="bg-gray-300/40 rounded-full p-2 cursor-pointer">
      <Bell />
      </div>
      <div className="bg-gray-300/40 rounded-full p-2 cursor-pointer">
      <User />
      </div>
      <div className="bg-gray-300/40 rounded-full p-2 cursor-pointer">
      <Settings />
      </div>
      </div>
    </div>
  )
}
