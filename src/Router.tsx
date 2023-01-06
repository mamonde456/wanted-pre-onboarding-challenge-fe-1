import { createBrowserRouter } from "react-router-dom";
import ChangeTodos from "./components/ChangeTodos";
import Root from "./Root";
import Home from "./screen/Home";
import Login from "./screen/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
        children: [
          {
            path: ":id",
            element: <ChangeTodos />,
          },
        ],
      },
      {
        path: "auth",
        element: <Login />,
      },
    ],
  },
]);

export default router;
