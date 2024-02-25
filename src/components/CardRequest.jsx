import React from "react";
import Card from "../components/cards/Card";

export default function CardRequest() {
  return (
    <div className="mt-9">
      <h2 className="font-bold text-xl">My Requests</h2>
      <div className="flex flex-row   gap-4 mt-7">
        <Card
          content="I need your feedback on Competencies [ Team work, Communication and Public speaking ] "
          avatar="../src/assets/images/girl2.png"
          date="2024-02-23"
          avatarName="sama ahmed"
          avatarPosition="end"
        />
        <Card
          content="I need your feedback on Competencies [ Team work, Communication and Public speaking ] "
          avatar="../src/assets/images/girl2.png"
          date="2024-02-23"
          avatarName="sama ahmed"
          avatarPosition="end"
        />
        <Card
          content="I need your feedback on Competencies [ Team work, Communication and Public speaking ]"
          avatar="../src/assets/images/girl2.png"
          date="2024-02-23"
          avatarName="marwa ahmed"
          avatarPosition="end"
        />
  
      </div>
    </div>
  );
}
