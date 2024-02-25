import React, { useState } from 'react'
import Icons from '../../../themes/icons'
import Button from '../Button/Button'
import DropDown from '../DropDown/DropDown'
import ThreeDotsDropDown from './ThreeDotsDropDown'

export default function ComponentTitle({currentList}) {
    const [dropDown1, setOpen1] = useState(false);
    const [dropDown2, setOpen2] = useState(false);

    const dropdown1 = (value) => {
        setOpen1((dropDown1) => !dropDown1);
        console.log(value);
      };
      const dropdown2 = (value) => {
        setOpen2((dropDown2) => !dropDown2);
        console.log(value);
      };
  return (
    <div className='w-full flex justify-between h-12  px-10 '>
        <h2 className='font-black text-h1FontSize text-fontColor-1000'>{currentList}</h2>
        {currentList=="Feedback List"?
        <div className=" flex flex-row gap-x-1   items-center ">
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
           
            <DropDown
            className=" bg-white px-1.5 "
            threeDotsIcon
            open={dropDown2}
            onClick={() => {
                setOpen2((dopen) => !dopen);
            }}
            >
          <li
            className="block px-dropItemXP py-dropItemYP  hover:bg-hoverColor-baseHoverColor "
            onClick={() => dropdown2('send Feedback')}
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
        </div>
        :
        <div className='flex flex-row gap-x-2 items-center'>
            <Button buttonText="Add Competency" iconLeft={<Icons.PlusIcon/>} />
            <DropDown threeDotsIcon className=" bg-white " >
                <ThreeDotsDropDown Icon={<Icons.GoalsIcon/>} text="Manage Category"/>
                <ThreeDotsDropDown Icon={<Icons.Feedback/>} text="Import"/>
                <ThreeDotsDropDown Icon={<Icons.CompentenciesIcon/>} text="Export"/>
                <ThreeDotsDropDown Icon={<Icons.Learning/>} text="Generate Framwork AI"/>
                <ThreeDotsDropDown Icon={<Icons.Compensation/>} text="Help"/>
            </DropDown>
        </div>}
        
    </div>
  )
}
