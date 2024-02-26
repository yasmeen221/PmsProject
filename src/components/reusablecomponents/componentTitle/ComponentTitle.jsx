import React, { useState } from "react";
import Icons from "../../../themes/icons";
import DropDown from "../DropDown/DropDown";
import ThreeDotsDropDown from "./ThreeDotsDropDown";
import AddCompetency from "../../CardsPopUps/AddCompetencyCards/AddCompetency";
import SelectFeedback from "../../CardsPopUps/FeedbackCards/SelectFeedback";

export default function ComponentTitle({ currentList }) {
  const [dropDown1, setOpen1] = useState(false);
  const [dropDown2, setOpen2] = useState(false);
  const [threeDotsDropDown, setThreeDotsDropDown] = useState(false);

  const dropdown1 = (value) => {
    setOpen1((dropDown1) => !dropDown1);
  };
  const dropdown2 = (value) => {
    setOpen2((dropDown2) => !dropDown2);
  };

  const threeDotsDropDownFun = (value) => {
    setThreeDotsDropDown((threeDotsDropDown) => !threeDotsDropDown);
  };

  return (
    <div className="w-full flex justify-between h-12  px-10 ">
      <h2 className="font-black text-h1FontSize text-fontColor-1000 ">
        {currentList}
      </h2>
      {currentList == "Feedback List" ? (
        <div className=" flex flex-row gap-x-1   items-center ">
          <SelectFeedback />
          <DropDown
            className=" bg-white px-1.5   "
            threeDotsIcon
            open={dropDown2}
            onClick={() => {
              setOpen2((dopen) => !dopen);
            }}
          >
            <li
              className="block px-dropItemXP py-dropItemYP  hover:bg-hoverColor-baseHoverColor "
              onClick={() => dropdown2("send Feedback")}
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
        </div>
      ) : (
        <div className="flex flex-row gap-x-2 items-center ">
          <AddCompetency />
          <DropDown
            threeDotsIcon
            open={threeDotsDropDown}
            onClick={() => {
              setThreeDotsDropDown((threeDotsDropDown) => !threeDotsDropDown);
            }}
            className=" bg-white "
          >
            <ThreeDotsDropDown
              Icon={<Icons.GoalsIcon />}
              text="Manage Category"
              onClick={() => {
                threeDotsDropDownFun("Mange Category");
              }}
            />
            <ThreeDotsDropDown
              Icon={<Icons.Feedback />}
              text="Import"
              onClick={() => {
                threeDotsDropDownFun("Import");
              }}
            />
            <ThreeDotsDropDown
              Icon={<Icons.CompentenciesIcon />}
              text="Export"
              onClick={() => {
                threeDotsDropDownFun("Export");
              }}
            />
            <ThreeDotsDropDown
              Icon={<Icons.Learning />}
              text="Generate Framework AI"
              onClick={() => {
                threeDotsDropDownFun("Generate Framework AI");
              }}
            />
            <ThreeDotsDropDown
              onClick={() => {
                threeDotsDropDownFun("Help");
              }}
              Icon={<Icons.Compensation />}
              text="Help"
            />
          </DropDown>
        </div>
      )}
    </div>
  );
}
