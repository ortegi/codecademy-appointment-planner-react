import { createBrowserRouter } from "react-router-dom";
import Appointments from "../pages/Appointments";
import Contacts from "../pages/Contacts";
import NotFound from "../pages/NotFound";
import LayOutPub from "../layout/LayOutPub";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayOutPub />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Contacts />,
      },
      {
        path: "/app",
        element: <Appointments />,
      },
    ],
  },
]);
