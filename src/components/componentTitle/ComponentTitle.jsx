import React, { useState } from "react";
import SelectFeedback from "../../features/FeedBack/components/CardsPopUps/SelectFeedback";
import RequestFeedback from "../../features/FeedBack/components/CardsPopUps/RequestFeedback";
import DropDown from "../../components/DropDown/DropDown";
import ThreeDotsDropDown from "../../components/componentTitle/ThreeDotsDropDown";
import Icons from "../../themes/icons";
import AddCompetency from "../../features/Competencies/components/CardsPopUps/AddCompetency";
import SelectLevel from "../../features/ManageLevels/components/CardsPopUp/SelectLevel";
import ManageLevel from "../../features/ManageLevels/components/CardsPopUp/ManageLevel";
import ManageTeamsForm from "../../features/ManageTeams/components/CardsPopUps/MangTeamsForm";
import AddUserFormStructure from "../../features/ManageUsers/components/CardsPopUps/AddUserFormStructure";
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
      {currentList == "Feedback List" && (
        <div className=" flex flex-row gap-x-1   items-center ">
          {/* this is PopUp opens */}
          <SelectFeedback />
          <RequestFeedback />
          {/* end  of pop up*/}
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
      )}
      {currentList == "Competencies Framework" && (
        <div className="flex flex-row gap-x-2 items-center ">
          {/* this is the popUp of compentencis in routing of comemtencise page */}
          <AddCompetency />
          {/* end of popup */}
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
      {currentList == "User & Teams" && (
        <div className=" flex flex-row gap-x-1   items-center ">
          {/* this is popUp in routing of Teams & Users Page */}
          <SelectLevel />
          <ManageTeamsForm />
          <AddUserFormStructure/>
          <ManageLevel/>
          {/* end of popups */}

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
      )}
    </div>
  );
}
