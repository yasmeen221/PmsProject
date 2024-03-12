import React from "react";
import ImageStyle from "../../../../components/ImageStyle/ImageStyle";
import { useDispatch, useSelector } from "react-redux";
import ConfirmDelete from "../../../../components/Delete/ConfirmDelete";
import { HandelOpenPopUpDelete } from "../../../ManageTeams/slices/HandelOpenDelete";
import { deleteFeedback,  } from "../../slices/Api/feedbackApi";

export default function RequestCardItem({text,image,name,date,cardId,getDataWithPagination,currentPage,setIsLoadingFeedback,setData,userId,setNumberOfPages}) {
  const dispatch = useDispatch();
  const oPenPopUp = useSelector(
    (state) => state.openPopUpConfirmDeleteSlice.open,
  );
  const handleDelete=(cardId)=>{
    deleteFeedback(cardId).then((res)=>{
      getDataWithPagination(setIsLoadingFeedback,setData,currentPage,userId,setNumberOfPages,true,false,false)
      // console.log(res)
    })
  }
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
          <button onClick={()=>dispatch(HandelOpenPopUpDelete(true))}
           className=" flex items-center justify-center bg-white px-2 py-4 w-[4.688rem] h-2 text-sm font-medium font-fontColor-900 rounded-md border  text- border-borderColor-200 hover:bg-green-100 active:bg-green-300">
            Cancel
          </button>
        </div>
      </div>
      {oPenPopUp && <ConfirmDelete deleteText="Are you sure to Decline? " confirmButtonText="Decline" onConfirm={()=>{handleDelete(cardId)}} />}

    </div>
  );
}
