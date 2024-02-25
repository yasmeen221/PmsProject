import Button from "./components/reusablecomponents/Button/Button";
import Icons from "./themes/icons";
import SelectFeedback from "./components/CardsPopUps/FeedbackCards/SelectFeedback";
import TestDropDown from "./components/TestDropDown";
import SideBar from "./components/sharedcomponent/sideBar/SideBar";
import TopNav from "./components/sharedcomponent/topNav/TopNav";

import GiveNormalFeedback from "./components/CardsPopUps/FeedbackCards/GiveNormalFeedback";

import AddCompetency from "./components/CardsPopUps/AddCompetencyCards/AddCompetency";
import FeedBack from "./pages/FeedBack";

function App() {
  return (
    // <div>
    //   <h1 className="text-center  font-custom text-xl font-extrabold text-fontColor-900 ">
    //     Performance Management System
    //   </h1>
    //   {/* test button */}
    //   <h1 className="my-3 text-center">Button Test</h1>
    //   <div className="flex justify-center ">
    //     <Button buttonText="Add Competency" iconLeft={<Icons.PlusIcon />} />
    //   </div>
    //   <div className="mt-5 flex justify-center ">
    //     <Button buttonText="Add Competency" onClick={() => console.log('hi')} />
    //   </div>
    //   <div className="mt-5 flex justify-center ">
    //     <Button
    //       buttonText="Delete"
    //       className="border-2 border-borderColor-baseBorderColor bg-white  text-red-500"
    //     />
    //   </div>
    //   <TestDropDown />
    //   <SelectFeedback />

    // <GiveNormalFeedback />
    // <div className="my-3">
    // <AddCompetency />
    //  </div>
    // </div>
    <>
      <div className="flex">
        <SideBar />
        <div className="w-full ">
          <TopNav />
          <FeedBack />
        </div>
      </div>
      <div className="my-8 mx-4 flex  space-x-4">
        <AddCompetency />
        <SelectFeedback />
        <GiveNormalFeedback />
      </div>
    </>
  );
}

export default App;
