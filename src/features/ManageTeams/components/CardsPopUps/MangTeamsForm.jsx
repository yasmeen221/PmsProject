// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import FormPopUp from "../../../../components/PopUp/FormPopUp";
import Button from "../../../../components/Button/Button";
import Icons from "../../../../themes/icons";
import Header from "../../../../components/Header/Header";
import TextInput from "../../../../components/TextInput/TextInput";
import { useDispatch, useSelector } from "react-redux";
import { dropDownTeamHandle } from "../../slices/addTeamTogglePopUp";
import { useForm } from "react-hook-form";
import { editButtonTeamHandle } from "../../slices/editTemTogglePopUp";
import {useAddTeamMutation,useEditTeamMutation,useGetTeamsNameQuery,} from "../../slices/apis/apiSlice";
import { useGetUsersQuery } from "../../../ManageUsers/slices/api/apiSlice";
import toast from "react-hot-toast";
function ManageTeamsForm() {
  const [addTeam, { isLoading, isError, error, isSuccess }] =
    useAddTeamMutation(); //to send team to the back end
  const {
    data: teamsData,
    isLoading: teamsDropDownLoading,
    isError: teamsDropDownIsError,
    error: teamsDropDownError,
    isSuccess: teamDropDownSuccess,
  } = useGetTeamsNameQuery();
  const {
    data: users,
    isUsersError,
    isUsersSuccess,
    isUsersLoading,
    usersError,
  } = useGetUsersQuery();
  const [
    editTeam,
    { isLoadingEditTeam, isErrorEditTeam, errorEditTeam, isSuccessEditTeam },
  ] = useEditTeamMutation();

  // do the slice  here to get data from store and
  //when edit  button is clicked it will show up in form with old data.and make it empty
  const itemToEdit = useSelector((state) => state.editTeamPopUpSlice.item);
  const dispatch = useDispatch();
  const handleOpen = useSelector(
    (state) => state.openTeamPopUpSlice.openPopUpTeam,
  );
  const [isPopupOpen, setPopupOpen] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, touchedFields },
  } = useForm({
    defaultValues: {
      teamName: "",
      teamLeader: "",
      parentTeam: "",
    },
  });
  useEffect(() => {
    setPopupOpen((isPopupOpen) => handleOpen);
    if (handleOpen == false) {
      dispatch(editButtonTeamHandle({}));
      reset();
    }
    // to check the data not empty and in page the teamsTable
    // add in button table the dispatch to  open pop up and return values that i want edit in it
    if (itemToEdit.teamName) {
      // console.log(itemToEdit.teamLeader?.firstName)
      setValue("teamName", itemToEdit.teamName);
      setValue("teamLeader", itemToEdit.teamLeader._id);
      setValue("parentTeam", itemToEdit.parentTeam?itemToEdit.parentTeam._id:"");
    }
  }, [handleOpen]);

  const handleClosePopup = () => {
    setPopupOpen(false);
    dispatch(dropDownTeamHandle(false));
    dispatch(editButtonTeamHandle({}));
  };
  const onSubmit = (data) => {
    handleClosePopup();
    reset();
    //send data to backend
    // addTeam(data)
    itemToEdit.teamName
      ? editTeam({ _id: itemToEdit._id, ...data })
      : addTeam(data).then((data) => {
          toast.success("Add Team successfully!");
        });
  };
  return (
    <>
      <FormPopUp
        isOpen={isPopupOpen}
        ClosePop={handleClosePopup}
        TitlePopUp={itemToEdit.teamName ? "Edit Team" : "Add Team"}
      >
        <div
          style={{
            width: "35vw",
            maxHeight: "65vh",
            overflowY: "auto",
            scrollbarWidth: "none",
          }}
          className="px-1"
        >
          <div className="my-2  w-full">
            <Header text="Team Name" htmlFor="teamName" />
            <div className="mt-2 w-full ">
              <TextInput
                placeholder="Enter Team Name"
                id="teamName"
                name="teamName"
                type="text"
                register={{
                  ...register("teamName", {
                    required: true,
                    pattern: /^[A-Za-z\s\d]+$/,
                    minLength: 5,
                    maxLength: 20,
                  }),
                }}
              />
            </div>
            <p className=" text-deleteColor-50">
              {errors.teamName?.type == "required"
                ? "requird"
                : errors.teamName?.type == "pattern"
                  ? "must string and spaces only"
                  : errors.teamName?.type == "minLength"
                    ? "must at least 5 charcters"
                    : errors.teamName?.type == "maxLength"
                      ? "must not greater than 20 character"
                      : ""}
            </p>
          </div>
          <div className="my-2 w-full">
            <Header text="Team Leader" />
            <div className="relative mt-2">
              <select
                name="teamLeader"
                {...register("teamLeader", { required: true,pattern:/^[a-zA-Z0-9_]+$/ })}
                className={`block appearance-none w-full bg-white border-0    py-2.5 px-2 ring-1 ring-inset ring-fontColor-outLineInputColor  rounded-buttonRadius shadow-sm   focus:shadow-outline focus:ring-2 focus:ring-buttonColor-baseColor focus:outline-none ${errors.teamLeader?.type == "required" || !touchedFields.teamLeader ? "text-fontColor-placeHolderColor" : "text-fontColor-blackBaseColor"} `}
              >
                <option value="">Select Team Leader</option>
                {!isUsersLoading &&
                  !isUsersError &&
                  users?.data.users.map((team, index) => {
                    return (
                      <option key={index} value={team._id}>
                        {team.username}
                      </option>
                    );
                  })}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <Icons.ArrowDownBlack />
              </div>
            </div>
            <p className="text-deleteColor-50">
              {errors.teamLeader?.type == "required" ? "requird" : errors.teamLeader?.type=="pattern"?"team leader name can contain letters and digits,underscores only":""}
            </p>
          </div>
          <div className="my-2 w-full">
            <Header text="Parent Team" />
            <div className="relative mt-2">
              <select
                name="parentTeam"
                {...register("parentTeam", {pattern:/^[a-zA-Z0-9_]+$/})}
                className={`block appearance-none w-full bg-white border-0    py-2.5 px-2 ring-1 ring-inset ring-fontColor-outLineInputColor  rounded-buttonRadius shadow-sm   focus:shadow-outline focus:ring-2 focus:ring-buttonColor-baseColor focus:outline-none ${errors.parentTeam?.type == "required" || !touchedFields.parentTeam ? "text-fontColor-placeHolderColor" : "text-fontColor-blackBaseColor"} `}
              >
                <option value="">Select Parent Team</option>
                {!teamsDropDownLoading &&
                  !teamsDropDownIsError &&
                  teamsData.data.teamsNames?.map((item, index) => {
                    return (
                      <option key={index} value={item._id}>
                        {item.teamName}
                      </option>
                    );
                  })}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <Icons.ArrowDownBlack />
              </div>
            </div>
            <p className="text-deleteColor-50">
              {errors.parentTeam?.type == "required" ? "required" : errors.parentTeam?.type=="pattern"?"parent team can contain letters and digits,underscores only":""}
            </p>
          </div>
        </div>
        <div className="mt-2 w-full inline-flex justify-end px-1 ">
          <Button
            buttonText={itemToEdit.teamName ? "Edit" : "Add"}
            className="px-10 py-2.5 text-fontColor-whiteBaseColor"
            onClick={handleSubmit(onSubmit)}
          />
        </div>
      </FormPopUp>
    </>
  );
}

export default ManageTeamsForm;
