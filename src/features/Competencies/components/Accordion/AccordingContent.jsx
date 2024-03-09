import React from "react";
import TeamItem from "./TeamItem";
import Icons from "../../../../themes/icons";
import Accordion, { AccordionItem } from "./Accordion";

const AccordingContent = () => {
  return (
    <>
      <div>
        <main className="w-fall ">
          <Accordion>
            <AccordionItem
              className="border-2 border-solid border-borderColor-baseBorderColor mb-5 rounded-buttonRadius text-subTitle2Size font-subTitle2Weight text-fontColor-blackBaseColor "
              value="1"
              trigger="Organization Shared Competencies"
              backgroundColor="bg-buttonColor-baseColor"
              content={<Icons.Organization />}
              paragraph="Team Working, Public Speaking, Research"
            >
              <hr></hr>
              <TeamItem
                title="Team Working"
                description="Teamwork competency involves the ability to collaborate effectively with others, contributing positively to group efforts."
                skills="Soft skills"
                position="Senior, Manager"
              />

              <hr></hr>

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
              />
            </AccordionItem>
            {/* /////////////////////////////////// */}
            <AccordionItem
              className="border-2 border-solid border-borderColor-baseBorderColor mb-5 rounded-buttonRadius text-subTitle2Size font-subTitle2Weight text-fontColor-blackBaseColor"
              value="2"
              trigger="Product Design Team"
              backgroundColor="bg-buttonColor-1000"
              content="PD"
              paragraph="Team Working, Public Speaking, Research"
            >
              <hr></hr>

              <TeamItem
                title="Team Working"
                description="Teamwork competency involves the ability to collaborate effectively with others, contributing positively to group efforts."
                skills="Soft skills"
                position="Senior, Manager"
              />

              <hr></hr>
              <div className="transition duration-500 ease-in-out hover:bg-drawerColor-1000 rounded-2xl">
                <TeamItem
                  title="Public Speaking"
                  description="Public speaking competency is characterized by the ability to communicate ideas clearly and persuasively to an audience."
                  skills="Communication"
                  position="Senior, Manger"
                />
              </div>

              <hr></hr>
              <div className="transition duration-500 ease-in-out hover:bg-drawerColor-1000 rounded-2xl">
                <TeamItem
                  title="Research"
                  description="Research competency entails the capacity to systematically investigate and analyze information, synthesize findings."
                  skills="Analysis"
                  position="Junior, mid level,+1"
                />
              </div>
            </AccordionItem>
            {/* //////////////////////////////////////////// */}
            <AccordionItem
              className="border-2 border-solid border-borderColor-baseBorderColor mb-5 rounded-buttonRadius text-subTitle2Size font-subTitle2Weight text-fontColor-blackBaseColor"
              value="3"
              trigger="Web Development Team"
              backgroundColor="bg-buttonColor-1100"
              content="WD"
              paragraph="Team Working, Public Speaking, Research"
            >
              <hr></hr>
              <div className="transition duration-500 ease-in-out hover:bg-drawerColor-1000 rounded-2xl">
                <TeamItem
                  title="Team Working"
                  description="Teamwork competency involves the ability to collaborate effectively with others, contributing positively to group efforts."
                  skills="Soft skills"
                  position="Senior, Manager"
                />
              </div>

              <hr></hr>
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
              />
            </AccordionItem>
          </Accordion>
        </main>
      </div>
    </>
  );
};

export default AccordingContent;
