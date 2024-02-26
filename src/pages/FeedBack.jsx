import React from "react";
import ComponentTitle from "../components/reusablecomponents/componentTitle/ComponentTitle";
import Inputs from "../components/reusablecomponents/Inputs/Inputs";
import SubNav from "../components/sharedcomponent/SubNav";
import Tabs from "../components/reusablecomponents/Tabs/Tabs";

export default function FeedBack() {
  return (
    <div>
      <SubNav currentComponent="Feedbacks" />
      {/* Competencies FrameWork */}
      <ComponentTitle currentList="Feedback List" />
      <Inputs />
      <Tabs />
    </div>
  );
}
