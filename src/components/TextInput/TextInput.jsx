import React from "react";

function TextInput({ className, leftIcon, register, rightIcon, rightIconClick,...rest }) {
  return (
    <div className={`${leftIcon||rightIcon ? "relative" : "static"}`}>
      <input
        className={`block ${leftIcon ? "pl-10" : ""} bg-white w-full text-body1Size rounded-buttonRadius border-0  py-2.5 px-2  shadow-sm ring-1 ring-fontColor-outLineInputColor  placeholder:text-fontColor-placeHolderColor focus:ring-2   focus:ring-buttonColor-baseColor focus:outline-none sm:text-sm sm:leading-6 ${className}`}
        {...register}
        {...rest}
      />
      {leftIcon ? (
        <div className="absolute inset-y-0  pl-3 flex items-center pointer-events-none">
          {leftIcon}
        </div>
      ) : (
        ""
      )}
      {rightIcon ? (
        <div className="absolute inset-y-0 pr-3 right-0  flex items-center " onClick={rightIconClick}>
          {rightIcon}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default TextInput;
