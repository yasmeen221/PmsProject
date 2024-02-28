import React, { useState } from "react";
import DropDown from "../../../../components/DropDown/DropDown";
import { useDispatch } from "react-redux";
import HandelPopUp from "../../../../components/PopUp/HandelPopUp";
import Button from "../../../../components/Button/Button";
import { changeDropDownValue } from "../../../FeedBack/slices/openPopUpSlice";
import {dropDownTeamHandle} from "../../../ManageTeams/slices/addTeam.js"
import TextInput from "../../../../components/TextInput/TextInput";
import Header from "../../../../components/Header/Header";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  levelName: yup
  .string()
  .matches(/^[A-Za-z]+$/, "Level name must contain char only")
  .trim()
  .required("Level name is required"),
});

const SelectLevel = () => {
  const dispatch = useDispatch();
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [dropDown1, setOpen1] = useState(false);

  const dropdown1 = (value) => {
    setOpen1((dropDown1) => !dropDown1);
    dispatch(changeDropDownValue(value));
    if (value === "add level") {
      setPopupOpen(true);
    }else if(value==="Add Teams"){
      dispatch(dropDownTeamHandle(true))
    }
  };

  const handleClosePopup = () => {
    setPopupOpen(false);
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const formSubmit = (values) => {
    console.log(values);
    reset();
    handleClosePopup();
  };

  return (
    <>
      <HandelPopUp
        isOpen={isPopupOpen}
        ClosePop={handleClosePopup}
        TitlePopUp={"ADD Level"}
      >
        <form onSubmit={handleSubmit(formSubmit)}>
          <div className="w-[35vw] max-h-[65vh] pb-4 overflow-y-auto" style={{ scrollbarWidth: "none" }}>
            <div className="px-1">
              <div className="pt-4">
                <Header text="Level Name" />
                <TextInput type="text" register={register("levelName")} placeholder="Add Level Name" />
                {errors.levelName && <p className="text-red-600">{errors.levelName.message}</p>}
              </div>
            </div>
          </div>
          <div className="flex items-center justify-end border-t border-gray-200 py-3 mx-2">
            <Button
              type="submit"
              className="px-12 py-2.5 text-fontColor-whiteBaseColor"
              buttonText="Add Level"
            />
          </div>
        </form>
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
        <li className="block px-dropItemXP py-dropItemYP hover:bg-hoverColor-baseHoverColor">
          Add User
        </li>
        <li
          className="block px-dropItemXP py-dropItemYP hover:bg-hoverColor-baseHoverColor"
          onClick={() => dropdown1("add level")}
        >
          Add Level
        </li>
        <li className="block px-dropItemXP py-dropItemYP hover:bg-hoverColor-baseHoverColor" onClick={()=>dropdown1("Add Teams")}>
          Add Teams
        </li>
      </DropDown>
    </>
  );
};

export default SelectLevel;
