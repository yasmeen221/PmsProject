import React from "react";

export default function ThreeDotsDropDown({ Icon, text, onClick,className }) {
  return (
    <>
      <li
        className="block px-dropItemXP py-dropItemYP  hover:bg-hoverColor-baseHoverColor "
        onClick={onClick}
      >
        <div className={` inline-flex px-5 ${className}`}>
          {Icon}
          <div className="pl-2">
            <h4>{text}</h4>
          </div>
        </div>
      </li>
    </>
  );
}
