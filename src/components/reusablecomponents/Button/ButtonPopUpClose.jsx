import React from 'react';
import Icons from '../../../themes/icons';

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
