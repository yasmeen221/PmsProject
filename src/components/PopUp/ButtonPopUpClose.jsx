// eslint-disable-next-line no-unused-vars
import React from "react";
import Icons from "../../themes/icons"

// eslint-disable-next-line react/prop-types
const ButtonPopUpClose = ({ onClick }) => {
  return (
    <>
      <button
        onClick={onClick}
        className="ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400  "
      >
        <Icons.PopUpDeleteIcon />
      </button>
    </>
  );
};

export default ButtonPopUpClose;
