import React from "react";
import ImageStyle from "../../../../components/ImageStyle/ImageStyle";
import image2 from "../../../../assets/images/boy3.png";

export default function RequestCardItem() {
  return (
    <div className="flex flex-col  border  p-6 border-borderColor-100 rounded-lg w-[32%] h-[10.365] gap-4 hover:bg-slate-100">
      <div className=" w-[20.75] h-[2.635] text-sm text-drawerColor-900  font-medium">
        I need your feedback on Competencies [ Team work, Communication and
        Public speaking ]{" "}
      </div>
      <div className=" flex  justify-between">
        <div className="flex  items-center gap-2  w-[60%]  ">
          <div className="w-[30%]">
            <ImageStyle src={image2} />
          </div>
          <div className="w-[70%]">
            <p className="font-md font-medium  text-sm w-[8.654rem]">
              sama ahmed
            </p>
            <p className="font-md font-medium text-sm text-deleteColor-400">
              1-02-2024
            </p>
          </div>
        </div>
        <div className="flex items-center ">
          <button className=" flex items-center justify-center bg-white px-2 py-4 w-[4.688rem] h-2 text-sm font-medium font-fontColor-900 rounded-md border  text- border-borderColor-200 hover:bg-green-100 active:bg-green-300">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
