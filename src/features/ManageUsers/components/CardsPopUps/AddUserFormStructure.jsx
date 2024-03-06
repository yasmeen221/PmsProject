import { useEffect, useState } from "react";
import FormPopUp from "../../../../components/PopUp/FormPopUp"
import SelectUser from "./SelectUser";
import { useDispatch, useSelector } from "react-redux";
import { handleOpenAddUserFormPopUp } from "../../slices/openAddUserFormPopUp";
import { editUser } from "../../slices/editUsersSlice";

function AddUserFormStructure() {
  const dispatch=useDispatch()
  const [isAddUserPopupOpen, setAddUserPopupOpen] = useState(false);
  const OpenAddUserFormPopUp=useSelector((store)=>store.openAddUserFormPopUp.open)
  const userData = useSelector((store) => store.editUser.user);

 function handleClosePopup(){
    setAddUserPopupOpen(false)
    dispatch(handleOpenAddUserFormPopUp(false))
    dispatch(editUser({}))
 }
  useEffect(()=>{
     setAddUserPopupOpen(OpenAddUserFormPopUp)
  },[OpenAddUserFormPopUp])
  return (
   
    <FormPopUp
    isOpen={isAddUserPopupOpen}
    ClosePop={() => handleClosePopup()}
    TitlePopUp={userData.username?"Edit User":"Add User"}
  >
    
      <SelectUser/>
    
  </FormPopUp>
  )
}

export default AddUserFormStructure
