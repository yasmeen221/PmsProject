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
} from "../sideBar/slice/sidebarSlice";

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
        ></SideBarItem>

        <SideBarItem
          icon={<Icons.GoalsIcon />}
          isOpen={isOpen}
          title="Goals"
        ></SideBarItem>

        <SideBarItem
          icon={<Icons.Feedback />}
          isOpen={isOpen}
          title="feedback"
          to="feedback"
        ></SideBarItem>

        {userData?.role == "superAdmin" || userData?.role == "admin" ? (
          <SideBarItem
            icon={<Icons.Reviews />}
            isOpen={isOpen}
            title="users&teams"
            to="users&teams"
          ></SideBarItem>
        ) : (
          ""
        )}

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
