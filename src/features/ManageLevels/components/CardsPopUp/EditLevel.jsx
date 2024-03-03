// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Button from "../../../../components/Button/Button";
import Header from "../../../../components/Header/Header";
import FormPopUp from "../../../../components/PopUp/FormPopUp";
import TextInput from "../../../../components/TextInput/TextInput";
import Icons from "../../../../themes/icons";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { useUpdateLevelMutation } from "../../slices/api/apiLevelSlice";


const schema = yup.object().shape({
  levelName: yup
    .string()
    .required("Level name is required")
    .matches(/^[A-Za-z]+$/, "Level name must contain characters only")
    .trim(),
});
// eslint-disable-next-line react/prop-types, no-unused-vars
export default function EditLevel({ level,onClose }) {
  const [isPopupOpen, setPopupOpen] = useState(true);
  // const [updateLevel, setupdateLevel] = useState({});
  const [updateLevel,{error}]=useUpdateLevelMutation();
  const handleOpenPopup = () => {
    setPopupOpen(true);
  };

  const handleClosePopup = () => {
    onClose()
    setPopupOpen(false);
  };
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const formSubmit = (values) => {
    // setupdateLevel(values);
    const levelObj={levelName:values.levelName,id: level._id}
    try{
      // console.log(level._id);
      updateLevel(levelObj)
    }catch(err){console.log("error",error)}
    reset();
    onClose();
    handleClosePopup();
    // console.log(values);
   
  };
  useEffect(()=>{
  },[])
  return (
    <>
      <FormPopUp
        isOpen={isPopupOpen}
        ClosePop={handleClosePopup}
        TitlePopUp="Edit Level"
      >
        <form onSubmit={handleSubmit(formSubmit)}>
          <div
            className="w-[35vw] max-h-[65vh] pb-4 overflow-y-auto"
            style={{ scrollbarWidth: "none" }}
          >
            <div className="px-1">
              <div className="pt-4 text-left">
                <Header text="Level Name" />
                <TextInput
                  defaultValue={`${level.levelName}`}
                  type="text"
                  register={register("levelName")}
                  placeholder="Edit Level Name"
                />
                {errors.levelName && (
                  <p className="text-red-600">{errors.levelName.message}</p>
                )}
              </div>
            </div>
          </div>
          <div className="flex items-center justify-end border-t border-gray-200 py-3 mx-2">
            <Button
              type="submit"
              className="px-12 py-2.5 text-fontColor-whiteBaseColor"
              buttonText="Edit Level"
              
            />
          </div>
        </form>
      </FormPopUp>

      
    </>
  );
}

//-------------------------WARNING IN POPUPS IN ADD IN EDIT MUST ONE POPUP PLEASE--------------------------
// ----USE ONE FORM TO ADD AND EDIT
