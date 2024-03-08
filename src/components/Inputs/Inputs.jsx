import React, { useEffect, useState } from "react";
import Icons from "../../themes/icons";
import Button from "../../components/Button/Button";
import DropDown from "../../components/DropDown/DropDown";
import TextInput from "../../components/TextInput/TextInput";
import { useGetTeamsNameQuery } from "../../features/ManageTeams/slices/apis/apiSlice";
import { useGetLevelQuery } from "../../features/ManageLevels/slices/api/apiLevelSlice";
import { getAllData } from "../../features/Competencies/slices/Api/catgoryapi";
import {
  filterWithCategory,
  filterWithLevel,
  filterWithTeam,
} from "../../features/Competencies/slices/Api/competenciesApi";
export default function Inputs({
  currentList,
  searchTerm,
  setSearchTerm,
  selectIdTeam,
  setSelectIdTeam,
  setStateTeam,
  selectIdLevel,
  setSelectIdLevel,
  setSelectIdCategory,
  setStateLevel,
  selectIdCategory,
  setStateCategory,
  dropDownTextTeam,
  setDropDownTextTeam,
  dropDownTextCategory,
  setDropDownTextCategory,
  dropDownTextLevel,
  setDropDownTextLevel,
}) {
  const [dropDown1, setOpen1] = useState(false);
  const [dropDown2, setOpen2] = useState(false);
  const [dropDown3, setOpen3] = useState(false);
  const [dataCategory, setDataCategory] = useState([]);
  const { data: teams, isLoading, isSuccess } = useGetTeamsNameQuery();
  const { data: levels } = useGetLevelQuery();

  const dropdown1 = (value) => {
    setOpen1((dropDown1) => !dropDown1);
  };
  const dropdown2 = (value) => {
    setOpen2((dropDown2) => !dropDown2);
  };
  const dropdown3 = (value) => {
    setOpen3((dropDown3) => !dropDown3);
  };

  //to fetch data from category to dropdown
  useEffect(() => {
    getAllData()
      .then((fetchedData) => {
        setDataCategory(fetchedData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  // to fetch data for filter of team
  useEffect(() => {
    if (selectIdTeam) {
      filterWithTeam(selectIdTeam)
        .then((fetchedDataTeam) => {
          setStateTeam(fetchedDataTeam);
        })
        .catch((error) => {
          console.error("Error fetching data from filter:", error);
        });
    } else {
    }
  }, [selectIdTeam]);

  const filterDataByTeam = async (team) => {
    try {
      const filteredDataTeam = await filterWithTeam(team._id);
      setStateTeam(filteredDataTeam);
    } catch (error) {
      console.error("Error filtering data by team:", error);
    }
  };
  const handleTeamClick = (team) => {
    setOpen1(false);
    filterDataByTeam(team);
    setSelectIdTeam(team._id);
    setDropDownTextTeam(`${team.teamName}`);
  };

  // ------------------------------------------------end of team
  // fetch data for filter of category
  useEffect(() => {
    if (selectIdCategory) {
      filterWithCategory(selectIdCategory)
        .then((fetchDataCategory) => {
          setStateTeam(fetchDataCategory);
        })
        .catch((error) => {
          console.error("Error fetching data from filter:", error);
        });
    } else {
    }
  }, [selectIdCategory]);
  const filterDataByCategory = async (category) => {
    try {
      const filteredDataCategory = await filterWithCategory(category._id);
      setStateCategory(filteredDataCategory);
    } catch (error) {
      console.error("Error filtering data by team:", error);
    }
  };
  const handelCategoryClick = (category) => {
    setOpen2(false);
    filterDataByCategory(category);
    setSelectIdCategory(category._id);
    setDropDownTextCategory(`${category.categoryName}`);
  };
  // ----------------------------------------------end category
  // fetch data for filter of level
  useEffect(() => {
    if (selectIdLevel) {
      filterWithLevel(selectIdLevel)
        .then((fetchDataLevel) => {
          setStateLevel(fetchDataLevel);
        })
        .catch((error) => {
          console.error("Error fetching data from filter:", error);
        });
    } else {
    }
  }, [selectIdLevel]);

  const filterDataByLevels = async (level) => {
    try {
      const filteredDataLevel = await filterWithLevel(level._id);
      setStateLevel(filteredDataLevel);
    } catch (error) {
      console.error("Error filtering data by team:", error);
    }
  };
  const handelLevelClick = (level) => {
    setOpen3(false);
    filterDataByLevels(level);
    setSelectIdLevel(level._id);
    setDropDownTextLevel(`${level.levelName}`);
  };

  const defaultFunTeam = () => {
    setOpen1(false);
    setStateTeam([]);
    setDropDownTextTeam("Teams");
  };
  const defaultFunCategory = () => {
    setOpen2(false);
    setStateCategory([]);
    setDropDownTextCategory("Categories");
  };
  const defaultFunLevel = () => {
    setOpen3(false);
    setStateLevel([]);
    setDropDownTextLevel("Levels");
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
              DropDownText={dropDownTextTeam}
              arrowIcon
              iconColor="#B7BCC1"
              open={dropDown1}
              onClick={() => {
                setOpen1((dopen) => !dopen);
              }}
              className="  bg-white border h-12 border-borderColor-baseBorderColor text-fontColor-placeHolderColor"
            >
              <li
                onClick={defaultFunTeam}
                className="block px-dropItemXP py-dropItemYP hover:bg-hoverColor-baseHoverColor"
              >
                Teams
              </li>
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
              DropDownText={dropDownTextCategory}
              arrowIcon
              iconColor="#B7BCC1"
              open={dropDown2}
              onClick={() => {
                setOpen2((dopen) => !dopen);
              }}
              className="bg-white border h-12  border-borderColor-baseBorderColor text-fontColor-placeHolderColor"
            >
              <li
                onClick={defaultFunCategory}
                className="block px-dropItemXP py-dropItemYP hover:bg-hoverColor-baseHoverColor"
              >
                Categories
              </li>
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
              DropDownText={dropDownTextLevel}
              arrowIcon
              iconColor="#B7BCC1"
              open={dropDown3}
              onClick={() => {
                setOpen3((dopen) => !dopen);
              }}
              className="bg-white border h-12 border-borderColor-baseBorderColor text-fontColor-placeHolderColor"
            >
              <li
                onClick={defaultFunLevel}
                className="block px-dropItemXP py-dropItemYP hover:bg-hoverColor-baseHoverColor"
              >
                Levels
              </li>
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
