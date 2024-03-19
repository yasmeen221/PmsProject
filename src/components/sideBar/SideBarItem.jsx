import PropTypes from "prop-types";
import { NavLink, useLocation } from "react-router-dom";

function SideBarItem({ icon, title, isOpen ,to , activeIcon=""}) {
  const location = useLocation();
  const isActive = location.pathname.replace(/^\/dashboard\//, '') == `${to}`;
  console.log(isActive, location.pathname.replace(/^\/dashboard\//, ''), to);
  return (
    <NavLink
      to={to}
      className={
        isOpen
          ? `hover:bg-buttonColor-500 flex w-[14.063rem] items-center mx-4 rounded-lg  px-6  py-4 text-center hover:text-fontColor-whiteBaseColor hover:bg-buttonColor-baseColo `
          : "hover:bg-buttonColor-500 rounded-lg mx-4 px-6 justify-center flex  py-4 text-center "
      }

      activeclassname="active"
    >
      {isOpen ? (
        <>
          <span className="mr-4">{ isActive ? activeIcon : icon}</span>
          <span className="text-body1Size">{title}</span>
        </>
      ) : (
        <span>{ isActive? activeIcon : icon}</span>
      )}
    </NavLink>
  );
}

SideBarItem.propTypes = {
  icon: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default SideBarItem;