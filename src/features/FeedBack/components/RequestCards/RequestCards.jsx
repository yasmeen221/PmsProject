import React, { Component } from "react";
import RequestCardItem from "./RequestCardItem";
import image2 from "../../../../assets/images/boy3.png";
import { useSelector } from "react-redux";
import { jwtDecode } from "jwt-decode";
import Icons from "../../../../themes/icons";

function RequestCards() {
  const { isLoadingFeedback, error, feedbacks } = useSelector(
    (state) => state.ViewFeedback,
  );
  const userData = useSelector(
    (state) => state.persistantReducer.userDataReducer.userData,
  );
  const userId = userData.length > 0 ? jwtDecode(userData).userId : "";
  // console.log(userId);
  // console.log(isLoadingFeedback, error, feedbacks);
  const filterMyRequestFeedback =
    feedbacks.length > 0
      ? feedbacks.filter(
          (item, index) =>
            item.feedbackMainData?.userIdFrom &&
            item.feedbackMainData?.userIdTo &&
            item.feedbackMainData?.userIdFrom?._id === userId && //first two to filter feedback if the sender or reciver account deleted
            item.feedbackMainData.feedbackType == "requested" &&
            (item.feedBackMetaData[0]?.value == "pending" ||
              item.feedBackMetaData[1]?.value == "pending" ||
              item.feedBackMetaData[2]?.value == "pending"),
        )
      : [];
  // console.log(filterMyRequestFeedback);
  return (
    <>
      <header className="font-bold text-lg w-[18.5rem] h-[1.668rem] my-6">
        {" "}
        My Request
      </header>

      <main className=" flex flex-wrap gap-x-2 gap-y-4">
        {isLoadingFeedback == true ? (
          <div className="w-full flex flex-row justify-center">
            <Icons.Loading />
          </div>
        ) : filterMyRequestFeedback.length > 0 ? (
          filterMyRequestFeedback.map((item, index) => (
            <RequestCardItem
              key={item.feedbackMainData._id}
              text={item.feedbackMainData.message}
              image={image2}
              name={`${item.feedbackMainData.userIdTo.firstName} ${item.feedbackMainData.userIdTo.lastName}`}
              date={item.feedbackMainData.createdAt.substring(0, 10)}
              cardId={item.feedbackMainData._id}
            />
          ))
        ) : isLoadingFeedback == false &&
          filterMyRequestFeedback.length == 0 ? (
          <div className="w-full flex flex-row justify-center">
            <p>There is No Requestes Exist</p>
          </div>
        ) : (
          ""
        )}
      </main>
    </>
  );
}

export default RequestCards;
