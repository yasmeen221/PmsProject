import React, { useState } from "react";
import * as yup from "yup";
import FormPopUp from "../../../../components/PopUp/FormPopUp";
import Button from "../../../../components/Button/Button";
import Icons from "../../../../themes/icons";
import Header from "../../../../components/Header/Header";
import TextInput from "../../../../components/TextInput/TextInput";
import toast from "react-hot-toast";

export default function AddNewCatgory({ handleAddCategory }) {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [errors, setErrors] = useState({}); // State to hold validation errors

  const handleOpenPopup = () => {
    setPopupOpen(true);
  };

  const handleClosePopup = () => {
    setPopupOpen(false);
  };

  // Yup schema for form validation
  const schema = yup.object().shape({
    categoryName: yup
      .string()
      .trim()
      .required()
      .matches(/^[A-Za-z ]+$/, "Category name must contain characters only")
      .min(3, "Category name must be at least 3 characters")
      .max(30, "Category name must not exceed 30 characters"),
  });

  const handleSubmit = async (values) => {
    try {
      await schema.validate(values, { abortEarly: false });

      console.log("Form submitted successfully:", values);
      toast.success("Add Category successfully!");
      handleClosePopup();

      handleAddCategory(values.categoryName);
    } catch (error) {
      if (error.inner) {
        setErrors(
          error.inner.reduce((acc, currentError) => {
            acc[currentError.path] = currentError.message;
            return acc;
          }, {}),
        );
      } else {
        console.error("Validation Error:", error.message);
      }
    }
  };

  return (
    <>
      <FormPopUp
        isOpen={isPopupOpen}
        ClosePop={handleClosePopup}
        TitlePopUp="Add New Category"
        iconLeft={<Icons.ArrowLeftPop />}
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const formData = {
              categoryName: e.target.categoryName.value,
            };
            handleSubmit(formData);
          }}
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
            <div className="my-2 w-full">
              <Header text="Name" htmlFor="name" />
              <div className="mt-2 w-full">
                <TextInput
                  id="categoryName"
                  name="categoryName"
                  type="text"
                  placeholder="Enter Category Name"
                  required
                />
                {errors.categoryName && (
                  <p className="text-red-600">{errors.categoryName}</p>
                )}
              </div>
            </div>
            {/* Add more fields as needed */}
            <div className="mt-2 w-full inline-flex justify-end px-1">
              <Button
                buttonText="Add"
                className="px-10 py-2.5 text-fontColor-whiteBaseColor"
                type="submit"
              />
            </div>
          </div>
        </form>
      </FormPopUp>
      <Button
        buttonText="Add New Category"
        className="px-10 py-2.5 text-fontColor-whiteBaseColor"
        onClick={handleOpenPopup}
      />
    </>
  );
}
