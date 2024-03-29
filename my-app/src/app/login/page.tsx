import React from "react";
import Link from "next/link";
import LoginForm from "@/app/login/form";
const LoginPage = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-slate-100">
      <div className="shadow-xl p-4 bg-white rounded-xl">
        <h1 className="font-semibold text-2xl mb-4">Login</h1>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
