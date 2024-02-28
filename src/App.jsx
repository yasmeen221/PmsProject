import SideBar from "./components/sideBar/SideBar";
import TopNav from "./components/topNav/TopNav";
import FeedBack from "./features/FeedBack";
import Competencies from "./features/Competencies";
import ResetPassword from "./features/ResetPassword/pages/ResetPassword";

function App() {
  return (
    <>
      <div className="flex">
        <SideBar />
        <div className="w-full ">
          <TopNav />
          <FeedBack />
          {/* <Competencies /> */}
          <ResetPassword/>
        </div>
      </div>
    </>
  );
}

export default App;
