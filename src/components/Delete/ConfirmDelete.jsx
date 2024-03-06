import React, { useState } from "react";
import FormPopUp from "../PopUp/FormPopUp";
import { useDispatch, useSelector } from "react-redux";
import { HandelOpenPopUpDelete } from "../../features/ManageTeams/slices/HandelOpenDelete";
import Button from "../Button/Button";

const ConfirmDelete = ({ onClose, onConfirm }) => {
  const dispatch = useDispatch();
  const oPenPopUp = useSelector(
    (state) => state.openPopUpConfirmDeleteSlice.open,
  );
  const handleClosePopup = () => {
    dispatch(HandelOpenPopUpDelete(false));
    if (onClose) {
      onClose();
    }
  };
  const handleConfirmDelete = () => {
    if (onConfirm) {
      onConfirm();
    }
    handleClosePopup();
  };

  return (
    <>
      <FormPopUp
        isOpen={oPenPopUp}
        ClosePop={handleClosePopup}
        TitlePopUp="  Are You Sure Delete It?!"
      >
        <div className="justify-between ">
          <div className="flex justify-around mt-5 mb-5">
            <Button
              onClick={handleConfirmDelete}
              buttonText="Delete"
              className="bg-deleteColor-50 text-fontColor-whiteBaseColor px-7"
            />
            <Button
              onClick={handleClosePopup}
              buttonText="Cancel"
              className=" text-fontColor-whiteBaseColor px-7 "
            />
          </div>
        </div>
      </FormPopUp>
    </>
  );
};

export default ConfirmDelete;
