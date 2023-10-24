import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Authenticated from "../features/auth/Authenticated";
import RedirectIfAuthenticated from "../features/auth/RedirectIfAuthenticated";

import Layout from "../layout/Layout";
import LoginPage from "../pages/LoginPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Authenticated>
        <Layout />
      </Authenticated>
    ),
    children: [{ path: "/", element: <h1>Commission</h1> }],
  },
  {
    path: "/login",
    element: (
      <RedirectIfAuthenticated>
        <LoginPage />
      </RedirectIfAuthenticated>
    ),
  },
]);

export default function Route() {
  return <RouterProvider router={router} />;
}
