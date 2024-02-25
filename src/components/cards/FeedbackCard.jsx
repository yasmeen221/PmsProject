import React from "react";
import FeedbackButton from "../reusablecomponents/Button/FeedbackButton";
import ImageStyle from "../reusablecomponents/ImageStyle/ImageStyle";
import image from "../../assets/images/boy1.png";
import image1 from "../../assets/images/girl1.png";
import Icons from "../../themes/icons";

const FeedbackCard = ({ feedback, date, dateIcon }) => {
  return (
    <div className="mt-9 ">
      <h2 className="font-bold text-xl">Feedbacks</h2>
      <div className="flex gap-4  flex-wrap ">
        <div className=" w-[32%]   max-h-230  mt-7 px-6 pb-6 bg-white border border-gray-200 rounded-lg relative hover:bg-hoverColor-baseHoverColor">
          <FeedbackButton buttonText="feedback" />{" "}
          {/* Pass buttonText prop to FeedbackButton */}
          <div className="font-fontSize-sm text-gray-500 mt-16 mx-8">
            {feedback}
          </div>
          <div className="text-slate-400 text-xs flex items-center mt-1 mx-8">
            <span className="mr-2">{<Icons.DateFeedbackIcon />}</span>
            <span >{date}</span>
          </div>
          <div className="flex mx-8 mt-4 mb-0 space-x-6">
            {/* Pass appropriate props to ImageStyle components */}
            <ImageStyle src={image1} caption="from" personName="samaahmed" />
            <ImageStyle src={image} caption="to" personName="ahmedali" />
          </div>
        </div>
       
     
  
      
      
        
      </div>
    </div>
  );
};

export default FeedbackCard;
