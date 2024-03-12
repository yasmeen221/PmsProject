import React, { useState, useEffect } from "react";
import FormPopUp from "../../../../components/PopUp/FormPopUp";
import Icons from "../../../../themes/icons";
import Button from "../../../../components/Button/Button";
import TextInput from "../../../../components/TextInput/TextInput";
import Header from "../../../../components/Header/Header";
import Select from "react-select";
import { updateData, getAllTeamCompetencies, getDataCompetenciesByID } from "../../slices/Api/competenciesApi";
import { getAllData } from "../../slices/Api/catgoryapi";
import { getLevelsData } from "../../slices/Api/levelsApi";
import axiosInstance from "../../../../components/GeneralApi/generalApi";
const EditCompetency = ({selectedItemId,onClose,parentId}) => {
  const [inputsData, setInputsData] = useState();
  const [category,setCategory]=useState();
  let [levels,setLevels]=useState()
  let [team,setTeam]=useState()
  const [isPopupOpen, setPopupOpen] = useState(true);
  const [addToggle, setAddToggle] = useState(false);
  const [selectedTeams, setSelectedTeams] = useState([]);
  const [selectedLevels, setSelectedLevels] = useState([]);
  const [allTeams, setAllTeams] = useState([]);

  async function getItem(param) {
    const data  = await getDataCompetenciesByID(param);
    setInputsData(data.data.foundedCompetency);
    setCategory(data.data.foundedCompetency.category)
    }
    useEffect(()=>{
      getItem(selectedItemId)
    },[])
  //  get All Teams
  useEffect(()=>{
    const getAllTeam=async()=>{
      try{
        let response=await axiosInstance.get("/teams");
        setAllTeams(response.data)
      }catch(e){
        console.log(e);
      }
    } 
    getAllTeam();
  },[])


const handleTeams=(param)=>{
  param.map((item)=>
  setSelectedTeams(item.value)
  )
}

  const handleClosePopUp = () => {
    setPopupOpen(false);
    onClose();
  };
  // get category and levels data
  useEffect(()=>{
    getAllData().then((res)=>
      setCategory(res.data)
  )
  getLevelsData().then((res)=>
  setLevels(res.data)
  )
},[]);
let categoryData,teamsOptions,teamsData,levelsData,levelOptions;
try{
  if(category.categories){
    categoryData=category.categories;
  }
  if(allTeams.data){
    teamsData=allTeams.data;
    teamsOptions = teamsData.teams.map(item => ({
      value: item._id,
      label: item.teamName
    }))
}
  if(levels.levels){
    levelsData=levels.levels;
    levelOptions = levelsData.map(item => ({
      value: item._id,
      label: item.levelName
    }))
  }
}catch(e){}
  

  let [nameComp,setNameComp]=useState();
  let [categoryId,setCategoryId]=useState();
  let [descInput,setDescInput]=useState();
  let [teamInput,setTeamInput]=useState();
  let [levelsInput,setlevelsInput]=useState();
  useEffect(()=>{
    try{
      if(inputsData.name){
        setNameComp(inputsData.name)
      }
      if(inputsData.category._id){
        setCategoryId(inputsData.category._id)
      }
      if(inputsData.defaultDescription){
        setDescInput(inputsData.defaultDescription)
      }
      if(inputsData.teamsAssigned){
        setTeamInput(inputsData.teamsAssigned)
      }
      if(inputsData.teamsAssigned){
        setlevelsInput(inputsData.teamsAssigned)
      }
    }catch(e){}
  })
  
  // handle Name
  const handelName=(e)=>{
    setNameComp(e.target.value)
  }
  console.log(categoryData,"categoryId");
// handle category
const handleCategory=(e)=>{
  setCategoryId(e.target.value)
}
// handle desription
const handleDesc=(e)=>{
  setDescInput(e.target.value)
}

// handle team
const handleTeam=(e)=>{
  setTeamInput(e.target.value)
}
// handle levels
const handlelevels=(e)=>{
  setlevelsInput(e.target.value)
}
  // send data to api
  const sendData=()=>{
    let updatedData={
      "category": categoryId,
        "defaultDescription": descInput,
        "name": nameComp,
        "seniorityLevels": [
          {"level": "65ee73aa3c1df4660fd801d6", "description": "fresh"},
          {"level": "65ee73aa3c1df4660fd801d7", "description": "senior"},
        ],
        
        "teamsAssigned": [
          selectedTeams
        ]
      }


    updateData(inputsData._id,updatedData)
    
    }
    
  return (
    <>
      <FormPopUp
        isOpen={isPopupOpen}
        ClosePop={handleClosePopUp}
        TitlePopUp="Edit Competency"
        iconLeft={<Icons.ArrowLeftPop />}
      >
        <div
          style={{
            width: "35vw",
            maxHeight: "67vh",
            overflowY: "auto",
            scrollbarWidth: "none",
          }}
          className="px-1"
        >

          {/* Name Input */}
          <div className="my-2  w-full">
            <Header text="Name" htmlFor="name" />
            <div className="mt-2 w-full">
              <TextInput
                onChange={handelName}
                placeholder="Public Speaking"
                id="name"
                name="name"
                type="text"
                required
                value={nameComp}
                className={"h-[61px]"}
              />
            </div>
          </div>


            {/* Category Select */}
          <div className="my-2  w-full">
            <Header text="Category" htmlFor="category" />
            <div className="relative mt-2">
            <select onChange={handleCategory} className={`block w-full bg-white border-0 py-2.5 px-2 ring-1 ring-inset ring-fontColor-outLineInputColor rounded-buttonRadius shadow-sm focus:shadow-outline focus:ring-2 focus:ring-buttonColor-baseColor focus:outline-none ${category === "" ? "text-fontColor-placeHolderColor" : "text-fontColor-blackBaseColor h-[61px]"}`} value={categoryId}>
              <option value={0}>Choose Category</option>
              {categoryData?(categoryData.map((item)=><option key={item._id} value={item._id}>{item.categoryName}</option>)):null}
            </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                {/* <Icons.ArrowDownBlack /> */}
              </div>
            </div>
          </div>





          {/* Description Input */}
          <div className="my-2  w-full">
            <Header text="Default Description" htmlFor="description" />
            <div className="mt-2">
              <textarea
                rows={4}
                placeholder="Public speaking competency is characterized by the ability to communicate ideas clearly and persuasively to an audience, using strong verbal and non-verbal communication skills to engage and inform."
                wrap="soft"
                id="description"
                name="description"
                value={descInput}
                onChange={handleDesc}
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

          {addToggle && (
            <div>
              {/* Add the necessary elements for assigning to specific teams */}
              <Select
                options={teamsOptions}
                isMulti
                closeMenuOnSelect={false}
                value={selectedTeams.label}
                onChange={()=>handleTeams(teamsOptions)}
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



            <Select
                options={levelOptions}
                isMulti
                closeMenuOnSelect={false}
                value={selectedLevels.label}
                onChange={(selectedOptions) =>
                  setSelectedLevels(selectedOptions)
                }
              /> 
            </div>
          </div>
          {selectedLevels.map((level, index) => (
            <div
              key={index}
              className="relative my-2 transition-all duration-1000"
            >
              <div className="my-2">
                <div className="flex items-center justify-between">
                  <Header
                    text={level.label}
                    htmlFor={`levelDescription-${index}`}
                  />
                  <div className="cursor-pointer flex items-center justify-center rounded-sm text-red-500 w-4 h-4 border border-red-500">
                    -
                  </div>
                </div>


{/* ============================== */}
                <div className="mt-2">
                  <textarea
                    rows={4}
                    placeholder={`Description for ${level.label}`}
                    wrap="soft"
                    className="min-h-20 resize-none block max-h-20 bg-white w-full text-body1Size rounded-buttonRadius border-0 py-2.5 px-2 shadow-sm ring-1 ring-fontColor-outLineInputColor placeholder:text-fontColor-placeHolderColor focus:ring-2 focus:ring-buttonColor-baseColor focus:outline-none sm:text-sm sm:leading-6"
                    // Add your onChange handler for level descriptions
                  />
                </div>
{/* ============================== */}


              </div>
            </div>
          ))}
          <div className="mt-2 w-full inline-flex justify-end px-1 ">
            <Button
              buttonText="Save Changes"
              className="px-10 py-3 text-fontColor-whiteBaseColor mb-[20px]"
              // onClick={handleSaveChanges}
              onClick={sendData}
            />
          </div>
        </div>
      </FormPopUp>
    </>
  );
};

export default EditCompetency;

