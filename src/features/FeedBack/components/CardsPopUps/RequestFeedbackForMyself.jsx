import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Icons from "../../../../themes/icons";
import Button from "../../../../components/Button/Button";
import Header from "../../../../components/Header/Header";
import FormPopUp from "../../../../components/PopUp/FormPopUp";

import axios from "axios";

import { jwtDecode } from "jwt-decode";
import Select from "react-select";

import {
  changeDropDownValue,
  toogleRequestFeedbackForMySelf,
} from "../../slices/openPopUpSlice";
import {
  getUserCompetencies,
  getAllUsersNames,
  getTeamLeaderId,
  getFeedbacks,
} from "../../slices/Api/feedbackApi";

const schema = yup.object().shape({
  //userIdTo: yup.string().required("Request is required"),
  message: yup.string().required("Message is required"),
  competencies: yup
    .array()
    .min(1, "Select at least one competency")
    .of(
      yup.object().shape({
        value: yup.string().required(),
        label: yup.string().required(),
      }),
    ),
});

export default function RequestFeedbackForMyself({ OnClose }) {
  const dispatch = useDispatch();
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [addToggle, setAddToggle] = useState(false);
  const [userIdTo, setUserIdTo] = useState("");
  const [selectedUserId, setSelectedUserId] = useState("");
  const [selectedTeamId, setSelectedTeamId] = useState("");

  const [usernames, setUsernames] = useState([]);
  const [selectedCompetencies, setSelectedCompetencies] = useState([]);
  const [competenciesData, setCompetenciesData] = useState([]);
  const user = useSelector(
    (state) => state.persistantReducer.userDataReducer.userData,
  );
  const userIdFrom = jwtDecode(user).userId;

  const RequestFeedbackForMySelfPopUp = useSelector(
    (state) => state.openPopUpSlice.requestFeedbackForMySelf,
  );
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    fetchUsernames();
    handleOpenPopup();
  }, []);

  const fetchUsernames = async () => {
    const userData = await getAllUsersNames();
    const usernames = userData?.data.usersNames?.map((user) => ({
      value: user._id,
      label: user.username,
      teamId: user.team,
    }));
    setUsernames(usernames);
  };

  const fetchTeamLeader = async (userId) => {
    const response = await getTeamLeaderId(userId);
    console.log("hhh", response);
    const teamLeaderId = response.data.teamLeader._id;
    console.log("Team Leader ID:", teamLeaderId);
  };

  const fetchCompetencies = async (teamId) => {
    const competencyResponse = await getUserCompetencies(teamId);
    const competenciesData = competencyResponse.data.teamCompetencies.map(
      (item) => ({
        value: item._id,
        label: item.name,
      }),
    );
    setCompetenciesData(competenciesData);
  };

  const fetchTeamLeaderAndCompetencies = (userId, teamId) => {
    fetchTeamLeader(userId);
    fetchCompetencies(teamId);
  };

  const handleOpenPopup = () => {
    setPopupOpen(true);
  };

  const handleSearchInputChange = (inputValue) => {
    if (inputValue) {
      const filteredUsernames = usernames.filter((user) =>
        user.label.toLowerCase().startsWith(inputValue.toLowerCase()),
      );
      setUsernames(filteredUsernames);
    } else {
      fetchUsernames();
    }
  };
  async function postPraise(data) {
    const response = await getFeedbacks(data);
    console.log(response);
    handleClosePopup();
  }
  const handleClosePopup = () => {
    dispatch(toogleRequestFeedbackForMySelf(false));
    dispatch(changeDropDownValue(""));

    OnClose ? OnClose() : "";
  };

  const formSubmit = (data) => {
    const formData = {
      feedbackMainData: {
        userIdFrom: userIdFrom,
        userIdTo: selectedUserId,
        message: data.message,
        visibility: [userIdFrom, selectedUserId],
        feedbackType: "requested",
      },
      feedBackMetaData: [],
    };

    if (selectedCompetencies.length > 0) {
      formData.feedBackMetaData.push({
        name: "competency",
        value: selectedCompetencies.map((item) => ({
          competencyId: item.value,
        })),
      });
    }
    formData.feedBackMetaData.push({
      name: "feedbackStatus",
      value: "pending",
    });

    //  data
    console.log("Formatted Form Data:", formData);
    postPraise(formData);
  };

  return (
    <>
      <FormPopUp
        isOpen={RequestFeedbackForMySelfPopUp}
        ClosePop={handleClosePopup}
        TitlePopUp="Request Feedback For My Self"
        iconLeft={<Icons.ArrowLeftPop />}
      >
        <form onSubmit={handleSubmit(formSubmit)} className="  pb-4 ">
          <div className="px-1">
            <div className="pt-4">
              <Header text="Request To" />

              <Select
                className="mt-2"
                {...register("userIdTo")}
                options={usernames}
                onChange={(selectedOption) => {
                  setUserIdTo(selectedOption.value);
                  setSelectedUserId(selectedOption.value);
                  setSelectedTeamId(selectedOption.teamId);
                  fetchTeamLeaderAndCompetencies(
                    selectedOption.value,
                    selectedOption.teamId,
                  );
                }}
                placeholder="Who will give the feedback"
                defaultValue={userIdTo}
                onInputChange={handleSearchInputChange}
              />

              {errors.userIdTo && (
                <p className="text-red-500">{errors.userIdTo.message}</p>
              )}
            </div>
            <div className="pt-4">
              <Header text="Message" />
              <div className="mt-2">
                <textarea
                  rows={4}
                  placeholder="Write message"
                  wrap="soft"
                  {...register("message")}
                  className={`min-h-20 resize-none block max-h-20 bg-white w-full text-body1Size rounded-buttonRadius border-0 py-2.5 px-2 shadow-sm ring-1 ring-fontColor-outLineInputColor placeholder:text-fontColor-placeHolderColor focus:ring-2 focus:ring-buttonColor-baseColor focus:outline-none sm:text-sm sm:leading-6 ${errors.message && "border-red-500"}`}
                />
                {errors.message && (
                  <p className="text-red-500">{errors.message.message}</p>
                )}
              </div>
            </div>
            <div className="inline-flex justify-between items-center w-full pb-4 mt-3">
              <div>
                <Header text="Give feedback on specific competencies" />
                <p className="text-fontColor-placeHolderColor  text-body1Size">
                  Give feedback on specific competencies
                </p>
              </div>
              <div>
                <label className="inline-flex items-center cursor-pointer bg-slate-100">
                  <input
                    type="checkbox"
                    value=""
                    className="sr-only peer"
                    onChange={(e) => {
                      setAddToggle(e.target.checked);
                    }}
                  />
                  <div className="relative w-11 h-6 peer-focus:outline-none rounded-full peer dark:bg-fontColor-placeHolderColor peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-buttonColor-baseColor"></div>
                </label>
              </div>
            </div>
          </div>
          {/* dropdown */}
          {addToggle && (
            <div className="relative my-2">
              <Select
                isMulti
                {...register("competencies")}
                name="competencies"
                options={competenciesData}
                value={selectedCompetencies}
                onChange={setSelectedCompetencies}
                closeMenuOnSelect={false}
                className={`select ${errors.competencies ? "is-invalid" : ""}`}
              />
              {errors.competencies && (
                <p className="text-red-500">{errors.competencies.message}</p>
              )}
            </div>
          )}
          <div className="flex items-center justify-end border-t border-gray-200 py-3 mx-1">
            <Button
              className="px-6 py-3.5 text-fontColor-whiteBaseColor"
              buttonText="Request"
              type="submit"
            />
          </div>
        </form>
      </FormPopUp>
    </>
  );
}
