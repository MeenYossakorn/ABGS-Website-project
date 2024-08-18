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
import ErrorPage from "./ErrorPage";
import Profile from "./Profile";
import CarInfo from "./CarInfo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
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
