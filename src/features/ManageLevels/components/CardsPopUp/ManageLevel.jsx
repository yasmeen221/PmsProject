import React, { useState } from 'react'
import TextInput from "../../../../components/TextInput/TextInput";
import Header from "../../../../components/Header/Header";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import FormPopUp from "../../../../components/PopUp/FormPopUp.jsx";
import Button from "../../../../components/Button/Button";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react';
import { editLevel } from '../../slices/EditLevel';
import { handleOpenAddLevelPopUp } from '../../slices/OpenPopupLevel';
const schema = yup.object({
    levelName: yup
      .string()
      .required("Level name is required")
      .matches(/^[A-Za-z]+$/, "Level name must contain char only")
      .trim(),
  });
export default function ManageLevel() {
    const dispatch = useDispatch();
    const handleOpen = useSelector((state) => state.openPopupAddLevel.open);
    const editData= useSelector((state)=> state.editLevelSlice.level)
    const [isPopOpen, setPopOpen] = useState(false);

    const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
      setValue,
    } = useForm({
      resolver: yupResolver(schema),
    });

    useEffect(()=>{
        setPopOpen(handleOpen);
        if(!handleOpen){
            dispatch(editLevel({}));
            reset();
        }
        if(editData.levelName){
            setValue("levelName",editData.levelName)
        }
    },[handleOpen])
    const handleClosePopup = () => {
        setPopOpen(false);
        dispatch(handleOpenAddLevelPopUp(false));
        dispatch(editLevel({}));
      };
    
     
    
      const formSubmit = async (values) => {
          handleClosePopup();
          reset();
          
      };
      async function addLevel(values){
        try {
          const response = await axios.post("https://reqres.in/api/users", values);
      
          console.log("Response:", response); 
        }catch (error) {
          console.error("Error adding level:", error);
        }
      }
  return (
    <FormPopUp
        isOpen={isPopOpen}
        ClosePop={handleClosePopup}
        TitlePopUp={"ADD Level"}
      >
        <form onSubmit={handleSubmit(formSubmit)}>
          <div
            className="w-[35vw] max-h-[65vh] pb-4 overflow-y-auto"
            style={{ scrollbarWidth: "none" }}
          >
            <div className="px-1">
              <div className="pt-4">
                <Header text="Level Name" />
                <TextInput
                  type="text"
                  register={{...register("levelName")}}
                  placeholder="Add Level Name"
                />
                {errors.levelName && (
                  <p className="text-red-600" >{errors.levelName.message}</p>
                )}
              </div>
            </div>
          </div>
          <div className="flex items-center justify-end border-t border-gray-200 py-3 mx-2">
            <Button
              type="submit"
              className="px-12 py-2.5 text-fontColor-whiteBaseColor"
              buttonText="Add Level"
            />
          </div>
        </form>
      </FormPopUp>

  )
}
