import React, { useEffect, useState } from "react";
import HandelPopUp from "../../../components/PopUp/HandelPopUp"
import Button from "../../../components/Button/Button"
import Icons from "../../../themes/icons";
import Header from "../../../components/Header/Header"
import TextInput from "../../../components/TextInput/TextInput"
import { useDispatch, useSelector } from "react-redux";
import { dropDownTeamHandle } from "../slices/addTeam";
function ManageTeamsForm({ open }) {
  const dispatch = useDispatch()
  const handleOpen = useSelector(state => state.openTeamPopUpSlice.openPopUpTeam)
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [team, setTeam] = useState("");
  const [teamLeader, setteamLeader] = useState("");
  const [parentTeam, setParentTeam] = useState("")
  
  useEffect(() => {
    setPopupOpen(isPopupOpen => handleOpen)
    //once from global false ==>make reset
  }, [handleOpen])
  const handleClosePopup = () => {
    setPopupOpen(false);
    dispatch(dropDownTeamHandle(false))
    //reset values
    //put this fun in use form handle fun
  };
  return (
    <>
      <HandelPopUp
        isOpen={isPopupOpen}
        ClosePop={handleClosePopup}
        TitlePopUp="Add Team"
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
            <Header text="Team Name" htmlFor="teamName" />
            <div className="mt-2 w-full ">
              <TextInput
                onChange={(e) => setTeam(e.target.value)}
                placeholder="Enter Team Name"
                id="teamName"
                name="teamName"
                type="text"
                required
              />
            </div>
          </div>
          <div className="my-2 w-full">
            <Header text="Team Leader" />
            <div className="relative mt-2">
              <select
                onChange={(e) => setteamLeader((teamLeader) => e.target.value)}
                className={`block appearance-none w-full bg-white border-0    py-2.5 px-2 ring-1 ring-inset ring-fontColor-outLineInputColor  rounded-buttonRadius shadow-sm   focus:shadow-outline focus:ring-2 focus:ring-buttonColor-baseColor focus:outline-none ${teamLeader == "" ? "text-fontColor-placeHolderColor" : "text-fontColor-blackBaseColor"} `}
              >
                <option value="">Select Team Leader</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <Icons.ArrowDownBlack />
              </div>
            </div>
          </div>
          <div className="my-2 w-full">
            <Header text="Parent Team" />
            <div className="relative mt-2">
              <select
                onChange={(e) => setParentTeam((parentTeam) => e.target.value)}
                className={`block appearance-none w-full bg-white border-0    py-2.5 px-2 ring-1 ring-inset ring-fontColor-outLineInputColor  rounded-buttonRadius shadow-sm   focus:shadow-outline focus:ring-2 focus:ring-buttonColor-baseColor focus:outline-none ${parentTeam == "" ? "text-fontColor-placeHolderColor" : "text-fontColor-blackBaseColor"} `}
              >
                <option value="">Select Parent Team</option>
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
      </HandelPopUp>
    </>
  );
}

export default ManageTeamsForm;
