import React, { Component } from "react";
import RequestCardItem from "./RequestCardItem";
import image2 from "../../../../assets/images/boy3.png";

function RequestCards() {
  return (
    <><header className='font-bold text-lg w-[18.5rem] h-[1.668rem] my-6'> My Request</header>

    <main className=" flex flex-wrap gap-x-2 gap-y-4">
      <RequestCardItem  text="I need your feedback on Competencies [ Team work, Communication and
        Public speaking ]"  image={image2} name="sama ahmed" date="1-1-2024" cardId="1234"/>
      <RequestCardItem text="I need your feedback on Competencies [ Team work, Communication and
        Public speaking ]" image={image2} name="sama ahmed" date="1-1-2024" cardId="1234"/>
      <RequestCardItem text="I need your feedback on Competencies [ Team work, Communication and
        Public speaking ]" image={image2} name="sama ahmed" date="1-1-2024" cardId="1234"/>
      <RequestCardItem text="I need your feedback on Competencies [ Team work, Communication and
        Public speaking ]" image={image2} name="sama ahmed" date="1-1-2024" cardId="1234"/>
      <RequestCardItem text="I need your feedback on Competencies [ Team work, Communication and
        Public speaking ]" image={image2} name="sama ahmed" date="1-1-2024" cardId="1234"/>
      <RequestCardItem  text="I need your feedback on Competencies [ Team work, Communication and
        Public speaking ]" image={image2} name="sama ahmed" date="1-1-2024" cardId="1234"/>
    </main>
    </>
  );
}

export default RequestCards;
