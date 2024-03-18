"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
//import { signIn } from "next-auth/client";
//import { useRouter } from "next/router";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
//  const router = useRouter();

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false, // Disable redirecting since we want to handle it manually
    });

    if (result?.ok) {
      // Redirect the user to the "/" page
      router.push("/");
    }
  };

  return (
    <form onSubmit={onSubmit} className="space-y-8 w-72">
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="w-full">
        <Button className="w-full">Login</Button>
      </div>
    </form>
  );
};

export default LoginForm;
