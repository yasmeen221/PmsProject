// App.js


import Accordion, { AccordionItem } from "./components/Accordion/Accordion";
import icons from "../src/themes/icons";
import TeamItem from "./components/Accordion/TeamItem";

function App() {
  return (
    <div>
      <main className="w-4/5">
        <Accordion>
          <AccordionItem
            className="border-2 border-solid border-borderColor-baseBorderColor mb-5 rounded-buttonRadius text-subTitle2Size font-subTitle2Weight text-fontColor-blackBaseColor"
            value="1"
            trigger="Organization Shared Competencies"
            backgroundColor="bg-buttonColor-baseColor"
            content={<icons.Organization />}
          >
            <TeamItem
            title="Team Working"
            description="Teamwork competency involves the ability to collaborate effectively with others, contributing positively to group efforts."
            skills="Soft skills"
            position="Senior, Manager"
            />
            <TeamItem
            title="Public Speaking"
              description="Public speaking competency is characterized by the ability to communicate ideas clearly and persuasively to an audience."
              skills="Communication"
              position="Senior, Manger"
            />
            <TeamItem
              title="Research"
              description="Research competency entails the capacity to systematically investigate and analyze information, synthesize findings."
              skills="Analysis"
              position="Junior, mid level,+1"
            />
          </AccordionItem>

          <AccordionItem
            className="border-2 border-solid border-borderColor-baseBorderColor mb-5 rounded-buttonRadius text-subTitle2Size font-subTitle2Weight text-fontColor-blackBaseColor"
            value="2"
            trigger="Product Design Team"
            backgroundColor="bg-buttonColor-1000"
            content="PD"
          >
          <TeamItem
          title="Team Working"
          description="Teamwork competency involves the ability to collaborate effectively with others, contributing positively to group efforts."
          skills="Soft skills"
          position="Senior, Manager"
          />
          <TeamItem
          title="Public Speaking"
            description="Public speaking competency is characterized by the ability to communicate ideas clearly and persuasively to an audience."
            skills="Communication"
            position="Senior, Manger"
          />
          <TeamItem
            title="Research"
            description="Research competency entails the capacity to systematically investigate and analyze information, synthesize findings."
            skills="Analysis"
            position="Junior, mid level,+1"
          />
          </AccordionItem>

          <AccordionItem
            className="border-2 border-solid border-borderColor-baseBorderColor mb-5 rounded-buttonRadius text-subTitle2Size font-subTitle2Weight text-fontColor-blackBaseColor"
            value="3"
            trigger="Web Development Team"
            backgroundColor="bg-buttonColor-1100"
            content="WD"
          >
          <TeamItem
          title="Team Working"
          description="Teamwork competency involves the ability to collaborate effectively with others, contributing positively to group efforts."
          skills="Soft skills"
          position="Senior, Manager"
          />
          <TeamItem
          title="Public Speaking"
            description="Public speaking competency is characterized by the ability to communicate ideas clearly and persuasively to an audience."
            skills="Communication"
            position="Senior, Manger"
          />
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
  );
}

export default App;
