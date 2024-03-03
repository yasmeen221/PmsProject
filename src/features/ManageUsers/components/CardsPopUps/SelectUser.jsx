// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
// import DropDown from "../../../../components/DropDown/DropDown";
// import { useDispatch } from "react-redux";
// import FormPopUp from "../../../../components/PopUp/FormPopUp";
import Button from "../../../../components/Button/Button";
import TextInput from "../../../../components/TextInput/TextInput";
import Header from "../../../../components/Header/Header";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Icons from "../../../../themes/icons";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../slices/userSlice";
import { editUser } from "../../slices/editUsersSlice";
import { handleOpenAddUserFormPopUp } from "../../slices/openAddUserFormPopUp";
import {
  useAddUserMutation
} from "../../slices/api/apiSlice.js";

const userSchema = yup.object({
  firstName: yup
    .string()
    .required("Required")
    .min(2)
    .max(15)
    .matches(/^[A-Za-z]+$/, "Invalid characters")
    .trim(),
  lastName: yup
    .string()
    .required("Required")
    .min(2)
    .max(15)
    .matches(/^[A-Za-z]+$/, "Invalid characters")
    .trim(),
  username: yup
    .string()
    .required("Required")
    .matches(/^[a-zA-Z0-9_]+$/, "Username must be alphanumeric")
    .min(3, "Username must be at least 3 characters")
    .max(15, "Username can't exceed 15 characters"),
  email: yup.string().email().required("Required"),
  position: yup
    .string()
    .required("Required")
    .matches(/^[A-Za-z]+$/, "Invalid characters")
    .trim(),
  level: yup.string().required("Required"),
  role: yup.string().required("Required"),
  team: yup.string().required("Required"),
});

const SelectUser = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [addUser,{isLoading,isError,error,isSuccess}] = useAddUserMutation();
  const dispatch = useDispatch();
  const userData = useSelector((store) => store.editUser.user);
  const handleOpenPopUp = useSelector(
    (store) => store.openAddUserFormPopUp.open,
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(userSchema),
  });

  useEffect(() => {
    if (!handleOpenPopUp) {
      reset();
    }
    if (userData.username) {
      setValue("firstName", userData.firstName);
      setValue("lastName", userData.lastName);
      setValue("username", userData.username);
      setValue("email", userData.email);
      setValue("position", userData.position);
      setValue("level", userData.level);
      setValue("role", userData.role);
      setValue("team", userData.team);
    }
  }, [handleOpenPopUp]);

  const handleClosePopup = () => {
    setPopupOpen(false);

    dispatch(handleOpenAddUserFormPopUp(false));
    dispatch(editUser({}));
  };

  const formSubmit = (values) => {
    console.log(values);
    // dispatch(addUser(values));
    const obj={
      firstName:values.firstName,
      lastName:values.lastName,
      username:values.username,
      email:values.email,
      position:values.position,
      level:"65e0dd8b0cc3db3333f44c22",
      role:values.role,
      team:"65e139409bdf31421e7dae95"
    }
    addUser(obj);
    reset();
    handleClosePopup();
  };

  return (
    <>
      <form onSubmit={handleSubmit(formSubmit)}>
        <div className="w-[800px] p-4 ">
          <div className="flex justify-between">
            <div className="w-[45%]">
              <div className="m-2">
                <Header text="First Name" />
                <TextInput
                  type="text"
                  register={{ ...register("firstName") }}
                  placeholder="John"
                />
                {errors.firstName && (
                  <p className="text-red-500">{errors.firstName.message}</p>
                )}
              </div>
            </div>
            <div className="w-[45%]">
              <div className="m-2">
                <Header text="Last Name" />
                <TextInput
                  type="text"
                  register={{ ...register("lastName") }}
                  placeholder="Doe"
                />
                {errors.lastName && (
                  <p className="text-red-500">{errors.lastName.message}</p>
                )}
              </div>
            </div>
          </div>

          <div className="flex justify-between">
            <div className="w-[45%]">
              <div className="m-2">
                <Header text="Username" />
                <TextInput
                  type="text"
                  register={{ ...register("username") }}
                  placeholder="john_doe123"
                />
                {errors.username && (
                  <p className="text-red-500">{errors.username.message}</p>
                )}
              </div>
            </div>
            <div className="w-[45%]">
              <div className="m-2">
                <Header text="Email" />
                <TextInput
                  type="text"
                  register={{ ...register("email") }}
                  placeholder="john.doe@example.com"
                />
                {errors.email && (
                  <p className="text-red-500">{errors.email.message}</p>
                )}
              </div>
            </div>
          </div>

          <div className="flex justify-between">
            <div className="w-[45%]">
              <div className="m-2">
                <Header text="Position" />
                <TextInput
                  type="text"
                  register={{ ...register("position") }}
                  placeholder="Developer"
                />
                {errors.position && (
                  <p className="text-red-500">{errors.position.message}</p>
                )}
              </div>
            </div>
            <div className="w-[45%]">
              <div className="m-2">
                <Header text="Level" />
                <div className="relative mt-2">
                  <select
                    onChange={(e) => setValue("level", e.target.value)}
                    className={`block appearance-none w-full bg-white border-0 py-2.5 px-2 ring-1 ring-inset ring-fontColor-outLineInputColor  rounded-buttonRadius shadow-sm   focus:shadow-outline focus:ring-2 focus:ring-buttonColor-baseColor focus:outline-none ${errors.level ? "text-fontColor-placeHolderColor" : "text-fontColor-blackBaseColor"} `}
                  >
                    <option value="">Select Level</option>
                    <option value="1">Fresh</option>
                    <option value="2">Junior</option>
                    <option value="3">Senior</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <Icons.ArrowDownBlack />
                  </div>
                </div>
                {errors.level && (
                  <p className="text-red-500">{errors.level.message}</p>
                )}
              </div>
            </div>
          </div>

          <div className="flex justify-between">
            <div className="w-[45%]">
              <div className="m-2">
                <Header text="Role" />
                <div className="relative mt-2">
                  <select
                    onChange={(e) => setValue("role", e.target.value)}
                    className={`block appearance-none w-full bg-white border-0 py-2.5 px-2 ring-1 ring-inset ring-fontColor-outLineInputColor  rounded-buttonRadius shadow-sm   focus:shadow-outline focus:ring-2 focus:ring-buttonColor-baseColor focus:outline-none ${errors.role ? "text-fontColor-placeHolderColor" : "text-fontColor-blackBaseColor"} `}
                  >
                    <option value="">Select Role</option>
                    <option value="superAdmin">User</option>
                    <option value="admin">Admin</option>
                    <option value="user">Super Admin</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <Icons.ArrowDownBlack />
                  </div>
                </div>
                {errors.role && (
                  <p className="text-red-500">{errors.role.message}</p>
                )}
              </div>
            </div>
            <div className="w-[45%]">
              <div className="m-2">
                <Header text="Team" />
                <div className="relative mt-2">
                  <select
                    onChange={(e) => setValue("team", e.target.value)}
                    className={`block appearance-none w-full bg-white border-0 py-2.5 px-2 ring-1 ring-inset ring-fontColor-outLineInputColor  rounded-buttonRadius shadow-sm   focus:shadow-outline focus:ring-2 focus:ring-buttonColor-baseColor focus:outline-none ${errors.team ? "text-fontColor-placeHolderColor" : "text-fontColor-blackBaseColor"} `}
                  >
                    <option value="">Select Team</option>
                    <option value="front">Front End</option>
                    <option value="back">Back End</option>
                    <option value="ui">UI UX</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <Icons.ArrowDownBlack />
                  </div>
                </div>
                {errors.team && (
                  <p className="text-red-500">{errors.team.message}</p>
                )}
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center py-3">
            <Button
              type="submit"
              className="px-6 py-3.5 text-white bg-blue-500 rounded-md"
              buttonText="Add User"
            />
          </div>
        </div>
      </form>
    </>
  );
};

export default SelectUser;
