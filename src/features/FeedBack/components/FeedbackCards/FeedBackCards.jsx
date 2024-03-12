import React, { useEffect, useState } from "react";
import FeedbackCard from "../FeedbackCards/FeedbackCard";
import Icons from "../../../../themes/icons";
import Pagination from "../../../../components/Pagination/Pagination";
import { getDataWithPagination } from "../../utils/helperFunctions";

export default function FeedBackCards() {
  const [isLoadingFeedback, setIsLoadingFeedback] = useState(false)
  const [data, setData] = useState([])
  const [numberOfPages, setNumberOfPages] = useState(0)
  
  useEffect(() => {
    getDataWithPagination(setIsLoadingFeedback, setData, 1, "", setNumberOfPages,false,true,false)
  }, [])
  const handlePageClick = (event) => {
    getDataWithPagination(setIsLoadingFeedback, setData, event.selected + 1, "", setNumberOfPages,false,true,false)
  };
  return (
    <>
      <header className="font-bold text-lg w-[18.5rem] h-[1.668rem] my-6">
        {" "}
        Feedback
      </header>

      <main className="flex flex-wrap  gap-x-1 gap-y-3">
        {isLoadingFeedback == true ? (
          <div className="w-full flex flex-row justify-center ">
            <Icons.Loading />
          </div>
        ) : data.length > 0 ? (
          data.map((item, index) => (
            <FeedbackCard
              key={item.feedbackMainData._id}
              text={item.feedbackMainData.message}
              label={
                item.feedbackMainData.feedbackType == "normal"
                  ? "feedback"
                  : "praise"
              }
              fromName={`${(item?.feedbackMainData?.userIdFrom?.firstName) ? item.feedbackMainData.userIdFrom.firstName : "not found"} ${(item.feedbackMainData?.userIdFrom?.lastName) ? item.feedbackMainData.userIdFrom.lastName : ""}`}
              toName={`${(item?.feedbackMainData?.userIdTo?.firstName) ? item.feedbackMainData.userIdTo.firstName : "not found"} ${(item?.feedbackMainData?.userIdTo?.lastName) ? item.feedbackMainData.userIdTo.lastName : ""}`}
              date={item.feedbackMainData.createdAt.substring(0, 10)} 

            />
          ))
        ) : isLoadingFeedback == false && data.length == 0 ? (
          <div className="w-full flex flex-row justify-center">
            <p>There is No Feedbacks Exist</p>
          </div>
        ) : (
          ""
        )}
        {numberOfPages != 0 && <Pagination handlePageClick={handlePageClick} numberOfPages={numberOfPages} />}
      </main>
    </>
  );
}
