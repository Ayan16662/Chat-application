import React from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const handleGoogleAuth = () => {
    console.log("Google Auth");
  };

  const handleSignup = (e) => {
    e.preventDefault();
    console.log("Create Account");
  };

  return (
    <div className="w-full min-h-screen bg-slate-200 flex items-center justify-center p-3">

      {/* Card */}
      <div className="w-full max-w-[420px] bg-white rounded-2xl shadow-xl overflow-hidden">

        {/* Header */}
        <div className="w-full h-[100px] bg-[#20c7ff] rounded-b-[25%] flex items-center justify-center">
          <h1 className="text-gray-700 font-bold text-[24px]">
            Welcome to{" "}
            <span className="text-white">Chatly</span>
          </h1>
        </div>

        {/* Content */}
        <div className="px-6 py-5">

          {/* Title */}
          <h2 className="text-xl font-bold text-gray-700 text-center">
            Create Account
          </h2>

          <p className="text-gray-400 text-xs text-center mt-1 mb-4">
            Join Chatly and start chatting
          </p>

          {/* Form */}
          <form
            onSubmit={handleSignup}
            className="flex flex-col gap-3"
          >

            {/* Username */}
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">
                Username
              </label>

              <input
                type="text"
                placeholder="Enter username"
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

            {/* Create Account */}
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
              Create Account
            </button>

          </form>

          {/* OR */}
          <div className="flex items-center gap-2 my-4">

            <div className="h-px bg-gray-300 flex-1"></div>

            <span className="text-gray-400 text-xs">
              OR
            </span>

            <div className="h-px bg-gray-300 flex-1"></div>

          </div>

          {/* Google */}
          <button
            type="button"
            onClick={handleGoogleAuth}
            className="
              w-full h-10
              border border-gray-300
              rounded-lg
              flex items-center justify-center
              gap-2
              hover:bg-gray-50
              transition
              cursor-pointer
            "
          >

            {/* Google Icon */}
            <svg
              width="18"
              height="18"
              viewBox="0 0 48 48"
            >
              <path
                fill="#FFC107"
                d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.1 8.1 3l5.7-5.7C34.6 6.5 29.6 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.3-.4-3.5z"
              />

              <path
                fill="#FF3D00"
                d="M6.3 14.7l6.6 4.8C14.7 16.1 19 12 24 12c3.1 0 5.9 1.1 8.1 3l5.7-5.7C34.6 6.5 29.6 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"
              />

              <path
                fill="#4CAF50"
                d="M24 44c5.5 0 10.4-1.8 13.9-4.9l-6.4-5.2C29.9 35.5 27.1 36 24 36c-5.2 0-9.6-3.3-11.3-7.9l-6.6 5.1C9.4 39.3 16.2 44 24 44z"
              />

              <path
                fill="#1976D2"
                d="M43.6 20.5H42V20H24v8h11.3c-1.1 3.2-3.9 5.5-7.3 6.9l6.4 5.2C38.1 36.8 44 31.1 44 24c0-1.3-.1-2.3-.4-3.5z"
              />
            </svg>

            <span className="text-sm font-medium text-gray-700">
              Continue with Google
            </span>

          </button>

          {/* Login */}
          <p className="text-center text-gray-400 text-xs mt-4">

            Already have an account?{" "}

            <span
              onClick={() => navigate("/login")}
              className="
                text-[#20c7ff]
                font-semibold
                cursor-pointer
                hover:underline
              "
            >
              Login
            </span>

          </p>

        </div>
      </div>
    </div>
  );
};

export default Signup;