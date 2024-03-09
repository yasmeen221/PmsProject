import React from "react";
import Icons from "../../../../themes/icons";
import PenndingButton from "../../../../components/Button/PenndingButton";
import ImageStyle from "../../../../components/ImageStyle/ImageStyle";
import image1 from "../../../../assets/images/boy4.png";

export default function PendingCardItem(image, name, date, text) {
  return (
    <div className=" flex flex-col justify-between w-[32%] h-[11.53rem]  border px-8 py-6  rounded-2xl  border-borderColor-100">
      <div className="flex justify-between  ">
        <div className=" items-center flex w-[60%] gap-x-1 ">
          <div className="  w-[25%]">
            <ImageStyle src={image1} />
          </div>
          <div className=" w-[75%]   ">
            <p className="font-md font-medium  text-sm w-[8.654rem]">
              sama ahmed
            </p>
            <p className="font-md font-medium text-sm text-deleteColor-400">
              1-02-2024
            </p>
          </div>
        </div>
        <div className="flex gap-1 w-[30%]">
          <PenndingButton
            // className={icon == <Icons.RedFeedback />}
            icon={<Icons.GreenFeedback />}
            bgColor="#EBF5EF"
            hoverColor=" #329B5C"
          />

          <PenndingButton
            icon={<Icons.RedFeedback />}
            bgColor="#FBE8E8"
            hoverColor=" #DB1A1A"
          />
        </div>
      </div>
      <div className="text-xs text-slate-700">
        I need your feedback on Competencies [ Team work, Communication and
        Public speaking ]
      </div>
    </div> //card
  );
}
