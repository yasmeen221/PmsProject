import React, { useState } from "react";
import FormPopUp from "../../../../components/PopUp/FormPopUp";
import Button from "../../../../components/Button/Button";
import Icons from "../../../../themes/icons";
import Header from "../../../../components/Header/Header";
import TextInput from "../../../../components/TextInput/TextInput";
import { set, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useGetTeamsNameQuery } from "../../../ManageTeams/slices/apis/apiSlice";
import { useGetLevelQuery } from "../../../ManageLevels/slices/api/apiLevelSlice";
import Select from 'react-select'
import axiosInstance from "../../../../components/GeneralApi/generalApi";
import { data } from "autoprefixer";
function AddCompetency() {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [teamsBtnChecked, setTeamsBtnChecked] = useState(false);
  const [teamsAssigned, setTeamsAssigned] = useState([]); 
  const [formlevels,setFormLevels] = useState([]); 
  const [descriptions, setDescriptions] = useState([]);
 
  const seniorityLevels = formlevels?.map((level, index) => ({
    level,
    description: descriptions[index],
  }));
 
  const schema = yup
    .object({
      name: yup.string().required("Name is required"),
      category: yup.string().required("Category is required"),
      defaultDescription: yup.string().required("Description is required"),
    })
    .required();

    const {
      data: teamsNames,
      isError: isTeamsNameError,
      isSuccess: isTeamsNameSuccess,
      isLoading: isTeamsNameLoading,
      error: TeamsNameError,
    } = useGetTeamsNameQuery();
    const teamsArray = teamsNames?.data?.teamsNames ;
    const teamsOptions = teamsArray?.map(team => ({ value: team._id, label: team.teamName }));

    const {
      data: levels,
      isError: isLevelError,
      isSuccess: isLevelSuccess,
      isLoading: isLevelLoading,
      error: LevelError,
    } = useGetLevelQuery();

    const levelsArray = levels?.data?.levels ;
    const levelsOptions = levelsArray?.map(level => ({ value: level._id, label: level.levelName }));

    const handleTeamChange = (selectedOptions) => {
      const teams = selectedOptions.map((team) => setTeamsAssigned([...teamsAssigned, team?.value])); 
    };


    const handleLevelChange = (selectedOptions) => {
      const levels = selectedOptions.map((level) => setFormLevels([...formlevels, level.value]));
    };
    

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const formSubmit = async (values) => {
    try {
      const dataToSend = {
        ...values,
        seniorityLevels,
        teamsAssigned,
      };
      console.log('Data to send:', dataToSend)
      const response = await axiosInstance.post('/competency', dataToSend);
      console.log('Backend response:', response.data);
      setPopupOpen(false);
    } catch (error) {
      console.error('Error sending data to the backend:', error);
    }
  };

  const handleOpenPopup = () => {
    setPopupOpen(true);
  };

  const handleClosePopup = () => {
    setPopupOpen(false);
  };


  const handleDescriptionChange = (index, value) => {
    const newDescriptions = [...descriptions];
    newDescriptions[index] = value;
    setDescriptions(newDescriptions);
  };

  const handleRemoveDescription = (index) => {
    const newDescriptions = [...descriptions];
    newDescriptions.splice(index, 1);
    setDescriptions(newDescriptions);
  };


  return (
    <>
      <FormPopUp
        isOpen={isPopupOpen}
        ClosePop={handleClosePopup}
        TitlePopUp="Add New Competency"
        iconLeft={<Icons.ArrowLeftPop />}
      >
        <form
          onSubmit={handleSubmit(formSubmit)}
          style={{
            width: "35vw",
            maxHeight: "65vh",
            overflowY: "auto",
            scrollbarWidth: "none",
          }}
          className="px-1 "
        >
          <div className="my-2  w-full">
            <Header text="Name" htmlFor="name" />
            <div className="mt-2 w-full ">
              <TextInput
                register={{ ...register("name") }}
                placeholder="Enter Competency Name"
                id="name"
                name="name"
                type="text"
              />
              {errors.name && (
                <p className="text-red-500">{errors.name.message}</p>
              )}
            </div>
          </div>
          <div className="my-2 w-full">
            <Header text="Category" />
            <div className="relative mt-2">
              <select
                {...register("category")}
                name="category"
                className={`block appearance-none w-full bg-white border-0    py-2.5 px-2 ring-1 ring-inset ring-fontColor-outLineInputColor  rounded-buttonRadius shadow-sm   focus:shadow-outline focus:ring-2 focus:ring-buttonColor-baseColor focus:outline-none  `}
              >
                <option value="">select category</option>
                <option value="65e0e9f2947a4445e6fabfe2">Option 1</option>
                <option value="65e0e9f2947a4445e6fabfe2">Option 2</option>
                <option value="65e0e9f2947a4445e6fabfe2">Option 3</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <Icons.ArrowDownBlack />
              </div>
              {errors.category && (
                <p className="text-red-500">{errors.category.message}</p>
              )}
            </div>
          </div>
          <div className="my-2">
            <Header text="Default Description" htmlFor="defaultDescription" />
            <div className="mt-2">
              <textarea
                {...register("defaultDescription")}
                rows={4}
                placeholder="Enter Default Description"
                wrap="soft"
                id="defaultDescription"
                name="defaultDescription"
                className="min-h-20 resize-none block max-h-20 bg-white w-full text-body1Size rounded-buttonRadius border-0  py-2.5 px-2  shadow-sm ring-1 ring-fontColor-outLineInputColor  placeholder:text-fontColor-placeHolderColor focus:ring-2   focus:ring-buttonColor-baseColor focus:outline-none sm:text-sm sm:leading-6"
              />
              {errors.defaultDescription && (
                <p className="text-red-500">
                  {errors.defaultDescription.message}
                </p>
              )}
            </div>
          </div>
          <div className="w-full inline-flex justify-between   items-center my-2">
            <div>
              <Header text="Assign competency to specific team" />
              <p className="text-fontColor-placeHolderColor  text-body1Size">
                By default competency assign to everyone
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
          {teamsBtnChecked && (
            // <div className="relative my-2 transition-all duration-1000 ">
            //   <select
            //     {...register("team")}
              
            //     className={`block appearance-none w-full bg-white border-0    py-2.5 px-2 ring-1 ring-inset ring-fontColor-outLineInputColor  rounded-buttonRadius shadow-sm   focus:shadow-outline focus:ring-2 focus:ring-buttonColor-baseColor focus:outline-none  `}
            //   >
            //     <option value="">select team</option>
            //     {!isTeamsNameLoading &&
            //           !isTeamsNameError &&
            //           teamsNames.data.teamsNames.map((teamName, index) => {
            //             return (
            //               <option key={index} value={teamName._id}>
            //                 {teamName.teamName}
            //               </option>
            //             );
            //        })}
            //   </select>
            //   <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            //     <Icons.ArrowDownBlack />
            //   </div>
            // </div>
            <div>
               <Select
                options={teamsOptions}
                onChange={handleTeamChange}
                isMulti
                  closeMenuOnSelect={false} // Keep the dropdown open after selection
                   />
            </div>
          )}

          <div className="my-2">
            <Header text="Levels" />
            <p className="text-fontColor-placeHolderColor  text-body1Size">
              Select Levels to customize competency descriptions for each career
              path level.
            </p>
            <div className="relative mt-2">
              {/* <select
                {...register("level")}
                name="level"
                className={`block appearance-none w-full bg-white border-0    py-2.5 px-2 ring-1 ring-inset ring-fontColor-outLineInputColor  rounded-buttonRadius shadow-sm   focus:shadow-outline focus:ring-2 focus:ring-buttonColor-baseColor focus:outline-none  `}
              >
                <option value="">select level</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <Icons.ArrowDownBlack />
              </div>
              {errors.level && (
                <p className="text-red-500">{errors.level.message}</p>
              )} */}
                   <div>
               <Select
                options={levelsOptions}
                onChange={handleLevelChange}
                isMulti
                  closeMenuOnSelect={false} // Keep the dropdown open after selection
                   />
            </div>
            </div>
          </div>

          {formlevels.length!==0 && levelsArray?.map((level, index) => {
            return(
              <>
              
            <div key={index} className="relative my-2 transition-all duration-1000 " >
              <div className="my-2">
                <div className="flex items-center justify-between">
                  <Header text={level?.levelName} htmlFor="levelDescription" />
                  <div className=" cursor-pointer flex items-center justify-center rounded-sm  text-red-500 w-4 h-4  border border-red-500"  onClick={() => handleRemoveDescription(index)} >
                    -
                  </div>
                </div>

                <div className="mt-2">
                  <textarea
                    rows={4}
                    placeholder={`description for ${level?.levelName}`}
                    wrap="soft"
                    className="min-h-20 resize-none block max-h-20 bg-white w-full text-body1Size rounded-buttonRadius border-0  py-2.5 px-2  shadow-sm ring-1 ring-fontColor-outLineInputColor  placeholder:text-fontColor-placeHolderColor focus:ring-2   focus:ring-buttonColor-baseColor focus:outline-none sm:text-sm sm:leading-6"
                    onChange={(e) => handleDescriptionChange(index, e.target.value)}
                  />
                 
                </div>
              </div>
            </div>
          
              </>
            )
          })}

          <div className="mt-2 w-full inline-flex justify-end px-1 ">
            <Button
              buttonText="Add"
              className="px-10 py-2.5 text-fontColor-whiteBaseColor"
              // onClick={handleClosePopup}
            />
          </div>
        </form>
      </FormPopUp>
      <Button
        buttonText="Add Competency"
        className="text-fontColor-whiteBaseColor"
        iconLeft={<Icons.PlusIcon />}
        onClick={handleOpenPopup}
      />
    </>
  );
}

export default AddCompetency;
