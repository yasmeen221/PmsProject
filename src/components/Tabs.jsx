import React, { useEffect, useState } from "react";
import FeedBack from "../pages/FeedBack";
import CardPending from "./CardPending";
import CardRequest from "./CardRequest";
import FeedbackCard from "./cards/FeedbackCard";

export default function Tabs() {
  const [CardsRender, setCardsRender] = useState("FeedBack");
  const handleFeedback = () => {
    setCardsRender("FeedBack");
  };
  const handlePending = () => {
    setCardsRender("Pending");
  };
  const handleRequest = () => {
    setCardsRender("Request");
  };

  return (
    <div className="mt-6 w-full  p-10 font-custom font-normal">
      <div className="border w-full h-16 rounded-2xl p-2 flex gap-6 border-borderColor-baseBorderColor">
        <button
          onClick={handleFeedback}
          //outline-non focus:border-b-2 focus:border-b-blue-500 focus:outline-none
          className=" font-captionRegWeight text-buttonFontSize font-custom rounded-buttonRadius  p-buttonPadding text-fontColor-TabColor focus:bg-drawerColor-100 focus:text-buttonColor-baseColor focus:font-subTitle2Weight  "
        >
          Feedback
        </button>
        <button
          onClick={handlePending}
          className="font-captionRegWeight text-buttonFontSize font-custom rounded-buttonRadius  p-buttonPadding text-fontColor-TabColor focus:bg-drawerColor-100 focus:text-buttonColor-baseColor focus:font-subTitle2Weight  "
        >
          Pending
        </button>
        <button
          onClick={handleRequest}
          className="font-captionRegWeight text-buttonFontSize font-custom rounded-buttonRadius  p-buttonPadding text-fontColor-TabColor focus:bg-drawerColor-100 focus:text-buttonColor-baseColor focus:font-subTitle2Weight  "
        >
          My Requests
        </button>
      </div>
      <div>
        {CardsRender === "FeedBack" && (
          <FeedbackCard
            feedback="Your positive attitude and willingness to support your colleagues, including mysel...."
            date=" 2024-Aguast-23"
          />
        )}
        {CardsRender === "Pending" && <CardPending />}
        {CardsRender === "Request" && <CardRequest />}
      </div>
    </div>
  );
}
