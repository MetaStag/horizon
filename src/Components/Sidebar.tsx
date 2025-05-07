import { LayoutDashboard, Telescope, Gamepad2, Bell, Users, User } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="bg-gray-400/40 py-6 m-2 rounded-lg h-[97vh] w-[14vw] flex flex-col items-center">
      <div className="flex flex-col gap-y-4">
        <NavLink to="/" className="flex flex-row gap-x-1 items-center cursor-pointer" end>
          <LayoutDashboard className="w-4 h-4" />
          <span className="whitespace-nowrap">My Dashboard</span>
        </NavLink>
        <NavLink to="/search" className="flex flex-row gap-x-1 items-center cursor-pointer" end>
          <Telescope className="w-4 h-4" />
          <span>Explore</span>
        </NavLink>
        <NavLink to="/library" className="flex flex-row gap-x-1 items-center cursor-pointer" end>
          <Gamepad2 className="w-4 h-4" />
          <span>Library</span>
        </NavLink>
        <NavLink to="/friends" className="flex flex-row gap-x-1 items-center cursor-pointer" end>
          <Users className="w-4 h-4" />
          <span>Friends</span>
        </NavLink>
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
      </div>
    </div>
  )
}