import { createBrowserRouter } from "react-router-dom";
import HomePage from "../features/home/HomePage";
import App from "../layout/App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
    ],
  },
]);

export default router;
