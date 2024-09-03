//react router dom
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
//page components
import LoginPage from "./LoginPage";
import Main from "./Main";
import RegisterPage from "./RegisterPage";
import Profile from "./Profile";
import CarInfo from "./CarInfo";
import RegisterCar from "./RegisterCar";
import Report from "./Report";
import UserInformationPage from "./components/Manager/UserInformationPage";
import UserRequestPage from "./components/Manager/UserRequestPage";
import VehicleInformation from "./components/Manager/VehicleInformationPage";
import VehicleRegistrationInformation from "./components/Manager/VehicleRegistrationInformationPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
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
