import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUserData } from "../redux/userSlice";

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGoogleAuth = () => {
    console.log("Google Auth");
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    setLoading(true);
    setErr("");

    try {
      const result = await axios.post(
        "http://localhost:5000/api/auth/signup",
        {
          username,
          email,
          password,
        },
        {
          withCredentials: true,
        }
      );

      console.log("Signup response:", result.data);

      if (result.data.success) {
        // Save user data in Redux
        dispatch(setUserData(result.data.user));

        // Clear form
        setUsername("");
        setEmail("");
        setPassword("");

        // Go to login
        navigate("/login");
      }
    } catch (error) {
      console.log("Signup Error:", error);

      setErr(
        error.response?.data?.message ||
          "Signup failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full min-h-screen bg-slate-200 flex items-center justify-center p-3">

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

          <h2 className="text-xl font-bold text-gray-700 text-center">
            Create Account
          </h2>

          <p className="text-gray-400 text-xs text-center mt-1 mb-4">
            Join Chatly and start chatting
          </p>

          {/* Error */}
          {err && (
            <div className="mb-3 p-2 bg-red-100 border border-red-200 rounded-lg">
              <p className="text-red-500 text-xs text-center">
                {err}
              </p>
            </div>
          )}

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
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter username"
                required
                className="w-full h-10 px-3 text-sm border border-gray-300 rounded-lg outline-none focus:border-[#20c7ff] focus:ring-1 focus:ring-[#20c7ff]/30"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">
                Email
              </label>

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email"
                required
                className="w-full h-10 px-3 text-sm border border-gray-300 rounded-lg outline-none focus:border-[#20c7ff] focus:ring-1 focus:ring-[#20c7ff]/30"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">
                Password
              </label>

              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                required
                className="w-full h-10 px-3 text-sm border border-gray-300 rounded-lg outline-none focus:border-[#20c7ff] focus:ring-1 focus:ring-[#20c7ff]/30"
              />
            </div>

            {/* Signup Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full h-10 bg-[#20c7ff] hover:bg-[#0bb5ed] disabled:bg-gray-400 text-white text-sm font-semibold rounded-lg transition cursor-pointer"
            >
              {loading ? "Creating Account..." : "Create Account"}
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
            className="w-full h-10 border border-gray-300 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-50 transition cursor-pointer"
          >
            <span className="text-sm font-medium text-gray-700">
              Continue with Google
            </span>
          </button>

          {/* Login */}
          <p className="text-center text-gray-400 text-xs mt-4">
            Already have an account?{" "}

            <span
              onClick={() => navigate("/login")}
              className="text-[#20c7ff] font-semibold cursor-pointer hover:underline"
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