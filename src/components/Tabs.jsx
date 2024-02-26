import React, { useEffect, useState } from "react";


import FeedbackCards from "../components/FeedbackCards/FeedBackCards";
import PendingCards from "../components/PendingCards/PendingCards";
import RequestCards from "../components/RequestCards/RequestCards";

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
    <div className="mt-6 w-full  p-10 font-custom font-normal">
      <div className="border w-full h-16 rounded-2xl p-2 flex gap-6 border-borderColor-baseBorderColor">
        <button
          onClick={() => {
            handleFeedback(), setActiveTab(1);
          }}
          //outline-non border-b-2 border-b-blue-500 outline-none
          className={`${activeTab == 1 ? "text-buttonColor-baseColor rounded-buttonRadius  p-buttonPadding font-subTitle2Weight bg-drawerColor-100 " : "font-captionRegWeight  text-buttonFontSize font-custom rounded-buttonRadius  p-buttonPadding text-fontColor-TabColor"}   `}
        >
          Feedback
        </button>
        <button
          onClick={() => {
            setActiveTab(2), handlePending();
          }}
          className={`${activeTab == 2 ? "text-buttonColor-baseColor rounded-buttonRadius  p-buttonPadding font-subTitle2Weight bg-drawerColor-100 " : "font-captionRegWeight  text-buttonFontSize font-custom rounded-buttonRadius  p-buttonPadding text-fontColor-TabColor"}   `}
        >
          Pending
        </button>
        <button
          onClick={() => {
            setActiveTab(3), handleRequest();
          }}
          className={`${activeTab == 3 ? "text-buttonColor-baseColor rounded-buttonRadius  p-buttonPadding font-subTitle2Weight bg-drawerColor-100 " : "font-captionRegWeight  text-buttonFontSize font-custom rounded-buttonRadius  p-buttonPadding text-fontColor-TabColor"}   `}
        >
          My Requests
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
