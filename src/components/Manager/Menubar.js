import React from "react";
import mailIcon from "../Manager/Images/mail.png";
import AddressBook from "../Manager/Images/address-book.png";
import AngleSmall from "../Manager/Images/angle-small-right.png";
import TruckSide from "../Manager/Images/truck-side.png";
import CarLogo from "../Manager/Images/Car-brg.png";

const Menubar = () => {
  return (
    <div className="h-screen w-56 bg-gradient-to-t from-[#DAE5FF] via-[#DAE5FF] via-5% to-[#5F8BF1] to-25% p-5 rounded-r-2xl">
      <div className="flex flex-col items-center space-y-2 mb-2">
        <div className="p-2 rounded-full">
          <img src={CarLogo} alt="Email Icon" width={100} height={100} />
        </div>
        <p className="text-lg font-bold text-white">ABGS ADMIN</p>
      </div>

      <div className="border-b border-white"></div>
      <ul>
        <li className="flex items-center space-x-2 p-2  rounded">
          <span className="text-white text-sm">User Data Management</span>
        </li>
        <li className="flex items-center space-x-2 p-2 hover:bg-blue rounded">
          <img src={mailIcon} alt="Email Icon" width={24} height={24} />
          <span className="text-white text-xs">User Requests</span>
          <img
            src={AngleSmall}
            alt="Expand Icon"
            width={24}
            height={24}
            className="ml-auto"
          />
        </li>

        <li className="flex items-center space-x-2 p-2 hover:bg-blue rounded mb-2">
          <img
            src={AddressBook}
            alt="Address Book Icon"
            width={24}
            height={24}
          />
          <span className="text-white text-xs ">User Information</span>
          <img
            src={AngleSmall}
            alt="Expand Icon"
            width={24}
            height={24}
            className="ml-auto"
          />
        </li>
        <div className="border-b border-white mb-2"></div>
        <li className="flex items-center space-x-2 p-2  rounded">
          <span className="text-white text-sm">Vehicle Data Management</span>
        </li>
        <li className="flex items-center space-x-2 p-2 hover:bg-blue rounded">
          <img src={mailIcon} alt="Mail Icon" width={24} height={24} />
          <span className="text-white text-xs">
            Vehicle Registration Information
          </span>
          <img
            src={AngleSmall}
            alt="Expand Icon"
            width={24}
            height={24}
            className="ml-auto"
          />
        </li>
        <li className="flex items-center space-x-2 p-2 hover:bg-blue rounded">
          <img src={TruckSide} alt="Truck Icon" width={24} height={24} />
          <span className="text-white text-xs">Vehicle Information</span>
          <img
            src={AngleSmall}
            alt="Expand Icon"
            width={24}
            height={24}
            className="ml-auto"
          />
        </li>
      </ul>
    </div>
  );
};

export default Menubar;
