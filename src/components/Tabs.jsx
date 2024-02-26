import React, { useEffect, useState } from "react";
import FeedBack from "../pages/FeedBack";

import Button from "./reusablecomponents/Button/Button";

import FeedbackCards from"../components/FeedbackCards/FeedBackCards"
import PendingCards from"../components/PendingCards/PendingCards"
import RequestCards from "../components/RequestCards/RequestCards"

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
        <Button
          buttonText="Feedbacks"
          onClick={handleFeedback}
          className="bg-fontColor-whiteBaseColor text-black focus:bg-drawerColor-100 focus:text-drawerColor-600   "
        />
        <Button
          buttonText="Pending"
          onClick={handlePending}
          className="bg-fontColor-whiteBaseColor text-black focus:bg-drawerColor-100 focus:text-drawerColor-600 "
        />
        <Button
          buttonText="My Requests"
          onClick={handleRequest}
          className="bg-fontColor-whiteBaseColor text-black focus:bg-drawerColor-100 focus:text-drawerColor-600 "
        />
      </div>
      <section>
        {CardsRender === "FeedBack" && <FeedbackCards />}
        {CardsRender === "Pending" && <PendingCards />}
        {CardsRender === "Request" && <RequestCards />}
      </section>
    </div>
  );
}
