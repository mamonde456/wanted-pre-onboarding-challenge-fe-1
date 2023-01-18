import { createBrowserRouter } from "react-router-dom";
import SignUp from "./components/auth/SignUp";
import ChangeTodos from "./components/toDo/ChangeTodos";

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
        children: [
          {
            path: "sign-up",
            element: <SignUp />,
          },
        ],
      },
    ],
  },
]);

export default router;
