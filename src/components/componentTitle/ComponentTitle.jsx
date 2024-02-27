import React, { useState } from "react";
import SelectFeedback from '../../features/FeedBack/components/CardsPopUps/SelectFeedback'
import RequestFeedback from '../../features/FeedBack/components/CardsPopUps/RequestFeedback'
import DropDown from '../../components/DropDown/DropDown'
import ThreeDotsDropDown from '../../components/componentTitle/ThreeDotsDropDown'
import Icons from "../../themes/icons"
import AddCompetency from "../../features/Competencies/components/AddCompetencyCards/AddCompetency"
export default function ComponentTitle({ currentList }) {
  const [dropDown2, setOpen2] = useState(false);
  const [threeDotsDropDown, setThreeDotsDropDown] = useState(false);


  const dropdown2 = (value) => {
    setOpen2((dropDown2) => !dropDown2);
  };

  const threeDotsDropDownFun = (value) => {
    setThreeDotsDropDown((threeDotsDropDown) => !threeDotsDropDown);
  };

  return (
    <div className="w-full flex justify-between h-12  px-10 ">
      <h2 className="font-black text-h1FontSize text-fontColor-blackBaseColor ">
        {currentList}
      </h2>
      {currentList == "Feedback List" ? (
        <div className=" flex flex-row gap-x-1   items-center ">
          <SelectFeedback />
          <RequestFeedback/>
          <DropDown
            className=" bg-white px-1.5   "
            threeDotsIcon
            open={dropDown2}
            onClick={() => {
              setOpen2((dopen) => !dopen);
            }}
          >
            <ThreeDotsDropDown
              Icon={<Icons.ComExport />}
              text="Export"
              onClick={() => {
                dropdown2("export");
              }}
            />
            <ThreeDotsDropDown
              Icon={<Icons.ComImport />}
              text="Import"
              onClick={() => {
                dropdown2("import");
              }}
            />
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
            className=" bg-white px-1.5"
          >
            <ThreeDotsDropDown
              Icon={<Icons.ComManage />}
              text="Manage Category"
              className="w-[15vw]"
              onClick={() => {
                threeDotsDropDownFun("Mange Category");
              }}
            />
            <ThreeDotsDropDown
              Icon={<Icons.ComImport />}
              text="Import"
              className="w-[15vw]"
              onClick={() => {
                threeDotsDropDownFun("Import");
              }}
            />
            <ThreeDotsDropDown
              Icon={<Icons.ComExport />}
              text="Export"
              className="w-[15vw]"
              onClick={() => {
                threeDotsDropDownFun("Export");
              }}
            />
            <ThreeDotsDropDown
              Icon={<Icons.ComFramework />}
              text="Generate Framework AI"
              className="w-[15vw]"
              onClick={() => {
                threeDotsDropDownFun("Generate Framework AI");
              }}
            />
            <ThreeDotsDropDown
              onClick={() => {
                threeDotsDropDownFun("Help");
              }}
              Icon={<Icons.ComHelp />}
              text="Help"
              className="w-[15vw]"
            />
          </DropDown>
        </div>
      )}
    </div>
  );
}
