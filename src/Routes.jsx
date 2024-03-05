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

    path: "/setpassword/:token",
    element: <ResetPassword />,

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


// {
//   path: "/",
//   element: <Dashboard />,
//   children: [
//     {
//       path: "competencies",
//       element: (
//         <RequireAuth>
//           <Competencies />
//         </RequireAuth>
//       ),
//     },
//     {
//       path: "feedback",
//       element: (
//         <RequireAuth>
//           <FeedBack />
//         </RequireAuth>
//       ),
//     },
//     {
//       path: "users&teams",
//       element: (
//         <RequireAuth>
//           <Users />
//         </RequireAuth>
//       ),
//       // element: <Users />,
//     },
//   ],
// },

// {
//   path: "/setpassword/:token",
//   element: <ResetPassword />,
// },
// {
//   path: "/login",
//   element: <LogInPage />,
// },
// {
//   path: "*",
//   element: <NotFound />,
// },

