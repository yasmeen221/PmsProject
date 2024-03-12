import { useEffect, useState } from "react";
import ButtonPopUpClose from "./ButtonPopUpClose";
import ImageStyle from "../ImageStyle/ImageStyle";
import { deleteData, getAllDataCompetencies } from "../../features/Competencies/slices/Api/competenciesApi";
import { useNavigate } from "react-router-dom";

const ButtonPopUPNewClose = ({
    id,
    isOpen,
    title,
    iconLeft,
    personName,
    personImage,
    ...rest
}) => {


    const [handel, setClose] = useState(isOpen)

    const log = () => {
        deleteData(id)
        setClose(!handel)
        setTimeout(() => {
            location.reload();
        }, 1000);

    }



    return (
        <>
            {handel && (
                <div
                    className={`fixed inset-0 z-10 bg-fontColor-blackBaseColor  bg-opacity-50 flex items-center justify-center`}

                >
                    <div
                        className={`bg-white rounded-buttonRadius p-4 shadow-md w-64 `} //max-w-[43.563rem]
                    >
                        <div className="flex items-center justify-between rounded-t border-b py-4 ">
                            {iconLeft}

                            <h3 className="text-captionRegSize md:text-subTitle2Size bg-red-500 text-white  lg:text-popUpSize font-popUpWeight font-custom  py-2 px-4 cursor-pointer rounded-md  "
                                onClick={() => log()}
                            >
                                {title}
                            </h3>

                            <div className="flex justify-center items-center ">
                                <ImageStyle src={personImage} />
                                <p className="font-custom text-fontColor-blackBaseColor text-buttonFontSize font-buttonWeight">
                                    {personName}
                                </p>
                            </div>
                            <ButtonPopUpClose onClick={() => setClose(!handel)} />
                        </div>
                    </div>
                </div>
            )}</>
    )
}

export default ButtonPopUPNewClose