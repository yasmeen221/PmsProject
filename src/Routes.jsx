import { createBrowserRouter } from "react-router-dom";
import Competencies from "../src/features/Competencies/pages/Competencies";
import Dashboard from "../src/components/Dashboard";
import FeedBack from "./features/FeedBack";
import NotFound from "./components/NotFound";
import Users from "./features/User&Teams/pages/Users";
import ResetPassword from "./features/ResetPassword/pages/ResetPassword";
import LogInPage from "./features/LogIn/pages/LogInPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <LogInPage />,
  },
  {
    path: "/resetpassword",
    element: <ResetPassword />
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "competencies",
        element: <Competencies />,
      },
      {
        path: "feedback",
        element: <FeedBack />,
      },
      {
        path: "users&teams",
        element: <Users/>,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
export default router;
