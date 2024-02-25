import React from 'react';
import CancelButton from '../reusablecomponents/Button/CancelButton';
import colors from '../../themes/colors';
import PenndingButton from '../reusablecomponents/Button/PenndingButton';
import Icons from '../../themes/icons';

const Card = ({ content, avatar, date, avatarName, avatarPosition }) => {
  return (
    <div className="container">
      <a href="#" className="block  w-95rem h-42.125rem p-6  bg-white border border-gray-200 rounded-lg hover:bg-borderColor-baseBorderColor">
        {avatar && avatarPosition === 'start' && (
          <div className="flex flex-row justify-between space-10 mb-11 ">
          <div className='flex flex-row gap-4'>
            <img src={avatar} alt="Avatar" className="w-10 h-10 rounded-full ml-3" />
            <div className="mr-15">
              <div className="text-sm font-bold ml-1">{avatarName}</div>
              <div className="text-slate-500 text-xs mt-1">{date}</div>
            </div></div>

            <div className="flex items-center space-x-2">
            <PenndingButton icon={<Icons.GreenFeedback  />} bgColor="#EBF5EF" hoverColor=" #329B5C" />

            <PenndingButton icon={<Icons.RedFeedback />} bgColor=" #FBE8E8"
             hoverColor=" #DB1A1A" />

          </div>
          </div>
        )}
        <div className="font-body  w-83rem h-42px gap-4 text-gray- mb-2 transition ease-in-out">{content}</div>
        {avatar && avatarPosition === 'end' && (
          <div className="flex flex-row justify-between space-10 mt-11 ">
            <div className="flex flex-row gap-4">
              <img src={avatar} alt="Avatar" className="w-10 h-10 rounded-full ml-3" />
              <div className="mr-12">
                <div className="text-sm font-bold">{avatarName}</div>
                <div className="text-slate-500 text-xs mt-1">{date}</div>
              </div>
            </div>
            <CancelButton buttonText="Cancel" />
          </div>
        )}
      </a>
    </div>
  );
};

export default Card;
