import React, { useState } from 'react';

const PenndingButton = ({ icon, bgColor, hoverColor }) => {
  const [isHovered, setHovered] = useState(false);
  const [isClicked, setClicked] = useState(false);

  const handleButtonHover = () => {
    setHovered(true);
  };

  const handleButtonLeave = () => {
    setHovered(false);
  };

  const handleButtonClick = () => {
    setClicked(prevClicked => !prevClicked); 
  };
  const dynamicStyles = {
    backgroundColor: isHovered ? hoverColor : bgColor, // Use hoverColor when hovered, otherwise use bgColor
    color: isHovered ? '#fff' : '#fff', // Change text color when hovered
    width: '36px',
    height: '36px',
    padding: '8px',
    borderRadius: '8px',
  };
  return (
    <button
      onClick={handleButtonClick}
      className="flex items-center justify-center    rounded-md border border-gray-200 gap-2 hover:bg-gray-400 hover:text-white"
      style={dynamicStyles}
      onMouseEnter={handleButtonHover}
      onMouseLeave={handleButtonLeave}
    >
      {icon}
    </button>
  );
};

export default PenndingButton;
