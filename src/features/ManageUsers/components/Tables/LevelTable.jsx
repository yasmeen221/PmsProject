import React from "react";
import Button from "../../../../components/Button/Button";

export default function LevelTable() {
  return (
    <>
      <header className="font-bold text-lg w-[18.5rem] h-[1.668rem] my-6">
        {" "}
        Levels
      </header>
      <div className="flex justify-center">
      <div class=" w-[50%] overflow-x-auto shadow-md sm:rounded-lg ">
        <table class="w-full text-sm text-center rtl:text-right text-gray-500">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" class="px-6 py-3">
                Level Name
              </th>
              <th scope="col" class="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 ">
              <td class="px-6 py-4">Senior</td>
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
      </div>
    </>
  );
}
