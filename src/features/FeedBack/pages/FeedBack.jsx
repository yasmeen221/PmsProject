import React from "react";
import ComponentTitle from "../../../components/componentTitle/ComponentTitle"
import Inputs from "../../../components/Inputs/Inputs"
import SubNav from "../../../components/subNav/SubNav"
import Tabs from "../../../components/Tabs/Tabs"

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
