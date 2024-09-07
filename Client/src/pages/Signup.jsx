// src/components/SignUp.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth, googleAuthProvider } from "../firebase";
import { signInWithPopup, createUserWithEmailAndPassword } from "firebase/auth";
import GoogleIcon from "../assets/Svg/GoogleIcon"; // Adjust the import path if necessary
import { FaEye, FaEyeSlash } from "react-icons/fa";
import FacebookIcon from "../assets/Svg/FacebookIcon";

const SignUp = ({ isOpen, onClose, onLoginOpen }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!name) {
      newErrors.name = "Name is required";
    }

    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid";
    }

    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        console.log("User signed up");
      } catch (error) {
        console.error("Error signing up:", error.message);
      }
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleAuthProvider);
      console.log("User signed in with Google");
    } catch (error) {
      console.error("Error signing in with Google:", error.message);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="fixed inset-0 bg-black opacity-40"
        onClick={onClose}
      ></div>
      <div className="relative bg-white p-8 rounded-lg shadow-lg w-[25rem] z-50">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>
        <div className="mb-4">
          <button
            onClick={handleGoogleSignIn}
            className="w-full bg-[#060640] text-white font-bold py-2 px-4 rounded-lg hover:opacity-80 flex items-center justify-center mb-2"
          >
            <GoogleIcon />
            Sign up with Google
          </button>
          <button className="w-full bg-[#060640] text-white font-bold py-2 px-4 rounded-lg hover:opacity-80 flex items-center justify-center">
            <FacebookIcon />
            Log in with Facebook
          </button>
        </div>
        <div className="relative flex items-center justify-center mb-4">
          <span className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-gray-300"></span>
          </span>
          <span className="relative bg-white px-4 text-gray-500">or</span>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              className="mt-1 p-2 block w-full bg-white border border-gray-300 rounded-md shadow-sm focus:border-[#FADED9] sm:text-sm"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              className="mt-1 p-2 block w-full bg-white border border-gray-300 rounded-md shadow-sm focus:border-[#FADED9] sm:text-sm"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>
          <div className="mb-4 relative">
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              className="mt-1 p-2 block w-full bg-white border border-gray-300 rounded-md shadow-sm focus:border-[#FADED9] sm:text-sm"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span
              className="absolute right-2 top-9 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">{errors.password}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-[#060640] text-white font-bold py-2 px-4 rounded-lg hover:bg-opacity-80"
          >
            Sign Up
          </button>
        </form>
        <div className="flex justify-between items-center mt-4">
          <Link to="#" className="text-sm text-gray-500 hover:underline">
            Forgot password?
          </Link>
          <Link
            to="#"
            className="text-sm text-gray-500 hover:underline"
            onClick={() => {
              onClose();
              onLoginOpen();
            }}
          >
            Have an account? Log in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
