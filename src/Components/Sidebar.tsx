import { LayoutDashboard, Telescope, Gamepad2, Bell, Users, User } from "lucide-react";

export default function Sidebar() {
  return (
    <div className="bg-gray-400/40 py-6 m-2 rounded-lg h-[97vh] w-[14vw] flex flex-col items-center">
      <div className="flex flex-col gap-y-4">
        <div className="flex flex-row gap-x-1 items-center cursor-pointer">
          <LayoutDashboard className="w-4 h-4" />
          <span className="whitespace-nowrap">My Dashboard</span>
        </div>
        <div className="flex flex-row gap-x-1 items-center cursor-pointer">
          <Telescope className="w-4 h-4" />
          <span>Explore</span>
        </div>
        <div className="flex flex-row gap-x-1 items-center cursor-pointer">
          <Gamepad2 className="w-4 h-4" />
          <span>Library</span>
        </div>
        <div className="flex flex-row gap-x-1 items-center cursor-pointer">
          <Users className="w-4 h-4" />
          <span>Friends</span>
        </div>
        <div className="flex flex-row gap-x-1 items-center cursor-pointer">
          <Bell className="w-4 h-4" />
          <span>Notifications</span>
        </div>
      </div>

      <div className="flex flex-col mt-32 gap-y-2">
        <span className="text-sm text-gray-400 mb-4 whitespace-nowrap">ONLINE FRIENDS</span>
        <div className="flex flex-row gap-x-1 items-center">
        <User className="w-4 h-4" />
        <span>Friend 1</span>
        </div>
        <div className="flex flex-row gap-x-1 items-center">
        <User className="w-4 h-4" />
        <span>Friend 2</span>
        </div>
      </div>

      <div className="flex flex-col mt-auto items-center">
        <span>Powered by <a href="https://rawg.io/" className="underline">Rawg.io</a></span>
        <button className="w-24 bg-red-500 rounded-lg p-2 cursor-pointer my-3">Logout</button>
      </div>
    </div>
  )
}