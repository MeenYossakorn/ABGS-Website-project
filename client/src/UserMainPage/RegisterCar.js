import React, { useState, useEffect } from "react";
import {useNavigate} from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import axios from "axios";
import useAuth from "../Auth";

const RegisterCar = () => {
  const {user}= useAuth()
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    province: "",
    brand: "",
    color: "",
    licensePlate: "",
    driverLicense: "",
    role: "",
    userId:"",
  });

  const [error, setError] = useState("");
  
  const navigate = useNavigate();

  const isFormEmpty = () => {
    return Object.values(formData).some((value) => value === "");
  };

  useEffect(() => {
    if (user) {
      setFormData(prevFormData => ({
        ...prevFormData,
        userId: user.uid, // เพิ่ม user.uid ลงใน formData
      }));
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isFormEmpty()) {
        throw new Error("please fill in all fields.");
      }
      

      console.log(formData)
      console.log(user.uid)
      
      const response = await axios.post("/users/signInCar" , {formData});
      if(response.data.status === 'success'){
        navigate("/")
      }
      else{
        throw new Error("Please re-check your fields.")
      }


    } catch (err) {
      setError(err.message);
      console.error(err.message);
    }
  };

  return (
    <>
      <Navbar />
      <div className="max-w-xl mx-auto p-8 bg-white ">
        <h1 className="text-3xl font-bold text-center mb-6">REGISTER</h1>
        {error && <p className="text-red mb-4 ">{error}</p>}
        <form className="w-full max-w-md" onSubmit={handleSubmit}>
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
            <button
              type="submit"
              className="bg-blue hover:bg-blue text-white font-bold py-2 px-12 rounded-xl focus:outline-none focus:shadow-outline transition duration-300 ease-in-out transform hover:scale-105"
            >
              CONFIRM
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default RegisterCar;
