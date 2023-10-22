import { useLocation } from "react-router-dom";

import MenuItem from "./MenuItem";
// import useAuth from "../hooks/useAuth";

const menus = [
  { id: 1, to: "/", name: "Dashboard" },
  { id: 2, to: "/agent", name: "Agent" },
  { id: 3, to: "/product", name: "Product" },
  { id: 4, to: "/create", name: "Create" },
  { id: 5, to: "/config", name: "Config" },
  { id: 6, to: "/admin", name: "Admin" },
];

export default function Navbar() {
  const location = useLocation();
  //   const { logout } = useAuth();

  return (
    <>
      <nav className="flex items-center justify-center flex-wrap bg-gray-800 p-4">
        <div className="flex items-center justify-between w-11/12">
          {/* LOGO */}
          <div className="mr-10 flex items-center text-white">
            <span className="font-semibold text-xl ">ARK Insure Broker</span>
          </div>

          <div className="text-base text-white lg:flex-grow">
            {menus.map((el) => (
              <MenuItem
                key={el.id}
                // to={el.to}
                to="/"
                name={el.name}
                active={location.pathname === el.to}
              />
            ))}
          </div>
          <button
            className="inline-block px-4 py-2 leading-none  text-white hover:text-teal-200 mt-4 lg:mt-0"
            // onClick={logout}
          >
            Sign out
          </button>
        </div>
      </nav>
    </>
  );
}
