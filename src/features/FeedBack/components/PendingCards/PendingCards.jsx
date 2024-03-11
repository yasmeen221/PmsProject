import React, { Component } from "react";
import PendingCardItem from "./PendingCardItem";
import image1 from "../../../../assets/images/boy4.png";
import { useSelector } from "react-redux";
import { jwtDecode } from "jwt-decode";
import Icons from "../../../../themes/icons";

export default function PendingCards() {
  const { isLoadingFeedback, error, feedbacks } = useSelector(state => state.ViewFeedback)
  const userData=useSelector(state=>state.persistantReducer.userDataReducer.userData)
  const userId=userData.length>0?jwtDecode(userData).userId :""
  const filterRequestFeedback = feedbacks.length > 0 ? feedbacks.filter((item, index) => (item.feedbackMainData.userIdFrom&&item.feedbackMainData.userIdTo&&item.feedbackMainData.userIdTo._id===userId&&item.feedbackMainData.feedbackType == "requested"   //first two to filter feedback if the sender or reciver account deleted
  &&(item.feedBackMetaData[0]?.value=="pending"||item.feedBackMetaData[1]?.value=="pending"||item.feedBackMetaData[2]?.value=="pending"))) : []
// console.log(filterRequestFeedback)
  return (
    <>
      <header className="font-bold text-lg w-[18.5rem] h-[1.668rem] my-6">
        {" "}
        Pending Your Action
      </header>
      <main className="flex gap-x-2 gap-y-4 flex-wrap ">
        {isLoadingFeedback == true ? (
          <div className="w-full flex flex-row justify-center">
            <Icons.Loading />
          </div>
        ) : filterRequestFeedback.length > 0 ? (
          filterRequestFeedback.map((item, index) => (
            <PendingCardItem
              key={item.feedbackMainData._id}
              cardId={item.feedbackMainData._id}
              text={item.feedbackMainData.message}
              name={`${item.feedbackMainData.userIdFrom.firstName} ${item.feedbackMainData.userIdFrom.lastName}`}
              date={item.feedbackMainData.createdAt.substring(0, 10)}
              image={image1}
            />
          ))
        ) : isLoadingFeedback == false && filterRequestFeedback.length == 0 ? (
          <div className="w-full flex flex-row justify-center">
            <p>There is No Pending Requests Exist</p>
          </div>
        ) : (
          filterRequestFeedback.length > 0 ? (
            filterRequestFeedback.map((item, index) => (
              <PendingCardItem key={item.feedbackMainData._id} cardId={item.feedbackMainData.userIdFrom._id} text={item.feedbackMainData.message} name={`${item.feedbackMainData.userIdFrom.firstName} ${item.feedbackMainData.userIdFrom.lastName}`} date={item.feedbackMainData.createdAt.substring(0,10)} image={image1} />
            ))
          ) : (
            (isLoadingFeedback==false&&filterRequestFeedback.length==0)?<div className='w-full flex flex-row justify-center'>
              <p>There is No Pending Requests Exist</p>
            </div>:""
          )
        )
        
      }
        

      </main>
    </>
  );
}
