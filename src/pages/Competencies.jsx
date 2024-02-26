import React from "react";
import SubNav from "../components/sharedcomponent/SubNav";
import Inputs from "../components/reusablecomponents/Inputs/Inputs";
import TestAccording from "../components/Accordion/AccordingContent";
import ComponentTitle from "../components/reusablecomponents/componentTitle/ComponentTitle";

const Competencies = () => {
  return (
    <>
      <SubNav currentComponent="Competencies" />
      <ComponentTitle currentList="Competencies Framework" />
      <Inputs />
      <div className="px-10 mt-6 ">
        <TestAccording />
      </div>
    </>
  );
};

export default Competencies;
