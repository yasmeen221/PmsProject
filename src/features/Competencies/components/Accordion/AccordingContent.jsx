import React, { useEffect, useState } from "react";
import TeamItem from "./TeamItem";
import Icons from "../../../../themes/icons";
import Accordion, { AccordionItem } from "./Accordion";
import {
  getAllDataCompetencies,
  searchCompetencies,
} from "../../slices/Api/competenciesApi";
import { useGetTeamsNameQuery } from "../../../ManageTeams/slices/apis/apiSlice";
import { useSelector, useDispatch } from "react-redux";
import {
  setDeleteShardCompentancy,
  setEditShardCompetancyDone,
  setAddCompentancy,
} from "../../slices/compentancySlice";

const AccordingContent = ({
  searchTerm,
  stateTeam,
  stateLevel,
  stateCategory,
  dropDownTextTeam,
  dropDownTextCategory,
  dropDownTextLevel,
}) => {
  const dispatch = useDispatch();
  const editShardCompentancy = useSelector(
    (state) => state.compentancySlice.editShardCompentancy,
  );
  const deleteShardCompentancy = useSelector(
    (state) => state.compentancySlice.deleteShardCompetancy,
  );
  const addNewCompentancy = useSelector(
    (state) => state.compentancySlice.addNewComp,
  );
  const [searchResults, setSearchResults] = useState([]);
  const [sharedComp, setSharedComp] = useState([]);
  const { data: teams, isLoading, isSuccess } = useGetTeamsNameQuery();
  const { isLoadingTeamComp, comps, error } = useSelector(
    (state) => state.getTeamCompetenciesReducer,
  );
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

        dispatch(setEditShardCompetancyDone(false));
        dispatch(setDeleteShardCompentancy(false));
        dispatch(setAddCompentancy(false));
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        dispatch(setEditShardCompetancyDone(false));
        dispatch(setDeleteShardCompentancy(false));
        dispatch(setAddCompentancy(false));
      });
  }, [editShardCompentancy, deleteShardCompentancy, addNewCompentancy]);

  useEffect(() => {
    if (searchTerm) {
      try {
        searchCompetencies(searchTerm)
          .then((fetchedDataSearch) => {
            setSearchResults(fetchedDataSearch);
          })
          .catch((error) => {
            console.log("Error fetching data:", error.data);
          });
      } catch (err) {}
    } else {
      setSearchResults([]);
    }
  }, [searchTerm]);

  const renderPosition = (itemm) => {
    const allCompetencyLevelNames = itemm.seniorityLevels.map(
      //rerurn array of competency levels names
      (item, index) =>
        item.level?.levelName ? item.level.levelName : "not found",
    );
    const uniqueLevelNames = Array.from(
      new Set(allCompetencyLevelNames.map((levelName) => levelName)), //use set to remove duplicated level names
    );
    return uniqueLevelNames.map((item) => item).join(", ");
  };
  const renderCatogry = (itemm) => {
    return !itemm.category ? "not found" : itemm.category.categoryName;
  };
  const renderNoData = () => {
    return (
      <div className=" flex flex-row w-full justify-center">
        <p>no data</p>
      </div>
    );
  };

  return (
    <>
      <div>
        <main className="w-full ">
          <Accordion>
            {stateTeam //filter by team
              ? stateTeam?.data?.competencies.map((itemm, index) => (
                  <TeamItem
                    key={itemm._id}
                    title={itemm.name}
                    id={itemm._id}
                    description={itemm.defaultDescription}
                    skills={renderCatogry(itemm)}
                    position={renderPosition(itemm)}
                  />
                ))
              : "no competency in this team"}
            {stateCategory //filter by catogry
              ? stateCategory?.data?.competencies.map((itemm, index) => (
                  <TeamItem
                    key={itemm._id}
                    title={itemm.name}
                    description={itemm.defaultDescription}
                    id={itemm._id}
                    skills={renderCatogry(itemm)}
                    position={renderPosition(itemm)}
                  />
                ))
              : "no competency in this category"}
            {stateLevel //filter by level
              ? stateLevel?.data?.competencies.map((itemm, index) => (
                  <TeamItem
                    key={itemm._id}
                    title={itemm.name}
                    id={itemm._id}
                    description={itemm.defaultDescription}
                    skills={renderCatogry(itemm)}
                    position={renderPosition(itemm)}
                  />
                ))
              : "no competency in this level"}
            {!searchTerm &&
              dropDownTextLevel === "Levels" &&
              dropDownTextTeam === "Teams" &&
              dropDownTextCategory === "Categories" && (
                <AccordionItem
                  value="shared"
                  className="border-2 border-solid border-borderColor-baseBorderColor mb-5 rounded-buttonRadius text-subTitle2Size font-subTitle2Weight text-fontColor-blackBaseColor "
                  trigger={`Organization Shared Competencies`}
                  backgroundColor="bg-buttonColor-baseColor"
                  content={<Icons.Organization />}
                  paragraph="Team Working, Public Speaking, Research"
                >
                  <hr></hr>
                  {sharedComp && sharedComp.length > 0
                    ? sharedComp.map((itemm, index) => (
                        <TeamItem
                          key={itemm._id}
                          title={itemm.name}
                          id={itemm._id}
                          description={itemm.defaultDescription}
                          skills={renderCatogry(itemm)}
                          position={renderPosition(itemm)}
                          refresh={getAllDataCompetencies}
                        />
                      ))
                    : renderNoData()}
                </AccordionItem>
              )}
            {searchTerm && searchResults && searchResults.data ? (
              searchResults?.data.competencies.map((itemm, index) => (
                <TeamItem
                  key={itemm._id}
                  title={itemm.name}
                  id={itemm._id}
                  description={itemm.defaultDescription}
                  skills={renderCatogry(itemm)}
                  position={renderPosition(itemm)}
                  refresh={getAllDataCompetencies}
                />
              ))
            ) : isLoading ? (
              <div className="w-full flex flex-row justify-center">
                <Icons.Loading />
              </div>
            ) : !searchTerm &&
              dropDownTextLevel === "Levels" && //to remove teams accordion when search or filter
              dropDownTextTeam === "Teams" &&
              dropDownTextCategory === "Categories" ? (
              teams?.data.teamsNames?.map((item) => {
                return (
                  <AccordionItem
                    className="border-2 border-solid border-borderColor-baseBorderColor mb-5 rounded-buttonRadius text-subTitle2Size font-subTitle2Weight text-fontColor-blackBaseColor "
                    value={item._id}
                    key={item._id}
                    trigger={`${item.teamName} Team`}
                    backgroundColor="bg-buttonColor-baseColor"
                    content={item.teamName.substring(0, 2).toUpperCase()}
                    paragraph="Team Working, Public Speaking, Research"
                  >
                    <hr></hr>
                    {isLoadingTeamComp ? (
                      <div className="w-full flex flex-row justify-center mt-2">
                        <Icons.Loading />
                      </div>
                    ) : !error && comps?.teamCompetencies?.length > 0 ? (
                      comps.teamCompetencies.map((itemm) => (
                        <TeamItem
                          key={itemm._id}
                          id={itemm._id}
                          title={itemm.name}
                          description={itemm.defaultDescription}
                          skills={renderCatogry(itemm)}
                          position={renderPosition(itemm)}
                          refresh={getAllDataCompetencies}
                        />
                      ))
                    ) : !isLoadingTeamComp &&
                      !error &&
                      comps?.teamCompetencies?.length === 0 ? (
                      renderNoData()
                    ) : null}
                  </AccordionItem>
                );
              })
            ) : (
              ""
            )}
          </Accordion>
        </main>
      </div>
    </>
  );
};

export default AccordingContent;
