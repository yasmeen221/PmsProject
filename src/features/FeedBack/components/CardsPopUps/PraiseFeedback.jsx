import React, { useState } from "react";
import { useEffect } from "react";
import Cookies from "universal-cookie";
import { jwtDecode } from "jwt-decode";
import Icons from "../../../../themes/icons";
import Button from "../../../../components/Button/Button";
import Header from "../../../../components/Header/Header";
import FormPopUp from "../../../../components/PopUp/FormPopUp";
import TextInput from "../../../../components/TextInput/TextInput";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";

const schema = yup.object({
  userIdTo: yup.string().required("Please select an option"),
  messege: yup.string().required("Praise Message Requierd"),
  visibility: yup.string().required("Please select an option"),
});
export default function PraiseFeedback() {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [userID, setUserID] = useState("");
  const [employee, setEmployee] = useState([{}]);
  const [employeeID, setEmployeeID] = useState("");
  const [manager, setManager] = useState(null);
  const cookie = new Cookies();
  const handleOpenPopup = () => {
    setPopupOpen(true);
  };
  useEffect(() => {
    handleOpenPopup();
    let token = cookie.get("userToken");
    const decodedUserToken = jwtDecode(token);
    console.log("User ID:", decodedUserToken.userId);
    setUserID(decodedUserToken.userId);
    getEmployeeData();
  }, []);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (value) => {
    // console.log("formSubmit", value);
    const stringToSplit= value.visibility;
    const visibilityArray = stringToSplit.split(',');
    // console.log(visibilityArray)
    const praiseObject={
      feedbackMainData:{
        userIdFrom:userID,
        userIdTo:employeeID,
        message:value.messege,
        visibility:visibilityArray,
        feedbackType:"praise"
      },
      feedBackMetaData:[{}]
    }
    console.log("praise",praiseObject)
    handleClosePopup();
  };
  const handleClosePopup = () => {
    setPopupOpen(false);
  };
  async function getEmployeeData() {
    let { data } = await axios.get(
      "https://innovapms.onrender.com/api/v1/user/usernames",
    );
    // console.log("employeeeee", data.data.usersNames);
    setEmployee(data.data.usersNames);
  }

  async function recieveVisiability(id) {
    // console.log(id)
    setEmployeeID(id);
    let { data } = await axios.get(
      `https://innovapms.onrender.com/api/v1/user/team-leader/${id}`,
    );
    // console.log("leader", data.data.teamLeader._id);
    setManager(data.data.teamLeader._id);
  }

  return (
    <>
      <FormPopUp
        isOpen={isPopupOpen}
        ClosePop={handleClosePopup}
        TitlePopUp="Give Praise"
        iconLeft={<Icons.ArrowLeftPop />}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <div
            className="w-[35vw] max-h-[65vh] pb-4 overflow-y-auto"
            style={{ scrollbarWidth: "none" }}
          >
            <div className="px-1">
              <div className="pt-4">
                <Header text="Employee Name" />
                <div className="relative my-2 ">
                  <select
                    {...register("userIdTo")}
                    onChange={(e) => recieveVisiability(e.target.value)}
                    className={`block text-fontColor-placeHolderColor appearance-none w-full bg-white border-0 py-2.5 px-2 ring-1 ring-inset ring-fontColor-outLineInputColor  rounded-buttonRadius shadow-sm   focus:shadow-outline focus:ring-2 focus:ring-buttonColor-baseColor focus:outline-none `}
                  >
                    <option value="" disabled selected>
                      Select who you will give the feedback
                    </option>
                    {employee &&
                      employee.map((item) => {
                        return (
                          <>
                            <option key={item._id} value={item._id}>
                              {item.username}
                            </option>
                          </>
                        );
                      })}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <Icons.ArrowDownBlack />
                  </div>
                </div>
                {errors.userIdTo ? (
                  <p className="text-red-500">{errors.userIdTo.message}</p>
                ):""}
              </div>
              <div className="pt-4">
                <Header text="Praise" />
                <div className="mt-2">
                  <textarea
                    rows={4}
                    placeholder="Write your appreciate"
                    wrap="soft"
                    {...register("messege")}
                    className="min-h-20 resize-none block max-h-20 bg-white w-full text-body1Size rounded-buttonRadius border-0  py-2.5 px-2  shadow-sm ring-1 ring-fontColor-outLineInputColor  placeholder:text-fontColor-placeHolderColor focus:ring-2   focus:ring-buttonColor-baseColor focus:outline-none sm:text-sm sm:leading-6"
                  />
                </div>
                {errors.messege && (
                  <p className="text-red-500">{errors.messege.message}</p>
                )}
              </div>
              <div className="pt-4">
                <Header text="Visibility" />
                <div className="relative my-2 ">
                  <select
                    {...register("visibility")}
                    // onChange={(e) => console.log("visibility", e.target.value)}
                    className={`block text-fontColor-placeHolderColor appearance-none w-full bg-white border-0 py-2.5 px-2 ring-1 ring-inset ring-fontColor-outLineInputColor  rounded-buttonRadius shadow-sm   focus:shadow-outline focus:ring-2 focus:ring-buttonColor-baseColor focus:outline-none `}
                  >
                    <option value="" disabled selected>
                      Select who can see this, Must Select Employee Name First
                    </option>
                    {manager && (
                      <>
                        <option value={[manager]}>Manager Only</option>
                        <option value={[employeeID]}>Employee Only</option>
                        <option value={[manager,employeeID]}>
                          Manager and Employee
                        </option>
                      </>
                    )}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <Icons.ArrowDownBlack />
                  </div>
                </div>
                {errors.visibility && (
                  <p className="text-red-500">{errors.visibility.message}</p>
                )}
              </div>
            </div>
          </div>
          <div className="flex items-center justify-end border-t border-gray-200 py-3 mx-1 ">
            <Button
              className="px-6 py-3.5 text-fontColor-whiteBaseColor"
              buttonText="Give Praise"
              type="submit"
            />
          </div>
        </form>
      </FormPopUp>
    </>
  );
}
