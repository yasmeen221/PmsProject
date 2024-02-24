import React from "react";
import ButtonPopUpClose from "./ButtonPopUpClose";
const HandelPopUp = ({
  isOpen,
  children,
  className,
  TitlePopUp,
  ClosePop,
  ...rest
}) => {
  return (
    <>
      {isOpen && (
        <div
          className={`fixed inset-0 bg-fontColor-blackBaseColor bg-opacity-50 flex items-center justify-center ${className}`}
          {...rest}
        >
          <div
            className={`bg-white rounded-buttonRadius p-4 shadow-md  ${className}`} //max-w-[43.563rem]
          >
            <div className="flex items-center justify-between rounded-t border-b py-4 ">
              <h3 className="text-captionRegSize md:text-subTitle2Size lg:text-popUpSize font-popUpWeight font-custom text-fontColor-blackBaseColor ">
                {TitlePopUp}
              </h3>
              <ButtonPopUpClose onClick={ClosePop} />
            </div>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default HandelPopUp;
