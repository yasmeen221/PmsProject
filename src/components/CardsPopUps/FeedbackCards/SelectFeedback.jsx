import React, { useState } from 'react';
import HandelPopUp from '../../reusablecomponents/PopUp/HandelPopUp';
import Icons from '../../../themes/icons';
import Button from '../../reusablecomponents/Button/Button';
import ButtonPopUpClose from '../../reusablecomponents/Button/ButtonPopUpClose';
import {
  MessageFavFeedbackIcon,
  MessageFeedbackIcon,
} from '../../../assets/icons/icons';

const SelectFeedback = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const handleOpenPopup = () => {
    setPopupOpen(true);
  };

  const handleClosePopup = () => {
    setPopupOpen(false);
  };
  return (
    <>
      {/* ---------------------in progress----------------- */}
      <button
        onClick={handleOpenPopup}
        className="rounded-md bg-blue-500 px-4 py-2 text-white"
      >
        Open Popup
      </button>
      <HandelPopUp isOpen={isPopupOpen} onClose={handleClosePopup}>
        <div className=" relative max-h-full w-full max-w-2xl p-4">
          <div className="inset relative w-full max-w-2xl rounded-lg bg-white shadow">
            <div className="flex items-center justify-between rounded-t border-b p-4 md:p-5 ">
              <h3 className="text-popUpSize font-popUpWeight font-custom text-fontColor-blackBaseColor ">
                Select Feedback Type
              </h3>

              <ButtonPopUpClose onClick={handleClosePopup} />
            </div>

            <div
              className="  flex items-center justify-around "
              style={{ width: '633px' }}
            >
              <div className="border-2 bg-slate-400">
                <div className=" flex-row items-center justify-center p-10 ">
                  <MessageFavFeedbackIcon />
                  <p>hhhhhhh</p>
                  <p>hhhhhhhhhhhh</p>
                </div>
              </div>
              <div className="items-center justify-center border-2 bg-slate-700">
                <div className=" flex-row p-10">
                  <MessageFeedbackIcon />
                  <p>kkkkkkkk</p>
                  <p>kkkkkkkhhhhhhhhhhhk</p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-end  border-t border-gray-200 p-4 md:p-5 ">
              <Button buttonText="continue" />
            </div>
          </div>
        </div>
      </HandelPopUp>
    </>
  );
};

export default SelectFeedback;
