import SideBar from "../components/sideBar/SideBar";
import TopNav from "../components/topNav/TopNav";

import { Outlet } from "react-router";
function Dashboard() {
  return (
    <div className="flex">
      <SideBar />
      <div className="w-full ">
        <TopNav />
        <Outlet />
      </div>
    </div>
  );
}

export default Dashboard;
