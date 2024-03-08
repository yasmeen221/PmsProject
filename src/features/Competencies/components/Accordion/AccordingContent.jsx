import React, { useEffect, useState } from "react";
import TeamItem from "./TeamItem";
import Icons from "../../../../themes/icons";
import Accordion, { AccordionItem } from "./Accordion";
import {
  getAllDataCompetencies,
  getAllTeamCompetencies,
  searchCompetencies,
} from "./../../slices/Api/competenciesApi";
import { useGetTeamsNameQuery } from "../../../ManageTeams/slices/apis/apiSlice";

const AccordingContent = ({
  searchTerm,
  stateTeam,
  stateLevel,
  stateCategory,
  dropDownTextTeam,
  dropDownTextCategory,
  dropDownTextLevel,
}) => {
  const [searchResults, setSearchResults] = useState([]);
  const [sharedComp, setSharedComp] = useState([]);
  const [allTeamComp, setAllTeamComp] = useState();
  const { data: teams, isLoading, isSuccess } = useGetTeamsNameQuery();
  const [clicked, setClicked] = useState(false);
  useEffect(() => {
    getAllDataCompetencies()
      .then((fetchedData) => {
        let arr = [];
        for (let i = 0; i < fetchedData.data.length; i++) {
          if (fetchedData.data[i].teamsAssigned.length == 0) {
            arr.push(fetchedData.data[i]);
          }
        }
        setSharedComp(arr);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  // handel search of competesnsies
  useEffect(() => {
    if (searchTerm) {
      searchCompetencies(searchTerm)
        .then((fetchedDataSearch) => {
          setSearchResults(fetchedDataSearch);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    } else {
      setSearchResults([]);
    }
  }, [searchTerm]);
  
  // end of search
  // to style of the teams in header acording
  const triggerCompetencyHeader = (arrayOfItems) => {
    return arrayOfItems.map((itemTeamsAssigned, index, array) => {
      return `${itemTeamsAssigned.teamName} Team${index == array.length - 1 ? "" : ","}`;
    });
  };

  // to get the competencies of assigened to each teams
  const getAllTeamCompetenciesFun = (id) => {
    setClicked(false);
    getAllTeamCompetencies(id).then((res) => {
      setAllTeamComp(res.data);
      setClicked(true);
      return res.data;
    });
  };
  return (
    <>
      <div>
        <main className="w-fall ">
          <Accordion>
             {stateTeam 
              ? stateTeam?.data?.competencies.map((itemm, index) => (
                  <TeamItem
                    key={itemm._id}
                    title={itemm.name}
                    description={itemm.defaultDescription}
                    skills={
                      !itemm.category
                        ? "not found"
                        : itemm.category.categoryName
                    }
                    position={itemm.seniorityLevels
                      .filter(
                        (item, index, array) =>
                          array.findIndex(
                            (t) => t.level.levelName === item.level.levelName,
                          ) === index,
                      )
                      .map((item) => item.level.levelName)
                      .join(", ")}
                  />
                ))
              : "teammmmm"}
                        {stateCategory
              ? stateCategory?.data?.competencies.map((itemm, index) => (
                  <TeamItem
                    key={itemm._id}
                    title={itemm.name}
                    description={itemm.defaultDescription}
                    skills={
                      !itemm.category
                        ? "not found"
                        : itemm.category.categoryName
                    }
                    position={itemm.seniorityLevels
                      .filter(
                        (item, index, array) =>
                          array.findIndex(
                            (t) => t.level.levelName === item.level.levelName,
                          ) === index,
                      )
                      .map((item) => item.level.levelName)
                      .join(", ")}
                  />
                ))
              : "categgory"}
            {stateLevel
              ? stateLevel?.data?.competencies.map((itemm, index) => (
                  <TeamItem
                    key={itemm._id}
                    title={itemm.name}
                    description={itemm.defaultDescription}
                    skills={
                      !itemm.category
                        ? "not found"
                        : itemm.category.categoryName
                    }
                    position={itemm.seniorityLevels
                      .filter(
                        (item, index, array) =>
                          array.findIndex(
                            (t) => t.level.levelName === item.level.levelName,
                          ) === index,
                      )
                      .map((item) => item.level.levelName)
                      .join(", ")}
                  />
                ))
              : "leeveel"}
            {
              !searchTerm &&
            ( dropDownTextLevel === "Levels" &&
              dropDownTextTeam === "Teams" &&
              dropDownTextCategory ===
              "Categories") &&
              (
                  <AccordionItem
                    className="border-2 border-solid border-borderColor-baseBorderColor mb-5 rounded-buttonRadius text-subTitle2Size font-subTitle2Weight text-fontColor-blackBaseColor "
                    trigger={`Organization Shared Competencies`}
                    backgroundColor="bg-buttonColor-baseColor"
                    content={<Icons.Organization />}
                    paragraph="Team Working, Public Speaking, Research"
                  >
                    <hr></hr>

                    {sharedComp &&
                      sharedComp.length > 0 &&
                      sharedComp.map((itemm, index) => (
                        <TeamItem
                          key={itemm._id}
                          title={itemm.name}
                          description={itemm.defaultDescription}
                          skills={
                            !itemm.category
                              ? "not found"
                              : itemm.category.categoryName
                          }
                          position={itemm.seniorityLevels
                            .filter(
                              (item, index, array) =>
                                array.findIndex(
                                  (t) =>
                                    t.level.levelName === item.level.levelName,
                                ) === index,
                            )
                            .map((item) => item.level.levelName)
                            .join(", ")}
                        />
                      ))}
                  </AccordionItem>,
                )}
            {searchTerm &&  searchResults && searchResults?.data
              ? searchResults.data.competencies.map((itemm, index) => (
                  <TeamItem
                    key={itemm._id}
                    title={itemm.name}
                    description={itemm.defaultDescription}
                    skills={
                      !itemm.category
                        ? "not found"
                        : itemm.category.categoryName
                    }
                    position={itemm.seniorityLevels
                      .filter(
                        (item, index, array) =>
                          array.findIndex(
                            (t) => t.level.levelName === item.level.levelName,
                          ) === index,
                      )
                      .map((item) => item.level.levelName)
                      .join(", ")}
                  />
                ))
              : !(stateTeam == "Teams" && stateCategory == "Categories" && stateLevel == "Levels") &&
              teams?.data.teamsNames?.map((item) => {
                  return (
                    <AccordionItem
                      className="border-2 border-solid border-borderColor-baseBorderColor mb-5 rounded-buttonRadius text-subTitle2Size font-subTitle2Weight text-fontColor-blackBaseColor "
                      value={item._id}
                      key={item._id}
                      trigger={`${item.teamName} Team`}
                      backgroundColor="bg-buttonColor-baseColor"
                      content={<Icons.Organization />}
                      paragraph="Team Working, Public Speaking, Research"
                      onOpenClick={() => {
                        getAllTeamCompetenciesFun(item._id);
                      }}
                    >
                      <hr></hr>

                      {clicked == true &&
                        allTeamComp?.teamCompetencies.map((itemm) => {
                          return (
                            <TeamItem
                              key={itemm._id}
                              title={itemm.name}
                              description={itemm.defaultDescription}
                              skills={
                                !itemm.category
                                  ? "not found"
                                  : itemm.category.categoryName
                              }
                              position={itemm.seniorityLevels
                                .filter(
                                  (item, index, array) =>
                                    array.findIndex(
                                      (t) =>
                                        t.level.levelName ===
                                        item.level.levelName,
                                    ) === index,
                                )
                                .map((item) => item.level.levelName)
                                .join(", ")}
                            />
                          );
                        })}
                    </AccordionItem>
                  );
                })}
          </Accordion>
        </main>
      </div>
    </>
  );
};

export default AccordingContent;
