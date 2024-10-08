import React, { useState } from "react";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    telephone: "",
    username: "",
    password: "",
  });
  const [keepSignedIn, setKeepSignedIn] = useState(false);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted", formData, keepSignedIn);
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-r from-blue to-white w-full">
      {/* Left Section */}
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

      {/* Right Section */}
      <div className="w-2/5 bg-white flex items-center justify-center rounded-l-2xl">
        <div className="w-6/6 max-w-sm">
          <h2 className="text-2xl font-bold mb-3 text-center">SIGN UP</h2>
          <form className="w-full max-w-md" onSubmit={handleSubmit}>
            {Object.entries(formData).map(([key, value]) => (
              <div className="mb-1" key={key}>
                <label
                  className="block text-gray-700 text-xs font-semibold mb-2"
                  htmlFor={key}
                >
                  {key.toUpperCase()}
                </label>
                <input
                  className="w-full p-1 mb-1 bg-base-200 rounded-lg"
                  id={key}
                  type={
                    key === "password"
                      ? "password"
                      : key === "email"
                      ? "email"
                      : "text"
                  }
                  placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
                  value={value}
                  onChange={handleInputChange}
                />
              </div>
            ))}

            <div className="mt-3 text-center text-xs">
              <label className="flex items-center justify-center">
                <input
                  type="checkbox"
                  className="mr-2"
                  checked={keepSignedIn}
                  onChange={(e) => setKeepSignedIn(e.target.checked)}
                />
                <span className="font-semibold">
                  BY SIGNING UP I AGREE WITH{" "}
                  <span className="font-semibold text-blue underline">
                    TERMS & CONDITIONS
                  </span>
                </span>
              </label>
            </div>

            <div className="flex items-center justify-center mt-2 ">
              <button
                className="bg-blue hover:bg-blue-600 text-white font-bold py-2 px-12 rounded-xl focus:outline-none focus:shadow-outline transition duration-300 ease-in-out transform hover:scale-105"
                type="submit"
              >
                SIGN UP
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
