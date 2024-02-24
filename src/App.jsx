import Button from './components/reusablecomponents/Button/Button';
import Icons from './themes/icons';
import SelectFeedback from './components/CardsPopUps/FeedbackCards/SelectFeedback';
import TestDropDown from './components/TestDropDown';
import AddCompetency from './components/CardsPopUps/AddCompetencyCards/AddCompetency';

function App() {
  return (
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
        <Button buttonText="Add Competency" onClick={() => console.log('hi')} />
      </div>
      <div className="mt-5 flex justify-center ">
        <Button
          buttonText="Delete"
          className="border-2 border-borderColor-baseBorderColor bg-white  text-red-500"
        />
      </div>
      <TestDropDown />
      <SelectFeedback />
      <div className='my-3'>
        <AddCompetency />
      </div>
    </div>
  );
}

export default App;
