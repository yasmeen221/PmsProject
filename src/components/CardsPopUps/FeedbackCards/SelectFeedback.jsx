import React, { useEffect, useState } from "react";
import HandelPopUp from "../../reusablecomponents/PopUp/HandelPopUp";
import Icons from "../../../themes/icons";
import Button from "../../reusablecomponents/Button/Button";
import {
  MessageFavFeedbackIcon,
  MessageFeedbackIcon,
} from "../../../assets/icons/icons";
import DropDown from "../../reusablecomponents/DropDown/DropDown";
import { useDispatch } from "react-redux";
import { changeDropDownValue } from "../../../Redux/store/slices/openPopUpSlice";

const SelectFeedback = () => {
  const dispatch = useDispatch();
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [dropDown1, setOpen1] = useState(false);

  const dropdown1 = (value) => {
    setOpen1((dropDown1) => !dropDown1);
    dispatch(changeDropDownValue(value));
    if (value == "send Feedback") {
      setPopupOpen(true);
    }
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
        <div className="flex  items-center gap-7 max-w-[45vw] justify-center  rounded-buttonRadius py-5 ">
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
          <Button
            buttonText="continue"
            className="text-fontColor-whiteBaseColor"
            onClick={handleClosePopup}
          />
        </div>
      </HandelPopUp>
      <DropDown
        DropDownText="New Feedback"
        arrowIcon
        open={dropDown1}
        className="text-fontColor-whiteBaseColor"
        onClick={() => {
          setOpen1((dopen) => !dopen);
        }}
      >
        <li
          className="block px-dropItemXP py-dropItemYP  hover:bg-hoverColor-baseHoverColor "
          onClick={() => dropdown1("send Feedback")}
        >
          Send Feedback
        </li>
        <li
          className="block px-dropItemXP py-dropItemYP hover:bg-hoverColor-baseHoverColor "
          onClick={() => dropdown1("Request Feedback")}
        >
          Request Feedback
        </li>
      </DropDown>
    </>
  );
};

export default SelectFeedback;
