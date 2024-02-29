import React, { useEffect, useState } from "react";
import FeedbackCards from "../FeedbackCards/FeedBackCards";
import PendingCards from "../PendingCards/PendingCards";
import RequestCards from "../RequestCards/RequestCards";

export default function Tabs() {
  const [CardsRender, setCardsRender] = useState("FeedBack");
  const [activeTab, setActiveTab] = useState(1);

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
    <div className="w-full  p-10 font-custom font-normal">
      <div className="border w-full h-16 rounded-2xl p-2 flex gap-6 border-borderColor-baseBorderColor">
        <button
          onClick={() => {
            setActiveTab(1), handleFeedback();
          }}
          //outline-non border-b-2 border-b-blue-500 outline-none
          className={`group ${activeTab == 1 ? "text-buttonColor-baseColor rounded-buttonRadius  p-buttonPadding font-subTitle2Weight bg-drawerColor-100 " : "font-captionRegWeight  text-buttonFontSize font-custom rounded-buttonRadius  p-buttonPadding text-fontColor-TabColor"}   `}
        >
          Feedback
          {activeTab === 1 && (
            <div className=" w-[50%] h-[2px] bg-buttonColor-baseColor m-auto pt-1 rounded-t-lg mt-1"></div>
          )}
        </button>
        <button
          onClick={() => {
            setActiveTab(2), handlePending();
          }}
          className={`group ${activeTab == 2 ? "text-buttonColor-baseColor rounded-buttonRadius  p-buttonPadding font-subTitle2Weight bg-drawerColor-100 " : "font-captionRegWeight  text-buttonFontSize font-custom rounded-buttonRadius  p-buttonPadding text-fontColor-TabColor"}   `}
        >
          Pending
          {activeTab === 2 && (
            <div className=" w-[50%] h-[2px] bg-buttonColor-baseColor m-auto pt-1 rounded-t-lg mt-1"></div>
          )}
        </button>
        <button
          onClick={() => {
            setActiveTab(3), handleRequest();
          }}
          className={`group ${activeTab == 3 ? "text-buttonColor-baseColor rounded-buttonRadius  p-buttonPadding font-subTitle2Weight bg-drawerColor-100 " : "font-captionRegWeight  text-buttonFontSize font-custom rounded-buttonRadius  p-buttonPadding text-fontColor-TabColor"}   `}
        >
          My Requests
          {activeTab === 3 && (
            <div className=" w-[50%] h-[2px] bg-buttonColor-baseColor m-auto pt-1 rounded-t-lg mt-1"></div>
          )}
        </button>
      </div>
      <section>
        {CardsRender === "FeedBack" && <FeedbackCards />}
        {CardsRender === "Pending" && <PendingCards />}
        {CardsRender === "Request" && <RequestCards />}
      </section>
    </div>
  );
}
