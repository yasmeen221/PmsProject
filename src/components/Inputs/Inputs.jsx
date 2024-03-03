import React, { useState } from "react";
import Icons from "../../themes/icons";
import Button from "../../components/Button/Button";
import DropDown from "../../components/DropDown/DropDown";
import TextInput from "../../components/TextInput/TextInput";
export default function Inputs() {
  const [dropDown1, setOpen1] = useState(false);
  const [dropDown2, setOpen2] = useState(false);
  const [dropDown3, setOpen3] = useState(false);

  const dropdown1 = (value) => {
    setOpen1((dropDown1) => !dropDown1);
  };
  const dropdown2 = (value) => {
    setOpen2((dropDown2) => !dropDown2);
  };
  const dropdown3 = (value) => {
    setOpen3((dropDown3) => !dropDown3);
  };
  return (
    <div className="flex gap-3 w-full h-12  px-10 mt-6 font-custom font-normal">
      <TextInput
        placeholder="Search..."
        className="max-w-56 h-12 "
        type="text"
        leftIcon={<Icons.SearchIcon />}
      />
      <DropDown
        DropDownText="Type"
        arrowIcon
        iconColor="#B7BCC1"
        open={dropDown1}
        onClick={() => {
          setOpen1((dopen) => !dopen);
        }}
        className="  bg-white border h-12 border-borderColor-baseBorderColor text-fontColor-placeHolderColor"
      >
        <li
          className="block px-dropItemXP py-dropItemYP  hover:bg-hoverColor-baseHoverColor "
          onClick={() => dropdown1("send Feedback")}
        >
          Send Feedback
        </li>
        <li
          className="block px-dropItemXP py-dropItemYP hover:bg-hoverColor-baseHoverColor "
          onClick={() => dropdown1("Request Feedback")}
        >
          Request Feedback
        </li>
      </DropDown>
      <DropDown
        DropDownText="Employee"
        arrowIcon
        iconColor="#B7BCC1"
        open={dropDown2}
        onClick={() => {
          setOpen2((dopen) => !dopen);
        }}
        className="bg-white border h-12 border-borderColor-baseBorderColor text-fontColor-placeHolderColor"
      >
        <li
          className="block px-dropItemXP py-dropItemYP  hover:bg-hoverColor-baseHoverColor "
          onClick={() => dropdown2("send Feedback")}
        >
          Send Feedback
        </li>
        <li
          className="block px-dropItemXP py-dropItemYP hover:bg-hoverColor-baseHoverColor "
          onClick={() => dropdown2("Request Feedback")}
        >
          Request Feedback
        </li>
      </DropDown>
      <DropDown
        DropDownText="Filter"
        arrowIcon
        iconColor="#B7BCC1"
        open={dropDown3}
        onClick={() => {
          setOpen3((dopen) => !dopen);
        }}
        className="bg-white border h-12 border-borderColor-baseBorderColor text-fontColor-placeHolderColor"
      >
        <li
          className="block px-dropItemXP py-dropItemYP  hover:bg-hoverColor-baseHoverColor "
          onClick={() => dropdown3("send Feedback")}
        >
          Send Feedback
        </li>
        <li
          className="block px-dropItemXP py-dropItemYP hover:bg-hoverColor-baseHoverColor "
          onClick={() => dropdown3("Request Feedback")}
        >
          Request Feedback
        </li>
      </DropDown>
      <Button
        iconLeft={<Icons.SortIcon />}
        className="bg-white border px-1.5 h-12 border-borderColor-baseBorderColor text-fontColor-whiteBaseColor"
      />
    </div>
  );
}
