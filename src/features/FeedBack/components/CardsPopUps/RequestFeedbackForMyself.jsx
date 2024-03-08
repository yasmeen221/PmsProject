import React, { useState } from "react";
import { useEffect } from "react";
import Icons from "../../../../themes/icons";
import Button from "../../../../components/Button/Button";
import Header from "../../../../components/Header/Header";
import FormPopUp from "../../../../components/PopUp/FormPopUp";
import TextInput from "../../../../components/TextInput/TextInput";

export default function RequestFeedbackForMyself(OnClose) {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [addToggle, setAddToggle] = useState(false);
  const [team, setTeam] = useState("");

  const handleOpenPopup = () => {
    setPopupOpen(true);
  };

  useEffect(() => {
    handleOpenPopup();
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
        TitlePopUp="Request Feedback For My Self"
        iconLeft={<Icons.ArrowLeftPop />}
      >
        <div className="w-[35vw] max-h-[65vh] pb-4 overflow-y-auto" style={{ scrollbarWidth: "none" }}>
          <div className="px-1">
            <div className="pt-4">
              <Header text="Request To" />
              <TextInput className="mt-2" placeholder="Who will give the feedback" />
            </div>
            <div className="pt-4">
              <Header text="Message" />
              <div className="mt-2">
                <textarea
                  rows={4}
                  placeholder="Write message"
                  wrap="soft"
                  id=""
                  name="praise"
                  onChange={(e) => console.log(e.target.value)}
                  className="min-h-20 resize-none block max-h-20 bg-white w-full text-body1Size rounded-buttonRadius border-0  py-2.5 px-2  shadow-sm ring-1 ring-fontColor-outLineInputColor  placeholder:text-fontColor-placeHolderColor focus:ring-2   focus:ring-buttonColor-baseColor focus:outline-none sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="inline-flex justify-between items-center w-full pb-4 mt-3">
              <div>
                <Header text="Give feedback on specific competencies" />
                <p className="text-fontColor-placeHolderColor  text-body1Size">Give feedback on specific competencies</p>
              </div>
              <div>
                <label className="inline-flex items-center cursor-pointer bg-slate-100" >
                  <input
                    type="checkbox"
                    value=""
                    className="sr-only peer"
                    onChange={(e) => {
                      setAddToggle(e.target.checked);
                    }}
                  />
                  <div className="relative w-11 h-6 peer-focus:outline-none rounded-full peer dark:bg-fontColor-placeHolderColor peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-buttonColor-baseColor"></div>
                </label>
              </div>
            </div>
          </div>
          {/* dropdown */}
          {addToggle && (
            <div className="relative my-2">
              <select
                onChange={(e) => setTeam(e.target.value)}
                className={`block appearance-none w-full bg-white border-0 py-2.5 px-2 ring-1 ring-inset ring-fontColor-outLineInputColor rounded-buttonRadius shadow-sm focus:shadow-outline focus:ring-2 focus:ring-buttonColor-baseColor focus:outline-none ${team === "" ? "text-fontColor-placeHolderColor" : "text-fontColor-blackBaseColor"}`}
              >
                <option value="">select team</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <Icons.ArrowDownBlack />
              </div>
            </div>
          )}
        </div>
        <div className="flex items-center justify-end border-t border-gray-200 py-3 mx-1">
        <Button
          className="px-6 py-3.5 text-fontColor-whiteBaseColor"
          buttonText="Request"
          onClick={handleClosePopup}
        />
      </div>
      </FormPopUp>
     
    </>
  );
}
