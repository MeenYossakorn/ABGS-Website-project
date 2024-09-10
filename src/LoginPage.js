// LoginPage component (แยกไฟล์)
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [keepSignedIn, setKeepSignedIn] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      // จำลองการเรียก API
      const response = await mockLoginAPI(username, password);
      if (response.success) {
        onLogin({ username, keepSignedIn });
        navigate("/");
      } else {
        setError("Login failed. Please check your credentials.");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
      console.error(err);
    }
  };

  // ฟังก์ชันจำลองการเรียก API
  const mockLoginAPI = (username, password) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ success: username === "test" && password === "test" });
      }, 1000);
    });
  };

  return (
    <div className="flex h-screen bg-gradient-to-r from-blue to-white w-full">
      {/* Left side */}
      <div className="w-3/5 flex items-center justify-center text-white p-12">
        <div>
          <h1 className="text-4xl text-center font-bold mb-4">WELCOME</h1>
          <p className="text-lg font-semibold text-center">
            " This is a platform for accessing the automatic barrier gate
            system. Please log in or register to access the automatic barrier
            gate. "
          </p>
        </div>
      </div>
      {/* Right side */}
      <div className="w-2/5 bg-white flex items-center justify-center rounded-2xl">
        <div className="w-5/6 max-w-md">
          <h2 className="text-2xl font-bold mb-3 text-center">LOGIN ACCOUNT</h2>
          <p className="mb-4">
            Please log in to gain access. If you don't have an account yet you
            can register below
          </p>
          {error && <p className="text-red mb-4">{error}</p>}
          <form onSubmit={handleSubmit}>
            <div className="block text-gray-700 text-xs font-semibold mb-2">
              Username
            </div>
            <input
              type="text"
              placeholder="USERNAME"
              className="w-full p-1 mb-1 bg-base-200 rounded-lg"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <div className="block text-gray-700 text-xs font-semibold mb-2">
              Password
            </div>
            <input
              type="password"
              placeholder="PASSWORD"
              className="w-full p-1 mb-1 bg-base-200 rounded-lg"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="flex justify-between items-center mb-6 text-sm">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="mr-2"
                  checked={keepSignedIn}
                  onChange={(e) => setKeepSignedIn(e.target.checked)}
                />
                <span>KEEP ME SIGNED IN</span>
              </label>
              <Link to="/forgot-password" className="text-black">
                FORGET YOUR PASSWORD
              </Link>
            </div>
            <div className="flex justify-center mt-4">
              <button
                type="submit"
                className="bg-blue hover:bg-blue text-white font-bold py-2 px-12 rounded-xl focus:outline-none focus:shadow-outline transition duration-300 ease-in-out transform hover:scale-105"
              >
                LOGIN
              </button>
            </div>
          </form>
          <p className="mt-6 text-center font-semibold text-sm">
            DON'T HAVE AN ACCOUNT
            <Link
              to="/registerpage"
              className="font-semibold text-blue ml-1 underline"
            >
              SIGN UP
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
