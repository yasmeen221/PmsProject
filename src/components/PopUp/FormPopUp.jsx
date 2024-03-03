import React, { useEffect } from "react";
import ButtonPopUpClose from "./ButtonPopUpClose";
import ImageStyle from "../ImageStyle/ImageStyle";
const FormPopUp = ({
  isOpen,
  children,
  // eslint-disable-next-line react/prop-types
  className,
  TitlePopUp,
  ClosePop,
  iconLeft,
  personName,
  personImage,
  ...rest
}) => {
  return (
    <>
      {isOpen && (
        <div
          className={`fixed inset-0 z-10 bg-fontColor-blackBaseColor bg-opacity-50 flex items-center justify-center ${className}`}
          {...rest}
        >
          <div
            className={`bg-white rounded-buttonRadius p-4 shadow-md  ${className}`} //max-w-[43.563rem]
          >
            <div className="flex items-center justify-between rounded-t border-b py-4 ">
              {iconLeft}
              <h3 className="text-captionRegSize md:text-subTitle2Size lg:text-popUpSize font-popUpWeight font-custom text-fontColor-blackBaseColor pr-4 ">
                {TitlePopUp}
              </h3>
              <div className="flex justify-center items-center ">
                <ImageStyle src={personImage} />
                <p className="font-custom text-fontColor-blackBaseColor text-buttonFontSize font-buttonWeight">
                  {" "}
                  {personName}
                </p>
              </div>
              <ButtonPopUpClose onClick={ClosePop} />
            </div>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default FormPopUp;
