// i want to get teams and put it in global state (to render li in drop down of add team or add user&&cash it)
import React, { useCallback, useEffect, useState } from "react";
import Button from "../../../../components/Button/Button";
import ManageTeamsForm from "../CardsPopUps/MangTeamsForm";
import { useDispatch, useSelector } from "react-redux";
import { editButtonTeamHandle } from "../../slices/editTemTogglePopUp";
import { dropDownTeamHandle } from "../../slices/addTeamTogglePopUp";
import Icons from "../../../../themes/icons";
import { useDeleteTeamMutation, useGetTeamsQuery } from "../../slices/apis/apiSlice";

const TeamsTable = () => {
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [isPopupOpen, setPopupOpen] = useState(false);
  const { data: teams, isError, error, isLoading, isSuccess } = useGetTeamsQuery() //calling for teams from back
  const [clicked, setClicked] = useState(false);
  const [deleteTeam, { error: deleteError, isError: isDeleteError }] = useDeleteTeamMutation();

  const handleDelete = (id) => {
    try {
      deleteTeam(id)
    } catch (err) {
      console.log(err)
    }
  }
  const dispatch = useDispatch();
  // const [teams] = useState([
  //   { teamName: "ui/ux", teamLeader: "yasmeen", parentTeam: "test" },
  //   { teamName: "front end", teamLeader: "esraa", parentTeam: "soft" },
  //   { teamName: "back end", teamLeader: "ali", parentTeam: "db" },
  // ]);


  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-center rtl:text-right text-gray-500 ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3">
              Team Name
            </th>
            <th scope="col" className="px-6 py-3">
              Team Leader
            </th>
            <th scope="col" className="px-6 py-3">
              Parent Team
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>

        </thead>

        <tbody >
          {isLoading &&
            <tr >
              <td colSpan="4" className=" px-6 py-3 " > <div className="inline-flex items-center justify-center"><Icons.Loading /></div></td>
            </tr>}
          {!isLoading && isError ?
            <tr>
              <td colSpan="4" className=" px-6 py-3  " >
                <div className="inline-flex items-center justify-center">
                  {"server error"}
                </div>
              </td>
            </tr> : ""}
          {!isLoading && !isError && teams.data.teams?.map((item, index) => {
            return (
              <tr className=" odd:bg-gray even:bg-gray-50 " key={index}>
                <td className="px-6 py-4 ">{item?.teamName}</td>
                <td className="px-6 py-4">{item?.teamLeader}</td>
                <td className="px-6 py-4">{item?.parentTeam}</td>


                <td className="px-6 py-4 inline-flex">
                  <Button
                    iconLeft={<Icons.EditUserPage />}
                    className=" bg-transparent px-1"
                    onClick={() => {
                      dispatch(dropDownTeamHandle(true)), //add it to close the popup
                        dispatch(editButtonTeamHandle(item)); //to catch data from global items
                    }}
                  />
                  <Button
                    iconLeft={<Icons.DeleteUserPage />}
                    className=" bg-transparent px-1"
                    onClick={() => { handleDelete(item._id), console.log(deleteError, isDeleteError,item._id) }}

                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {isPopupOpen && <ManageTeamsForm selectedTeam={selectedTeam} />}
    </div>
  );
};

export default TeamsTable;
