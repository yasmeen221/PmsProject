import React, { useEffect, useState } from "react";
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
import Select from "react-select";
import axiosInstance from "../../../../components/GeneralApi/generalApi";

import { getAllData } from "../../slices/Api/catgoryapi";
import toast from "react-hot-toast";

function AddCompetency() {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [teamsBtnChecked, setTeamsBtnChecked] = useState(false);
  const [teamsAssigned, setTeamsAssigned] = useState([]);
  const [formLevels, setFormLevels] = useState([]);
  const [descriptions, setDescriptions] = useState([]);
  const [categories, setCategories] = useState([]);
  const [levelErrorMsg, setLevelErrorMsg] = useState(false);
  const [teamsErrorMsg, setTeamsErrorMsg] = useState(false);
  const seniorityLevels = formLevels?.map((level, index) => ({
    level: level.value,
    description: descriptions[index],
  }));

  const schema = yup.object({
    name: yup
      .string()
      .min(3)
      .max(100)
      .matches(/^[A-Za-z\s\d]+$/, "Invalid characters")
      .trim()
      .required(),
    category: yup.string().required("Category is required"),
    defaultDescription: yup
      .string()
      .required("you must enter a description for the competency"),
  });

  const { data: teamsNames } = useGetTeamsNameQuery();
  const teamsArray = teamsNames?.data?.teamsNames;
  const teamsOptions = teamsArray?.map((team) => ({
    value: team._id,
    label: team.teamName,
  }));



  const { data: levels } = useGetLevelQuery();
  const levelsArray = levels?.data?.levels;

  const levelsOptions = levelsArray?.map((level) => ({
    value: level._id,
    label: level.levelName,
  }));

  const handleTeamChange = (selectedOptions) => {
    setTeamsAssigned(selectedOptions.map((option) => option.value));
  };

  const handleLevelChange = (selectedOptions) => {
    setFormLevels(selectedOptions);
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
      console.log(formLevels.length);

      if (formLevels.length === 0) {
        setLevelErrorMsg(true);
        console.log("Please add levels first");
      }

      if (teamsAssigned.length === 0 && teamsBtnChecked) {
        setTeamsErrorMsg(true);
        console.log("Please add teams first");
      }

      if (
        teamsAssigned.length === 0 &&
        seniorityLevels.length === 0 &&
        formLevels.length === 0
      )
        return;
      const dataToSend = {
        ...values,
        seniorityLevels,
        teamsAssigned,
      };
      console.log("Data to send:", dataToSend);
      const response = await axiosInstance.post("/competency", dataToSend);
      console.log("Backend response:", response.data);
      toast.success("your respond is submitted successfully!");
      setPopupOpen(false);
    } catch (error) {
      console.error("Error sending data to the backend:", error);
      toast.error("your respond is not submitted successfully!");
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

    const newFormLevels = [...formLevels];
    newFormLevels.splice(index, 1);
    setFormLevels(newFormLevels);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllData();
        setCategories(data.data.categories);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <FormPopUp
        isOpen={isPopupOpen}
        ClosePop={handleClosePopup}
        TitlePopUp="Add New Competency"
        iconLeft={<Icons.ArrowLeftPop />}
      >
        <form onSubmit={handleSubmit(formSubmit)}>
          <div
            className="px-1 w-[35vw] max-h-[65vh] pb-4 overflow-y-auto "
            style={{ scrollbarWidth: "none" }}
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
                  {categories.map((category, index) => {
                    return (
                      <option key={index} value={category._id}>
                        {category.categoryName}
                      </option>
                    );
                  })}
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
            <div
              className="px-2 w-[35vw] h-[50vh] pb-4 overflow-y-auto "
              style={{ scrollbarWidth: "none" }}
            >
              {teamsBtnChecked && (
                <div>
                  <Select
                    options={teamsOptions}
                    onChange={handleTeamChange}
                    isMulti
                    closeMenuOnSelect={false}
                  />
                  {teamsErrorMsg && (
                    <p className="text-red-500">Please add teams first</p>
                  )}
                </div>
              )}

              <div className="my-2">
                <Header text="Levels" />
                <p className="text-fontColor-placeHolderColor  text-body1Size">
                  Select Levels to customize competency descriptions for each
                  career path level.
                </p>
                <div className="relative mt-2">
                  <Select
                    options={levelsOptions}
                    onChange={handleLevelChange}
                    isMulti
                    closeMenuOnSelect={false} // Keep the dropdown open after selection
                  />

                  {levelErrorMsg && (
                    <p className="text-red-500">Please add levels first</p>
                  )}
                </div>
              </div>

              {formLevels.length !== 0 &&
                formLevels?.map((des, index) => {
                  return (
                    <div
                      key={index}
                      className="relative my-2 transition-all duration-1000 "
                    >
                      <div className="my-2">
                        <div className="flex items-center justify-between">
                          <Header
                            text={`Description for ${formLevels[index].label}`}
                            htmlFor="levelDescription"
                          />
                          <div
                            onClick={() => handleRemoveDescription(index)}
                            className=" cursor-pointer flex items-center justify-center rounded-sm  text-red-500 w-4 h-4  border border-red-500"
                          >
                            -
                          </div>
                        </div>

                        <div className="mt-2">
                          <textarea
                            rows={4}
                            placeholder={`Enter Description for ${formLevels[index].label}`}
                            wrap="soft"
                            className="min-h-20 resize-none block max-h-20 bg-white w-full text-body1Size rounded-buttonRadius border-0  py-2.5 px-2  shadow-sm ring-1 ring-fontColor-outLineInputColor  placeholder:text-fontColor-placeHolderColor focus:ring-2   focus:ring-buttonColor-baseColor focus:outline-none sm:text-sm sm:leading-6"
                            onChange={(e) =>
                              handleDescriptionChange(index, e.target.value)
                            }
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
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
