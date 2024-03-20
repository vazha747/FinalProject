"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault()
    // Check hardcoded credentials
    if (
      (username === "jumbera@gmail.com" && password === "tyabladzeli") ||
      (username === "admin@gmail.com" && password === "password")
    ) {
      //    sessionStorage.setItem("token" , dummyToken);
      router.push("/mainpage");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <form className="space-y-8 w-72" onSubmit={handleLogin}>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
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
        <Button onClick={handleLogin} className="w-full">
          Login
        </Button>
        {error && <p className="text-red-400">{error}</p>}
      </div>
    </form>
  );
};

export default LoginForm;
