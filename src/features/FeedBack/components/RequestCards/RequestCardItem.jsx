import React, { useEffect } from "react";
import ImageStyle from "../../../../components/ImageStyle/ImageStyle";
import { useDispatch, useSelector } from "react-redux";
import ConfirmDelete from "../../../../components/Delete/ConfirmDelete";
import { HandelOpenPopUpDelete } from "../../../ManageTeams/slices/HandelOpenDelete";
import { deleteFeedback, } from "../../slices/Api/feedbackApi";
import { setIdToDeleteRequestedPage } from "../../slices/openPopUpSlice";
import Button from "../../../../components/Button/Button";

export default function RequestCardItem({ text, image, name, date, cardId, getDataWithPagination, currentPage, setIsLoadingFeedback, setData, userId, setNumberOfPages }) {
  const dispatch = useDispatch();
  const oPenPopUp = useSelector(
    (state) => state.openPopUpConfirmDeleteSlice.open,
  );
  const id = useSelector(state => state.openPopUpSlice.idToDeleteRequestedPage)
  const handleDelete = (cardId) => {
    deleteFeedback(cardId).then((res) => {
      getDataWithPagination(setIsLoadingFeedback, setData, currentPage, userId, setNumberOfPages, true, false, false)
      console.log(res)
    }).catch((err) => {
      console.log(err)
    })
  }
  useEffect(() => { }, [id])
  return (
    <div className="flex flex-col  justify-between border  p-6 border-borderColor-100 rounded-lg w-[32%] h-[10.365] gap-4 hover:bg-slate-100">
      <div className="  h-[2.635] text-sm text-drawerColor-900  font-medium ">
        <p className="break-words break-all " >{text}</p>
      </div>
      <div className=" flex  justify-between">
        <div className="flex  items-center gap-2  w-[60%]  ">
          <div className="w-[30%]">
            <ImageStyle src={image} />
          </div>
          <div className="w-[70%] " >
            <p className="font-md font-medium  text-sm " >
              {name}
            </p>
            <p className="font-md font-medium text-sm text-deleteColor-400">
              {date}
            </p>
          </div>
        </div>
        <div className="flex items-center ">
          <Button buttonText={"Cancel"} 
          onClick={() => { dispatch(HandelOpenPopUpDelete(true)), dispatch(setIdToDeleteRequestedPage(cardId)) }} 
          className="  bg-white px-4 py-2 text-sm font-medium font-fontColor-900 rounded-md border  border-borderColor-200 hover:bg-green-100 active:bg-green-300" />
        </div>
      </div>
      {oPenPopUp && <ConfirmDelete deleteText="Are you sure to Decline? " confirmButtonText="Decline" onConfirm={() => { handleDelete(id) }} />}

    </div>
  );
}
