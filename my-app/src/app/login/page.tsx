import React from "react";
import Link from "next/link";
import LoginForm from "@/app/login/form";
const LoginPage = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-slate-100">
      <div className="shadow-xl p-4 bg-white rounded-xl">
        <h1 className="font-semibold text-2xl mb-4">Login</h1>
        <LoginForm />
        <p className="text-center">
          Need an Account?{" "}
          <Link className="text-indigo-500 hover:underline" href="/registration">
            Create Account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
