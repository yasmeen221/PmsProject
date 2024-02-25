import React from "react";

const FeedbackButton = ({ buttonText, onClick }) => {
  let buttonStyle = "";
  let hoverStyle = "";
  
  // Apply styles based on the buttonText prop
  if (buttonText === "feedback") {
    buttonStyle = "bg-gray-100 text-blue-600";
    hoverStyle = "hover:bg-blue-600 hover:text-white";
  } else if (buttonText === "praise") {
    buttonStyle = "bg-gray-100 text-green-600";
    hoverStyle = "hover:bg-green-600 hover:text-white";
  }

  return (
    <button
      onClick={onClick}
      className={`absolute top-0 left-10 text-buttonColor-baseColor w-28 h-10 py-1 px-2 rounded transition duration-300 ${buttonStyle} ${hoverStyle}`}
    >
      {buttonText}
    </button>
  );
};

export default FeedbackButton;
