import { useEffect, useState } from "react";
import SideBarItem from "../../components/sideBar/SideBarItem";
import Icons from "../../themes/icons";
import logo from "../../assets/images/logo/logo.png";
import logoTwo from "../../assets/images/logo/logo.svg";
import { jwtDecode } from "jwt-decode";
import Cookies from "universal-cookie";
import { useDispatch, useSelector } from "react-redux";
import {
  selectIsOpen,
  toggleSidebar,
} from "../../components/sideBar/slice/slidebarSlice.js";

function SideBar() {
  const isOpen = useSelector(selectIsOpen);
  const dispatch = useDispatch();
  // const [isOpen, setIsOpen] = useState(false);
  const [userData, setUserData] = useState();
  useEffect(() => {
    const cookie = new Cookies();
    let token = cookie.get("userToken");
    if (token) {
      const decodedUserToken = jwtDecode(token);
      setUserData(decodedUserToken);
    }
  }, []);
  const handleToggleSidebar = () => {
    dispatch(toggleSidebar());
  };

  return (
    <aside
      className={
        isOpen
          ? ` flex w-[16.25rem] h-screen fixed justify-center bg-drawerColor-50 transition-all 
      duration-500`
          : `fixed flex w-[6.5rem] h-screen  justify-center bg-drawerColor-50 transition-all 
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
          to="competencies"
          activeIcon={<svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.5 19.9V4.1C10.5 2.6 9.86 2 8.27 2H4.23C2.64 2 2 2.6 2 4.1V19.9C2 21.4 2.64 22 4.23 22H8.27C9.86 22 10.5 21.4 10.5 19.9Z"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M22 8.52V3.98C22 2.57 21.36 2 19.77 2H15.73C14.14 2 13.5 2.57 13.5 3.98V8.51C13.5 9.93 14.14 10.49 15.73 10.49H19.77C21.36 10.5 22 9.93 22 8.52Z"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M22 19.77V15.73C22 14.14 21.36 13.5 19.77 13.5H15.73C14.14 13.5 13.5 14.14 13.5 15.73V19.77C13.5 21.36 14.14 22 15.73 22H19.77C21.36 22 22 21.36 22 19.77Z"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>}
        ></SideBarItem>

        <SideBarItem
          icon={<Icons.GoalsIcon />}
          isOpen={isOpen}
          title="Goals"
          to="goals" 
        ></SideBarItem>

        <SideBarItem
          icon={<Icons.Feedback />}
          isOpen={isOpen}
          title="feedback"
          to="feedback"
          activeIcon={<Icons.Feedback color="white" />}
        ></SideBarItem>

        {userData?.role == "superAdmin" || userData?.role == "admin" ? (
          <SideBarItem
            icon={<Icons.Reviews />}
            isOpen={isOpen}
            title="users&teams"
            to="users&teams"
            activeIcon={<Icons.Reviews color="white" />}
          ></SideBarItem>
        ) : (
          ""
        )}

        <SideBarItem
          icon={<Icons.Surveys />}
          isOpen={isOpen}
          title="surveys"
          to="surveys"
        ></SideBarItem>
        <SideBarItem
          icon={<Icons.Learning />}
          isOpen={isOpen}
          title="learning"
          to="learnings"
        ></SideBarItem>
        <SideBarItem
          icon={<Icons.Compensation />}
          isOpen={isOpen}
          title="compensation"
          to="compensations"
        ></SideBarItem>
        <SideBarItem
          icon={<Icons.Settings />}
          isOpen={isOpen}
          title="settings"
          to="settings"
        ></SideBarItem>
      </ul>
      <button
        onClick={handleToggleSidebar}
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