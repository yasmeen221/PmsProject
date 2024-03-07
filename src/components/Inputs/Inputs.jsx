import React, { useEffect, useState } from "react";
import Icons from "../../themes/icons";
import Button from "../../components/Button/Button";
import DropDown from "../../components/DropDown/DropDown";
import TextInput from "../../components/TextInput/TextInput";
import { useGetTeamsNameQuery } from "../../features/ManageTeams/slices/apis/apiSlice";
import { useGetLevelQuery } from "../../features/ManageLevels/slices/api/apiLevelSlice";
import { getAllData } from "../../features/Competencies/slices/Api/catgoryapi";
import AccordingContent from "./../../features/Competencies/components/Accordion/AccordingContent";
export default function Inputs({ currentList, searchTerm, setSearchTerm }) {
  const [dropDown1, setOpen1] = useState(false);
  const [dropDown2, setOpen2] = useState(false);
  const [dropDown3, setOpen3] = useState(false);

  const [dataCategory, setDataCategory] = useState([]);
  const { data: teams, isLoading, isSuccess } = useGetTeamsNameQuery();

  const { data: levels } = useGetLevelQuery();
  // console.log(searchTerm);

  const dropdown1 = (value) => {
    setOpen1((dropDown1) => !dropDown1);
  };
  const dropdown2 = (value) => {
    setOpen2((dropDown2) => !dropDown2);
  };
  const dropdown3 = (value) => {
    setOpen3((dropDown3) => !dropDown3);
  };

  useEffect(() => {
    getAllData()
      .then((fetchedData) => {
        setDataCategory(fetchedData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  const filterDataByTeam = (team) => {
    if (teams) {
      const filteredDataTeam = teams?.data?.teamsNames.filter(
        (item) => item.teamName === team.teamName,
      );
      console.log(filteredDataTeam);
    }
  };
  const handleTeamClick = (team) => {
    setOpen1(false);
    filterDataByTeam(team);
    console.log(team);
  };
  const filterDataByCategory = (category) => {
    if (levels) {
      const filteredDataCategory = dataCategory?.data?.categories.filter(
        (item) => item.categoryName === category.categoryName,
      );
      console.log(filteredDataCategory);
    }
  };
  const handelCategoryClick = (level) => {
    setOpen2(false);
    filterDataByCategory(level);
    console.log(level);
  };

  const filterDataByLevels = (level) => {
    if (levels) {
      const filteredDataLevel = levels?.data?.levels.filter(
        (item) => item.levelName === level.levelName,
      );
      console.log(filteredDataLevel);
    }
  };
  const handelLevelClick = (level) => {
    setOpen3(false);
    filterDataByLevels(level);
    console.log(level);
  };

  return (
    <>
      {currentList == "Competencies Framework" ? (
        <>
          <div className="flex gap-3 w-full h-12  px-10 mt-6 font-custom font-normal">
            <TextInput
              placeholder="Search..."
              className="max-w-56 h-12 "
              type="text"
              leftIcon={<Icons.SearchIcon />}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <DropDown
              DropDownText="Teams"
              arrowIcon
              iconColor="#B7BCC1"
              open={dropDown1}
              onClick={() => {
                setOpen1((dopen) => !dopen);
              }}
              className="  bg-white border h-12 border-borderColor-baseBorderColor text-fontColor-placeHolderColor"
            >
              {teams?.data?.teamsNames.map((team) => {
                return (
                  <li
                    key={team._id}
                    className="block px-dropItemXP py-dropItemYP  hover:bg-hoverColor-baseHoverColor "
                    onClick={() => handleTeamClick(team)}
                  >
                    {team.teamName}
                  </li>
                );
              })}
            </DropDown>
            <DropDown
              DropDownText="Category"
              arrowIcon
              iconColor="#B7BCC1"
              open={dropDown2}
              onClick={() => {
                setOpen2((dopen) => !dopen);
              }}
              className="bg-white border h-12  border-borderColor-baseBorderColor text-fontColor-placeHolderColor"
            >
              {dataCategory?.data?.categories?.map((category) => {
                return (
                  <li
                    key={category._id}
                    className="block px-dropItemXP py-dropItemYP  hover:bg-hoverColor-baseHoverColor "
                    onClick={() => handelCategoryClick(category)}
                  >
                    {category.categoryName}
                  </li>
                );
              })}
            </DropDown>
            <DropDown
              DropDownText="Levels"
              arrowIcon
              iconColor="#B7BCC1"
              open={dropDown3}
              onClick={() => {
                setOpen3((dopen) => !dopen);
              }}
              className="bg-white border h-12 border-borderColor-baseBorderColor text-fontColor-placeHolderColor"
            >
              {levels?.data?.levels.map((level) => {
                return (
                  <li
                    key={level._id}
                    className="block px-dropItemXP py-dropItemYP  hover:bg-hoverColor-baseHoverColor "
                    onClick={() => handelLevelClick(level)}
                  >
                    {level.levelName}
                  </li>
                );
              })}
            </DropDown>
          </div>
        </>
      ) : (
        <div className="flex gap-3 w-full h-12  px-10 mt-6 font-custom font-normal">
          <TextInput
            placeholder="Search..."
            className="max-w-56 h-12 "
            type="text"
            leftIcon={<Icons.SearchIcon />}
          />
          <DropDown
            DropDownText="Type"
            arrowIcon
            iconColor="#B7BCC1"
            open={dropDown1}
            onClick={() => {
              setOpen1((dopen) => !dopen);
            }}
            className="  bg-white border h-12 border-borderColor-baseBorderColor text-fontColor-placeHolderColor"
          >
            <li
              className="block px-dropItemXP py-dropItemYP  hover:bg-hoverColor-baseHoverColor "
              onClick={() => dropdown1("send Feedback")}
            >
              Send Feedback
            </li>
            <li
              className="block px-dropItemXP py-dropItemYP hover:bg-hoverColor-baseHoverColor "
              onClick={() => dropdown1("Request Feedback")}
            >
              Request Feedback
            </li>
          </DropDown>
          <DropDown
            DropDownText="Employee"
            arrowIcon
            iconColor="#B7BCC1"
            open={dropDown2}
            onClick={() => {
              setOpen2((dopen) => !dopen);
            }}
            className="bg-white border h-12 border-borderColor-baseBorderColor text-fontColor-placeHolderColor"
          >
            <li
              className="block px-dropItemXP py-dropItemYP  hover:bg-hoverColor-baseHoverColor "
              onClick={() => dropdown2("send Feedback")}
            >
              Send Feedback
            </li>
            <li
              className="block px-dropItemXP py-dropItemYP hover:bg-hoverColor-baseHoverColor "
              onClick={() => dropdown2("Request Feedback")}
            >
              Request Feedback
            </li>
          </DropDown>
          <DropDown
            DropDownText="Filter"
            arrowIcon
            iconColor="#B7BCC1"
            open={dropDown3}
            onClick={() => {
              setOpen3((dopen) => !dopen);
            }}
            className="bg-white border h-12 border-borderColor-baseBorderColor text-fontColor-placeHolderColor"
          >
            <li
              className="block px-dropItemXP py-dropItemYP  hover:bg-hoverColor-baseHoverColor "
              onClick={() => dropdown3("send Feedback")}
            >
              Send Feedback
            </li>
            <li
              className="block px-dropItemXP py-dropItemYP hover:bg-hoverColor-baseHoverColor "
              onClick={() => dropdown3("Request Feedback")}
            >
              Request Feedback
            </li>
          </DropDown>
          <Button
            iconLeft={<Icons.SortIcon />}
            className="bg-white border px-1.5 h-12 border-borderColor-baseBorderColor text-fontColor-whiteBaseColor"
          />
        </div>
      )}
    </>
  );
}
