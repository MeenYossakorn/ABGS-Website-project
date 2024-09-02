import React from "react";
import Menubar from "./Menubar";

const ManagerPage = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Menubar />
      <div className="flex-1 p-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-blue-600">USER REQUEST</h1>
          <div className="flex items-center space-x-2">
            <span className="text-gray-600">SOMRAK JAIDEE</span>
            <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
              <span className="text-xl">👤</span>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 h-[calc(100vh-12rem)]">
          {/* Content goes here */}
        </div>
        <div className="text-center text-sm text-gray-500 mt-4">
          Copyright © 2024 Automaticthai .CO All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default ManagerPage;
