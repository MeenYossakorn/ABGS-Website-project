import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Footer from "../Footer/Footer";

const RegisterCar = () => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    province: "",
    brand: "",
    color: "",
    licensePlate: "",
    driverLicense: "",
    role: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <>
      <Navbar />
      <div className="max-w-xl mx-auto p-8 bg-white ">
        <h1 className="text-3xl font-bold text-center mb-6">REGISTER</h1>

        <div className="grid grid-cols-2 gap-4 mb-8 ">
          <div>
            <label className="block text-sm font-medium text-gray-700 ">
              NAME
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent "
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              SURNAME
            </label>
            <input
              type="text"
              name="surname"
              value={formData.surname}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 bg-base-200  text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent "
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              PROVINCE
            </label>
            <input
              type="text"
              name="province"
              value={formData.province}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 bg-base-200  text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent "
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              BRAND
            </label>
            <input
              type="text"
              name="brand"
              value={formData.brand}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 bg-base-200  text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              COLOR
            </label>
            <input
              type="text"
              name="color"
              value={formData.color}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              LICENSE PLATE
            </label>
            <input
              type="text"
              name="licensePlate"
              value={formData.licensePlate}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent "
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              DRIVER LICENSE
            </label>
            <input
              type="text"
              name="driverLicense"
              value={formData.driverLicense}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2  text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent "
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              ROLE
            </label>
            <input
              type="text"
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2  text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent "
            />
          </div>
        </div>

        <div className="flex justify-center ">
          <Link
            to="/"
            className="bg-blue hover:bg-blue text-white font-bold py-2 px-12 rounded-xl focus:outline-none focus:shadow-outline transition duration-300 ease-in-out transform hover:scale-105"
          >
            CONFIRM
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RegisterCar;
