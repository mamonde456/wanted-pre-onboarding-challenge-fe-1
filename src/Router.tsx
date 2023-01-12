import { createBrowserRouter } from "react-router-dom";
import ChangeTodos from "./components/ChangeTodos";
import SignUp from "./components/SignUp";
import Root from "./Root";
import Home from "./screen/Home";
import SignIn from "./screen/SignIn";

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
        element: <SignIn />,
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
