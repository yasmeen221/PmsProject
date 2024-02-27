import SideBar from "./components/sharedcomponent/sideBar/SideBar";
import TopNav from "./components/sharedcomponent/topNav/TopNav";
import RequestFeedback from "./components/CardsPopUps/FeedbackCards/RequestFeedback";
import Competencies from "./pages/Competencies";
import FeedBack from "./pages/FeedBack";

function App() {
  return (
    <>
      <div className="flex">
        <SideBar />
        <div className="w-full ">
          <TopNav />
          {/* <FeedBack /> */}
          <Competencies />
        </div>
      </div>
    </>
  );
}

export default App;
