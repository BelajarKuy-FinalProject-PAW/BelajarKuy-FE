import React from "react";
import Input from "@/app/components/input/input";
import Image from "next/image";
import LoginImg from "@/app/assets/LoginImg.png";
import Button from "@/app/components/button/button";

const LoginPage = () => {
  return (
    <div>
      {/* Header */}
      <div className="flex items-center px-56 justify-between p-6 border-b border-gray-200">
        <a href="/pages/home"><h1 className="text-2xl font-bold">BelajarKuy</h1></a> 
        <div className="flex space-x-4 items-center">
          <a href="/pages/register"><button className="text-gray-400">Don't have account?</button></a>
          <a href="/pages/register"><button className="px-4 py-2 bg-orange-100 text-orange-600 rounded">
            Create Account
          </button></a>
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
          <div className="w-[70%]">
            <Input
              label="Email"
              type="email"
              placeholder="Username or email address..."
              required
            />
          </div>
          <div className="w-[70%]">
            <Input
              label="Password"
              type="password"
              placeholder="Password"
              showPasswordToggle
              required
            />
          </div>

          <div className="flex justify-between w-[70%] items-center "> 
            <label className="flex gap-2 text-gray-500">
              <input type="checkbox" name="agree" />
              Remember me
            </label>
           <Button type="submit" variant="primary" size="lg" className="mt-4">
            Sign In
          </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
