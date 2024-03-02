import React, { useState } from "react";
import LevelTable from "../../../ManageLevels/components/Tables/LevelTable";
import UserTable from "../../../ManageUsers/components/Table/UserTable";
import TeamsTable from "../../../ManageTeams";

export default function UserTabs() {
  const [tableRender, settableRender] = useState("user");
  const [activeTab, setActiveTab] = useState(1);

  const handleUser = () => {
    settableRender("user");
  };
  const handleLevel = () => {
    settableRender("level");
  };
  const handleTeams = () => {
    settableRender("team");
  };

  return (
    <div className="w-full p-10 font-custom font-normal">
      <div className="border w-full h-16 rounded-2xl p-2 flex gap-6 border-borderColor-baseBorderColor">
        <button
          onClick={() => {
            setActiveTab(1), handleUser();
          }}
          //outline-non border-b-2 border-b-blue-500 outline-none
          className={`group ${activeTab == 1 ? "text-buttonColor-baseColor rounded-buttonRadius  p-buttonPadding font-subTitle2Weight bg-drawerColor-100 " : "font-captionRegWeight  text-buttonFontSize font-custom rounded-buttonRadius  p-buttonPadding text-fontColor-TabColor"}   `}
        >
          Users
          {activeTab === 1 && (
            <div className=" w-[50%] h-[2px] bg-buttonColor-baseColor m-auto pt-1 rounded-t-lg mt-1"></div>
          )}
        </button>
        <button
          onClick={() => {
            setActiveTab(2), handleLevel();
          }}
          className={`group ${activeTab == 2 ? "text-buttonColor-baseColor rounded-buttonRadius  p-buttonPadding font-subTitle2Weight bg-drawerColor-100 " : "font-captionRegWeight  text-buttonFontSize font-custom rounded-buttonRadius  p-buttonPadding text-fontColor-TabColor"}   `}
        >
          Level
          {activeTab === 2 && (
            <div className=" w-[50%] h-[2px] bg-buttonColor-baseColor m-auto pt-1 rounded-t-lg mt-1"></div>
          )}
        </button>
        <button
          onClick={() => {
            setActiveTab(3), handleTeams();
          }}
          className={`group ${activeTab == 3 ? "text-buttonColor-baseColor rounded-buttonRadius  p-buttonPadding font-subTitle2Weight bg-drawerColor-100 " : "font-captionRegWeight  text-buttonFontSize font-custom rounded-buttonRadius  p-buttonPadding text-fontColor-TabColor"}   `}
        >
          Teams
          {activeTab === 3 && (
            <div className=" w-[50%] h-[2px] bg-buttonColor-baseColor m-auto pt-1 rounded-t-lg mt-1"></div>
          )}
        </button>
      </div>
      <section>
        {tableRender === "user" && <UserTable />}
        {tableRender === "level" && <LevelTable />}
        {tableRender === "team" && <TeamsTable />}
      </section>
    </div>
  );
}
