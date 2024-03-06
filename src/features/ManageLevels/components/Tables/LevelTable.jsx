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
import { useState } from "react";
import EditLevel from "../CardsPopUp/EditLevel";
import { HandelOpenPopUpDelete } from "../../../ManageTeams/slices/HandelOpenDelete.js";
import ConfirmDelete from "../../../../components/Delete/ConfirmDelete.jsx";

export default function LevelTable() {
  const dispatch = useDispatch();
  const oPenPopUp = useSelector(
    (state) => state.openPopUpConfirmDeleteSlice.open,
  );

  const [isEditing, setIsEditing] = useState(false);
  const [levelToEdit, setLevelToEdit] = useState(null);

  const { data, isError, isLoading, error, isSuccess } = useGetLevelQuery();
  const [deleteLevel, { isError: deleteError }] = useDeleteLevelMutation();
  const [updateLevel, { isError: updateError }] = useUpdateLevelMutation();
  const [selectLevel, setSelectLevel] = useState(null);

  // Define functions to handle edit and delete actions
  const handleDeleteLevel = async (id) => {
    try {
      if (selectLevel) {
        await deleteLevel(selectLevel._id);
        dispatch(HandelOpenPopUpDelete(false));
      }
    } catch (error) {
      console.error("Error deleting level:", error);
    }
  };

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
              {!isLoading && !isError && data.data.levels.length==0&& (
                <tr>
                  <td colSpan="2" className=" px-6 py-3 ">
                    {" "}
                    <div className="inline-flex items-center justify-center">
                    <p>There is No level Exist</p>
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
                data?.data.levels.map((level, i) => (
                  <tr
                    key={i}
                    className={i % 2 === 0 ? "even:bg-gray-50" : "odd:bg-gray"}
                  >
                    <td className="px-6 py-4">{level.levelName}</td>
                    <td className="px-6 py-4">
                      <Button
                        iconLeft={<Icons.EditUserPage />}
                        className="bg-transparent px-1"
                        onClick={() => {
                          setLevelToEdit(level);
                          setIsEditing(true);
                        }}
                      />

                      <Button
                        iconLeft={<Icons.DeleteUserPage />}
                        className="bg-transparent px-1"
                        onClick={() => {
                          setSelectLevel(level);
                          dispatch(HandelOpenPopUpDelete(true));
                        }}
                      />
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
          {oPenPopUp && <ConfirmDelete onConfirm={handleDeleteLevel} />}
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
