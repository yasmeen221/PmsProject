import React, { useEffect, useState } from "react";
import HandelPopUp from "../../../components/PopUp/HandelPopUp"
import Button from "../../../components/Button/Button"
import Icons from "../../../themes/icons";
import Header from "../../../components/Header/Header"
import TextInput from "../../../components/TextInput/TextInput"
import { useDispatch, useSelector } from "react-redux";
import { dropDownTeamHandle } from "../slices/addTeam";
import { useForm } from "react-hook-form";
function ManageTeamsForm({ open }) {
  const dispatch = useDispatch()
  const handleOpen = useSelector(state => state.openTeamPopUpSlice.openPopUpTeam)
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [teanss]  =useState([{ teamName: "ui/ux", teamLeader: "test", parentTeam: "test" }
  , { teamName: "ui/ux", teamLeader: "test", parentTeam: "test" },
{ teamName: "ui/ux", teamLeader: "test", parentTeam: "test" }])


  useEffect(() => {
    setPopupOpen(isPopupOpen => handleOpen)
        //once from global false ==>make reset

    if(handleOpen==false){
      reset()
    }
  }, [handleOpen])
  const handleClosePopup = () => {
    setPopupOpen(false);
    dispatch(dropDownTeamHandle(false))
  };
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors,touchedFields },
  } = useForm({
    defaultValues: {
      teamName: '',
      teamLeader: '',
      parentTeam: ""
    },
  })
// const renderTeamLeaders=()=>{
//   teanss.map((item,index)=>{
//     return(
//       <option value={item.value}>{item.value}</option>
//     )
//   })
// }
  const onSubmit = (data) => {
    console.log(data)
    handleClosePopup()
    reset()
    //send data to backend
    
}
  return (
    <>
      <HandelPopUp
        isOpen={isPopupOpen}
        ClosePop={handleClosePopup}
        TitlePopUp="Add Team"
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
                register={{...register("teamName",{required:true,pattern:/^[A-za-z]+$/,minLength:5,maxLength:20})}}
              />
            </div>
            <p className=" text-deleteColor-50">{errors.teamName?.type=="required"?"requird":errors.teamName?.type=="pattern"?"must string only":errors.teamName?.type=="minLength"?"must at least 5 charcters":errors.teamName?.type=="maxLength"?"must not greater than 20 character":""}</p>
          </div>
          <div className="my-2 w-full">
            <Header text="Team Leader" />
            <div className="relative mt-2" >
              <select
                name="teamLeader"
                {...register("teamLeader",{required:true})}

                className={`block appearance-none w-full bg-white border-0    py-2.5 px-2 ring-1 ring-inset ring-fontColor-outLineInputColor  rounded-buttonRadius shadow-sm   focus:shadow-outline focus:ring-2 focus:ring-buttonColor-baseColor focus:outline-none ${errors.teamLeader?.type=="required" ||!touchedFields.teamLeader? "text-fontColor-placeHolderColor" : "text-fontColor-blackBaseColor"} `}
              >
                <option value="">Select Team Leader</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <Icons.ArrowDownBlack />
              </div>
            </div>
            <p className="text-deleteColor-50">{errors.teamLeader?.type=="required"?"requird":""}</p>

          </div>
          <div className="my-2 w-full">
            <Header text="Parent Team" />
            <div className="relative mt-2">
              <select
                name="parentTeam"
                {...register("parentTeam",{})}

                className={`block appearance-none w-full bg-white border-0    py-2.5 px-2 ring-1 ring-inset ring-fontColor-outLineInputColor  rounded-buttonRadius shadow-sm   focus:shadow-outline focus:ring-2 focus:ring-buttonColor-baseColor focus:outline-none ${errors.parentTeam?.type=="required" ||!touchedFields.parentTeam ? "text-fontColor-placeHolderColor" : "text-fontColor-blackBaseColor"} `}
              >
                <option value="">Select Parent Team</option>
                {teanss.map((item,index)=>{
                  return(
                    <option value={item.teamName}>{item.teamName}</option>
                  )
                })}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <Icons.ArrowDownBlack />
              </div>
            </div>
            <p className="text-deleteColor-50">{errors.parentTeam?.type=="required"?"requird":""}</p>

          </div>

        </div>
        <div className="mt-2 w-full inline-flex justify-end px-1 ">
          <Button
            buttonText="Add"
            className="px-10 py-2.5 text-fontColor-whiteBaseColor"
            onClick={handleSubmit(onSubmit)}
          />
        </div>
      </HandelPopUp>
    </>
  );
}

export default ManageTeamsForm;
