import React, { useEffect } from "react";
import Icons from "../../../../themes/icons";
import PenndingButton from "../../../../components/Button/PenndingButton";
import ImageStyle from "../../../../components/ImageStyle/ImageStyle";
import { useDispatch, useSelector } from "react-redux";
import { HandelOpenPopUpDelete } from "../../../ManageTeams/slices/HandelOpenDelete";
import ConfirmDelete from "../../../../components/Delete/ConfirmDelete";
import {
  setIdToDeletePendingPage,
  toggleNormalFeedback,
} from "../../slices/openPopUpSlice";
import GiveNormalFeedback from "../CardsPopUps/GiveNormalFeedback";
import { deleteFeedback } from "../../slices/Api/feedbackApi";
import {
  setCardId,
  setFeedbackCompetencies,
  setFromId,
  setUserName,
} from "../../slices/acceptPending";

export default function PendingCardItem({
  image,
  name,
  date,
  text,
  cardId,
  feedBackMetaData,
  fromName,
  fromId,
  getDataWithPagination,
  currentPage,
  setIsLoadingFeedback,
  setData,
  userId,
  setNumberOfPages,
}) {
  const dispatch = useDispatch();
  const oPenPopUp = useSelector(
    (state) => state.openPopUpConfirmDeleteSlice.open,
  );
  const id = useSelector((state) => state.openPopUpSlice.idToDeletePendingPage);
  const openNormalFeedbackPopUp = useSelector(
    (state) => state.openPopUpSlice.normalFeedbackPopup,
  );
  const handleDelete = (cardId) => {
    deleteFeedback(cardId).then((res) => {
      getDataWithPagination(
        setIsLoadingFeedback,
        setData,
        currentPage,
        userId,
        setNumberOfPages,
        false,
        false,
        true,
      );
      console.log(res);
    });
  };
  useEffect(() => {}, [id]);

  return (
    <div className=" flex flex-col justify-between w-[32%] h-[11.53rem]  border px-8 py-6  rounded-2xl  border-borderColor-100">
      <div className="flex justify-between  ">
        <div className=" items-center flex w-[60%] gap-x-1 ">
          <div className="  w-[25%]">
            <ImageStyle src={image} />
          </div>
          <div className=" w-[75%]">
            <p className="font-md font-medium  text-sm w-[8.654rem]">{name}</p>
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
            confirmButtonClick={() => {
              dispatch(toggleNormalFeedback(true)),
                dispatch(setUserName(fromName)),
                dispatch(setCardId(cardId)),
                dispatch(setFromId(fromId)),
                dispatch(setFeedbackCompetencies(feedBackMetaData)),
                console.log("metaData", feedBackMetaData),
                console.log(
                  "datatat",
                  feedBackMetaData.find(
                    (item, index) => item.name == "feedbackAbout",
                  )?.value
                    ? feedBackMetaData.find(
                        (item, index) => item.name == "feedbackAbout",
                      ).value
                    : "",
                );
            }}
          />

          <PenndingButton
            icon={<Icons.RedFeedback />}
            bgColor="#FBE8E8"
            hoverColor=" #DB1A1A"
            deleteButtonClick={() => {
              dispatch(HandelOpenPopUpDelete(true)),
                dispatch(setIdToDeletePendingPage(cardId));
            }}
          />
        </div>
      </div>
      <div className="text-xs text-slate-700">{text}</div>
      {oPenPopUp && (
        <ConfirmDelete
          deleteText="Are you sure to Decline? "
          confirmButtonText="Decline"
          onConfirm={() => {
            handleDelete(id);
          }}
        />
      )}
      {openNormalFeedbackPopUp && <GiveNormalFeedback />}
    </div> //card
  );
}
