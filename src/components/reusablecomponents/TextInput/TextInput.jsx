import React from "react";

function TextInput({ className, ...rest }) {
  return (
    <input
      className={`block bg-white w-full text-body1Size rounded-buttonRadius border-0  py-2.5 px-2  shadow-sm ring-1 ring-fontColor-outLineInputColor  placeholder:text-fontColor-placeHolderColor focus:ring-2   focus:ring-buttonColor-baseColor focus:outline-none sm:text-sm sm:leading-6 ${className}`}
      {...rest}
    />
  );
}

export default TextInput;
