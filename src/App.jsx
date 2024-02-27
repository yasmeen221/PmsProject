import SelectFeedback from "./components/CardsPopUps/FeedbackCards/SelectFeedback";
import SideBar from "./components/sharedcomponent/sideBar/SideBar";
import TopNav from "./components/sharedcomponent/topNav/TopNav";
import GiveNormalFeedback from "./components/CardsPopUps/FeedbackCards/GiveNormalFeedback";
import AddCompetency from "./components/CardsPopUps/AddCompetencyCards/AddCompetency";
import FeedBack from "./pages/FeedBack";
import RequestFeedback from "./components/CardsPopUps/FeedbackCards/RequestFeedback";

function App() {
  return (
    <>
      <div className="flex">
        <SideBar />
        <div className="w-full ">
          <TopNav />
          <FeedBack />
        </div>
      </div>
      <div className="my-8 mx-4 flex  space-x-4">
        <RequestFeedback />
        <AddCompetency />
        <SelectFeedback />
        <GiveNormalFeedback />
      </div>
    </>
  );
}

export default App;
