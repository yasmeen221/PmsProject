import React from "react";
import Icons from "../../../../themes/icons";
import Button from "../../../../components/Button/Button";
import { deleteUser, editUsersData } from "../../slices/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { editUser } from "../../slices/editUsersSlice";
import { handleOpenAddUserFormPopUp } from "../../slices/openAddUserFormPopUp";
import { useDeleteUserMutation, useEditUserMutation, useGetUsersQuery } from "../../slices/api/apiSlice.js";


export default function UserTable() {
  const dispatch = useDispatch();
  // const users = useSelector((store) => store.users.users);


  const { data: users, isError,isSuccess,isLoading,error } = useGetUsersQuery();
  console.log(users)
  const[deleteUser]=useDeleteUserMutation()
   const[editUser]=useEditUserMutation()

  const handleDeleteUser = (id) => {
    deleteUser(id)
  };
  const handleEditUser = (user) => {

   
    // dispatch(editUser(user));

    // dispatch(editUsersData(user));
    editUser(user)
    dispatch(handleOpenAddUserFormPopUp(true));
  };

  return (
    <>
      <header className="font-bold text-lg w-[18.5rem] h-[1.668rem] my-6">
        {" "}
        Users
      </header>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-center rtl:text-right text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">
                First Name
              </th>
              <th scope="col" className="px-6 py-3">
                Last Name
              </th>
              <th scope="col" className="px-6 py-3">
                User Name
              </th>

              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                position
              </th>
              <th scope="col" className="px-6 py-3">
                level
              </th>
              <th scope="col" className="px-6 py-3">
                Role
              </th>

              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>

          
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
            {!isLoading && !isError && users.data.users.map((user, index) => {
            return(
              <tr
              key={user?._id}
              className={index % 2 === 0 ? "even:bg-gray-50" : "odd:bg-gray"}
            >
              <td className="px-6 py-4">{user?.firstName}</td>
              <td className="px-6 py-4">{user?.lastName}</td>
              <td className="px-6 py-4">{user?.username}</td>
              <td className="px-6 py-4">{user?.email}</td>
              <td className="px-6 py-4">{user?.position} </td>
              {/* <td className="px-6 py-4"> {user?.level} </td> */}
              <td className="px-6 py-4"> {user?.role}</td>
              <td className="px-6 py-4 inline-flex">
                <Button
                  onClick={() => handleEditUser(user)}
                  iconLeft={<Icons.EditUserPage />}
                  className="bg-transparent px-1"
                />
                <Button
                  onClick={() => handleDeleteUser(user._id)}
                  iconLeft={<Icons.DeleteUserPage />}
                  className="bg-transparent px-1"
                />
              </td>
            </tr>
            )
          })}

          </tbody>
        </table>
      </div>
    </>
  );
}
