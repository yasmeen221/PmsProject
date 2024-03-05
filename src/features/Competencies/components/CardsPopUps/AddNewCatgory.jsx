import React from 'react'
import {useState} from 'react'
import FormPopUp from "../../../../components/PopUp/FormPopUp";
import Button from "../../../../components/Button/Button";
import Icons from "../../../../themes/icons";
import Header from '../../../../components/Header/Header';
import TextInput from '../../../../components/TextInput/TextInput';

export default function AddNewCatgory() {
    const [isPopupOpen, setPopupOpen] = useState(false);
    const handleOpenPopup = () => {
        setPopupOpen(true);
      };
    
      const handleClosePopup = () => {
        setPopupOpen(false);
      };
  return (
    


    <>
      <FormPopUp
        isOpen={isPopupOpen}
        ClosePop={handleClosePopup}
        TitlePopUp="Add New Catgory"
        iconLeft={<Icons.ArrowLeftPop />}
   
      >
      <div
          style={{
            width: "35vw",
            maxHeight: "65vh",
            overflowY: "auto",
            scrollbarWidth: "none",
          }}
          className="px-1"
        >
        <div className="my-2  w-full">
        <Header text="Name" htmlFor="name" />
        <div className="mt-2 w-full ">
          <TextInput
            onChange={(e) => console.log(e.target.value)}
            placeholder=" Enter Category Name"
            id="name"
            name="name"
            type="text"
            required
          />
        </div>
      </div>
        <div className="mt-2 w-full inline-flex justify-end px-1 ">
      <Button
      buttonText="Add "
      className="px-10 py-2.5 text-fontColor-whiteBaseColor"
      onClick={handleClosePopup}
    />
    </div>
      </div>
    
      </FormPopUp>
      <Button
      buttonText="Add New Category"
      className="px-10 py-2.5 text-fontColor-whiteBaseColor"
      onClick={handleOpenPopup}
      
    />
    </>
  )
}
