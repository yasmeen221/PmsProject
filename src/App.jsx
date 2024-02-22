import DropDown from "./components/reusablecomponents/DropDown/DropDown";
import Button from "./components/reusablecomponents/Button/Button";
import Icons from "./themes/icons";


function App() {
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
        <Button buttonText="Add Competency" className="text-deleteColor-baseColor" />
      </div>
      <div className="flex justify-center mt-5 ">
        <Button buttonText="Delete" className="bg-white border-borderColor-baseBorderColor border-2  text-red-500" />
      </div>
      {/** test drop down menu */}
      <h1 className="text-center my-5">DropDown Test</h1>
      <div className="w-100  flex flex-row justify-between mt-10  items-center ">
        <DropDown DropDownText="New Feedback" arrowIcon >
          <li className="block px-dropItemXP py-dropItemYP  hover:bg-hoverColor-baseHoverColor ">
            Send Feedback
          </li>
          <li className="block px-dropItemXP py-dropItemYP hover:bg-hoverColor-baseHoverColor ">
            Request Feedback
          </li>
        </DropDown>

        <div className=" flex flex-row   items-center ">
          <DropDown DropDownText="New Feedback" arrowIcon className="mx-1" >
            <li className="block px-dropItemXP py-dropItemYP  hover:bg-hoverColor-baseHoverColor ">
              Send Feedback
            </li>
            <li className="block px-dropItemXP py-dropItemYP hover:bg-hoverColor-baseHoverColor ">
              Request Feedback
            </li>
          </DropDown>

          <DropDown threeDotsIcon className=" bg-white " >
            <li className="block px-dropItemXP py-dropItemYP  hover:bg-hoverColor-baseHoverColor ">
              Send Feedback
            </li>
            <li className="block px-dropItemXP py-dropItemYP hover:bg-hoverColor-baseHoverColor ">
              Request Feedback
            </li>
          </DropDown>

        </div>
      </div>


    </div>
  );
}

export default App;