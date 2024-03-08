import React, { useState } from "react";
import SubNav from "../../../components/subNav/SubNav";
import AccordingContent from "../../../features/Competencies/components/Accordion/AccordingContent";
import ComponentTitle from "../../../components/componentTitle/ComponentTitle";
import Inputs from "../../../components/Inputs/Inputs";
import { useTitle } from "../../../components/Hooks/useTitle";

const Competencies = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectIdTeam, setSelectIdTeam] = useState("");
  const [selectIdLevel, setSelectIdLevel] = useState("");
  const [selectIdCategory, setSelectIdCategory] = useState("");
  const [stateTeam, setStateTeam] = useState([]);
  const [stateLevel, setStateLevel] = useState([]);
  const [stateCategory, setStateCategory] = useState([]);
  const [dropDownTextTeam, setDropDownTextTeam] = useState("Teams");
  const [dropDownTextCategory, setDropDownTextCategory] =
    useState("Categories");
  const [dropDownTextLevel, setDropDownTextLevel] = useState("Levels");

  useTitle("Competencies");
  return (
    <>
      <SubNav currentComponent="Competencies" />
      <ComponentTitle currentList="Competencies Framework" />
      <Inputs
        currentList="Competencies Framework"
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectIdTeam={selectIdTeam}
        setSelectIdTeam={setSelectIdTeam}
        selectIdLevel={selectIdLevel}
        setSelectIdLevel={setSelectIdLevel}
        selectIdCategory={selectIdCategory}
        setSelectIdCategory={setSelectIdCategory}
        setStateTeam={setStateTeam}
        setStateLevel={setStateLevel}
        setStateCategory={setStateCategory}
        dropDownTextTeam={dropDownTextTeam}
        setDropDownTextTeam={setDropDownTextTeam}
        dropDownTextCategory={dropDownTextCategory}
        setDropDownTextCategory={setDropDownTextCategory}
        dropDownTextLevel={dropDownTextLevel}
        setDropDownTextLevel={setDropDownTextLevel}
      />
      <div className="px-10 mt-6 ">
        <AccordingContent
          searchTerm={searchTerm}
          stateTeam={stateTeam}
          stateLevel={stateLevel}
          stateCategory={stateCategory}
          dropDownTextTeam={dropDownTextTeam}
          dropDownTextCategory={dropDownTextCategory}
          dropDownTextLevel={dropDownTextLevel}
        />
      </div>
    </>
  );
};

export default Competencies;
