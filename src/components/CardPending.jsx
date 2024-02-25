import React from "react";
import Card from "../components/cards/Card";

export default function CardPending() {
  return (
    <div className="mt-9">
      <h2 className="font-bold text-xl">Pending your action</h2>
      <div className="flex flex-row gap-4  mt-7">
        <Card
          content="Sample content Sample content Sample content Sample content Sample content Sample content "
          avatar="../src/assets/images/girl2.png"
          date="2024-02-23"
          avatarName="sama ahmed"
          avatarPosition="start"
        />
        <Card
          content="Sample content Sample content Sample content Sample content Sample content Sample content "
          avatar="../src/assets/images/girl2.png"
          date="2024-02-23"
          avatarName="sama ahmed"
          avatarPosition="start"
        />
        <Card
          content="Sample content Sample content Sample content Sample content Sample content Sample content"
          avatar="../src/assets/images/girl2.png"
          date="2024-02-23"
          avatarName="sama ahmed"
          avatarPosition="start"
        />
      </div>
    </div>
  );
}
