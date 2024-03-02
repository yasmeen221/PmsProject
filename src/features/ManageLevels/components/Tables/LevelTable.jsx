import React from "react";
import Button from "../../../../components/Button/Button";
import Icons from "../../../../themes/icons";
import { useSelector, useDispatch } from "react-redux";
import { editLevel } from "../../slices/EditLevel";
import { handleOpenAddLevelPopUp } from "../../slices/OpenPopupLevel";
import { deleteLevel, editLevels } from "../../slices/LevelSlice";
import { useGetLevelQuery } from "../../slices/api/apiLevelSlice.js";
import { useEffect } from "react";
import { useState } from "react";

export default function LevelTable() {
  const dispatch = useDispatch();
  const [levelData, setLevelData] = useState([{}]);

  const levels = useSelector((state) => state.levels.levels);

  const { data, isError, isLoading, error, isSuccess } = useGetLevelQuery();
  // Define functions to handle edit and delete actions
  const handleDeleteLevel = (levelName) => {
    dispatch(deleteLevel(levelName));
  };

  const handleEditLevel = (level) => {
    dispatch(editLevel(level));
    dispatch(editLevels(level));
    dispatch(handleOpenAddLevelPopUp(true));
  };
  useEffect(() => {
    console.log(isLoading);
    console.log(error);
  }, []);
  // Render the table if levels is an array
  return (
    <>
      <header className="font-bold text-lg w-[18.5rem] h-[1.668rem] my-6">
        Levels
      </header>
      <div className="flex justify-center">
        <div className="w-[50%] overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-center rtl:text-right text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Level Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {isLoading && !isError && (
                <tr>
                  <td colSpan="2" className=" px-6 py-3 ">
                    {" "}
                    <div className="inline-flex items-center justify-center">
                      <Icons.Loading />
                    </div>
                  </td>
                </tr>
              )}
              {!isLoading && isError && (
                <tr>
                  <td colSpan="2" className=" px-6 py-3 ">
                    {" "}
                    <div className="inline-flex items-center justify-center">
                      <p>Error:{error}</p>
                    </div>
                  </td>
                </tr>
              )}
              {isSuccess &&
                data.data.levels.map((level, i) => (
                  <tr
                    key={i}
                    className={i % 2 === 0 ? "even:bg-gray-50" : "odd:bg-gray"}
                  >
                    <td className="px-6 py-4">{level.levelName}</td>
                    <td className="px-6 py-4">
                      <Button
                        iconLeft={<Icons.EditUserPage />}
                        className="bg-transparent px-1"
                        onClick={() => handleEditLevel(level)}
                      />
                      <Button
                        iconLeft={<Icons.DeleteUserPage />}
                        className="bg-transparent px-1"
                        onClick={() => handleDeleteLevel(level.levelName)}
                      />
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
