import React, { useEffect, useState } from "react";
import FormPopUp from "../../../../components/PopUp/FormPopUp";
import Header from "../../../../components/Header/Header";
import TextInput from "../../../../components/TextInput/TextInput";
import Icons from "../../../../themes/icons";
import Button from "../../../../components/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Cookies from "universal-cookie";
// import { persistReducer } from "redux-persist";
import {
  changeDropDownValue,
  toogleRequestFeedbackForSomeOne,
} from "../../slices/openPopUpSlice";
import { useGetTeamsNameQuery } from "../../../ManageTeams/slices/apis/apiSlice";
import { jwtDecode } from "jwt-decode";
import {
  getUserCompetencies,
  getAllUsersNames,
  getFeedbacks,
  getTeamLeaderId,
} from "../../slices/Api/feedbackApi";
import toast from "react-hot-toast";

const schema = yup.object({
  userIdFrom: yup.string().required("Receiver is required"),
  userIdTo: yup.string().required("Please select an option"),
  message: yup.string().required("Message is required"),
  visibility: yup.string().required("Visibility is required"),
  competency: yup
    .string()
    .required("competency is required when checkbox is checked"),
});
export default function RequestFeedbackSomeOne() {
  const dispatch = useDispatch();
  const [addToogle, setAddToggle] = useState(false);
  const [usersName, setUsersNames] = useState([{}]);
  const [userID, setUserID] = useState("");
  const [usersNameID, setUsersNameID] = useState("");
  const [usersNameIDTwo, setUsersNameIDTwo] = useState("");
  const [competencies, setCompetencies] = useState([]);
  const [teamId, setTeamId] = useState("");
  console.log("team", teamId);
  const RequestFeedbackForSomeOnePopUp = useSelector(
    (state) => state.openPopUpSlice.requestFeedbackForSomeOne,
  );
  const takeToken = useSelector(
    (state) => state.persistantReducer.userDataReducer.userData,
  );
  console.log("userNameidfrom", usersNameID);

  console.log("userNameidto", usersNameIDTwo);
  console.log("iduser", userID);

  // to feeeetchhhh commmpeticesssssss
  // ---1-fecth id of username selected
  useEffect(() => {
    const [team] = usersName
      .filter((user) => user._id === usersNameID)
      .map((user) => user.team);
    setTeamId(team);
  }, [usersNameID]);
  //--2-fetch compentinces
  useEffect(() => {
    if (!teamId) return;
    const fetchData = async () => {
      try {
        const data = await getUserCompetencies(teamId);
        console.log("daddadadad", data);
        if (data) {
          setCompetencies(data);
        }
        console.log("cccciiidid", data.data.teamCompetencies._id);
      } catch (error) {
        console.log("error from get compentancy", error);
      }
    };
    fetchData();
  }, [teamId]);

  // userIdloggggginnnnnnnn
  useEffect(() => {
    let decodedToken;
    {
      takeToken.length > 0 && (decodedToken = jwtDecode(takeToken));
    }
    setUserID(decodedToken.userId);
    getAllUsersData();
    getAllUsersDataTwo();
  }, []);

  // recevieeerrrrrrrrrrrrrrrrrrrr
  const getAllUsersData = async (selectedUserId, userID) => {
    const data = await getAllUsersNames();
    const allUsers = data.data.usersNames;
    console.log("All", allUsers);
    const filteredUsers = allUsers.filter((user) => user._id !== userID);
    console.log("filter", filteredUsers);
    setUsersNames(allUsers);
    if (selectedUserId) {
      const selectedUser = allUsers.find((user) => user._id == selectedUserId);
      if (selectedUser) {
        setUsersNameID(selectedUser._id);
      }
    }
    console.log("fromm", selectedUserId);
  };
  // sennnderrrrrrrrrrrrrrrrrrr
  const getAllUsersDataTwo = async (selectedUserIdTwo) => {
    const data = await getAllUsersNames();
    const allUsers = data.data.usersNames;
    setUsersNames(allUsers);
    if (selectedUserIdTwo) {
      const selectedUserTwo = allUsers.find(
        (user) => user._id == selectedUserIdTwo,
      );
      if (selectedUserTwo) {
        setUsersNameIDTwo(selectedUserTwo._id);
      }
    }
    console.log("toooo", selectedUserIdTwo);
  };

  async function postPraise(data) {
    const response = await getFeedbacks(data);
    console.log(response);
  }
  //
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (value) => {
    try {
      const requestObject = {
        feedbackMainData: {
          userIdFrom: usersNameIDTwo,
          userIdTo: userID,
          message: value.message,
          visibility: value.visibility.split(","),
          feedbackType: "requested",
        },
        feedBackMetaData: [
          {
            name: "competency",
            value: [{ competencyId: value.competency }],
          },
          {
            name: "feedbackAbout",
            value: usersNameID,
          },
          {
            name: "feedbackStatus",
            value: "pending",
          },
        ],
      };
      console.log("datasend", requestObject);
      postPraise(requestObject);
      toast.success("your respond is submitted successfully!");
      handleClosePopup();
      reset();
    } catch (error) {
      console.log("error", error);
      toast.error("your respond is not submitted successfully!");
    }
  };

  const handleClosePopup = () => {
    dispatch(toogleRequestFeedbackForSomeOne(false));
    dispatch(changeDropDownValue(""));
  };

  return (
    <>
      <FormPopUp
        isOpen={RequestFeedbackForSomeOnePopUp}
        ClosePop={handleClosePopup}
        TitlePopUp={"Request FeedBack for Some One"}
        iconLeft={<Icons.ArrowLeftPop />}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <div
            className="w-[35vw] max-h-[69vh] pb-4 overflow-y-auto"
            style={{ scrollbarWidth: "none" }}
          >
            <div className="px-1 ">
              <div className="pt-4">
                <Header text="Receiver" />
                <select
                  name="userIdFrom"
                  {...register("userIdFrom")}
                  onChange={(e) => getAllUsersData(e.target.value)}
                  className={`block text-fontColor-placeHolderColor appearance-none w-full bg-white border-0 py-2.5 px-2 ring-1 ring-inset ring-fontColor-outLineInputColor  rounded-buttonRadius shadow-sm   focus:shadow-outline focus:ring-2 focus:ring-buttonColor-baseColor focus:outline-none `}
                >
                  <option value="" selected disabled>
                    AllUsers
                  </option>
                  {usersName &&
                    usersName.map((item, index) => {
                      return (
                        <>
                          <option key={index} value={item._id}>
                            {item.username}
                          </option>
                        </>
                      );
                    })}
                </select>
              </div>
              {errors.userIdFrom ? (
                <p className="text-deleteColor-50">
                  {errors.userIdFrom.message}
                </p>
              ) : null}
              <div className="pt-4">
                <Header text="Sender" />

                <select
                  name="userIdTo"
                  {...register("userIdTo")}
                  onChange={(e) => getAllUsersDataTwo(e.target.value)}
                  className={`block text-fontColor-placeHolderColor appearance-none w-full bg-white border-0 py-2.5 px-2 ring-1 ring-inset ring-fontColor-outLineInputColor  rounded-buttonRadius shadow-sm   focus:shadow-outline focus:ring-2 focus:ring-buttonColor-baseColor focus:outline-none `}
                >
                  <option value="" selected disabled>
                    AllUsers
                  </option>
                  {usersName &&
                    usersName.map((item) => {
                      return (
                        <>
                          <option key={item._id} value={item._id}>
                            {item.username}
                          </option>
                        </>
                      );
                    })}
                </select>
                {errors.userIdTo ? (
                  <p className="text-deleteColor-50">
                    {errors.userIdTo.message}
                  </p>
                ) : null}
              </div>
              <div className="pt-4">
                <Header text="Message" />
                <div className="mt-2">
                  <textarea
                    {...register("message")}
                    rows={4}
                    placeholder="Write your honest feedback"
                    wrap="soft"
                    id="message"
                    name="message"
                    className="min-h-20 resize-none block max-h-20 bg-white w-full text-body1Size rounded-buttonRadius border-0 py-2.5 px-2 shadow-sm ring-1 ring-fontColor-outLineInputColor placeholder:text-fontColor-placeHolderColor focus:ring-2 focus:ring-buttonColor-baseColor focus:outline-none sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              {errors.message ? (
                <p className="text-deleteColor-50">{errors.message?.message}</p>
              ) : null}
              <div className="pt-4 mb-4">
                <Header text="Visibility" />
                <div className="flex flex-wrap">
                  <select
                    name="visibility"
                    {...register("visibility")}
                    className={`block text-fontColor-placeHolderColor appearance-none w-full bg-white border-0 py-2.5 px-2 ring-1 ring-inset ring-fontColor-outLineInputColor  rounded-buttonRadius shadow-sm   focus:shadow-outline focus:ring-2 focus:ring-buttonColor-baseColor focus:outline-none `}
                  >
                    <option value="">Select who can see this</option>
                    {usersNameID && usersNameIDTwo && userID && (
                      <>
                        <option
                          value={
                            usersNameID + "," + usersNameIDTwo + "," + userID
                          }
                        >
                          Sender, receiver and me
                        </option>
                        <option value={usersNameIDTwo + "," + userID}>
                          Only sender and me
                        </option>
                      </>
                    )}
                  </select>
                </div>
                {errors.visibility ? (
                  <p className="text-deleteColor-50">
                    {errors.visibility.message}
                  </p>
                ) : null}
                <div className="inline-flex justify-between items-center w-full pb-4">
                  <div>
                    <Header text="Attach specific competencies for feedback" />
                    <p className="text-fontColor-placeHolderColor text-body1Size">
                      Request feedback on specific competencies
                    </p>
                  </div>
                  <div>
                    <label className="inline-flex items-center cursor-pointer ">
                      <input
                        type="checkbox"
                        value=""
                        className="sr-only peer"
                        onChange={(e) => {
                          setAddToggle(e.target.checked);
                        }}
                      />
                      <div className="relative w-11 h-6 peer-focus:outline-none rounded-full peer dark:bg-fontColor-placeHolderColor peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content: [''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-buttonColor-baseColor"></div>
                    </label>
                  </div>
                </div>
              </div>

              {addToogle && (
                <div className="relative my-2">
                  <select
                    {...register("competency")}
                    className={`block appearance-none w-full bg-white border-0 py-2.5 px-2 ring-1 ring-inset ring-fontColor-outLineInputColor rounded-buttonRadius shadow-sm focus:shadow-outline focus:ring-2 focus:ring-buttonColor-baseColor focus:outline-none ${competencies === "" ? "text-fontColor-placeHolderColor" : "text-fontColor-blackBaseColor"}`}
                  >
                    <option value="selectcompetency">Select competency</option>
                    {competencies?.data?.teamCompetencies?.map(
                      (competen, index) => {
                        return (
                          <option value={competen._id} key={index}>
                            {competen.name}
                          </option>
                        );
                      },
                    )}
                  </select>
                  {errors.competency ? (
                    <p className="text-deleteColor-50">
                      {errors.competency.message}
                    </p>
                  ) : null}
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <Icons.ArrowDownBlack />
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="flex items-center justify-end border-t border-gray-200 py-3 mx-1 ">
            <Button
              type="submit"
              className="px-10 py-2.5 text-fontColor-whiteBaseColor"
              buttonText="Give Feedback"
            />
          </div>
        </form>
      </FormPopUp>
    </>
  );
}
