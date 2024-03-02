import React, { useEffect } from "react";
import FormPopUp from "../../../../components/PopUp/FormPopUp";
import { useState } from "react";
import Header from "../../../../components/Header/Header";
import Button from "../../../../components/Button/Button";
import Icons from "../../../../themes/icons";
import img from "../../../../assets/images/girl1.png";
export default function GiveFeedback() {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const handleOpenPopup = () => {
    setPopupOpen(true);
  };
  useEffect(() => {
    handleOpenPopup();
  }, []);
  const handleClosePopup = () => {
    setPopupOpen(false);
  };

  return (
    <>
      <FormPopUp
        isOpen={isPopupOpen}
        ClosePop={handleClosePopup}
        TitlePopUp={"Give FeedBack for"}
        iconLeft={<Icons.ArrowLeftPop />}
      >
        <div
          className="w-[35vw] max-h-[65vh] pb-4 overflow-y-auto"
          style={{ scrollbarWidth: "none" }}
        >
          <div className="px-1 ">
            <div className="pt-4">
              <Header text=" Feedback" />
              <div className="mt-2">
                <textarea
                  rows={4}
                  placeholder="Write Your honst feedback"
                  wrap="soft"
                  id="describtion"
                  name="describtion"
                  onChange={(e) => console.log(e.target.value)}
                  className="min-h-[7rem] resize-none block max-h-[7rem] bg-white w-full text-body1Size rounded-buttonRadius border-0  py-2.5 px-2  shadow-sm ring-1 ring-fontColor-outLineInputColor  placeholder:text-fontColor-placeHolderColor focus:ring-2   focus:ring-buttonColor-baseColor focus:outline-none sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="pt-4 mb-4">
              <Header text="Visibility" />
              <div className="flex flex-wrap ">
                <label className="inline-flex items-center mr-4 mb-2">
                  <input type="radio" className="w-4 h-4" name="radioGroup" />
                  <span className="ml-2 font-custom text-buttonFontSize font-buttonWeight text-fontColor-blackBaseColor">
                    Manger only
                  </span>
                </label>

                <label className="inline-flex items-center mr-4 mb-2">
                  <input type="radio" className="w-4 h-4" name="radioGroup" />
                  <span className="ml-2 font-custom text-buttonFontSize font-buttonWeight text-fontColor-blackBaseColor">
                    hassan only
                  </span>
                </label>

                <label className="inline-flex items-center mr-4 mb-2">
                  <input type="radio" className="w-4 h-4" name="radioGroup" />
                  <span className="ml-2 font-custom text-buttonFontSize font-buttonWeight text-fontColor-blackBaseColor">
                    Manger and hassan
                  </span>
                </label>
              </div>
            </div>
            <div className="inline-flex justify-between items-center w-full pb-4">
              <div>
                <Header text="Give feedback on specific competencies  " />
                <p className="text-fontColor-placeHolderColor  text-body1Size">
                  Give feedback on specific competencies
                </p>
              </div>
              <div></div>
            </div>
            <div className="pt-0">
              <Header text=" Team work" />
              <div className="mt-2">
                <textarea
                  rows={4}
                  placeholder="write your honest feedback about “Teamwork”"
                  wrap="soft"
                  id="describtion"
                  name="describtion"
                  onChange={(e) => console.log(e.target.value)}
                  className="min-h-[7rem] resize-none block max-h-[7rem] bg-white w-full text-body1Size rounded-buttonRadius border-0  py-2.5 px-2  shadow-sm ring-1 ring-fontColor-outLineInputColor  placeholder:text-fontColor-placeHolderColor focus:ring-2   focus:ring-buttonColor-baseColor focus:outline-none sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-end border-t border-gray-200 py-3 mx-2 ">
          <Button
            className="px-12 py-2.5 text-fontColor-whiteBaseColor"
            buttonText="Give Feedback"
            onClick={handleClosePopup}
          />
        </div>
      </FormPopUp>
    </>
  );
}
