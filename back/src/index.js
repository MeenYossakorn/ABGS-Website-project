import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Home from "../src/Page/Home";
import LoginPage from "./LoginPage/LoginPage"
import LogoutOnClose from "./LoginPage/Logoutonclose";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/home",
    element: <Home />,
  },
]);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
      <LogoutOnClose/>
      <RouterProvider router={router} />
    </React.StrictMode>
);

reportWebVitals();
