import React, { useState } from "react";
import HandelPopUp from "../../reusablecomponents/PopUp/HandelPopUp";
import Icons from "../../../themes/icons";
import Button from "../../reusablecomponents/Button/Button";
import {
  MessageFavFeedbackIcon,
  MessageFeedbackIcon,
} from "../../../assets/icons/icons";

const SelectFeedback = () => {
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
              <Icons.RightFeedbackIcon />
            </div>
            <div className="flex  flex-col justify-center items-center">
              <MessageFavFeedbackIcon />
              <p className="font-custom text-subTitle2Size font-buttonWeight text-fontColor-blackBaseColor ">
                Praise
              </p>
              <p className="font-custom text-buttonFontSize font-captionRegWeight text-fontColor-fromAndToColor">
                it is the appreciation of someone's effort in work
              </p>
            </div>
          </div>

          <div className="max-w-[50%] space-y-2 bg-drawerColor-bgFeedback rounded-buttonRadius  text-center border-2 border-buttonColor-baseColor  p-feedbackCard ">
            <div className="pl-6 hidden md:block">
              <Icons.RightFeedbackIcon />
            </div>
            <div className="flex  flex-col justify-center items-center">
              <MessageFeedbackIcon />
              <p className="font-custom text-subTitle2Size font-buttonWeight text-buttonColor-baseColor  ">
                Normal Feedback
              </p>
              <p className="font-custom text-buttonFontSize font-captionRegWeight text-fontColor-feedbackColor">
                It is giving insights or suggestions to help someone improve or
                grow
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-end  border-t border-gray-200 p-4 ">
          <Button buttonText="continue" onClick={handleClosePopup} />
        </div>
      </HandelPopUp>
      <Button buttonText="Open Popup" onClick={handleOpenPopup} />
    </>
  );
};

export default SelectFeedback;
