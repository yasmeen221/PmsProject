// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import Icons from "../../../../themes/icons";
import ThreeDotsDropDown from "../../../../components/componentTitle/ThreeDotsDropDown";
import EditCompetency from "../CardsPopUps/EditCompetency";

import { useDispatch } from "react-redux";
import ConfirmDelete from "../../../../components/Delete/ConfirmDelete";
import { useSelector } from "react-redux";
import { HandelOpenPopUpDelete } from "../../../ManageTeams/slices/HandelOpenDelete";
import { deleteData } from "../../slices/Api/competenciesApi";

export default function EditDeleteDropDown({ id, refresh }) {
  console.log("iii", id);
  const dispatch = useDispatch();
  const oPenPopUp = useSelector(
    (state) => state.openPopUpConfirmDeleteSlice.open,
  );
  const [selectedOption, setSelectedOption] = useState(null);
  const [isDropdownVisible, setIsDropdownVisible] = useState(true);
  const [selectedItemId, setSelectedItemId] = useState(null);

  const handleDropdownClick = (option, id) => {
    console.log(`btn ${option} clicked`);

    setSelectedOption(option);
    setSelectedItemId(id);
    setIsDropdownVisible(false);
  };

  const handlePopupClose = () => {
    setSelectedOption(null);
    setIsDropdownVisible(false);
  };
  // const handelDeleteCom = () => {
  //   deleteData(id);
  //   dispatch(HandelOpenPopUpDelete(false));
  //   console.log("hh", id);
  //   setTimeout(() => {
  //     location.reload();
  //   }, 1000);
  // };

  const handelDeleteCom = async () => {
    try {
      await deleteData(id);
      dispatch(HandelOpenPopUpDelete(false));
      console.log("hh", id);
    } catch (error) {
      console.error("Error deleting data:", error);
    } finally {
      setTimeout(() => {
        location.reload();
      }, 1000);
    }
  };

  return (
    <>
      {isDropdownVisible && (
        <>
          <div
            className="backdrop"
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
            onClick={() => setIsDropdownVisible(false)}
          ></div>

          <ul
            className="w-[120px] shadow bg-white mr-7"
            style={{
              position: "absolute",
              right: "0rem",
              marginTop: "110px",
            }}
          >
            <ThreeDotsDropDown
              Icon={
                <span>
                  <Icons.EditUserPage />
                </span>
              }
              text={
                <p
                  style={{
                    textAlign: "center",
                    margin: "auto",
                    fontSize: "14px",
                    color: "#333",
                    paddingLeft: "0",
                    marginLeft: "0",
                  }}
                >
                  Edit
                </p>
              }
              onClick={() => handleDropdownClick("Edit", id)}
              className=""
            />

            <ThreeDotsDropDown
              Icon={
                <span>
                  <Icons.DeleteUserPage />
                </span>
              }
              text={
                <p
                  style={{
                    textAlign: "center",
                    fontSize: "14px",
                    color: "#333",
                  }}
                >
                  Delete
                </p>
              }
              onClick={() => {
                dispatch(HandelOpenPopUpDelete(true));
              }}
              className="custom-class-2"
            />
          </ul>
        </>
      )}

      {oPenPopUp && <ConfirmDelete onConfirm={handelDeleteCom} />}
      {selectedOption === "Edit" && (
        <EditCompetency
          onClose={handlePopupClose}
          competencyId={id}
          refresh={refresh}
        />
      )}
    </>
  );
}
