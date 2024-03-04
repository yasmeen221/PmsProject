import { useState } from "react";
import SideBarItem from "../../components/sideBar/SideBarItem";
import Icons from "../../themes/icons";
import logo from "../../assets/images/logo/logo.png";
import logoTwo from "../../assets/images/logo/logo.svg";
import { useAuth } from "../Auth/auth";

function SideBar() {
  const { isLoggedIn } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <aside
      className={
        isOpen
          ? `relative flex w-[16.25rem]  justify-center bg-drawerColor-50 transition-all 
      duration-500`
          : `relative flex w-[6.5rem]   justify-center bg-drawerColor-50 transition-all 
      duration-500`
      }
    >
      <ul className="space-y-[1.004rem] font-body1Weight  capitalize  leading-[1.313rem] text-drawerColor-800">
        <li>
          {isOpen ? (
            <img
              src={logo}
              alt="logo"
              className=" mx-auto mb-10 mt-[3.375rem]"
            />
          ) : (
            <img
              src={logoTwo}
              alt="logo"
              className="mx-auto mb-10 mt-[3.375rem] "
            />
          )}
        </li>

        <SideBarItem
          icon={<Icons.MainDachIcon />}
          isOpen={isOpen}
          title="competencies"
          to="/competencies"
        ></SideBarItem>
        {!isLoggedIn && (
          <SideBarItem
            icon={<Icons.GoalsIcon />}
            isOpen={isOpen}
            title="login"
            to="/login"
          ></SideBarItem>
        )}
        <SideBarItem
          icon={<Icons.Feedback />}
          isOpen={isOpen}
          title="feedback"
          to="/feedback"
        ></SideBarItem>
        <SideBarItem
          icon={<Icons.Reviews />}
          isOpen={isOpen}
          title="users&teams"
          to="/users&teams"
        ></SideBarItem>
        <SideBarItem
          icon={<Icons.Surveys />}
          isOpen={isOpen}
          title="surveys"
        ></SideBarItem>
        <SideBarItem
          icon={<Icons.Learning />}
          isOpen={isOpen}
          title="learning"
        ></SideBarItem>
        <SideBarItem
          icon={<Icons.Compensation />}
          isOpen={isOpen}
          title="compensation"
        ></SideBarItem>
        <SideBarItem
          icon={<Icons.Settings />}
          isOpen={isOpen}
          title="settings"
        ></SideBarItem>
      </ul>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={
          isOpen
            ? `absolute left-[92%] top-[50%] h-9  w-9 rounded-[50%] bg-buttonColor-baseColor transition-all duration-500 `
            : `absolute left-[80%] top-[50%] h-9  w-9 rounded-[50%] bg-buttonColor-baseColor transition-all duration-500 `
        }
      >
        {isOpen ? <Icons.DraweArrow /> : <Icons.DraweArrowRight />}
      </button>
    </aside>
  );
}

export default SideBar;
