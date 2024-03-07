import React, { useState } from "react";
import FormPopUp from "../../../../components/PopUp/FormPopUp";
import Button from "../../../../components/Button/Button";
import Icons from "../../../../themes/icons";
import Header from "../../../../components/Header/Header";
import TextInput from "../../../../components/TextInput/TextInput";
function AddCompetency({ open }) {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [catogery, setCatogery] = useState("");
  const [addToogle, setAddToggle] = useState(false);
  const [team, setTeam] = useState("");
  const [level, setLevel] = useState("");
  const handleOpenPopup = () => {
    setPopupOpen(true);
  };

  const handleClosePopup = () => {
    setPopupOpen(false);
  };
  return (
    <>
      <FormPopUp
        isOpen={isPopupOpen}
        ClosePop={handleClosePopup}
        TitlePopUp="Add New Competency"
        iconLeft={<Icons.ArrowLeftPop />}
      >
        <div
          style={{
            width: "35vw",
            maxHeight: "65vh",
            overflowY: "auto",
            scrollbarWidth: "none",
          }}
          className="px-1"
        >
          <div className="my-2  w-full">
            <Header text="Name" htmlFor="name" />
            <div className="mt-2 w-full ">
              <TextInput
                onChange={(e) => console.log(e.target.value)}
                placeholder="Enter Competency Name"
                id="name"
                name="name"
                type="text"
                required
              />
            </div>
          </div>
          <div className="my-2 w-full">
            <Header text="Category" />
            <div className="relative mt-2">
              <select
                onChange={(e) => setCatogery((catogery) => e.target.value)}
                className={`block appearance-none w-full bg-white border-0    py-2.5 px-2 ring-1 ring-inset ring-fontColor-outLineInputColor  rounded-buttonRadius shadow-sm   focus:shadow-outline focus:ring-2 focus:ring-buttonColor-baseColor focus:outline-none ${catogery == "" ? "text-fontColor-placeHolderColor" : "text-fontColor-blackBaseColor"} `}
              >
                <option value="">select category</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <Icons.ArrowDownBlack />
              </div>
            </div>
          </div>
          <div className="my-2">
            <Header text="Default Description" htmlFor="describtion" />
            <div className="mt-2">
              <textarea
                rows={4}
                placeholder="Enter Default Description"
                wrap="soft"
                id="describtion"
                name="describtion"
                onChange={(e) => console.log(e.target.value)}
                className="min-h-20 resize-none block max-h-20 bg-white w-full text-body1Size rounded-buttonRadius border-0  py-2.5 px-2  shadow-sm ring-1 ring-fontColor-outLineInputColor  placeholder:text-fontColor-placeHolderColor focus:ring-2   focus:ring-buttonColor-baseColor focus:outline-none sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="w-full inline-flex justify-between   items-center my-2">
            <div>
              <Header text="Assign competency to specific team" />
              <p className="text-fontColor-placeHolderColor  text-body1Size">
                By default competency assign to everyone
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
          {addToogle && (
            <div className="relative my-2 transition-all duration-1000 ">
              <select
                onChange={(e) => setTeam((team) => e.target.value)}
                className={`block appearance-none w-full bg-white border-0    py-2.5 px-2 ring-1 ring-inset ring-fontColor-outLineInputColor  rounded-buttonRadius shadow-sm   focus:shadow-outline focus:ring-2 focus:ring-buttonColor-baseColor focus:outline-none ${team == "" ? "text-fontColor-placeHolderColor" : "text-fontColor-blackBaseColor"} `}
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
          <div className="my-2">
            <Header text="Levels" />
            <p className="text-fontColor-placeHolderColor  text-body1Size">
              Select Levels to customize competency descriptions for each career
              path level.
            </p>
            <div className="relative mt-2">
              <select
                onChange={(e) => setLevel((level) => e.target.value)}
                className={`block appearance-none w-full bg-white border-0    py-2.5 px-2 ring-1 ring-inset ring-fontColor-outLineInputColor  rounded-buttonRadius shadow-sm   focus:shadow-outline focus:ring-2 focus:ring-buttonColor-baseColor focus:outline-none ${level == "" ? "text-fontColor-placeHolderColor" : "text-fontColor-blackBaseColor"} `}
              >
                <option value="">select category</option>
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
        <div className="mt-2 w-full inline-flex justify-end px-1 ">
          <Button
            buttonText="Add"
            className="px-10 py-2.5 text-fontColor-whiteBaseColor"
            onClick={handleClosePopup}
          />
        </div>
      </FormPopUp>
      <Button
        buttonText="Add Competency"
        className="text-fontColor-whiteBaseColor"
        iconLeft={<Icons.PlusIcon />}
        onClick={handleOpenPopup}
      />
    </>
  );
}

export default AddCompetency;
