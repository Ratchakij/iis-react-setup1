import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "../layout/Layout";

const router = createBrowserRouter([
  //   {
  //     path: "/login",
  //     element: (
  //       <RedirectIfAuthenticate>
  //         <LoginPage />
  //       </RedirectIfAuthenticate>
  //     ),
  //   },
  {
    path: "/",
    element: (
      //   <Authenticated>
      <Layout />
      //   </Authenticated>
    ),
    children: [{ path: "/", element: <h1>Commission</h1> }],
  },
]);

export default function Route() {
  return <RouterProvider router={router} />;
}
