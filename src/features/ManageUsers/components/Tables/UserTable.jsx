import React from "react";
import Button from "../../../../components/Button/Button";

export default function UserTable() {
  return (
    <>
      <header className="font-bold text-lg w-[18.5rem] h-[1.668rem] my-6">
        {" "}
        Users
      </header>
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-center rtl:text-right text-gray-500">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" class="px-6 py-3">
                First Name
              </th>
              <th scope="col" class="px-6 py-3">
                Last Name
              </th>
              <th scope="col" class="px-6 py-3">
                User Name
              </th>

              <th scope="col" class="px-6 py-3">
                Email
              </th>
              <th scope="col" class="px-6 py-3">
                position
              </th>
              <th scope="col" class="px-6 py-3">
                level
              </th>
              <th scope="col" class="px-6 py-3">
                Role
              </th>

              <th scope="col" class="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 ">
              <td class="px-6 py-4 ">sama</td>
              <td class="px-6 py-4">ahmed</td>
              <td class="px-6 py-4">sama365</td>
              <td class="px-6 py-4">sama@gmail.com</td>
              <td class="px-6 py-4">product owner</td>
              <td class="px-6 py-4">senior</td>
              <td class="px-6 py-4">manager</td>
              <td class="px-6 py-4">
                <Button
                 buttonText="Edit"
                  className="text-fontColor-whiteBaseColor text-md font-medium"
                />

              </td>
            </tr>
            
            
          </tbody>
        </table>
      </div>
    </>
  );
}
