import React, { useState } from "react";
import HandelPopUp from "../../reusablecomponents/PopUp/HandelPopUp";
import Icons from "../../../themes/icons";
import {
  MessageFavFeedbackIcon,
  MessageFeedbackIcon,
} from "../../../assets/icons/icons";
import Button from "../../reusablecomponents/Button/Button";

const RequestFeedback = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const handleOpenPopup = () => {
    setPopupOpen(true);
  };

  const handleClosePopup = () => {
    setPopupOpen(false);
  };
  return (
    <>
      <HandelPopUp
        isOpen={isPopupOpen}
        ClosePop={handleClosePopup}
        TitlePopUp="Select Feedback"
      >
        <div className="flex items-center gap-7 max-w-[45vw] justify-center  rounded-buttonRadius py-5 ">
          <div className="  max-w-[50%] sm:flex-col rounded-buttonRadius text-center space-y-2  border-2 p-feedbackCard">
            <div className="hidden md:block opacity-0">
              <Icons.ReqFedMyself />
            </div>
            <div className="flex  flex-col justify-center items-center">
              <MessageFavFeedbackIcon />
              <p className="font-custom text-subTitle2Size font-buttonWeight text-fontColor-blackBaseColor ">
                Myself
              </p>
              <p className="font-custom text-buttonFontSize font-captionRegWeight text-fontColor-fromAndToColor">
                It is to receive feedback on your performance and areas for
                personal and professional growth.
              </p>
            </div>
          </div>

          <div className="max-w-[50%] space-y-2 bg-drawerColor-bgFeedback rounded-buttonRadius  text-center border-2 border-buttonColor-baseColor  p-feedbackCard ">
            <div className="pl-6 hidden md:block">
              <Icons.ReqFedPepople />
            </div>
            <div className="flex  flex-col justify-center items-center">
              <MessageFeedbackIcon />
              <p className="font-custom text-subTitle2Size font-buttonWeight text-buttonColor-baseColor  ">
                Someone in my team
              </p>
              <p className="font-custom text-buttonFontSize font-captionRegWeight text-fontColor-feedbackColor">
                It is to get feedback on a team member’s work, helping them grow
                and improve team engagement.
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-end  border-t border-gray-200 p-4 ">
          <Button buttonText="continue" onClick={handleClosePopup} />
        </div>
      </HandelPopUp>
      <Button buttonText="Request" onClick={handleOpenPopup} />
    </>
  );
};

export default RequestFeedback;
