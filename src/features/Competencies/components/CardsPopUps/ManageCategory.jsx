import React, { useEffect, useState } from 'react';
import FormPopUp from '../../../../components/PopUp/FormPopUp';
import Button from '../../../../components/Button/Button';
import Icons from '../../../../themes/icons';
import AddNewCatgory from './AddNewCatgory';
import EditCatgory from './EditCatgory';

export default function ManageCategory({ onClose }) {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [isEditPopupOpen, setEditPopupOpen] = useState(false);

  useEffect(() => {
    setPopupOpen(true);
  }, []);

  const handleOpenPopup = () => {
    setPopupOpen(true);
  };

  const handleClosePopup = () => {
    setPopupOpen(false);
    onClose();
  };

  const handleOpenEditPopup = () => {
    setEditPopupOpen(true);
  };

  const handleCloseEditPopup = () => {
    setEditPopupOpen(false);
  };
 



  return (
    <>
      <FormPopUp
        isOpen={isPopupOpen}
        ClosePop={handleClosePopup}
        TitlePopUp="Manage Category"
      >
        {/* Your category list with edit and delete buttons */}
        <div style={{ width: '30.75vw', maxHeight: '69.73478939157566vh' }} className="px-1">
          {/* Example Category */}
          <div className='flex justify-between my-3'>
            <div>
              <h3 className='font-semibold text-lg'>Soft Skills</h3>
              <p className='font-normal text-gray-500'>Has 5 competencies</p>
            </div>
            <div>
              <Button
                iconLeft={<Icons.EditUserPage />}
                className="bg-transparent px-1"
                onClick={handleOpenEditPopup} // Open Edit Category popup when clicking on edit icon
              />
              <Button
                iconLeft={<Icons.DeleteUserPage />}
                className="bg-transparent px-1"
                onClick={() => { /* Add delete functionality */ }}
              />
            </div>
          </div>
          {/* Add more category entries as needed */}
          {/* Your other category entries */}
          <hr />
          <div className="mt-2 w-full inline-flex justify-end px-1">
            <AddNewCatgory />
          </div>
        </div>
      </FormPopUp>

      {/* Edit Category Popup */}
      {isEditPopupOpen && <EditCatgory onClose={handleCloseEditPopup} />}
    </>
  );
}
