import { useState } from "react";
import { useLocation } from "react-router-dom";

import MenuItem1 from "./MenuItem1";
import { useAuth } from "../hooks/use-auth";

// const Button = (props) => {
//   return (
//     <button
//       className="bg-indigo-600 text-white font-[Poppins] py-2 px-6 rounded md:ml-8 hover:bg-indigo-400 duration-500"
//       onClick={logout}
//     >
//       {props.children}
//     </button>
//   );
// };

export default function Navbar1() {
  const location = useLocation();
  const { logout } = useAuth();

  const Links = [
    { link: "/", name: "DASHBOARD" },
    { link: "/agent", name: "AGENT" },
    { link: "/product", name: "PRODUCT" },
    { link: "/create", name: "CREATE" },
    { link: "/config", name: "CONFIG" },
    { link: "/admin", name: "ADMIN" },
  ];

  const [open, setOpen] = useState(false);
  return (
    <div className="shadow-md w-full fixed top-0 left-0">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800">
          <span className="text-3xl text-indigo-600 mr-1 pt-2">
            <ion-icon name="logo-ionic"></ion-icon>
          </span>
          ARK Insure Broker
        </div>

        {/* HAMBURGER MENU */}
        <div
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
          onClick={() => setOpen(!open)}
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open
              ? "top-20 opacity-100"
              : "top-[-490px] md:opacity-100 opacity-0"
          }`}
        >
          {Links.map((link) => (
            <MenuItem1
              key={link.name}
              // to={link.link}
              to="/"
              name={link.name}
              active={location.pathname === link.link}
            />
          ))}
          <div className="md:hidden">Logout</div>
        </ul>

        {/* Hide elements on small screen */}
        <div className="text-gray-800 hover:text-gray-400 duration-500 hidden md:block">
          Logout
        </div>
      </div>
    </div>
  );
}
