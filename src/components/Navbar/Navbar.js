export default function Navbar() {
  return (
    //Navbar space
    <div className="navbar bg-blue">
      <div className="flex-1">
        <a className="btn btn-ghost text-white text-xl">
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
              <a class="flex justify-center"  >MAIN</a>
            </li>

            <li>
              <a class="flex justify-center" href="/Profilecontent.js">MY PROFILE</a>
            </li>

            <li>
              <a class="flex justify-center" >MY CAR</a>
            </li>

            <li>
              <a class="flex justify-center">LOGOUT</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
