import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import FormPopUp from "../../../../components/PopUp/FormPopUp";
import Icons from "../../../../themes/icons";
import Button from "../../../../components/Button/Button";
import { changeDropDownValue } from "../../slices/openPopUpSlice";
import RequestFeedbackSomeOne from "./RequestFeedbackSomeOne";
import GiveFeedback from "./GiveFeedback";

const RequestFeedback = () => {
  const dispatch = useDispatch();
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [someOnePopUp, setSomeOnePopUp] = useState(false);
  const [myselfPopUp, setMyselfPopUp] = useState(false);

  const dropDownValue = useSelector((state) => state.openPopUpSlice.dropDown);
  const handleClosePopup = () => {
    setPopupOpen(false);
    dispatch(changeDropDownValue(""));
  };
  useEffect(() => {
    if (dropDownValue == "Request Feedback") {
      setPopupOpen(true);
    }
  }, [dropDownValue]);
  const HandelSomeOnePopUp = () => {
    setSomeOnePopUp(true);
    setPopupOpen(false);
  };
  const HandelMyselfPopUp = () => {
    setMyselfPopUp(true);
    setPopupOpen(false);
  };
  return (
    <>
      <FormPopUp
        isOpen={isPopupOpen}
        ClosePop={handleClosePopup}
        TitlePopUp="Request Feedback"
      >
        <div className="flex items-center gap-7 max-w-[45vw] justify-center  rounded-buttonRadius py-5 ">
          <div onClick={() => {
            HandelMyselfPopUp()
          }} className="  max-w-[50%] sm:flex-col rounded-buttonRadius text-center space-y-2  border-2 p-feedbackCard">
            <div className="hidden md:block opacity-0">
              <Icons.RightFeedbackIcon />
            </div>
            <div className="flex  flex-col justify-center items-center">
              <Icons.ReqFedMyself />
              <p className="font-custom text-subTitle2Size font-buttonWeight text-fontColor-blackBaseColor ">
                Myself
              </p>
              <p className="font-custom text-buttonFontSize font-captionRegWeight text-fontColor-fromAndToColor">
                It is to receive feedback on your performance and areas for
                personal and professional growth.
              </p>
            </div>
          </div>

          <div
            onClick={() => {
              HandelSomeOnePopUp();
            }}
            className="max-w-[50%] space-y-2 bg-drawerColor-bgFeedback rounded-buttonRadius  text-center border-2 border-buttonColor-baseColor  p-feedbackCard "
          >
            <div className="pl-6 hidden md:block">
              <Icons.RightFeedbackIcon />
            </div>
            <div className="flex  flex-col justify-center items-center">
              <Icons.ReqFedPepople />
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
          <Button
            buttonText="continue"
            className="text-fontColor-whiteBaseColor"
            onClick={handleClosePopup}
          />
        </div>
      </FormPopUp>
      {someOnePopUp && <RequestFeedbackSomeOne />}
      {myselfPopUp && <GiveFeedback />}
    </>
  );
};

export default RequestFeedback;
