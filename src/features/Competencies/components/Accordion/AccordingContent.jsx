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
  const mergeLists = [competency, searchResults];
  console.log(competency);
  console.log(mergeLists);
  const filteredList = mergeLists.filter(
    (item) =>
      item &&
      item.name &&
      item.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );
  console.log(filteredList);
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
                  className="border-2 border-solid border-borderColor-baseBorderColor mb-5 rounded-buttonRadius text-subTitle2Size font-subTitle2Weight text-fontColor-blackBaseColor "
                  value={item._id}
                  trigger="Organization Shared Competencies"
                  backgroundColor="bg-buttonColor-baseColor"
                  content={<Icons.Organization />}
                  paragraph="Team Working, Public Speaking, Research"
                >
                  <hr></hr>

                  <TeamItem
                    title={item.name}
                    description={item.defaultDescription}
                    skills="Soft skills"
                    position="Senior, Manager"
                  />

                  {/* <hr></hr>

              <TeamItem
                title="Public Speaking"
                description="Public speaking competency is characterized by the ability to communicate ideas clearly and persuasively to an audience."
                skills="Communication"
                position="Senior, Manger"
              />

              <hr></hr>

              <TeamItem
                title="Research"
                description="Research competency entails the capacity to systematically investigate and analyze information, synthesize findings."
                skills="Analysis"
                position="Junior, mid level,+1"
              /> */}
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
