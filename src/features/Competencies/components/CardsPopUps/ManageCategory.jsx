import React, { useEffect, useState } from 'react';
import FormPopUp from '../../../../components/PopUp/FormPopUp';
import Button from '../../../../components/Button/Button';
import Icons from '../../../../themes/icons';
import AddNewCatgory from './AddNewCatgory';
import EditCatgory from './EditCatgory';
import { getAllData, deleteData, createData, updateData } from '../../slices/Api/catgoryapi';
import { useDispatch, useSelector } from 'react-redux';
import { HandelOpenPopUpDelete } from '../../../ManageTeams/slices/HandelOpenDelete';
import ConfirmDelete from '../../../../components/Delete/ConfirmDelete';

export default function ManageCategory({ onClose }) {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [isEditPopupOpen, setEditPopupOpen] = useState(false);
  const [category, setCategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const dispatch = useDispatch();
  const openDeletPopup = useSelector(
    (state) => state.openPopUpConfirmDeleteSlice.open,
  );
  const [selectedCat,setSelectedCat]=useState(null);
  useEffect(() => {
    fetchData();
    setPopupOpen(true);
  }, [category]);

  const fetchData = async () => {
    try {
      const response = await getAllData();
      setCategory(response.data.categories);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleClosePopup = () => {
    setPopupOpen(false);
    onClose();
  };

  const handleOpenEditPopup = (category) => {
    setSelectedCategory(category);
    setEditPopupOpen(true);
  };

  const handleCloseEditPopup = () => {
    setEditPopupOpen(false);
  };

  const handleDeleteCategory = async () => {
    try {
      if(selectedCat){
      const res = await deleteData(selectedCat);
      const updatedCategories = category.filter(cat => cat._id !== selectedCat);
      setCategory(updatedCategories);
      dispatch(HandelOpenPopUpDelete(false));
      console.log('Category deleted successfully');
      }
    } catch (error) {
      console.error('Error deleting category:', error);
    }
  };

  const handleAddCategory = async (categoryName) => {
    try {
      const res = await createData(categoryName);
      console.log('Category added successfully:', res);
      
    } catch (error) {
      console.error('Error adding category:', error);
    }
  };

  const handleEditCategory = async (editedCategory) => {
    try {
      const res = await updateData(selectedCategory._id, editedCategory);
      console.log('Category edited successfully:', res);
     
    } catch (error) {
      console.error('Error editing category:', error);
    }
  };

  return (
    <>
      <FormPopUp
        isOpen={isPopupOpen}
        ClosePop={handleClosePopup}
        TitlePopUp="Manage Category"
      >
        <div style={{ width: '30.75vw', maxHeight: '69.73478939157566vh' }} className="px-1">
          {category[0]?category.map((cat) => (
            <div key={cat._id} className='flex justify-between my-3'>
              <div>
                <h3 className='font-semibold text-lg'>{cat.categoryName}</h3>
                <p className='font-normal text-gray-500'>Has {cat.competenciesId?.length} competencies</p>
              </div>
              <div>
                <Button
                  iconLeft={<Icons.EditUserPage />}
                  className="bg-transparent px-1"
                  onClick={() => handleOpenEditPopup(cat)}
                />
                <Button
                  iconLeft={<Icons.DeleteUserPage />}
                  className="bg-transparent px-1"
                  onClick={() => {
                    setSelectedCat(cat._id)
                    dispatch(HandelOpenPopUpDelete(true))
                  }}
                />
              </div>
            </div>
          )):(
            <div className="flex items-center my-5 justify-center">
              <Icons.Loading />
            </div>
          )}
          <hr />
          <div className="mt-2 w-full inline-flex justify-end px-1">
            <AddNewCatgory handleAddCategory={handleAddCategory} />
          </div>
        </div>
        {openDeletPopup && <ConfirmDelete onConfirm={handleDeleteCategory}/>}
      </FormPopUp>
      {isEditPopupOpen && <EditCatgory onClose={handleCloseEditPopup} category={selectedCategory} handleEditCategory={handleEditCategory} />}
    </>
  );
}
