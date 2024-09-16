import UserData from "../components/userdata";
import UserAddress from "../components/useraddress";
import Summary from "../components/summary";
import ErrorPage from "../components/errorpage";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout";

let router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    
    children: [
      {
        path: "/user-data",
        element: <UserData />,
      },
      {
        path: "/user-address",
        element: <UserAddress />,
      },
      {
        path: "/summary",
        element: <Summary />,
      },
    ],
  },
]);

export default router;
