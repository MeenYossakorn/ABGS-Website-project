import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const scrollToTop = () => {
    const scrollStep = -window.scrollY / (1000 / 15);
    const scrollInterval = setInterval(() => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(scrollInterval);
      }
    }, 15);
  };

  return (
    //Navbar space
    <div className="navbar bg-blue sticky top-0 z-50 shadow-md">
      <div className="flex-1">
        <a
          className="btn btn-ghost text-white text-xl cursor-pointer"
          onClick={scrollToTop}
        >
          AUTOMATIC BARRIER GATE SYSTEM
        </a>
      </div>

      <div className="flex-none">
        <a className="btn btn-ghost text-white text-xl">SOMRAK JAIDEE</a>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar flex items-center space-x-4 p-2"
          >
            <div className="w-10 rounded-full">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
          </div>

          <ul
            tabIndex={0}
            className="menu menu-lg dropdown-content bg-base-100 rounded-box z-[1] mt-1 w-60 p-2 shadow"
          >
            <li>
              <Link to="/" class="flex justify-center">
                MAIN
              </Link>
            </li>

            <li>
              <Link to="#" class="flex justify-center">
                MY PROFILE
              </Link>
            </li>

            <li>
              <Link to="#" class="flex justify-center">
                MY CAR
              </Link>
            </li>

            <li>
              <Link to="/loginpage" className="flex justify-center">
                LOGOUT
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
