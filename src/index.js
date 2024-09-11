//react router dom
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
//page components
import LoginPage from "./LoginPage/LoginPage";
import Main from "./Main";
import RegisterPage from "./LoginPage/RegisterPage";
import Profile from "./UserMainPage/Profile";
import CarInfo from "./UserMainPage/CarInfo";
import RegisterCar from "./UserMainPage/RegisterCar";
import Report from "./Report";
import UserInformationPage from "./ManagerMainPage/UserInformationPage";
import UserRequestPage from "./ManagerMainPage/UserRequestPage";
import VehicleInformation from "./ManagerMainPage/VehicleInformationPage";
import VehicleRegistrationInformation from "./ManagerMainPage/VehicleRegistrationInformationPage";
import Home from "./Home";

const router = createBrowserRouter([
  {
    path: "*",
    element: <LoginPage />,
  },
  {
    path: "/",
    element: <Main/>,
  },
  {
    path: "/registerpage",
    element: <RegisterPage />,
  },
  {
    path: "/loginpage",
    element: <LoginPage />,
  },
  {
    path: "/Profile",
    element: <Profile />,
  },
  {
    path: "/CarInfo",
    element: <CarInfo />,
  },
  {
    path: "/RegisterCar",
    element: <RegisterCar />,
  },
  {
    path: "/Report",
    element: <Report />,
  },
  {
    path: "/UserInformationPage",
    element: <UserInformationPage />,
  },
  {
    path: "/UserRequestPage",
    element: <UserRequestPage />,
  },
  {
    path: "/VehicleInformationPage",
    element: <VehicleInformation />,
  },
  {
    path: "/VehicleRegistrationInformationPage",
    element: <VehicleRegistrationInformation />,
  },
  {
    path: "/home",
      element: <Home />,
  }

]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
