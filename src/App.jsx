import { RouterProvider } from "react-router-dom";
import router from "./Routes";
import SelectUser from "./features/ManageUsers/components/CardsPopUp/SelectUser";
// import SelectLevel from "./features/ManageUsers/components/CardsPopUp/SelectLevel";
function App() {
  return (<>
    <RouterProvider router={router}/>
    <SelectUser/>
    {/* <SelectLevel/> */}
    </>
  );
}

export default App;
