import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Navbar1 from "./Navbar1";

export default function Container() {
  return (
    <>
      {/* <Navbar /> */}
      <Navbar1 />
      <Outlet />
    </>
  );
}
