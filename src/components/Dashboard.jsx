import { useSelector } from "react-redux";
import SideBar from "../components/sideBar/SideBar";
import TopNav from "../components/topNav/TopNav";

import { Outlet } from "react-router";
import { selectIsOpen } from "./sideBar/slice/sidebarSlice";
function Dashboard() {
  const isOpen = useSelector(selectIsOpen);
  return (
    <div className="flex">
      <SideBar />
      <div className= {isOpen?"transition-all absolute left-[260px] w-[82%] duration-500":" transition-all absolute left-[105px] w-[93%] duration-500"} >
        <TopNav />
        <Outlet />
      </div>
    </div>
  );
}

export default Dashboard;
