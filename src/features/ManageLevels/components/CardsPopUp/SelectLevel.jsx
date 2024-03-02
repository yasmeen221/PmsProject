// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import axios from "axios";
// eslint-disable-next-line no-unused-vars
import DropDown from "../../../../components/DropDown/DropDown";
import { useDispatch } from "react-redux";
import { changeDropDownValue } from "../../../FeedBack/slices/openPopUpSlice";
import { dropDownTeamHandle } from "../../../ManageTeams/slices/addTeamTogglePopUp";
import TextInput from "../../../../components/TextInput/TextInput";
import Header from "../../../../components/Header/Header";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { handleOpenAddUserFormPopUp } from "../../../ManageUsers/slices/openAddUserFormPopUp.jsx";
import SelectUser from "../../../ManageUsers/components/CardsPopUps/SelectUser.jsx";

const schema = yup.object().shape({
  levelName: yup
    .string()
    .required("Level name is required")
    .matches(/^[A-Za-z]+$/, "Level name must contain char only")
    .trim(),
});
// import  { handleOpenAddUserFormPopUp } from "../../../ManageUsers/slices/openAddUserFormPopUp.jsx";
import { handleOpenAddLevelPopUp } from "../../slices/OpenPopupLevel";

const SelectLevel = () => {
  const dispatch = useDispatch();
  const [dropDown1, setOpen1] = useState(false);

  const dropdown1 = (value) => {
    setOpen1((dropDown1) => !dropDown1);
    dispatch(changeDropDownValue(value));
    if (value === "add level") {
      dispatch(handleOpenAddLevelPopUp(true));
    } else if (value === "Add Teams") {
      dispatch(dropDownTeamHandle(true));
    } else if (value === "Add User") {
      dispatch(handleOpenAddUserFormPopUp(true));
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

  const formSubmit = async (values) => {
    await addLevel(values);
    reset();
    handleClosePopup();
  };

  async function addLevel(values) {
    try {
      const response = await axios.post("https://reqres.in/api/users", values);
      console.log("Response:", response);
    } catch (error) {
      console.error("Error adding level:", error);
    }
  }
  

  return (
    <>
      

      <DropDown
        DropDownText="Action"
        arrowIcon
        open={dropDown1}
        className="text-fontColor-whiteBaseColor"
        onClick={() => {
          setOpen1((dopen) => !dopen);
        }}
      >
        <li
          className="block px-dropItemXP py-dropItemYP hover:bg-hoverColor-baseHoverColor"
          onClick={() => dropdown1("Add User")}
        >
          Add User
        </li>
        <li
          className="block px-dropItemXP py-dropItemYP hover:bg-hoverColor-baseHoverColor"
          onClick={() => dropdown1("add level")}
        >
          Add Level
        </li>
        <li
          className="block px-dropItemXP py-dropItemYP hover:bg-hoverColor-baseHoverColor"
          onClick={() => dropdown1("Add Teams")}
        >
          Add Teams
        </li>
      </DropDown>
    </>
  );
};

export default SelectLevel;