import { useState } from "react";

import Button from "../../components/Button/Button"
import Icons from "../../themes/icons"

const DropDown = ({
  DropDownText,
  onClick,
  className,
  arrowIcon,
  threeDotsIcon,
  children,
  open,
  iconColor,
  ...rest
}) => {
  const [position, setPosition] = useState("right");
  const handleClick = (e) => {
    setPosition(e.clientX > window.innerWidth / 2 ? "right" : "left");
  };
  const handleArrayEvents = (e) => {
    const events = [handleClick, onClick];
    events.forEach((event) => (event == handleClick ? event(e) : event()));
  };
  return (
    <>
      {/* Don't change  the html tag here. It will break everything */}
      <div className="relative inline-block ">
        <Button
          id="dropdownDefaultButton"
          data-dropdown-toggle="dropdown"
          className={`${className} ${threeDotsIcon ? "border-borderColor-baseBorderColor border-2" : ""} `}
          onClick={(e) => handleArrayEvents(e)}
          buttonText={DropDownText}
          iconRight={
            arrowIcon ? (
              <Icons.ArrowDownWhite color={iconColor} />
            ) : threeDotsIcon ? (
              <Icons.ThreeDotsIcon />
            ) : null
          }
        />
        <div
          id="dropdown"
          className={`z-9 ${open == false ? "hidden" : "block"} bg-white  rounded-lg shadow  mt-2  w-auto  absolute `}
          style={{ [position]: 0 }}
        >
          <ul
            className="py-2 text-sm text-fontColor-blackBaseColor"
            aria-labelledby="dropdownDefaultButton"
          >
            {children}
          </ul>
        </div>
      </div>
    </>
  );
};

export default DropDown;
