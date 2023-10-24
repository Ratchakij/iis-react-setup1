import React from "react";

import LoginImg from "../assets/Login2.jpg";

import LoginForm1 from "../features/login/style1/LoginForm";
import LoginForm2 from "../features/login/style2/LoginForm";

export default function LoginPage() {
  return (
    // STYLE 1
    // <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
    //   <div className="bg-gray-800 flex flex-col justify-center">
    //     <LoginForm1 />
    //   </div>
    //   <div className="hidden sm:block">
    //     <img className="w-full h-full object-cover" src={LoginImg} alt="" />
    //   </div>
    // </div>

    // STYLE 2
    // <div className="text-white h-[100vh] flex justify-center items-center bg-[url('../src/assets/Login5.jpg')] bg-cover">
    <div className="min-h-screen max-h-screen flex justify-center items-center bg-[url('../src/assets/Login5.jpg')] bg-cover bg-center bg-no-repeat text-white">
      <LoginForm2 />
    </div>
  );
}
// bg-[url('/img/hero-pattern.svg')]
