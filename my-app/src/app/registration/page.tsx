import React from "react";
import Link from "next/link";
import RegisterForm from "@/app/registration/form";
const RegisterPage = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-slate-100">
      <div className="shadow-xl p-4 bg-white rounded-xl">
        <h1 className="font-semibold text-2xl mb-4">Create your Account</h1>
        <RegisterForm />
        <p className="text-center">
          Have an Account?{" "}
          <Link className="text-indigo-500 hover:underline" href="/login">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
