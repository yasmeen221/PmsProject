import React, { useEffect } from 'react';
import FormPopUp from '../../../../components/PopUp/FormPopUp';
import Button from '../../../../components/Button/Button';
import Icons from '../../../../themes/icons';
import Header from '../../../../components/Header/Header';
import TextInput from '../../../../components/TextInput/TextInput';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { updateData } from '../../slices/Api/catgoryapi';

const schema = Yup.object().shape({
  categoryName: Yup.string()
    .required('Category name is required')
    .matches(/^[A-Za-z ]+$/, 'Category name must contain only letters and spaces')
    .trim()
    .min(3, 'Category name must be at least 3 characters')
    .max(30, 'Category name must not exceed 30 characters'),
});

export default function EditCategory({ onClose, category }) {
  const { register, handleSubmit, formState: { errors }, setValue } = useForm({
    resolver: yupResolver(schema),
  });

  const handleClosePopup = () => {
    onClose();
  };

  const onSubmit = async (data) => {
    try {

     /* const updatedCategory = { categoryName: data.categoryName };*/
      await updateData(category._id,data.categoryName);

      console.log('Category updated successfully');
      handleClosePopup();
    } catch (err) {
      console.error('Error updating category:', err);
    }
  };

  useEffect(() => {
  
    setValue('categoryName', category.categoryName);
  }, [category, setValue]);

  return (
    <FormPopUp
      isOpen={true} 
      ClosePop={handleClosePopup}
      TitlePopUp="Edit Category"
      iconLeft={<Icons.ArrowLeftPop />}
    >
      <div
        style={{
          width: '35vw',
          maxHeight: '65vh',
          overflowY: 'auto',
          scrollbarWidth: 'none',
        }}
        className="px-1"
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="my-2  w-full">
            <Header text="Name" htmlFor="name" />
            <div className="mt-2 w-full ">
              <TextInput
              defaultValue={`${category.categoryName}`}

      
              register={register('categoryName')}
                placeholder="Enter Category Name"
              

                type="text"
              />
              {errors.categoryName && <p className="text-red-600">{errors.categoryName.message}</p>}
            </div>
          </div>
          <div className="mt-2 w-full inline-flex justify-end px-1 ">
            <Button
              buttonText="Edit"
              className="px-10 py-2.5 text-fontColor-whiteBaseColor"
              type="submit"
            />
          </div>
        </form>
      </div>
    </FormPopUp>
  );
}
