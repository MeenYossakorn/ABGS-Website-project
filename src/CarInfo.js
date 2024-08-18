import React from "react";
import { Link } from "react-router-dom";

const CarInfo = () => {
  const cars = [
    {
      date: "9/2/2566",
      licensePlate: "นต789",
      province: "BANGKOK",
      brand: "Tesla",
      color: "GRAY",
      recognition: "9/2/2567",
    },
    {
      date: "11/6/2567",
      licensePlate: "นข1989",
      province: "BANGKOK",
      brand: "PORCHE",
      color: "RED",
      recognition: "11/6/2568",
    },
    {
      date: "9/2/2566",
      licensePlate: "นต789",
      province: "BANGKOK",
      brand: "Tesla",
      color: "GRAY",
      recognition: "9/2/2567",
    },
   
  ];

  return (
    <div className="max-w-full mx-auto p-12">
      <h1 className="text-3xl font-bold text-center mb-8">MY CAR</h1>
      {cars.map((car, index) => (
        <div
          key={index}
          className="bg-gray-300 rounded-xl shadow-xl p-6 mb-4 text-center w-full h-auto mx-auto"
        >
          <table className="table-fixed w-full">
            <thead className="w-full text-md font-semibold items-center">
              <tr>
                <th className="px-2 whitespace-nowrap text-center">DATE</th>
                <th className="px-2 whitespace-nowrap text-center">
                  LICENSE PLATE
                </th>
                <th className="px-2 whitespace-nowrap text-center">PROVINCE</th>
                <th className="px-2 whitespace-nowrap text-center">BRAND</th>
                <th className="px-2 whitespace-nowrap text-center">COLOR</th>
                <th className="px-2 whitespace-nowrap text-center">
                  PLATE RECOGNITION
                </th>
              </tr>
            </thead>

            <tbody>
              <tr className="space-x-4">
                <td className="px-2 text-center">{car.date}</td>
                <td className="px-2 text-center">{car.licensePlate}</td>
                <td className="px-2 text-center">{car.province}</td>
                <td className="px-2 text-center">{car.brand}</td>
                <td className="px-2 text-center">{car.color}</td>
                <td className="px-2 text-center">{car.recognition}</td>
              </tr>
            </tbody>
          </table>
        </div>
      ))}
      <div className="flex justify-center p-4">
        <Link
          to="/"
          className="bg-blue hover:bg-blue text-white font-bold py-2 px-12 rounded-xl focus:outline-none focus:shadow-outline transition duration-300 ease-in-out transform hover:scale-105"
        >
          CONFIRM
        </Link>
      </div>
    </div>
  );
};

export default CarInfo;
