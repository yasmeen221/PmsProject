import React, { useState } from "react";
import DropDown from "../../../../components/DropDown/DropDown";
import { useDispatch } from "react-redux";
import { changeDropDownValue } from "../../slices/openPopUpSlice";
import FormPopUp from "../../../../components/PopUp/FormPopUp";
import Icons from "../../../../themes/icons";
import Button from "../../../../components/Button/Button";
import PraiseFeedback from "./PraiseFeedback";
import GiveNormalFeedback from "./GiveNormalFeedback";

const SelectFeedback = () => {
  const dispatch = useDispatch();
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [dropDown1, setDropDown1] = useState(false);
  const [praisePop, setPraisePop] = useState(false);
  const [normalPop, setNormalPop] = useState(false);

  const dropdown1 = (value) => {
    setDropDown1((dropDown1) => !dropDown1);
    dispatch(changeDropDownValue(value));
    if (value == "send Feedback") {
      setPopupOpen(true);
    }
  };

  const handleClosePopup = () => {
    setPopupOpen(false);
  };
  const handlePraise = () => {
    setPraisePop(true);
    setPopupOpen(false);
  };
  const handleNormal = () => {
    setNormalPop(true);
    setPopupOpen(false);
  };
  return (
    <>
      <FormPopUp
        isOpen={isPopupOpen}
        ClosePop={handleClosePopup}
        TitlePopUp="Select Feedback"
      >
        <div className="flex items-center gap-7 max-w-[45vw] justify-center  rounded-buttonRadius py-5 ">
          <div
            onClick={() => {
              handlePraise();
            }}
            className="  max-w-[50%] sm:flex-col rounded-buttonRadius text-center space-y-2  border-2 p-feedbackCard"
          >
            <div className="hidden md:block opacity-0">
              <Icons.RightFeedbackIcon />
            </div>
            <div className="flex  flex-col justify-center items-center">
              <Icons.MessageFavFeedbackIcon />
              <p className="font-custom text-subTitle2Size font-buttonWeight text-fontColor-blackBaseColor ">
                Praise
              </p>
              <p className="font-custom text-buttonFontSize font-captionRegWeight text-fontColor-fromAndToColor">
                it is the appreciation of someone's effort in work
              </p>
            </div>
          </div>

          <div
            onClick={() => {
              handleNormal();
            }}
            className="max-w-[50%] space-y-2 bg-drawerColor-bgFeedback rounded-buttonRadius  text-center border-2 border-buttonColor-baseColor  p-feedbackCard "
          >
            <div className="pl-6 hidden md:block">
              <Icons.RightFeedbackIcon />
            </div>
            <div className="flex  flex-col justify-center items-center">
              <Icons.MessageFavFeedbackIcon />
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
      </FormPopUp>
      {/* that is the Button have DropDown To Open from the all popUps in FeedBack Page  */}
      <DropDown
        DropDownText="New Feedback"
        arrowIcon
        open={dropDown1}
        className="text-fontColor-whiteBaseColor"
        onClick={() => {
          setDropDown1((dopen) => !dopen);
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
      {praisePop && <PraiseFeedback />}
      {normalPop && <GiveNormalFeedback />}
    </>
  );
};

export default SelectFeedback;
