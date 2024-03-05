import React from 'react'
import { useEffect } from 'react';

export default function ViewDetails() {
    const [isPopupOpen, setPopupOpen] = useState(false);
    useEffect(()=>{
        setPopupOpen(true);
    },[])
      const handleClosePopup = () => {
        setPopupOpen(false);
      };
  return (
    <>
    <FormPopUp
        isOpen={isPopupOpen}
        ClosePop={handleClosePopup}
        TitlePopUp=""
        iconLeft={<Icons.ArrowLeftPop />}
      >

      </FormPopUp>
    </>
  )
}
