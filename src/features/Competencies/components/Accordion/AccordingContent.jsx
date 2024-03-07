import React, { useEffect, useState } from "react";
import TeamItem from "./TeamItem";
import Icons from "../../../../themes/icons";
import Accordion, { AccordionItem } from "./Accordion";
import {
  getAllDataCompetencies,
  searchCompetencies,
} from "../../slices/Api/competenciesApi";

const AccordingContent = ({ searchTerm }) => {
  const [searchResults, setSearchResults] = useState([]);
  const [competency, setCompetency] = useState([]);
  useEffect(() => {
    getAllDataCompetencies()
      .then((fetchedData) => {
        setCompetency(fetchedData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

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
  const triggerCompetencyHeader = (arrayOfItems) => {
    return arrayOfItems.map((itemTeamsAssigned, index, array) => { return `${itemTeamsAssigned.teamName}${(index == array.length - 1) ? '' : ','}` })
  }

  console.log(searchResults);
  console.log(competency);
  return (
    <>
      <div>
        <main className="w-fall ">
          <Accordion>
            {competency?.data?.map((item) => {
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
            })}
          </Accordion>
        </main>
      </div>
    </>
  );
};

export default AccordingContent;
