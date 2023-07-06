import { createBrowserRouter } from "react-router-dom";
import { Route } from "./routes";
import { Home } from "../pages/Home";
import { UserDetails } from "../pages/UserDetail";

export const router = createBrowserRouter([
  {
    path: Route.Default,
    element: <Home />,
  },
  {
    path: Route.UserDetails,
    element: <UserDetails />,
  },
]);
