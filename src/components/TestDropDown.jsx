import React, { useState } from 'react';
import DropDown from './reusablecomponents/DropDown/DropDown';

const TestDropDown = () => {
  const [dropDown1, setOpen1] = useState(false);
  const [dropDown2, setOpen2] = useState(false);
  const [dropDown3, setOpen3] = useState(false);
  const dropdown1 = (value) => {
    setOpen1((dropDown1) => !dropDown1);
    console.log(value);
    //if you want to make navigation put the condition based on the value captured
  };
  const dropdown2 = (value) => {
    setOpen2((dropDown2) => !dropDown2);
    console.log(value);
  };
  const dropdown3 = (value) => {
    setOpen3((dropDown3) => !dropDown3);
    console.log(value);
  };
  return (
    <>
      {/** test drop down menu */}
      <h1 className="my-5 text-center">DropDown Test</h1>
      <div className="w-100  mt-10 flex flex-row items-center  justify-between ">
        <DropDown
          DropDownText="New Feedback"
          arrowIcon
          open={dropDown1}
          onClick={() => {
            setOpen1((dopen) => !dopen);
          }}
        >
          <li
            className="block px-dropItemXP py-dropItemYP  hover:bg-hoverColor-baseHoverColor "
            onClick={() => dropdown1('send Feedback')}
          >
            Send Feedback
          </li>
          <li
            className="block px-dropItemXP py-dropItemYP hover:bg-hoverColor-baseHoverColor "
            onClick={() => dropdown1('Request Feedback')}
          >
            Request Feedback
          </li>
        </DropDown>
        <div className=" flex flex-row   items-center ">
          <DropDown
            DropDownText="New Feedback"
            arrowIcon
            className="mx-1"
            open={dropDown2}
            onClick={() => setOpen2((dropDown2) => !dropDown2)}
          >
            <li
              className="block px-dropItemXP py-dropItemYP  hover:bg-hoverColor-baseHoverColor "
              onClick={() => dropdown2('Send Feedback')}
            >
              Send Feedback
            </li>
            <li
              className="block px-dropItemXP py-dropItemYP hover:bg-hoverColor-baseHoverColor "
              onClick={() => dropdown2('Request Feedback')}
            >
              Request Feedback
            </li>
          </DropDown>
          <DropDown
            threeDotsIcon
            className=" bg-white "
            open={dropDown3}
            onClick={() => setOpen3((dropDown3) => !dropDown3)}
          >
            <li
              className="block px-dropItemXP py-dropItemYP  hover:bg-hoverColor-baseHoverColor "
              onClick={() => dropdown3('Send Feedback')}
            >
              Send Feedback
            </li>
          </DropDown>
        </div>
      </div>
    </>
  );
};

export default TestDropDown;
