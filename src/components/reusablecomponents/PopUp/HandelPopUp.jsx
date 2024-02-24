import React from 'react';

const HandelPopUp = ({ isOpen, onClose, children }) => {
  return (
    <>
      {isOpen && (
        <div className="fixed left-0 top-0 flex h-full w-full items-center justify-center">
          <div className="rounded-buttonRadius p-4 shadow-md">{children}</div>
        </div>
      )}
    </>
  );
};

export default HandelPopUp;
