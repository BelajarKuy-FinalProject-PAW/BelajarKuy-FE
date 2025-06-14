"use client";

import React from "react";
import Input from "@/app/components/input/input";
import Image from "next/image";
import LoginImg from "@/app/assets/LoginImg.png";
import Button from "@/app/components/button/button";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Validasi sederhana
    if (email && password) {
      // Simpan data user di localStorage
      const user = { name: email.split("@")[0], email };
      localStorage.setItem("user", JSON.stringify(user));

      // Redirect ke halaman utama
      router.push("/pages/home");
    } else {
      setError("Email dan password harus diisi");
    }
  };

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between p-4 sm:p-5 md:p-6 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-56 border-b border-gray-200">
        <a href="/pages/home">
          <h1 className="text-xl sm:text-2xl font-bold">BelajarKuy</h1>
        </a>
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 items-end sm:items-center">
          <a href="/pages/register" className="hidden sm:block">
            <button className="text-gray-400 text-sm sm:text-base">
              Don't have account?
            </button>
          </a>
          <a href="/pages/register">
            <button className="px-3 py-1.5 sm:px-4 sm:py-2 bg-orange-100 text-orange-600 rounded text-sm sm:text-base whitespace-nowrap">
              Create Account
            </button>
          </a>
        </div>
      </div>

      {/* Login Page */}
      <div className="flex items-center justify-center h-screen">
        <div className="w-1/2 h-screen">
          <Image
            src={LoginImg}
            alt="Login Image"
            width={800}
            height={800}
            className=""
          />
        </div>

        <div className="flex-col w-1/2">
          <div className="flex items-center justify-center mb-10 w-[70%]">
            <h1 className="text-4xl font-bold">Sign in to your account</h1>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="w-[70%]">
              <Input
                label="Email"
                type="email"
                placeholder="Username or email address..."
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="w-[70%]">
              <Input
                label="Password"
                type="password"
                placeholder="Password"
                showPasswordToggle
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {error && (
              <div className="w-[70%] mt-2">
                <p className="text-red-500">{error}</p>
              </div>
            )}

            <div className="flex justify-between w-[70%] items-center ">
              <label className="flex gap-2 text-gray-500">
                <input type="checkbox" name="agree" />
                Remember me
              </label>
              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="mt-4"
              >
                Sign In
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
