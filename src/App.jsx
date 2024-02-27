import SideBar from "./components/sideBar/SideBar";
import TopNav from "./components/topNav/TopNav";
import FeedBack from "./features/FeedBack";
import Competencies from "./features/Competencies";
import LoginForm from "./features/LogIn/components/LoginForm";

function App() {
  return (
    <>
      <div className="flex">
        <SideBar />
        <div className="w-full ">
          <TopNav />
          <FeedBack />
          {/* <Competencies /> */}
          <LoginForm />
        </div>
      </div>
    </>
  );
}

export default App;
