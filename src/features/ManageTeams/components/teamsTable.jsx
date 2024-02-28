// i want to get teams and put it in global state (to render li in drop down of add team or add user&&cash it)
import React, { useState } from 'react'
import Button from '../../../components/Button/Button'

const TeamsTable = () => {
    const [teanss] = useState([{ teamName: "ui/ux", teamLeader: "test", parentTeam: "test" }
        , { teamName: "front end", teamLeader: "test", parentTeam: "test" },
    { teamName: "back end", teamLeader: "test", parentTeam: "test" }])

    return (
        <div>
            <table className="w-full text-sm text-center rtl:text-right text-gray-500">
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
                <tbody>
                    {teanss.map((item, index) => {
                        return (
                            <tr className=" odd:bg-gray even:bg-gray-50 ">
                                <td className="px-6 py-4 ">{item.teamName}</td>
                                <td className="px-6 py-4">{item.teamLeader}</td>
                                <td className="px-6 py-4">{item.parentTeam}</td>
                                <td className="px-6 py-4">
                                    <Button
                                        buttonText="Edit"
                                        className="text-fontColor-whiteBaseColor"
                                    />

                                </td>
                            </tr>
                        )
                    })}



                </tbody>
            </table>
        </div>
    )
}

export default TeamsTable
