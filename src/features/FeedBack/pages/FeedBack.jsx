import React, { useEffect } from "react";
import ComponentTitle from "../../../components/componentTitle/ComponentTitle";
import Inputs from "../../../components/Inputs/Inputs";
import SubNav from "../../../components/subNav/SubNav";
import Tabs from "../../FeedBack/components/Tabs/Tabs";
import RequestFeedbackSomeOne from "../components/CardsPopUps/RequestFeedbackSomeOne";
import GiveNormalFeedback from "../components/CardsPopUps/GiveNormalFeedback";
import { useTitle } from "../../../components/Hooks/useTitle";
import { useDispatch } from "react-redux";
import {  getFeedbacksRequest } from "../slices/viewFeedBackSlice";

export default function FeedBack() {
  useTitle("Feedback");
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getFeedbacksRequest())
  }, [])
  return (
    <div>
      <SubNav currentComponent="Feedbacks" />
      <ComponentTitle currentList="Feedback List" />
      <Inputs />
      <Tabs />
    </div>
  );
}
