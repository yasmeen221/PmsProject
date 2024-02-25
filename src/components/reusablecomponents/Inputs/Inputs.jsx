import React from 'react'
import Icons from '../../../themes/icons'
import Button from '../Button/Button'
import InputWithIcon from '../InputWithIcon/InputWithIcon'

export default function Inputs() {
  return (
    <div className='flex gap-3 w-full h-12  px-10 mt-6 font-custom font-normal'>
        <InputWithIcon icon={<Icons.SearchIcon/>} placeholder="Search..." />
        <Button iconRight={<Icons.ArrowDownBlack/>} buttonText="Type" className="bg-white gap-x-4 max-w-28 h-12 text-sm border border-borderColor-baseBorderColor text-black"/>
        <Button iconRight={<Icons.ArrowDownBlack/>} buttonText="Employee" className="bg-fontColor-whiteBaseColor gap-x-4 max-w-36 h-12 text-sm border border-borderColor-baseBorderColor text-fontColor-fromAndToColor"/>
        <Button iconLeft={<Icons.ArrowDownBlack/>} buttonText="Filter" className="bg-fontColor-whiteBaseColor gap-x-2 max-w-28 h-12 justify-center text-sm border border-borderColor-baseBorderColor text-fontColor-fromAndToColor"/>
        <Button iconLeft={<Icons.Feedback/>}  className="bg-fontColor-whiteBaseColor gap-x-2 max-w-12 h-12 text-sm border p-3 justify-center border-borderColor-baseBorderColor text-black"/>
        
    </div>
  )
}
