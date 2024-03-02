import React from "react";
import Icons from "../../../../themes/icons";
import Button from "../../../../components/Button/Button";
import { deleteUser, editUsersData } from "../../slices/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { editUser } from "../../slices/editUsersSlice";
import { handleOpenAddUserFormPopUp } from "../../slices/openAddUserFormPopUp";

export default function UserTable() {
  const dispatch = useDispatch();
  const users = useSelector((store) => store.users.users);
  const handleDeleteUser = (userUserName) => {
    dispatch(deleteUser(userUserName));
  };
  const handleEditUser = (user) => {
    dispatch(editUser(user));
    // dispatch(editUsersData(user));
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
            {users.map((user, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "even:bg-gray-50" : "odd:bg-gray"}
              >
                <td className="px-6 py-4">{user?.firstName}</td>
                <td className="px-6 py-4">{user?.lastName}</td>
                <td className="px-6 py-4">{user?.username}</td>
                <td className="px-6 py-4">{user?.email}</td>
                <td className="px-6 py-4">{user?.position}</td>
                <td className="px-6 py-4">{user?.level}</td>
                <td className="px-6 py-4">{user?.role}</td>
                <td className="px-6 py-4 inline-flex">
                  <Button
                    onClick={() => handleEditUser(user)}
                    iconLeft={<Icons.EditUserPage />}
                    className="bg-transparent px-1"
                  />
                  <Button
                    onClick={() => handleDeleteUser(user.username)}
                    iconLeft={<Icons.DeleteUserPage />}
                    className="bg-transparent px-1"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
