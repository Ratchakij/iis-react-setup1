import { useState } from "react";
import LoginInput from "./LoginInput";
// import { useAuth } from "../../hooks/use-auth";

export default function LoginForm() {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  //   const { login } = useAuth();

  const handleSubmitForm = (e) => {
    e.preventDefault();
  };

  return (
    <form
      className="max-w-[400px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg"
      onSubmit={handleSubmitForm}
    >
      <h2 className="text-4xl dark:text-white font-bold text-center">LOGIN</h2>

      <div className="flex flex-col text-gray-400 py-2">
        <h3>User Name</h3>
        <LoginInput
          value={input.email}
          onChange={(e) => setInput({ ...input, email: e.target.value })}
        />
      </div>

      <div className="flex flex-col text-gray-400 py-2">
        <h3>Password</h3>
        <LoginInput
          type="password"
          value={input.password}
          onChange={(e) => setInput({ ...input, password: e.target.value })}
        />
      </div>

      {/* <div className="flex justify-between text-gray-400 py-2">
        <p className="flex items-center">
          <input className="mr-2" type="checkbox" /> Remember Me
        </p>
        <p>Forgot Password</p>
      </div> */}

      <button className="w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg">
        Sign in
      </button>
    </form>
  );
}
