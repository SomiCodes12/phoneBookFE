import { createBrowserRouter } from "react-router-dom";
import Layout from "../Components/Block/Layout";
import CreateContact from "../Components/Block/Screens/CreateContact";
import ViewAllContacts from "../Components/Block/Screens/ViewAllContacts";
import Family from "../Components/Block/Screens/Family";
import Business from "../Components/Block/Screens/Business";
import Friends from "../Components/Block/Screens/Friends";

export const MainRoute = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <ViewAllContacts/>,
      },
      {
        path : "/family",
        element: <Family/>,
      },
      {
        path : "/create",
        element: <CreateContact />,
      },
      {
        path : "/business",
        element: <Business />,
      },
      {
        path : "/friends",
        element: <Friends/>,
      },
     
    ],
  },
]);
