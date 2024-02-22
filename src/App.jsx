// import "./App.css";

import Button from "./components/reusablecomponents/Button";
import { FaPlus } from "react-icons/fa6";

function App() {
  return (
    <>
      <h1 className="text-center  font-custom text-xl font-extrabold text-fontColor-900 ">
        Performance Management System
      </h1>
      <div className="flex justify-center ">
        <Button buttonText="Add Competency" icon={<FaPlus />} />
      </div>
      <div className="mt-5 flex justify-center ">
        <Button buttonText="Add Competency" />
      </div>

 

    </>
  );
}

export default App;
