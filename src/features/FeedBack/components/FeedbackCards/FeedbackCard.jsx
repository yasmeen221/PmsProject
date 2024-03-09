import React from "react";
import ImageStyle from "../../../../components/ImageStyle/ImageStyle";
import image from "../../../../assets/images/boy1.png";
import image1 from "../../../../assets/images/girl1.png";
import Icons from "../../../../themes/icons";

const FeedbackCard = ({ text, date, label }) => {
  return (
    <>
      <div className="flex flex-col justify-between  gap-4   w-[32%]  h-14.375rem px-6 pb-6 rounded-2xl border border-borderColor-100   ">
        <label
          className={
            label == "feedback"
              ? `bg-drawerColor-200 font-medium   text-buttonColor-baseColor py-3 px-2  rounded-b-lg w-[6.188rem] h-10 text-center hover:text-white hover:bg-buttonColor-baseColor`
              : `bg-buttonColor-900 text-buttonColor-800 py-3 px-2  font-medium  rounded-b-lg w-[6.188rem] h-10 text-center hover:bg-buttonColor-800
hover:text-white`
          }
        >
          {label}
        </label>
        <div className="flex flex-col   w-full  gap-4  ">
          <p className="w-full  text-sm text-slate-700  ">{text}</p>
          <div className=" flex items-center  text-sm text-slate-400">
            <span className="mr-2">{<Icons.DateFeedbackIcon />}</span>
            <span>{date}</span>
          </div>
        </div>
        <div className="flex w-full gap-4 ">
          <ImageStyle src={image1} caption="from" personName="sama ahmed" />
          <ImageStyle src={image} caption="to" personName="ahmed ali" />
        </div>
      </div>
      .
    </>
  );
};

export default FeedbackCard;
