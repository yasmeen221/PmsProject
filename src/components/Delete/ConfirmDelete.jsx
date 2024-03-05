import React, { useState } from "react";
import FormPopUp from "../PopUp/FormPopUp";
import Icons from "../../themes/icons";

import Button from "../Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { HandelOpenPopUpDelete } from "../../features/ManageTeams/slices/HandelOpenDelete";

const ConfirmDelete = ({ deleteFunction }) => {
  const dispatch = useDispatch();
  const oPenPopUp = useSelector(
    (state) => state.openPopUpConfirmDeleteSlice.open,
  );
  const [isPopupOpen, setPopupOpen] = useState(false);
  const handleOpenPopup = () => {
    setPopupOpen(true);
  };

  const handleClosePopup = () => {
    // setPopupOpen(false);
    dispatch(HandelOpenPopUpDelete(false));
  };

  const handleConfirmDelete = () => {
    deleteFunction();
    handleClosePopup();
  };
  return (
    <>
      <FormPopUp
        isOpen={oPenPopUp}
        ClosePop={handleClosePopup}
        TitlePopUp="confirm delete"
      >
        <div className="flex mt-6 justify-between ">
          <p className="font-custom text-fontColor-blackBaseColor text-buttonFontSize font-popUpWeight">
            Are You Sure Delete It?!
          </p>
          <Icons.DeleteUserPage onClick={handleConfirmDelete} />
        </div>
      </FormPopUp>
      {/* <Button
        buttonText="confirm delete"
        className="text-fontColor-whiteBaseColor"
        iconLeft={<Icons.PlusIcon />}
        onClick={handleOpenPopup}
      /> */}
    </>
  );
};

export default ConfirmDelete;
