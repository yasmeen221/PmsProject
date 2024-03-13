import React, { useState } from "react";
import FormPopUp from "../PopUp/FormPopUp";
import { useDispatch, useSelector } from "react-redux";
import { HandelOpenPopUpDelete } from "../../features/ManageTeams/slices/HandelOpenDelete";
import Button from "../Button/Button";
import { setIdToDeletePendingPage, setIdToDeleteRequestedPage } from "../../features/FeedBack/slices/openPopUpSlice";

const ConfirmDelete = ({ onClose, onConfirm,deleteText="Are You Sure Delete It?!",confirmButtonText="Delete" }) => {
  const dispatch = useDispatch();
  const oPenPopUp = useSelector(
    (state) => state.openPopUpConfirmDeleteSlice.open,
  );
  const handleClosePopup = () => {
    dispatch(HandelOpenPopUpDelete(false));
    dispatch(setIdToDeletePendingPage("")) //to set id to "" when delete feedback
    dispatch(setIdToDeleteRequestedPage(""))
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
        TitlePopUp={deleteText}
      >
        <div className="justify-between ">
          <div className="flex justify-around mt-5 mb-5">
            <Button
              onClick={handleConfirmDelete}
              buttonText={confirmButtonText}
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
