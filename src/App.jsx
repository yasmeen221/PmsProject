import { RouterProvider } from "react-router-dom";
import router from "./Routes";
import { contextProvider } from "./components/Auth/auth";

function App() {
  return (
    <>
      <contextProvider>
        <RouterProvider router={router} />
      </contextProvider>
    </>
  );
}

export default App;
