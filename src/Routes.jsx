import { createBrowserRouter } from "react-router-dom";
import Competencies from "../src/features/Competencies/pages/Competencies";
import Dashboard from "../src/components/Dashboard";
import FeedBack from "./features/FeedBack";
import LoginForm from "./features/LogIn/components/LoginForm";
import NotFound from "./components/NotFound";
import Users from "./features/ManageUsers";
const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginForm />,
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
        element: <Users />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
export default router;
