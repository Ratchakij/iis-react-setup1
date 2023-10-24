import { useState } from "react";
import Swal from "sweetalert2";

import { useAuth } from "../../../hooks/use-auth";

import LoginInput from "./LoginInput";

import validateLogin from "../../../validate/validate-login";
import InputErrorMessage from "../../../components/InputErrorMessage";

export default function LoginForm() {
  const [input, setInput] = useState({ email: "", password: "" });
  const [error, setError] = useState({});

  const { login } = useAuth();

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const invalidInput = validateLogin(input);
    if (invalidInput) return setError(invalidInput);

    setError({});

    login(input).catch((err) => {
      Swal.fire({
        icon: "error",
        title: "Error...",
        text: err.response.data.message,
        footer: '<a href="">Why do I have this issue?</a>',
      });
    });
  };

  return (
    <div className="bg-slate-800 border border-slate-600 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative">
      <h1 className="text-4xl text-white font-bold text-center mb-6">
        BACK OFFICE
      </h1>
      <form onSubmit={handleSubmitForm}>
        <div className="relative my-4">
          <LoginInput
            value={input.email}
            onChange={(e) => setInput({ ...input, email: e.target.value })}
          />
          <div className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Username
          </div>
          <InputErrorMessage message={error.email} />
          <div className="absolute top-4 right-4">
            <ion-icon name="person-circle-outline"></ion-icon>
          </div>
        </div>

        <div className="relative my-4">
          <LoginInput
            type="password"
            value={input.password}
            onChange={(e) => setInput({ ...input, password: e.target.value })}
          />
          <div className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Password
          </div>
          <InputErrorMessage message={error.password} />
          <div className="absolute top-4 right-4">
            <ion-icon name="lock-open-outline"></ion-icon>
          </div>
        </div>

        {/* <div className="flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <input type="checkbox" />
            <p>Remember Me</p>
          </div>
          <Link to="" className="text-blue-500">
            Forgot Password
          </Link>
        </div> */}

        <button className="w-full mb-4 text-[18px] mt-6 rounded-full bg-white text-emerald-800 hover:bg-emerald-600 hover:text-white py-2 transition-colors duration-300">
          Login
        </button>
        {/* <div>
          <span className="m-4">
            New Here?{" "}
            <Link className="text-blue-500" to="/register">
              Create an Account
            </Link>
          </span>
        </div> */}
      </form>
    </div>
  );
}
