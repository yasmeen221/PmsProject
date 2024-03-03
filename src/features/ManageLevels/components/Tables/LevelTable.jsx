import React from "react";
import Button from "../../../../components/Button/Button";
import Icons from "../../../../themes/icons";
import { useSelector, useDispatch } from "react-redux";
import { editLevel } from "../../slices/EditLevel";
import { handleOpenAddLevelPopUp } from "../../slices/OpenPopupLevel";
import {
  useDeleteLevelMutation,
  useGetLevelQuery,
  useUpdateLevelMutation,
} from "../../slices/api/apiLevelSlice.js";
import { useEffect } from "react";
import { useState } from "react";
import EditLevel from "../CardsPopUp/EditLevel";
import ManageLevel from "../CardsPopUp/ManageLevel";

export default function LevelTable() {
  const dispatch = useDispatch();

  const [isEditing, setIsEditing] = useState(false);
  const [levelToEdit, setLevelToEdit] = useState(null);
  /* const levels = useSelector((state) => state.levels.levels);*/

  const { data, isError, isLoading, error, isSuccess } = useGetLevelQuery();
  const [deleteLevel, { isError: deleteError }] = useDeleteLevelMutation();
  const [updateLevel, { isError: updateError }] = useUpdateLevelMutation();

  // Define functions to handle edit and delete actions
  const handleDeleteLevel = async (id) => {
    try {
      await deleteLevel(id);
    } catch (error) {
      console.error("Error deleting level:", error);
    }
  };

  // const handleEditLevel = async (id, updatedLevelName) => {
  //   try {
  //     const response = await updateLevel({ id, levelName: updatedLevelName });
  //     console.log(response);
  //     handleOpenAddLevelPopUp(true);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

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
                        // onClick={() => {
                        //   // handleOpenAddLevelPopUp(true);
                        //   // dispatch(editLevel(level));
                        //   // console.log("edit",level);
                        //   // setEdit(true);

                        //   {<EditLevel level={level}/>}
                        // }}
                        onClick={() => {
                          setLevelToEdit(level);
                          setIsEditing(true);
                          // console.log("edddit")
                        }}
                      />

                      <Button
                        iconLeft={<Icons.DeleteUserPage />}
                        className="bg-transparent px-1"
                        onClick={() => handleDeleteLevel(level._id)}
                      />
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
      {isEditing && (
        <EditLevel
          level={levelToEdit}
          onClose={() => {
            setIsEditing(false);
            setLevelToEdit(null);
          }}
        />
      )}
    </>
  );
}
