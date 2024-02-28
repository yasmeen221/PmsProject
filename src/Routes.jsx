import { createBrowserRouter } from "react-router-dom";
import Competencies from "../src/features/Competencies/pages/Competencies";
import Dashboard from "../src/components/Dashboard";
import FeedBack from "./features/FeedBack";
import LoginForm from "./features/LogIn/components/LoginForm";
import NotFound from "./components/NotFound";
const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginForm/>
  },
  {
    path:"/dashboard", 
    element:<Dashboard/>,
    children: [
      {
        path: "competencies",
        element:<Competencies/>
      },
      {
        path: "feedback",
        element:<FeedBack/>
      },
      {
        path: "users&teams",
        element: <div>user and teams</div>
      }
    ]
  },{
    path:"*",
    element: <NotFound/>
  }
])
export default router;
