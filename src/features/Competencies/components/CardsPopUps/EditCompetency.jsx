import React, { useState, useEffect } from "react";
import FormPopUp from "../../../../components/PopUp/FormPopUp";
import Icons from "../../../../themes/icons";
import Button from "../../../../components/Button/Button";
import TextInput from "../../../../components/TextInput/TextInput";
import Header from "../../../../components/Header/Header";
import Select from "react-select";
import axiosInstance from "../../../../components/GeneralApi/generalApi";
import {
  getDataCompetenciesByID,
  updateData,
} from "../../slices/Api/competenciesApi";
import { getAllData } from "../../slices/Api/catgoryapi";
import { useGetTeamsNameQuery } from "../../../ManageTeams/slices/apis/apiSlice";
import { useGetLevelQuery } from "../../../ManageLevels/slices/api/apiLevelSlice";
import { useDispatch } from "react-redux";
import {
  setEditCompetancyDone,
  setEditShardCompetancyDone,
  setDeleteCompentancy,
  setDeleteShardCompentancy,
} from "../../slices/compentancySlice";

const EditCompetency = ({ competencyId, onClose, refresh }) => {
  const dispatch = useDispatch();
  const [competencyData, setCompetencyData] = useState([]);
  const { _id, name, defaultDescription } = competencyData;
  console.log("dddd", competencyData);

  const [isPopupOpen, setPopupOpen] = useState(true);
  const [category, setCategory] = useState("");
  const [addToggle, setAddToggle] = useState(false);
  const [selectedTeams, setSelectedTeams] = useState([]);
  const [selectedLevels, setSelectedLevels] = useState([]);
  const [categories, setCategories] = useState([]);

  console.log({ selectedTeams });

  const handleClosePopUp = () => {
    setPopupOpen(false);
    onClose();
  };

  const handleSaveChanges = async (e) => {
    if (e) e.preventDefault();
    // Add your logic to save changes here
    // Include selectedTeams and selectedLevels in your API request or logic
    const updatedData = {
      name,
      defaultDescription,
      seniorityLevels: selectedLevels?.map((lv) => ({
        level: lv.value,
        description: lv.description,
      })),

      category: category?.value,
      teamsAssigned: selectedTeams?.map((team) => team.value),
    };

    console.log("datasend", updatedData);
    try {
      const res = await updateData(_id, updatedData);
      if (res.status == "success") {
        dispatch(setEditCompetancyDone(true));
        dispatch(setEditShardCompetancyDone(true));
        dispatch(setDeleteCompentancy(true));
        dispatch(setDeleteShardCompentancy(true));


      }
      console.log("rrsrsrsr", res);
    } catch (error) {
      console.log(error);
    } finally {
      handleClosePopUp();
    }
  };

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

  const getCategoriesData = async () => {
    const categoriesDataSource = await getAllData();
    const { categories } = categoriesDataSource?.data;
    const fc = categories.map((cate) => ({
      value: cate._id,
      label: cate.categoryName,
    }));
    setCategories(fc);
  };

  useEffect(() => {
    // Fetch data and set initial values for the edit form
    const getdata = async () => {
      const res = await getDataCompetenciesByID(competencyId);
      const { foundedCompetency } = res?.data;
      console.log("foundedCompetency", foundedCompetency);
      setCompetencyData(foundedCompetency);
      const formattedLevels = foundedCompetency?.seniorityLevels?.map((le) => ({
        value: le?.level._id,
        label: le?.level.levelName,
        description: le?.description,
      }));
      console.log({ formattedLevels });
      if (formattedLevels) setSelectedLevels(formattedLevels);
      const formattedteams = foundedCompetency?.teamsAssigned?.map((team) => ({
        value: team?._id,
        label: team?.teamName,
      }));
      if (formattedteams) {
        setSelectedTeams(formattedteams);
        setAddToggle(formattedteams.length > 0);
      }

      setCategory({
        value: foundedCompetency?.category?._id,
        label: foundedCompetency?.category?.categoryName,
      });
    };

    getdata();
    getCategoriesData();
    // For example, you can use an API call to get the existing competency details
    // and populate the form fields with the fetched data.
  }, []);

  return (
    <>
      <FormPopUp
        isOpen={isPopupOpen}
        ClosePop={handleClosePopUp}
        TitlePopUp="Edit Competency"
        iconLeft={<Icons.ArrowLeftPop />}
      >
        <form>
          <div
            className="px-1 w-[35vw] max-h-[65vh] pb-4 overflow-y-auto "
            style={{ scrollbarWidth: "none" }}
          >
            <div className="my-2  w-full">
              <Header text="Name" htmlFor="name" />
              <div className="mt-2 w-full">
                <TextInput
                  onChange={(e) => {
                    console.log(e.target.value);
                    setCompetencyData((prevData) => ({
                      ...prevData,
                      name: e.target.value,
                    }));
                  }}
                  placeholder="Public Speaking"
                  id="name"
                  name="name"
                  type="text"
                  required
                  className={"h-[61px]"}
                  value={name || ""}
                />
              </div>
            </div>

            <div className="my-2  w-full">
              <Header text="Category" htmlFor="category" />
              <div className="relative mt-2">
                <Select
                  value={category}
                  onChange={(selectedOption) => setCategory(selectedOption)}
                  options={categories}
                  className={`block w-full bg-white border-0 py-2.5 px-2 ring-1 ring-inset ring-fontColor-outLineInputColor rounded-buttonRadius shadow-sm focus:shadow-outline focus:ring-2 focus:ring-buttonColor-baseColor focus:outline-none ${category === "" ? "text-fontColor-placeHolderColor" : "text-fontColor-blackBaseColor h-[61px]"}`}
                />
              </div>
            </div>

            <div className="my-2  w-full">
              <Header text="Default Description" htmlFor="description" />
              <div className="mt-2">
                <textarea
                  rows={4}
                  placeholder="Public speaking competency is characterized by the ability to communicate ideas clearly and persuasively to an audience, using strong verbal and non-verbal communication skills to engage and inform."
                  wrap="soft"
                  id="description"
                  name="description"
                  value={defaultDescription}
                  onChange={(e) => {
                    console.log(e.target.value);
                    setCompetencyData((prevData) => ({
                      ...prevData,
                      defaultDescription: e.target.value,
                    }));
                  }}
                  className="min-h-[112px] resize-none block max-h-20 bg-white w-full text-body1Size rounded-buttonRadius border-0 py-2.5 px-2 shadow-sm ring-1 ring-fontColor-outLineInputColor placeholder:text-fontColor-placeHolderColor focus:ring-2 focus:ring-buttonColor-baseColor focus:outline-none sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="w-full inline-flex justify-between items-center my-2">
              <div>
                <Header text="Assign competency to specific team" />
                <p className="text-fontColor-placeHolderColor  text-body1Size">
                  By default, competency is assigned to everyone
                </p>
              </div>
              <div>
                <label className="inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={addToggle}
                    className="sr-only peer"
                    onChange={(e) => {
                      console.log(e.target.checked);
                      setAddToggle(e.target.checked);
                    }}
                  />
                  <div className="relative w-11 h-6 peer-focus:outline-none rounded-full peer dark:bg-fontColor-placeHolderColor peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-buttonColor-baseColor"></div>
                </label>
              </div>
            </div>
            <div
              className="px-2 w-[35vw] h-[50vh] pb-4 overflow-y-auto "
              style={{ scrollbarWidth: "none" }}
            >
              {addToggle && (
                <div>
                  {/* Add the necessary elements for assigning to specific teams */}
                  <Select
                    options={teamsOptions}
                    isMulti
                    closeMenuOnSelect={false}
                    value={selectedTeams}
                    onChange={(selectedOptions) =>
                      setSelectedTeams(selectedOptions)
                    }
                  />
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
                    isMulti
                    closeMenuOnSelect={false}
                    value={selectedLevels}
                    onChange={(selectedOptions) => {
                      console.log({ selectedOptions });
                      setSelectedLevels(selectedOptions);
                    }}
                  />
                </div>
              </div>

              {selectedLevels?.map((level, index) => (
                <div
                  key={index}
                  className="relative my-2 transition-all duration-1000"
                >
                  <div className="my-2">
                    <div className="flex items-center justify-between">
                      <Header
                        text={level?.label}
                        htmlFor={`levelDescription-${index}`}
                      />
                      <div className="cursor-pointer flex items-center justify-center rounded-sm text-red-500 w-4 h-4 border border-red-500">
                        -
                      </div>
                    </div>
                    <div className="mt-2">
                      <textarea
                        rows={4}
                        placeholder={`Description for ${level?.label}`}
                        value={level?.description}
                        wrap="soft"
                        className="min-h-20 resize-none block max-h-20 bg-white w-full text-body1Size rounded-buttonRadius border-0 py-2.5 px-2 shadow-sm ring-1 ring-fontColor-outLineInputColor placeholder:text-fontColor-placeHolderColor focus:ring-2 focus:ring-buttonColor-baseColor focus:outline-none sm:text-sm sm:leading-6"
                        // Add your onChange handler for level descriptions
                        onChange={(e) =>
                          setSelectedLevels((prevLevels) =>
                            prevLevels.map((prevLevel, idx) =>
                              idx === index
                                ? {
                                    ...prevLevel,
                                    description: e.target.value,
                                  }
                                : prevLevel,
                            ),
                          )
                        }
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-2 w-full inline-flex justify-end px-1 ">
            <Button
              buttonText="Save Changes"
              className="px-10 py-3 text-fontColor-whiteBaseColor mb-[20px]"
              onClick={handleSaveChanges}
            />
          </div>
        </form>
      </FormPopUp>
    </>
  );
};

export default EditCompetency;
