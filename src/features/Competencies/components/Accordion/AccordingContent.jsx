import React, { useEffect, useState } from "react";
import TeamItem from "./TeamItem";
import Icons from "../../../../themes/icons";
import Accordion, { AccordionItem } from "./Accordion";
import {
  getAllDataCompetencies,
  getAllTeamCompetencies,
  searchCompetencies,
} from "../../slices/Api/competenciesApi";
import { useGetTeamsNameQuery } from "../../../ManageTeams/slices/apis/apiSlice";
import { useSelector } from "react-redux";

const AccordingContent = ({
  searchTerm,
  stateTeam,
  stateLevel,
  stateCategory,
  dropDownTextTeam,
  dropDownTextCategory,
  dropDownTextLevel, }) => {
  const [searchResults, setSearchResults] = useState([]);
  const [sharedComp, setSharedComp] = useState([])
  const { data: teams, isLoading, isSuccess } = useGetTeamsNameQuery();
  const { isLoadingTeamComp, comps, error } = useSelector(state => state.getTeamCompetenciesReducer)
  useEffect(() => {
    getAllDataCompetencies()
      .then((fetchedData) => {
        let arr = []
        // console.log(fetchedData.data)
        for (let i = 0; i < fetchedData.data.length; i++) {
          if (fetchedData.data[i].teamsAssigned.length == 0) {
            arr.push(fetchedData.data[i])
            // console.log(fetchedData.data[i])
          }
        }
        setSharedComp(arr)
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });

  }, []);

  useEffect(() => {
    if (searchTerm) {
      try {
        searchCompetencies(searchTerm)
          .then((fetchedDataSearch) => {
            setSearchResults(fetchedDataSearch);
            // console.log(fetchedDataSearch)
          })
          .catch((error) => {

            console.log("Error fetching data:", error.data);
          });
      } catch (err) {
        console.log("Error fetching data:", err.data)
      }
    } else {
      setSearchResults([]);
    }
  }, [searchTerm]);

  const triggerCompetencyHeader = (arrayOfItems) => {
    return arrayOfItems.map((itemTeamsAssigned, index, array) => { return `${itemTeamsAssigned.teamName} Team${(index == array.length - 1) ? '' : ','}` })
  }


 

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
                  id={itemm._id}
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
                  id={itemm._id}
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
                  id={itemm._id}
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
            {!searchTerm && dropDownTextLevel === "Levels" &&
              dropDownTextTeam === "Teams" &&
              dropDownTextCategory === "Categories" && <AccordionItem
                value="shared"
                className="border-2 border-solid border-borderColor-baseBorderColor mb-5 rounded-buttonRadius text-subTitle2Size font-subTitle2Weight text-fontColor-blackBaseColor "
                trigger={`Organization Shared Competencies`}
                backgroundColor="bg-buttonColor-baseColor"
                content={<Icons.Organization />}
                paragraph="Team Working, Public Speaking, Research"
              >
                <hr></hr>

                {sharedComp && sharedComp.length > 0 && sharedComp.map((itemm, index) => (
                  <TeamItem
                    key={itemm._id}
                    title={itemm.name}
                    id={itemm._id}
                    description={itemm.defaultDescription}
                    skills={!(itemm.category) ? "not found" : itemm.category.categoryName}
                    position={itemm.seniorityLevels
                      .filter((item, index, array) => array.findIndex(t => t.level.levelName === item.level.levelName) === index)
                      .map(item => item.level.levelName)
                      .join(", ")}
                  />
                ))}
              </AccordionItem>}
            {searchTerm && searchResults && searchResults.data ? (
              searchResults?.data.competencies.map((itemm, index) => (
                <TeamItem
                  key={itemm._id}
                  title={itemm.name}
                  id={itemm._id}
                  description={itemm.defaultDescription}
                  skills={!(itemm.category) ? "not found" : itemm.category.categoryName}
                  position={itemm.seniorityLevels
                    .filter((item, index, array) => array.findIndex(t => t.level.levelName === item.level.levelName) === index)
                    .map(item => item.level.levelName)
                    .join(", ")} />
              ))
            ) : isLoading ? <div className="w-full flex flex-row justify-center"><Icons.Loading /></div> : teams?.data.teamsNames?.map((item) => {

              return (
                <AccordionItem
                  className="border-2 border-solid border-borderColor-baseBorderColor mb-5 rounded-buttonRadius text-subTitle2Size font-subTitle2Weight text-fontColor-blackBaseColor "
                  value={item._id}
                  key={item._id}
                  trigger={`${item.teamName} Team`}
                  backgroundColor="bg-buttonColor-baseColor"
                  content={<Icons.Organization />}
                  paragraph="Team Working, Public Speaking, Research"
                >
                  <hr></hr>


                  {
                    isLoadingTeamComp ? (
                      <div className="w-full flex flex-row justify-center mt-2"><Icons.Loading/></div>
                    ) : !error && comps?.teamCompetencies?.length > 0 ? (
                      comps.teamCompetencies.map((itemm) => (
                        <TeamItem
                          key={itemm._id}
                          id={itemm._id}
                          title={itemm.name}
                          description={itemm.defaultDescription}
                          skills={
                            !(itemm.category) ? "not found" : itemm.category.categoryName
                          }
                          position={itemm.seniorityLevels
                            .filter(
                              (item, index, array) =>
                                array.findIndex(
                                  (t) => t.level.levelName === item.level.levelName
                                ) === index
                            )
                            .map((item) => item.level.levelName)
                            .join(", ")}
                        />
                      ))
                    ) : !isLoadingTeamComp && !error && comps?.teamCompetencies?.length === 0 ? (
                      <p>no data</p>
                    ) : null
                  }

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
