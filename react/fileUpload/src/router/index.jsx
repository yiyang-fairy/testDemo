import { createBrowserRouter } from "react-router-dom";
import Home from "../views/Home";

const router = createBrowserRouter([
  {
    path: "/home",
    element: <Home />,
  },
]);

export default router;
