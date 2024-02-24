import DropDown from './components/reusablecomponents/DropDown/DropDown';
import Button from './components/reusablecomponents/Button/Button';
import Icons from './themes/icons';
import image from './assets/images/boy1.png';
import ImageStyle from './components/reusablecomponents/ImageStyle/ImageStyle';

import SelectFeedback from './components/CardsPopUps/FeedbackCards/SelectFeedback';

function App() {
  return (
    <>
      <div>
        <h1 className="text-center  font-custom text-xl font-extrabold text-fontColor-900 ">
          Performance Management System
        </h1>
        {/* test button */}
        <h1 className="my-3 text-center">Button Test</h1>
        <div className="flex justify-center ">
          <Button buttonText="Add Competency" iconLeft={<Icons.PlusIcon />} />
        </div>
        <div className="mt-5 flex justify-center ">
          <Button
            buttonText="Add Competency"
            className="text-deleteColor-baseColor"
          />
        </div>
        <div className="mt-5 flex justify-center ">
          <Button
            buttonText="Delete"
            className="border-2 border-borderColor-baseBorderColor bg-white  text-red-500"
          />
        </div>
        {/** test drop down menu */}
        <h1 className="my-5 text-center">DropDown Test</h1>
        <div className="w-100  mt-10 flex flex-row items-center  justify-between ">
          <DropDown DropDownText="New Feedback" arrowIcon>
            <li className="block px-dropItemXP py-dropItemYP  hover:bg-hoverColor-baseHoverColor ">
              Send Feedback
            </li>
            <li className="block px-dropItemXP py-dropItemYP hover:bg-hoverColor-baseHoverColor ">
              Request Feedback
            </li>
          </DropDown>

          <div className=" flex flex-row   items-center ">
            <DropDown DropDownText="New Feedback" arrowIcon className="mx-1">
              <li className="block px-dropItemXP py-dropItemYP  hover:bg-hoverColor-baseHoverColor ">
                Send Feedback
              </li>
              <li className="block px-dropItemXP py-dropItemYP hover:bg-hoverColor-baseHoverColor ">
                Request Feedback
              </li>
            </DropDown>

            <DropDown threeDotsIcon className=" bg-white ">
              <li className="block px-dropItemXP py-dropItemYP  hover:bg-hoverColor-baseHoverColor ">
                Send Feedback
              </li>
              <li className="block px-dropItemXP py-dropItemYP hover:bg-hoverColor-baseHoverColor ">
                Request Feedback
              </li>
            </DropDown>
          </div>
        </div>

        {/* test image */}
        <h1 className="my-3 text-center">Image Test</h1>
        <div className="mx-6 my-6 flex space-x-10">
          <ImageStyle src={image} caption="from" personName="sara ahmed" />
          <ImageStyle src={image} caption="to" personName="sara ahmed" />
        </div>
      </div>
      <div>
        <SelectFeedback />
      </div>
    </>
  );
}

export default App;
