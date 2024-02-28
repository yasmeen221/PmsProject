import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

function SideBarItem({ icon, title, isOpen ,to}) {
  return (
    <NavLink
    to={to}
      className={
        isOpen
          ? `hover:bg-buttonColor-50 flex w-[14.063rem] items-center mx-4 rounded-lg  px-6  py-4 text-center hover:text-fontColor-whiteBaseColor hover:bg-buttonColor-baseColor `
          : "hover:bg-buttonColor-50 rounded-lg mx-4 px-6 justify-center flex  py-4 text-center "
      }
    >
      {isOpen ? (
        <>
          <span className="mr-4">{icon}</span>
          <span className="text-body1Size">{title}</span>
        </>
      ) : (
        <span>{icon}</span>
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
