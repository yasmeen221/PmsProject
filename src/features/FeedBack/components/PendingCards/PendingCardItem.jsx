import React, { useEffect } from "react";
import Icons from "../../../../themes/icons";
import PenndingButton from "../../../../components/Button/PenndingButton";
import ImageStyle from "../../../../components/ImageStyle/ImageStyle";
import { useDispatch, useSelector } from "react-redux";
import { HandelOpenPopUpDelete } from "../../../ManageTeams/slices/HandelOpenDelete";
import ConfirmDelete from "../../../../components/Delete/ConfirmDelete";
import  { toggleNormalFeedback } from "../../slices/openPopUpSlice";
import GiveNormalFeedback from "../CardsPopUps/GiveNormalFeedback";
import { deleteFeedback } from "../../slices/Api/feedbackApi";
import { getFeedbacksRequest } from "../../slices/viewFeedBackSlice";

export default function PendingCardItem({ image, name, date, text, cardId }) {
  const dispatch = useDispatch();
  const oPenPopUp = useSelector(
    (state) => state.openPopUpConfirmDeleteSlice.open,
  );
  const openNormalFeedbackPopUp = useSelector(state => state.openPopUpSlice.normalFeedbackPopup)
  const handleDelete=(cardId)=>{
    deleteFeedback(cardId).then(()=>{
      dispatch(getFeedbacksRequest())
    })
  }
  return (
    <div className=" flex flex-col justify-between w-[32%] h-[11.53rem]  border px-8 py-6  rounded-2xl  border-borderColor-100">
      <div className="flex justify-between  ">
        <div className=" items-center flex w-[60%] gap-x-1 ">
          <div className="  w-[25%]">
            <ImageStyle src={image} />
          </div>
          <div className=" w-[75%]">
            <p className="font-md font-medium  text-sm w-[8.654rem]">
              {name}
            </p>
            <p className="font-md font-medium text-sm text-deleteColor-400">
              {date}
            </p>
          </div>
        </div>
        <div className="flex gap-1 w-[30%]">
          <PenndingButton
            // className={icon == <Icons.RedFeedback />}
            icon={<Icons.GreenFeedback />}
            bgColor="#EBF5EF"
            hoverColor=" #329B5C"
            confirmButtonClick={() => { dispatch(toggleNormalFeedback(true)) }}
          />

          <PenndingButton
            icon={<Icons.RedFeedback />}
            bgColor="#FBE8E8"
            hoverColor=" #DB1A1A"
            deleteButtonClick={() => dispatch(HandelOpenPopUpDelete(true), console.log(oPenPopUp))}
          />
        </div>
      </div>
      <div className="text-xs text-slate-700">
        {text}
      </div>
      {oPenPopUp && <ConfirmDelete deleteText="Are you sure to Decline? " confirmButtonText="Decline" onConfirm={() => {handleDelete(cardId),console.log(cardId)}} />}
      {openNormalFeedbackPopUp && <GiveNormalFeedback cardId={cardId}/>} 
    </div> //card
  );
}
