import React from "react";
import SubNav from "../../../components/subNav/SubNav";
import AccordingContent from "../../../features/Competencies/components/Accordion/AccordingContent";
import ComponentTitle from "../../../components/componentTitle/ComponentTitle";
import Inputs from "../../../components/Inputs/Inputs";
import { useTitle } from "../../../components/Hooks/useTitle";

const Competencies = () => {
  useTitle("Competencies");
  return (
    <>
      <SubNav currentComponent="Competencies" />
      <ComponentTitle currentList="Competencies Framework" />
      <Inputs />
      <div className="px-10 mt-6 ">
        <AccordingContent />
      </div>
    </>
  );
};

export default Competencies;
