import React, { useState } from "react";
import { useEffect } from "react";
import Button from "../../../../components/Button/Button";
import FormPopUp from "../../../../components/PopUp/FormPopUp";
import Icons from "../../../../themes/icons";
import AccordionDropDown, {
  AccordionItemDropDown,
} from "../Accordion/DropDownDetails";

export default function ViewDetails({ onClose }) {
  const [isPopupOpen, setPopupOpen] = useState(false);
  useEffect(() => {
    setPopupOpen(true);
  }, []);
  const handleClosePopup = () => {
    setPopupOpen(false);
    onClose();
  };
  return (
    <>
      <FormPopUp
        isOpen={isPopupOpen}
        ClosePop={handleClosePopup}
        TitlePopUp="Details"
        className=""
      >
        <div
          style={{
            width: "39.214vw",
            maxHeight: "65vh",
            overflowY: "auto",
            scrollbarWidth: "none",
          }}
          className="px-1 my-4"
        >
          <h4 className="text-fontColor-fromAndToColor font-custom text-xs">
            Competency Name
          </h4>
          <p className="text-black font-bold text-2xl font-custom">
            Public speaking
          </p>
          <div className="flex my-3 gap-x-3">
            <div className="flex items-center  px-3 py-2 font-custom text-xs bg-drawerColor-100 text-drawerColor-500 rounded-md">
              <p className="">
                <Icons.thunderIcon />
              </p>{" "}
              <p>Communication</p>
            </div>
            <div className="flex items-center font-custom text-xs px-3 py-2 bg-gray-200 rounded-md">
              <p className="mr-2">
                <Icons.hidePassword />
              </p>{" "}
              <p>Shared with everyone</p>
            </div>
          </div>
          <AccordionDropDown>
            <AccordionItemDropDown
              className="border-2 border-solid border-borderColor-baseBorderColor mb-5 rounded-buttonRadius text-subTitle2Size font-subTitle2Weight text-fontColor-blackBaseColor "
              value="1"
              trigger="Junior"
            >
              <hr />
              <div className="mt-1 text-fontColor-fromAndToColor text-sm font-normal">
                <p className="">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Debitis, recusandae.
                </p>
              </div>
            </AccordionItemDropDown>
          </AccordionDropDown>
          <AccordionDropDown>
            <AccordionItemDropDown
              className="border-2 border-solid border-borderColor-baseBorderColor mb-5 rounded-buttonRadius text-subTitle2Size font-subTitle2Weight text-fontColor-blackBaseColor "
              value="1"
              trigger="Junior"
            >
              <hr />
              <div className="mt-1 text-fontColor-fromAndToColor text-sm font-normal">
                <p className="">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Debitis, recusandae.
                </p>
              </div>
            </AccordionItemDropDown>
          </AccordionDropDown>
        </div>
        <div className="w-full inline-flex justify-end px-1 ">
            <Button
              buttonText="Back"
              className="px-10 py-2.5 text-fontColor-whiteBaseColor"
              onClick={handleClosePopup}
            />
          </div>
      </FormPopUp>
    </>
  );
}
