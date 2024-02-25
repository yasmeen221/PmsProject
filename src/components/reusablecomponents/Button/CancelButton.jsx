import React, { useState } from 'react';

const CancelButton = ({ buttonText, onClick }) => {
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
    backgroundColor: isClicked ? '#395b' : isHovered ? '#A1D1b1' : '#fff',
    color: isClicked || isHovered ? 'text-fontColor-fromAndToColor' : ' text-fontColor-fromAndToColor',
    width: '75px',
    height: '32px',
    padding: '8px 16px',
    borderRadius: '4px',
    border: '1px solid',
  };

  return (
    <button
      onClick={onClick}
      className="text-center text-sm px-0.5 py-1        mr-0 text-fontColor-fromAndToColor flex justify-end  rounded-md border "
      style={dynamicStyles}
      onMouseEnter={handleButtonHover}
      onMouseLeave={handleButtonLeave}
      onClick={handleButtonClick}
    >
      {buttonText}
    </button>
  );
};

export default CancelButton;
