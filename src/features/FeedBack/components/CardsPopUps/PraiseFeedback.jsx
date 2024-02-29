import React, { useState } from "react";
import { useEffect } from "react";
import Icons from "../../../../themes/icons";
import Button from "../../../../components/Button/Button";
import Header from "../../../../components/Header/Header";
import FormPopUp from "../../../../components/PopUp/FormPopUp";
import TextInput from "../../../../components/TextInput/TextInput";

export default function PraiseFeedback() {
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
        TitlePopUp="Give Praise"
        iconLeft={<Icons.ArrowLeftPop />}
      >
        <div
          className="w-[35vw] max-h-[65vh] pb-4 overflow-y-auto"
          style={{ scrollbarWidth: "none" }}
        >
          <div className="px-1">
            <div className="pt-4">
              <Header text="Employee Name" />
              <TextInput
                className="mt-2"
                placeholder="Select who you will give the feedback"
              />
            </div>
            <div className="pt-4">
              <Header text="Praise" />
              <div className="mt-2">
                <textarea
                  rows={4}
                  placeholder="Write your appreciate"
                  wrap="soft"
                  id="praise"
                  name="praise"
                  onChange={(e) => console.log(e.target.value)}
                  className="min-h-20 resize-none block max-h-20 bg-white w-full text-body1Size rounded-buttonRadius border-0  py-2.5 px-2  shadow-sm ring-1 ring-fontColor-outLineInputColor  placeholder:text-fontColor-placeHolderColor focus:ring-2   focus:ring-buttonColor-baseColor focus:outline-none sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="pt-4">
              <Header text="Visibility" />
              <div className="relative my-2 ">
                <select
                  onChange={(e) => console.log(e.target.value)}
                  className={`block text-fontColor-placeHolderColor appearance-none w-full bg-white border-0 py-2.5 px-2 ring-1 ring-inset ring-fontColor-outLineInputColor  rounded-buttonRadius shadow-sm   focus:shadow-outline focus:ring-2 focus:ring-buttonColor-baseColor focus:outline-none `}
                >
                  <option value="">Select who can see this</option>
                  <option value="1">Option 1</option>
                  <option value="2">Option 2</option>
                  <option value="3">Option 3</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <Icons.ArrowDownBlack />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-end border-t border-gray-200 py-3 mx-1 ">
          <Button
            className="px-6 py-3.5 text-fontColor-whiteBaseColor"
            buttonText="Give Praise"
            onClick={handleClosePopup}
          />
        </div>
      </FormPopUp>
    </>
  );
}
