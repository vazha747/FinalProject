"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert } from "@/components/ui/alert";
const RegisterForm = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null)

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        body: JSON.stringify({
           email, password
          }),
        headers: { 
          "Content-Type": "application/json" 
        },
      });
      if (res.ok) {
        signIn('credentials', {
          email,
          password,
        });
      }
    } catch (error: any) {
      setError(error?.message);
    }

    console.log("REGISTER");
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
      {error && <Alert>{error}</Alert>}
      <div className="w-full">
        <Button className="w-full">Register</Button>
      </div>
    </form>
  );
};

export default RegisterForm;