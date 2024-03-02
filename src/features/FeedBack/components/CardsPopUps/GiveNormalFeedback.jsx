import React, { useEffect, useState } from "react";
import TextInput from "../../../../components/TextInput/TextInput";
import FormPopUp from "../../../../components/PopUp/FormPopUp";
import Button from "../../../../components/Button/Button";
import Header from "../../../../components/Header/Header";
import Icons from "../../../../themes/icons";
import image1 from "../../../../assets/images/girl2.png";
const GiveNormalFeedback = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [addToogle, setAddToggle] = useState(false);
  const [team, setTeam] = useState("");

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
        TitlePopUp="Give Normal  FeedBack"
        iconLeft={<Icons.ArrowLeftPop />}
        personImage={image1}
        personName="yasmeen"
      >
        <div
          className="w-[35vw] max-h-[65vh] pb-4 overflow-y-auto"
          style={{ scrollbarWidth: "none" }}
        >
          <div className="px-1 ">
            <div className="pt-4 ">
              <Header text="Name" />
              <TextInput placeholder="Select who you will give the feedback" />
            </div>
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
                  className="min-h-20 resize-none block max-h-20 bg-white w-full text-body1Size rounded-buttonRadius border-0  py-2.5 px-2  shadow-sm ring-1 ring-fontColor-outLineInputColor  placeholder:text-fontColor-placeHolderColor focus:ring-2   focus:ring-buttonColor-baseColor focus:outline-none sm:text-sm sm:leading-6"
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
                    Employee only
                  </span>
                </label>

                <label className="inline-flex items-center mr-4 mb-2">
                  <input type="radio" className="w-4 h-4" name="radioGroup" />
                  <span className="ml-2 font-custom text-buttonFontSize font-buttonWeight text-fontColor-blackBaseColor">
                    Manger and Employee
                  </span>
                </label>
              </div>
            </div>
            {/* switch */}
            <div className="inline-flex justify-between items-center w-full pb-4">
              <div>
                <Header text="Feedback on specific competencies" />
                <p className="text-fontColor-placeHolderColor  text-body1Size">
                  By default, he/she will receive your general feedback
                </p>
              </div>
              <div>
                <label className="inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    value=""
                    className="sr-only peer"
                    onChange={(e) => {
                      setAddToggle(e.target.checked);
                    }}
                  />
                  <div className="relative w-11 h-6  peer-focus:outline-none rounded-full peer dark:bg-fontColor-placeHolderColor peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-buttonColor-baseColor"></div>
                </label>
              </div>
            </div>
            {/* dropdown */}
            {addToogle && (
              <div className="relative my-2 ">
                <select
                  onChange={(e) => setTeam((team) => e.target.value)}
                  className={`block appearance-none w-full bg-white border-0 py-2.5 px-2 ring-1 ring-inset ring-fontColor-outLineInputColor  rounded-buttonRadius shadow-sm   focus:shadow-outline focus:ring-2 focus:ring-buttonColor-baseColor focus:outline-none ${team == "" ? "text-fontColor-placeHolderColor" : "text-fontColor-blackBaseColor"}`}
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
        </div>
        <div className="flex items-center justify-end border-t border-gray-200 py-3 mx-1 ">
          <Button
            className="px-10 py-2.5 text-fontColor-whiteBaseColor"
            buttonText="Give Feedback"
            onClick={handleClosePopup}
          />
        </div>
      </FormPopUp>
      {/* <Button
        buttonText="Formal feedback"
        className="text-fontColor-whiteBaseColor"
        onClick={handleOpenPopup}
      /> */}
    </>
  );
};

export default GiveNormalFeedback;
