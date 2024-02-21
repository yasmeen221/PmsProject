// import "./App.css";

import Button from "./components/reusablecomponents/Button";
import { FaPlus } from "react-icons/fa6";

function App() {
  return (
    <>
      <h1 className="text-center  text-fontColor-900 font-custom text-xl font-extrabold ">
        Performance Management System
      </h1>
      <div className="flex justify-center ">
        <Button buttonText="Add Competency" icon={<FaPlus />} />
      </div>
      <div className="flex justify-center mt-5 ">
        <Button buttonText="Add Competency" />
      </div>
    </>
  );
}

export default App;
