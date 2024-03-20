import React, { useEffect, useState } from "react";
import PendingCardItem from "./PendingCardItem";
import image1 from "../../../../assets/images/boy4.png";
import { useDispatch, useSelector } from "react-redux";
import { jwtDecode } from "jwt-decode";
import Icons from "../../../../themes/icons";
import Pagination from "../../../../components/Pagination/Pagination";
import { getDataWithPagination } from "../../utils/helperFunctions";
import { setAcceptPending } from "../../slices/acceptPending";

export default function PendingCards() {
  const dispatch = useDispatch();
  const [numberOfPages, setNumberOfPages] = useState(0);

  const [isLoadingFeedback, setIsLoadingFeedback] = useState(false);
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const acceptDone = useSelector((state) => state.confirmSlice.acceptDone);
  const userData = useSelector(
    (state) => state.persistantReducer.userDataReducer.userData,
  );
  const userId = userData.length > 0 ? jwtDecode(userData).userId : "";
  useEffect(() => {
    getDataWithPagination(
      setIsLoadingFeedback,
      setData,
      1,
      userId,
      setNumberOfPages,
      false,
      false,
      true,
    );
    dispatch(setAcceptPending(false));
  }, [acceptDone]); //to refresh when accept pending
  const handlePageClick = (event) => {
    getDataWithPagination(
      setIsLoadingFeedback,
      setData,
      event.selected + 1,
      userId,
      setNumberOfPages,
      false,
      false,
      true,
    );
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
        ) : data.filter((item) => item.feedbackMainData.userIdFrom).length >
          0 ? ( //filter to make sure the sender account dosent deleted
          data
            .filter((item) => item.feedbackMainData.userIdFrom)
            .map((item, index) => (
              <PendingCardItem
                key={item.feedbackMainData._id}
                cardId={item.feedbackMainData._id} //the id of the card to accept or delete it
                text={item.feedbackMainData.message}
                name={`${item.feedbackMainData.userIdFrom.firstName} ${item.feedbackMainData.userIdFrom.lastName}`}
                date={item.feedbackMainData.createdAt.substring(0, 10)}
                image={image1}
                feedBackMetaData={item.feedBackMetaData} //to display competencies in the feedback popup when press accept
                fromName={
                  item.feedBackMetaData.find(
                    (item, index) => item.name == "feedbackAbout",
                  )?.value.userName
                    ? item.feedBackMetaData.find(
                        (item, index) => item.name == "feedbackAbout",
                      ).value.userName
                    : item.feedbackMainData.userIdFrom.username
                } //to put it in dropdown label when make normal feedback when press ✅ ==>(the name of the person that want feedback(it will be the name of the reciever when accept the request and send normal feedback))
                fromId={
                  item.feedBackMetaData.find(
                    (item, index) => item.name == "feedbackAbout",
                  )?.value._id
                    ? item.feedBackMetaData.find(
                        (item, index) => item.name == "feedbackAbout",
                      ).value._id
                    : item.feedbackMainData.userIdFrom._id
                } //to put in normal feedback submit ==>(the id of the person that want feedback(it will be the id of the reciever when accept the request and send normal feedback))
                getDataWithPagination={getDataWithPagination} //to refresh when delete  item when press delete in pendingcarditem page
                currentPage={currentPage} //to know your current page in pagination to refresh it
                setIsLoadingFeedback={setIsLoadingFeedback} //to make set to loader in pendingcards by the pendingcarditem when delete item
                setData={setData} //to set the array of feedbacks displayed in the page
                userId={userId} //to get userIdTo=userId
                setNumberOfPages={setNumberOfPages} //to set number of pages
              />
            ))
        ) : isLoadingFeedback == false &&
          data.filter((item) => item.feedbackMainData.userIdFrom).length ==
            0 ? (
          <div className="w-full flex flex-row justify-center">
            <p>There is No Pending Requests Exist</p>
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
