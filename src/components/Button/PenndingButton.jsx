import React, { useState } from "react";

const PenndingButton = ({
  icon,
  bgColor,
  hoverColor,
  className,
  onClick,
  buttonText,
}) => {
  const [isHovered, setHovered] = useState(false);
  const [isClicked, setClicked] = useState(false);

  const handleButtonHover = () => {
    setHovered(true);
  };

  const handleButtonLeave = () => {
    setHovered(false);
  };

  const handleButtonClick = () => {
    setClicked((prevClicked) => !prevClicked);
  };
  const dynamicStyles = {
    className: `${className}`,
    backgroundColor: isHovered ? hoverColor : bgColor, // Use hoverColor when hovered, otherwise use bgColor
    //color: isHovered ? "#fff" : "#fff", // Change text color when hovered
    width: "36px",
    height: "36px",
    padding: "8px",
    borderRadius: "8px",
  };

  return (
    <button
      onClick={handleButtonClick}
      className="flex items-center justify-center  rounded-md border border-gray-200 gap-2 "
      style={dynamicStyles}
      onMouseEnter={handleButtonHover}
      onMouseLeave={handleButtonLeave}
    >
      {onClick}
      {icon}
    </button>
  );
};

export default PenndingButton;
