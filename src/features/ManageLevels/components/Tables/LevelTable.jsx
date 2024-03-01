import React, { useEffect } from "react";
import { useState } from "react";
import Button from "../../../../components/Button/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import EditLevel from "../CardsPopUp/EditLevel";
import Icons from "../../../../themes/icons";
import { useDispatch } from "react-redux";
import { editLevel } from "../../slices/EditLevel";
import { handleOpenAddLevelPopUp } from "../../slices/OpenPopupLevel";

export default function LevelTable() {
  const [levelData, setLevelData] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    getLevelData();
  }, []);
  async function getLevelData() {
    let { data } = await axios.get("https://dummyjson.com/users");
    console.log(data.users);
    setLevelData(data.users);
  }

  return (
    <>
      <header className="font-bold text-lg w-[18.5rem] h-[1.668rem] my-6">
        {" "}
        Levels
      </header>
      <div className="flex justify-center">
        <div className=" w-[50%] overflow-x-auto shadow-md sm:rounded-lg ">
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
              {levelData[0]
                ? levelData.map((item, i) => (
                    <tr key={i} className="odd:bg-gray even:bg-gray-50  ">
                      <td className="px-6 py-4">{item.firstName}</td>
                      <td className="px-6 py-4">
                        <Button
                          iconLeft={<Icons.EditUserPage />}
                          className=" bg-transparent px-1"
                          onClick={() => {
                            dispatch(handleOpenAddLevelPopUp(true)),
                              dispatch(editLevel(item));
                          }}
                        />
                        <Button
                          iconLeft={<Icons.DeleteUserPage />}
                          className="bg-transparent px-1"
                        />
                      </td>
                    </tr>
                  ))
                : ""}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
