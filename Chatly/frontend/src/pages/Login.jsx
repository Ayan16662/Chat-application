import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login");
  };

  return (
    <div className="w-full min-h-screen bg-slate-200 flex items-center justify-center p-3">

      {/* Card */}
      <div className="w-full max-w-[420px] bg-white rounded-2xl shadow-xl overflow-hidden">

        {/* Header */}
        <div className="w-full h-[100px] bg-[#20c7ff] rounded-b-[25%] flex items-center justify-center">

          <h1 className="text-gray-700 font-bold text-[24px]">
            Welcome to{" "}
            <span className="text-white">
              Chatly
            </span>
          </h1>

        </div>

        {/* Content */}
        <div className="px-6 py-5">

          <h2 className="text-xl font-bold text-gray-700 text-center">
            Login
          </h2>

          <p className="text-gray-400 text-xs text-center mt-1 mb-4">
            Welcome back! Please login to your account
          </p>

          {/* Form */}
          <form
            onSubmit={handleLogin}
            className="flex flex-col gap-3"
          >

            {/* Email */}
            <div>

              <label className="block text-xs font-medium text-gray-600 mb-1">
                Email
              </label>

              <input
                type="email"
                placeholder="Enter email"
                className="
                  w-full h-10
                  px-3
                  text-sm
                  border border-gray-300
                  rounded-lg
                  outline-none
                  focus:border-[#20c7ff]
                  focus:ring-1
                  focus:ring-[#20c7ff]/30
                "
              />

            </div>

            {/* Password */}
            <div>

              <label className="block text-xs font-medium text-gray-600 mb-1">
                Password
              </label>

              <input
                type="password"
                placeholder="Enter password"
                className="
                  w-full h-10
                  px-3
                  text-sm
                  border border-gray-300
                  rounded-lg
                  outline-none
                  focus:border-[#20c7ff]
                  focus:ring-1
                  focus:ring-[#20c7ff]/30
                "
              />

            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="
                w-full h-10
                bg-[#20c7ff]
                hover:bg-[#0bb5ed]
                text-white
                text-sm
                font-semibold
                rounded-lg
                transition
                cursor-pointer
              "
            >
              Login
            </button>

          </form>

          {/* Signup */}
          <p className="text-center text-gray-400 text-xs mt-4">

            Don't have an account?{" "}

            <span
              onClick={() => navigate("/signup")}
              className="
                text-[#20c7ff]
                font-semibold
                cursor-pointer
                hover:underline
              "
            >
              Create Account
            </span>

          </p>

        </div>
      </div>
    </div>
  );
};

export default Login;