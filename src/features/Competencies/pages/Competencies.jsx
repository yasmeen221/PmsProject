import React, { useState } from "react";
import SubNav from "../../../components/subNav/SubNav";
import AccordingContent from "../../../features/Competencies/components/Accordion/AccordingContent";
import ComponentTitle from "../../../components/componentTitle/ComponentTitle";
import Inputs from "../../../components/Inputs/Inputs";
import { useTitle } from "../../../components/Hooks/useTitle";

const Competencies = () => {
  const [searchTerm, setSearchTerm] = useState("");
  useTitle("Competencies");
  return (
    <>
      <SubNav currentComponent="Competencies" />
      <ComponentTitle currentList="Competencies Framework" />
      <Inputs
        currentList="Competencies Framework"
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <div className="px-10 mt-6 ">
        <AccordingContent searchTerm={searchTerm} />
      </div>
    </>
  );
};

export default Competencies;
