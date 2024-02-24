import DropDown from "./components/reusablecomponents/DropDown/DropDown";
import Button from "./components/reusablecomponents/Button/Button";
import Icons from "./themes/icons";

import { useState } from "react";

function App() {
  const [dropDown1, setOpen1] = useState(false)
  const [dropDown2, setOpen2] = useState(false)
  const [dropDown3, setOpen3] = useState(false)
  const dropdown1=(value)=>{
    setOpen1(dropDown1 => !dropDown1)
    console.log(value)
    //if you want to make navigation put the condition based on the value captured

  }
  const dropdown2=(value)=>{
    setOpen2(dropDown2 => !dropDown2)
    console.log(value)
  }
  const dropdown3=(value)=>{
    setOpen3(dropDown3 => !dropDown3)
    console.log(value)
  }
  return (
    <div >
      <h1 className="text-center  text-fontColor-900 font-custom text-xl font-extrabold ">
        Performance Management System
      </h1>
      {/* test button */}
      <h1 className="text-center my-3">Button Test</h1>
      <div className="flex justify-center ">
        <Button buttonText="Add Competency" iconLeft={<Icons.PlusIcon />} />
      </div>
      <div className="flex justify-center mt-5 ">
        <Button buttonText="Add Competency" onClick={() => console.log("hi")} />
      </div>
      <div className="flex justify-center mt-5 ">
        <Button buttonText="Delete" className="bg-white border-borderColor-baseBorderColor border-2  text-red-500" />
      </div>
      {/** test drop down menu */}
      <h1 className="text-center my-5">DropDown Test</h1>
      <div className="w-100  flex flex-row justify-between mt-10  items-center ">
        <DropDown DropDownText="New Feedback" arrowIcon open={dropDown1} onClick={() => { setOpen1(dopen => !dopen) }}>
          <li className="block px-dropItemXP py-dropItemYP  hover:bg-hoverColor-baseHoverColor " onClick={() => dropdown1("send Feedback")}>
            Send Feedback
          </li>
          <li className="block px-dropItemXP py-dropItemYP hover:bg-hoverColor-baseHoverColor " onClick={() => dropdown1("Request Feedback")}>
            Request Feedback
          </li>
        </DropDown>
        <div className=" flex flex-row   items-center ">
          <DropDown DropDownText="New Feedback" arrowIcon className="mx-1" open={dropDown2} onClick={() => setOpen2(dropDown2 => !dropDown2)}>
            <li className="block px-dropItemXP py-dropItemYP  hover:bg-hoverColor-baseHoverColor " onClick={() => dropdown2("Send Feedback")}>
              Send Feedback
            </li>
            <li className="block px-dropItemXP py-dropItemYP hover:bg-hoverColor-baseHoverColor " onClick={() => dropdown2("Request Feedback")}>
              Request Feedback
            </li>
          </DropDown>
          <DropDown threeDotsIcon className=" bg-white " open={dropDown3} onClick={() => setOpen3(dropDown3 => !dropDown3)} >
            <li className="block px-dropItemXP py-dropItemYP  hover:bg-hoverColor-baseHoverColor " onClick={() => dropdown3("Send Feedback")}>
              Send Feedback
            </li>

          </DropDown>
        </div>
      </div>
    </div>
  );
}

export default App;
