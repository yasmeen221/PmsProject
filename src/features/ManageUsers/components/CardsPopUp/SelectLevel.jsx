import React, { useState } from "react";
import DropDown from "../../../../components/DropDown/DropDown";
import { useDispatch } from "react-redux";

import HandelPopUp from "../../../../components/PopUp/HandelPopUp";
import Icons from "../../../../themes/icons";
import Button from "../../../../components/Button/Button";
import { changeDropDownValue } from "../../../FeedBack/slices/openPopUpSlice";
import TextInput from "../../../../components/TextInput/TextInput";
import Header from "../../../../components/Header/Header";

const SelectLevel = () => {
  const dispatch = useDispatch();
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [dropDown1, setOpen1] = useState(false);

  const dropdown1 = (value) => {
    setOpen1((dropDown1) => !dropDown1);
    dispatch(changeDropDownValue(value));
    if (value == "add level") {
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
        TitlePopUp={"ADD Level"}
      >
        <div
          className="w-[35vw] max-h-[65vh] pb-4 overflow-y-auto"
          style={{ scrollbarWidth: "none" }}
        >
          <div className="px-1 ">
            <div className="pt-4 ">
              <Header text="Level Name" />
              <TextInput placeholder="Add Level Name" />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-end border-t border-gray-200 py-3 mx-2 ">
          <Button
            className="px-12 py-2.5 text-fontColor-whiteBaseColor"
            buttonText="Add Level"
            onClick={handleClosePopup}
          />
        </div>
      </HandelPopUp>
      
      <DropDown
        DropDownText="Action"
        arrowIcon
        open={dropDown1}
        className="text-fontColor-whiteBaseColor"
        onClick={() => {
          setOpen1((dopen) => !dopen);
        }}
      >
        <li className="block px-dropItemXP py-dropItemYP  hover:bg-hoverColor-baseHoverColor ">
          Add User
        </li>
        <li
          className="block px-dropItemXP py-dropItemYP hover:bg-hoverColor-baseHoverColor "
          onClick={() => dropdown1("add level")}
        >
          Add Level
        </li>
        <li className="block px-dropItemXP py-dropItemYP hover:bg-hoverColor-baseHoverColor ">
          Add Teams
        </li>
      </DropDown>
    </>
  );
};

export default SelectLevel;
