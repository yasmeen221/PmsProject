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
const schema = yup.object({
  receiver: yup.string().required("Receiver is required"),
  sender: yup.string().required("Sender is required"),
  message: yup.string().required("Message is required"),
  visibility: yup.string().required("Visibility is required"),
  team: yup.string().required("Team is required when checkbox is checked"),
});
export default function RequestFeedbackSomeOne() {
  const dispatch = useDispatch();
  const [addToogle, setAddToggle] = useState(false);
  const [team, setTeam] = useState("");
  const RequestFeedbackForSomeOnePopUp = useSelector(
    (state) => state.openPopUpSlice.requestFeedbackForSomeOne,
  );
  const { data: teams, isLoading, isSuccess } = useGetTeamsNameQuery();
  const takeToken = useSelector(
    (state) => state.persistantReducer.userDataReducer.userData,
  );
  const userData = jwtDecode(takeToken);
  console.log(userData);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    if (userData) {
      const formData = {
        receiver: userData?.userId,
        userId: userData?.userId,
        ...data,
      };
      console.log("hhhhh");
      console.log(formData);
    }
    handleClosePopup(true);
    reset();
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
                <TextInput
                  register={{ ...register("receiver") }}
                  name="receiver"
                  value={userData?.username}
                  type="text"
                  placeholder="Who the feedback is about"
                />
              </div>
              {errors.receiver ? (
                <p className="text-deleteColor-50">{errors.receiver.message}</p>
              ) : null}
              <div className="pt-4">
                <Header text="Sender" />
                <TextInput
                  register={{ ...register("sender") }}
                  name="sender"
                  type="text"
                  placeholder="Who will give the feedback"
                />
              </div>
              {errors.sender ? (
                <p className="text-deleteColor-50">{errors.sender.message}</p>
              ) : null}
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
                    // onChange={(e) => console.log(e.target.value)}
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
                  <label className="inline-flex items-center mr-4 mb-2">
                    <input
                      {...register("visibility")}
                      type="radio"
                      value="senderReceiverMe"
                      className="w-4 h-4"
                      name="visibility"
                    />
                    <span className="ml-2 font-custom text-buttonFontSize font-buttonWeight text-fontColor-blackBaseColor">
                      Sender, receiver and me
                    </span>
                  </label>
                  <label className="inline-flex items-center mr-4 mb-2">
                    <input
                      value="onlySenderMe"
                      {...register("visibility")}
                      type="radio"
                      className="w-4 h-4"
                      name="visibility"
                    />
                    <span className="ml-2 font-custom text-buttonFontSize font-buttonWeight text-fontColor-blackBaseColor">
                      Only sender and me
                    </span>
                  </label>
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
                    {...register("team")}
                    onChange={(e) => setTeam(e.target.value)}
                    className={`block appearance-none w-full bg-white border-0 py-2.5 px-2 ring-1 ring-inset ring-fontColor-outLineInputColor rounded-buttonRadius shadow-sm focus:shadow-outline focus:ring-2 focus:ring-buttonColor-baseColor focus:outline-none ${team === "" ? "text-fontColor-placeHolderColor" : "text-fontColor-blackBaseColor"}`}
                  >
                    <option value="selectTeam">Select team</option>
                    {teams?.data?.teamsNames.map((team) => {
                      return (
                        <option value={team._id} key={team._id}>
                          {team.teamName}
                        </option>
                      );
                    })}
                  </select>
                  {errors.team ? (
                    <p className="text-deleteColor-50">{errors.team.message}</p>
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
              // onClick={handleClosePopup}
            />
          </div>
        </form>
      </FormPopUp>
    </>
  );
}
