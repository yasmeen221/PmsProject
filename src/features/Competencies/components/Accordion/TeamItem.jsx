// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

import Icons from "../../../../themes/icons";

const TeamItem = (props) => {
  // eslint-disable-next-line react/prop-types
  const { title, description, skills, position } = props;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`flex justify-around items-center py-4 ${isHovered ? "hovered:text-blue-500 transition duration-500 ease-in-out hover:bg-drawerColor-1000 rounded-2xl" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-start flex-row w-[35%] mr-10">
        <div>
          <input
            type="checkbox"
            className="mr-5  form-checkbox"
            style={{ outline: "1px auto #178CBF" }}
          />
        </div>
        <div>
          <h5
            className={` flex font-subTitle2Weight text-body1Size ${isHovered ? "text-buttonColor-baseColor  transition duration-500 ease-in-out  " : "text-blackBaseColor"}`}
          >
            {title}
            {/* <span className={` ml-3 ${isHovered ? "color-buttonColor-baseColor  transition duration-500 ease-in-out  " : "hidden"}`}> <icons.ArrowDownBlack/> </span> */}
          </h5>
          <p className="text-captionRegSize text-left text-fontColor-1000 font-captionRegWeight">
            {description}
          </p>
        </div>
      </div>
      <div className="w-[20%]">
        <p className="font-captionRegWeight text-body1Size text-fontColor-1100 text-left ml-12">
          {skills}
        </p>
      </div>
      <div className="w-[20%]">
        <p className="font-captionRegWeight text-body1Size text-fontColor-1100 text-left">
          {position}
        </p>
      </div>
      <div>
        <Icons.ThreeDotsIcon />
      </div>
    </div>
  );
};

export default TeamItem;
