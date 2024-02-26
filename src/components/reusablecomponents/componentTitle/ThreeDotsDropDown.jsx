import React from "react";

export default function ThreeDotsDropDown({ Icon, text, onClick }) {
  return (
    <>
      <li
        className="block px-dropItemXP py-dropItemYP  hover:bg-hoverColor-baseHoverColor "
        onClick={onClick}
      >
        <div className="flex gap-x-2">
          {Icon}
          <h4>{text}</h4>
        </div>
      </li>
    </>
  );
}
