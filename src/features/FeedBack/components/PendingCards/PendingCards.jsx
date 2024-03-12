import React, {  useEffect, useState } from "react";
import PendingCardItem from "./PendingCardItem";
import image1 from "../../../../assets/images/boy4.png";
import { useSelector } from "react-redux";
import { jwtDecode } from "jwt-decode";
import Icons from "../../../../themes/icons";
import Pagination from "../../../../components/Pagination/Pagination";
import { getDataWithPagination } from "../../utils/helperFunctions";

export default function PendingCards() {
  const [numberOfPages, setNumberOfPages] = useState(0)

  const [isLoadingFeedback, setIsLoadingFeedback] = useState(false)
  const [data, setData] = useState([])
  const [currentPage, setCurrentPage] = useState(1)

  const userData = useSelector(state => state.persistantReducer.userDataReducer.userData)
  const userId = userData.length > 0 ? jwtDecode(userData).userId : ""
  useEffect(() => {
    getDataWithPagination(setIsLoadingFeedback, setData, 1, userId, setNumberOfPages,false,false,true)
  }, [])
  const handlePageClick = (event) => {
    getDataWithPagination(setIsLoadingFeedback, setData, event.selected + 1, userId, setNumberOfPages,false,false,true)

  };
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
        ) : data.length > 0 ? (
          data.filter((item) => item.feedbackMainData.userIdFrom).map((item, index) => (
            <PendingCardItem
              key={item.feedbackMainData._id}
              cardId={item.feedbackMainData._id}
              text={item.feedbackMainData.message}
              name={`${item.feedbackMainData.userIdFrom.firstName} ${item.feedbackMainData.userIdFrom.lastName}`}
              date={item.feedbackMainData.createdAt.substring(0, 10)}
              image={image1}
              getDataWithPagination={getDataWithPagination}
              currentPage={currentPage}
              setIsLoadingFeedback={setIsLoadingFeedback}
              setData={setData}
              userId={userId}
              setNumberOfPages={setNumberOfPages}
            />
          ))
        ) : isLoadingFeedback == false && data.length == 0 ? (
          <div className="w-full flex flex-row justify-center">
            <p>There is No Pending Requests Exist</p>
          </div>
        ) : (
          data.length > 0 ? (
            data.map((item, index) => (
              <PendingCardItem key={item.feedbackMainData._id} cardId={item.feedbackMainData.userIdFrom._id} text={item.feedbackMainData.message} name={`${item.feedbackMainData.userIdFrom.firstName} ${item.feedbackMainData.userIdFrom.lastName}`} date={item.feedbackMainData.createdAt.substring(0, 10)} image={image1} />
            ))
          ) : (
            (isLoadingFeedback == false && data.length == 0) ? <div className='w-full flex flex-row justify-center'>
              <p>There is No Pending Requests Exist</p>
            </div> : ""
          ))
        }
        {numberOfPages != 0 && <Pagination handlePageClick={handlePageClick} numberOfPages={numberOfPages} />}

      </main>
    </>
  );
}
