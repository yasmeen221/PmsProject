import React from "react";
import PenndingButton from "../../../../components/Button/PenndingButton";
import Icons from "../../../../themes/icons";
import Button from "../../../../components/Button/Button";

export default function UserTable() {
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
            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 ">
              <td className="px-6 py-4 ">sama</td>
              <td className="px-6 py-4">ahmed</td>
              <td className="px-6 py-4">sama365</td>
              <td className="px-6 py-4">sama@gmail.com</td>
              <td className="px-6 py-4">product owner</td>
              <td className="px-6 py-4">senior</td>
              <td className="px-6 py-4">manager</td>
              <td className="px-6 py-4">
              <div className="flex gap-1 w-[30%]">
              <PenndingButton
              icon={< Icons.ArrowLeftPop/>}
              bgColor="#EBF5EF"
              hoverColor=" #329B5C"
             />
             <PenndingButton
             icon={< Icons.ArrowLeftPop/>}
             bgColor="#FBE8E8"
             hoverColor=" #DB1A1A"
            />
</div>
              </td>
            </tr>
            
            
          </tbody>
        </table>
      </div>
    </>
  );
}
