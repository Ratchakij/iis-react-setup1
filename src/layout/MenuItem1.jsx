import { Link } from "react-router-dom";

export default function MenuItem1({ to, name, active }) {
  return (
    <li className="md:ml-8 text-xl md:my-0 my-7">
    <Link to={to}>
      <div className={`text-gray-800 hover:text-gray-400 duration-500 ${active ? "underline " : ""}`}>
        {name}
      </div>
    </Link>
    </li>
  );
}
