import React, { Component, useEffect, useState } from "react";
import RequestCardItem from "./RequestCardItem";
import image2 from "../../../../assets/images/boy3.png";
import { useSelector } from "react-redux";
import { jwtDecode } from "jwt-decode";
import Icons from "../../../../themes/icons";
import Pagination from "../../../../components/Pagination/Pagination";
import { getDataWithPagination } from "../../utils/helperFunctions";
function RequestCards() {
  const [numberOfPages, setNumberOfPages] = useState(0);
  const [data, setData] = useState([]);
  const [isLoadingFeedback, setIsLoadingFeedback] = useState(false);
  const userData = useSelector(
    (state) => state.persistantReducer.userDataReducer.userData,
  );
  const [currentPage, setCurrentPage] = useState(1);
  const userId = userData.length > 0 ? jwtDecode(userData).userId : "";
  useEffect(() => {
    getDataWithPagination(
      setIsLoadingFeedback,
      setData,
      1,
      userId,
      setNumberOfPages,
      true,
      false,
      false,
    );
  }, []);
  const handlePageClick = (event) => {
    getDataWithPagination(
      setIsLoadingFeedback,
      setData,
      event.selected + 1,
      userId,
      setNumberOfPages,
      true,
      false,
      false,
    );
  };
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
        ) : data.length > 0 ? (
          data
            .filter((item) => item.feedbackMainData.userIdTo)
            .map((item, index) => (
              <RequestCardItem
                key={item.feedbackMainData._id}
                text={item.feedbackMainData.message}
                image={image2}
                name={`${item.feedbackMainData.userIdTo.firstName} ${item.feedbackMainData.userIdTo.lastName}`}
                date={item.feedbackMainData.createdAt.substring(0, 10)}
                cardId={item.feedbackMainData._id}
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
            <p>There is No Requestes Exist</p>
          </div>
        ) : (
          ""
        )}
        {
          <Pagination
            handlePageClick={handlePageClick}
            numberOfPages={numberOfPages}
          />
        }
      </main>
    </>
  );
}

export default RequestCards;
