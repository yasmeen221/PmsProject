import React, { useEffect, useState } from "react";
import TextInput from "../../../../components/TextInput/TextInput";
import FormPopUp from "../../../../components/PopUp/FormPopUp";
import Button from "../../../../components/Button/Button";
import Header from "../../../../components/Header/Header";
import Icons from "../../../../themes/icons";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import RatingScale from "../RatingScale";
import Select from "react-select";
import {
  acceptFeedback,
  getAllUsersNames,
  getTeamLeaderId,
  getUserCompetencies,
} from "../../slices/Api/feedbackApi";
import axiosInstance from "../../../../components/GeneralApi/generalApi";
import { useDispatch, useSelector } from "react-redux";
import { jwtDecode } from "jwt-decode";
import {
  changeDropDownValue,
  toggleNormalFeedback,
} from "../../slices/openPopUpSlice";
import toast from "react-hot-toast";
import { setCardId, setFromId, setUserName } from "../../slices/acceptPending";

const GiveNormalFeedback = ({ }) => {

  const openNormalFeedbackPopUp = useSelector((state) => state.openPopUpSlice.normalFeedbackPopup,);
  const fromName = useSelector((state) => state.confirmSlice.username)
  const cardId = useSelector((state) => state.confirmSlice.cardId)
  const fromId = useSelector((state) => state.confirmSlice.id) //will be send in the form (this name refers it is from id in the pending when i press it)

  // console.log("fid", fromId)
  // console.log("card", cardId)
  // console.log("fff", fromName)


  const [isPopupOpen, setPopupOpen] = useState(false);
  const [teamsBtnChecked, setTeamsBtnChecked] = useState(false);
  const [competencyRatings, setCompetencyRatings] = useState([]);
  const [teamId, setTeamId] = useState("");
  const [userCompetenciesOptions, setUserCompetenciesOptions] = useState([]);
  const [userCompetencies, setUserCompetencies] = useState([]);
  const [usernames, setUsernames] = useState([]);
  const [userId, setUserId] = useState("");
  const [mangerId, setMangerId] = useState("");
  const [competencyFeedback, setCompetencyFeedback] = useState([]);
  const [userCompetenciesErrMsg, setUserCompetenciesErrMsg] = useState(false);
  const [userIdsErrMsg, setUserIdsErrMsg] = useState(false);
  const [competencyRatingsErrMsg, setCompetencyRatingsErrMsg] = useState(false);
  const accessToken = useSelector((state) => state.persistantReducer.userDataReducer.userData,);
  const userIdFrom = accessToken.length > 0 ? jwtDecode(accessToken).userId : ""
  const dispatch = useDispatch();
  useEffect(() => {
    setUserId(fromId)
  }, [fromName, fromId])
  
  const formSubmit = (values) => {
    if (teamsBtnChecked && userCompetencies.length == 0) {
      setUserCompetenciesErrMsg(true);
      return;
    }

    if (teamsBtnChecked && competencyRatings.includes(0)) {
      setCompetencyRatingsErrMsg(true);
      return;
    }
    if (userId === "") {
      setUserIdsErrMsg(true);
      return;
    }
    // if(mangerId === "") {
    //   toast.error("the user did not have a manger yet!")
    //   console.log("mangerId", mangerId)
    //   return;
    // }
    if (
      (userId === "") ||
      teamsBtnChecked &&
      competencyFeedback.length == 0 &&
      competencyRatings.length == 0

    )
      return;
    // console.log({
    //   feedbackMainData: {
    //     userIdFrom,
    //     userIdTo: userId,
    //     message: values.message,
    //     visibility: values.visibility.split(","),
    //     feedbackType: "normal",
    //   },
    //   feedBackMetaData: [
    //     {
    //       name: "competency",
    //       value: userCompetencies.map((competency, index) => {
    //         return {
    //           competencyId: competency.value,
    //           competencyFeedBack: competencyFeedback[index],
    //           rate: competencyRatings[index],
    //         };
    //       }),
    //     },
    //   ],
    // });
    
    try {
        
      const requestData = {
        feedbackMainData: {
            userIdFrom,
            userIdTo: userId,
            message: values.message,
            visibility: values.visibility.split(","),
            feedbackType: "normal",
        },
        feedBackMetaData: [
            {
                name: "competency",
                value: userCompetencies.map((competency, index) => {
                    return {
                        competencyId: competency.value,
                        competencyFeedBack: competencyFeedback[index],
                        rate: competencyRatings[index],
                    };
                }),
            },
        ],
    };
    (!fromId ? axiosInstance.post(`feedback`, requestData) : acceptFeedback(cardId, requestData))
    .then((res) => {
        if (fromId && res.data.status == "success") {
            console.log("res", res)
        }
    })
    .catch((error) => {
        console.error("Error:", error);
    });
      toast.success("your respond is submitted successfully!");
      handleClosePopup();
    } catch (error) {
      console.log("error from create", error);
      toast.error("your respond is not submitted successfully!");
    }
  };

  const usernamesOptions = usernames.map((user) => {
    return { value: !fromId ? user._id : fromId, label: !fromName ? user.username : fromName };
  });
  const schema = yup.object({
    message: yup.string().required(),
    visibility: yup.string().required(),
    competencyFeedback: yup
      .array()
      .of(yup.string().required("Feedback is required")),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    const [team] = usernames
      .filter((user) => user._id === userId)
      .map((user) => user.team);
    setTeamId(team);
  }, [userId]);

  useEffect(() => {
    if (userId === "") return;
    const fetchData = async () => {
      try {
        const data = await getTeamLeaderId(userId);
          setMangerId(data.teamLeader._id);
      } catch (error) {
        console.log("error from get", error);
      }
    };
    fetchData();
  }, [userId]);

  useEffect(() => {
    if (!fromId) { //to get users if there is not id selected from pending card
      const fetchData = async () => {
        try {
          const data = await getAllUsersNames();
          setUsernames(data.data.usersNames);
        } catch (error) {
          console.log("error from get", error);
        }
      };
      fetchData();
    } else {
      // handleUserNameChange()

    }
  }, []);

  useEffect(() => {
    if (!teamId) return;
    const fetchData = async () => {
      try {
        const data = await getUserCompetencies(teamId);
        setUserCompetenciesOptions(
          data.data.teamCompetencies.map((competency) => {
            return { value: competency._id, label: competency.name };
          }),
        );
      } catch (error) {
        console.log("error from get", error);
      }
    };
    fetchData();
  }, [teamId]);

  const handleClosePopup = () => {
    dispatch(toggleNormalFeedback(false));
    dispatch(changeDropDownValue(""));
    setPopupOpen(false);
    dispatch(setUserName("")) //set this values to "" so you add add normal feedback without pending
    dispatch(setFromId(""))
    dispatch(setCardId(""))
  };





  const handleUserNameChange = (selectedOption) => {
    if (!fromId) {
      setUserId(selectedOption.value);

    } else {
      // setUserId(userId);

    }
  };

  const handleUserCompetencyChange = (selectedOption) => {
    setUserCompetencies(selectedOption);
    setCompetencyRatings(Array(selectedOption.length).fill(0));
    setCompetencyFeedback(Array(selectedOption.length).fill(""));
  };
  const handleCompetencyRatingChange = (index, rating) => {
    const updatedRatings = [...competencyRatings];
    updatedRatings[index] = rating;
    setCompetencyRatings(updatedRatings);
  };
  const handleCompetencyFeedbackChange = (index, feedback) => {
    const updatedFeedback = [...competencyFeedback];
    updatedFeedback[index] = feedback;
    setCompetencyFeedback(updatedFeedback);
  };

  const handleDeleteCompetency = (index) => {
    const updatedCompetencies = [...userCompetencies];
    updatedCompetencies.splice(index, 1);

    setUserCompetencies(updatedCompetencies);

    const updatedRatings = [...competencyRatings];
    updatedRatings.splice(index, 1);
    setCompetencyRatings(updatedRatings);

    const updatedFeedback = [...competencyFeedback];
    updatedFeedback.splice(index, 1);
    setCompetencyFeedback(updatedFeedback);
  };

  return (
    <>
      <FormPopUp
        isOpen={openNormalFeedbackPopUp}
        ClosePop={handleClosePopup}
        TitlePopUp="Give Normal  FeedBack"
        iconLeft={<Icons.ArrowLeftPop />}
      >
        <form onSubmit={handleSubmit(formSubmit)} >
          <div
            className="px-1 w-[35vw] max-h-[65vh] pb-4 overflow-y-auto "
            style={{ scrollbarWidth: "none" }}
          >
            <div className="pt-4 ">
              <Header text="Name" />
              <Select
                options={usernamesOptions}
                onChange={handleUserNameChange}
                closeMenuOnSelect={true}
                placeholder={fromName ? fromName : "select.."}
                isDisabled={fromName ? true : false}
              />
              {
                userIdsErrMsg && (<p>you must choose a user</p>)
              }
            </div>
            <div className="pt-4">
              <Header text=" Feedback" />
              <div className="mt-2">
                <textarea
                  {...register("message")}
                  rows={4}
                  placeholder="Write Your honest feedback"
                  wrap="soft"
                  id="message"
                  name="message"
                  className="min-h-20 resize-none block max-h-20 bg-white w-full text-body1Size rounded-buttonRadius border-0  py-2.5 px-2  shadow-sm ring-1 ring-fontColor-outLineInputColor  placeholder:text-fontColor-placeHolderColor focus:ring-2   focus:ring-buttonColor-baseColor focus:outline-none sm:text-sm sm:leading-6"
                />
                {errors.message && (<p className="text-red-500">{errors.message.message}</p>)}
              </div>
            </div>
            <div className="pt-4 mb-4">
              <Header text="Visibility" />
              <div className="flex flex-wrap ">
                <label className="inline-flex items-center mr-4 mb-2">
                  <input
                    type="radio"
                    value={mangerId}
                    {...register("visibility")}
                    className="w-4 h-4"
                    name="visibility"
                  />

                  <span className="ml-2 font-custom text-buttonFontSize font-buttonWeight text-fontColor-blackBaseColor">
                    Manger only
                  </span>
                </label>

                <label className="inline-flex items-center mr-4 mb-2">
                  <input
                    type="radio"
                    value={userId}
                    {...register("visibility")}
                    className="w-4 h-4"
                    name="visibility"
                  />

                  <span className="ml-2 font-custom text-buttonFontSize font-buttonWeight text-fontColor-blackBaseColor">
                    Employee only
                  </span>
                </label>

                <label className="inline-flex items-center mr-4 mb-2">
                  <input
                    type="radio"
                    value={userId + "," + mangerId}
                    {...register("visibility")}
                    className="w-4 h-4"
                    name="visibility"
                  />

                  <span className="ml-2 font-custom text-buttonFontSize font-buttonWeight text-fontColor-blackBaseColor">
                    Manger and Employee
                  </span>
                </label>
              </div>

              {errors.visibility && (
                <p className="text-red-500">{errors.visibility.message}</p>
              )}
            </div>
            {/* switch */}

            <div className="inline-flex justify-between items-center w-full pb-4">
              <div className="w-full">
                <Header text="Feedback on specific competencies" />
                <p className="text-fontColor-placeHolderColor  text-body1Size">
                  By default, he/she will receive your general feedback
                </p>
              </div>
              <div>
                <label className="inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    value=""
                    className="sr-only peer"
                    onChange={(e) => {
                      setTeamsBtnChecked(e.target.checked);
                    }}
                  />
                  <div className="relative w-11 h-6  peer-focus:outline-none rounded-full peer dark:bg-fontColor-placeHolderColor peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-buttonColor-baseColor"></div>
                </label>
              </div>
            </div>

            <div
              className="h-[40vh] overflow-y-auto px-1 "
              style={{ scrollbarWidth: "none" }}
            >
              {teamsBtnChecked && (
                <div>
                  {
                    <Select
                      options={userCompetenciesOptions}
                      onChange={handleUserCompetencyChange}
                      isMulti
                      closeMenuOnSelect={false}
                    />
                  }
                  {userCompetenciesErrMsg && (
                    <p className="text-red-500">
                      Please add competencies first
                    </p>
                  )}
                </div>
              )}

              {userCompetencies.length !== 0 &&
                userCompetencies?.map((competency, index) => {
                  return (
                    <div
                      key={index}
                      className="relative my-2 transition-all duration-1000 "
                    >
                      <div className="my-2">
                        <div className="flex items-center justify-between">
                          <Header
                            text={`${competency.label}`}
                            htmlFor="levelDescription"
                          />
                          <div
                            onClick={() => handleDeleteCompetency(index)}
                            className=" cursor-pointer flex items-center justify-center rounded-sm  text-red-500 w-4 h-4  border border-red-500"
                          >
                            -
                          </div>
                        </div>

                        <div className="mt-2">
                          <textarea
                            {...register(`competencyFeedback.${index}`, {
                              required: "Feedback is required",
                            })}
                            rows={4}
                            placeholder={`write your feedback on ${competency.label}`}
                            wrap="soft"
                            className="min-h-20 resize-none block max-h-20 bg-white w-full text-body1Size rounded-buttonRadius border-0  py-2.5 px-2  shadow-sm ring-1 ring-fontColor-outLineInputColor  placeholder:text-fontColor-placeHolderColor focus:ring-2   focus:ring-buttonColor-baseColor focus:outline-none sm:text-sm sm:leading-6"
                            onChange={(e) =>
                              handleCompetencyFeedbackChange(
                                index,
                                e.target.value,
                              )
                            }
                          />
                          {errors.competencyFeedback &&
                            errors.competencyFeedback[index] && (
                              <p className="text-red-500">
                                {errors.competencyFeedback[index].message}
                              </p>
                            )}
                        </div>
                      </div>
                      <RatingScale
                        index={index}
                        value={competencyRatings[index]}
                        setValue={handleCompetencyRatingChange}
                      />
                      {competencyRatingsErrMsg && (
                        <p className="text-red-500">
                          Please rate the competency
                        </p>
                      )}
                    </div>
                  );
                })}
            </div>
          </div>
          <div className="flex items-center justify-end border-t border-gray-200 py-3 mx-1 ">
            <Button
              className="px-10 py-2.5 text-fontColor-whiteBaseColor"
              buttonText="Give Feedback"

            // onClick={handleClosePopup}
            />
          </div>
        </form>
      </FormPopUp>
    </>
  );
};

export default GiveNormalFeedback;
