import React from "react";
import Icons from "../../themes/icons"

export default function SubNav({ currentComponent }) {
  return (
    <>
      <div className="w-full px-10 py-6 font-normal leading-5   text-buttonFontSize flex  font-custom">
        <h4 className="text-fontColor-fromAndToColor ">Dashboard</h4>
        <span>
          <Icons.ArrowRight />
        </span>
        <h4 className="text-fontColor-blackBaseColor">{currentComponent}</h4>
      </div>
    </>
  );
}
