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

const AccordingContent = ({ searchTerm }) => {
  const [searchResults, setSearchResults] = useState([]);
  const [sharedComp, setSharedComp] = useState([])
  const [allTeamComp, setAllTeamComp] = useState()
  const { data: teams, isLoading, isSuccess } = useGetTeamsNameQuery();
  const [clicked, setClicked] = useState(false)
  useEffect(() => {
    getAllDataCompetencies()
      .then((fetchedData) => {
        let arr = []
        console.log(fetchedData.data)
        for (let i = 0; i < fetchedData.data.length; i++) {
          if (fetchedData.data[i].teamsAssigned.length == 0) {
            arr.push(fetchedData.data[i])
            console.log(fetchedData.data[i])
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
            console.log(fetchedDataSearch)
          })
          .catch((error) => {

            console.log("Error fetching data:", error);
          });
      } catch (err) {
        console.log(err)
      }
    } else {
      setSearchResults([]);
    }
  }, [searchTerm]);

  const triggerCompetencyHeader = (arrayOfItems) => {
    return arrayOfItems.map((itemTeamsAssigned, index, array) => { return `${itemTeamsAssigned.teamName} Team${(index == array.length - 1) ? '' : ','}` })
  }
  const competencyItems = (arrayOfItems) => {
    return (
      arrayOfItems?.data?.map((item) => {
        return (
          <AccordionItem
            key={item._id}
            className="border-2 border-solid border-borderColor-baseBorderColor mb-5 rounded-buttonRadius text-subTitle2Size font-subTitle2Weight text-fontColor-blackBaseColor "
            value={item._id}
            trigger={item.teamsAssigned.length == 0 ? "Organization Shared Competencies" : triggerCompetencyHeader(item.teamsAssigned)}
            backgroundColor="bg-buttonColor-baseColor"
            content={<Icons.Organization />}
            paragraph="Team Working, Public Speaking, Research"
          >
            <hr></hr>
            {/**filter array of  cometecies based on levelname in seniorityLevels(senior,junior) so that it is not duplicated*/}
            {item.seniorityLevels.filter(
              (itemLevel, index, array) =>
                index ===
                array.findIndex(
                  (t) =>
                    t.level.levelName === itemLevel.level.levelName
                  // && ask back people to put the describtion the same for each level to remove duplicates
                  // t.description === itemLevel.description
                )
            ).map((itemLevel, index) => {
              return (
                <TeamItem
                  key={itemLevel._id}
                  title={item.name}
                  description={itemLevel.description}
                  skills="Soft skills"
                  position={Array.isArray(itemLevel.level.levelName) ? itemLevel.level.levelName.map((item) => {
                    return (
                      item
                    )
                  }) : itemLevel.level.levelName}
                />
              )
            })}
          </AccordionItem>
        );
      })
    )
  }
  const getAllTeamCompetenciesFun = (id) => {
    setClicked(false)
    getAllTeamCompetencies(id).then((res) => {
      console.log(res.data.teamCompetencies)
      setAllTeamComp(res.data)
      setClicked(true)

      return res.data
    })
  }
  return (
    <>
      <div>
        <main className="w-fall ">
          <Accordion>
            {!searchTerm && <AccordionItem
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
                  description={itemm.defaultDescription}
                  skills={!(itemm.category) ? "not found" : itemm.category.categoryName}
                  position={itemm.seniorityLevels
                    .filter((item, index, array) => array.findIndex(t => t.level.levelName === item.level.levelName) === index)
                    .map(item => item.level.levelName)
                    .join(", ")} />
              ))
            ) : teams?.data.teamsNames?.map((item) => {

              return (
                <AccordionItem
                  className="border-2 border-solid border-borderColor-baseBorderColor mb-5 rounded-buttonRadius text-subTitle2Size font-subTitle2Weight text-fontColor-blackBaseColor "
                  value={item._id}
                  key={item._id}
                  trigger={`${item.teamName} Team`}
                  backgroundColor="bg-buttonColor-baseColor"
                  content={<Icons.Organization />}
                  paragraph="Team Working, Public Speaking, Research"
                  onOpenClick={() => { getAllTeamCompetenciesFun(item._id) }}
                >
                  <hr></hr>

                  {
                    clicked == true && allTeamComp?.teamCompetencies.map((itemm) => {
                      return (<TeamItem
                        key={itemm._id}
                        title={itemm.name}
                        description={itemm.defaultDescription}
                        skills={!(itemm.category) ? "not found" : itemm.category.categoryName}
                        position={itemm.seniorityLevels
                          .filter((item, index, array) => array.findIndex(t => t.level.levelName === item.level.levelName) === index)
                          .map(item => item.level.levelName)
                          .join(", ")} />)
                    })

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
