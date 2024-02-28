import React, { useState } from 'react'
import Button from '../../../../components/Button/Button'
import Header from '../../../../components/Header/Header'
import HandelPopUp from '../../../../components/PopUp/HandelPopUp'
import TextInput from '../../../../components/TextInput/TextInput'
import Icons from '../../../../themes/icons'
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";


const schema = yup.object().shape({
  levelName: yup
  .string()
  .matches(/^[A-Za-z]+$/, "Level name must contain char only")
  .trim()
  .required("Level name is required"),
});
export default function EditLevel({id,name}) {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [updateLevel, setupdateLevel] = useState({});
  const handleOpenPopup = () => {
    setPopupOpen(true);
  };

  const handleClosePopup = () => {
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
    setupdateLevel(values);
      reset();
      handleClosePopup();
      console.log(values)
  };
  return (
    <>
    <HandelPopUp
        isOpen={isPopupOpen}
        ClosePop={handleClosePopup}
        TitlePopUp="Edit Level"
      >
        <form onSubmit={handleSubmit(formSubmit)}>
          <div className="w-[35vw] max-h-[65vh] pb-4 overflow-y-auto" style={{ scrollbarWidth: "none" }}>
            <div className="px-1">
              <div className="pt-4 text-left">
                <Header text="Level Name"  />
                <TextInput defaultValue={`${name}`} type="text" register={register("levelName")} placeholder="Edit Level Name" />
                {errors.levelName && <p className="text-red-600">{errors.levelName.message}</p>}
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
       
      </HandelPopUp>
      <Button
        buttonText="Edit"
        className="text-fontColor-whiteBaseColor"
        onClick={handleOpenPopup}/>
    </>
  )
}
