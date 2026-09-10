import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import logo from "../assets/logo-text.png";

const Navbar = () => {
  const [selectedButton, setSelectedButton] = useState("signup");


  const handleSignIn = () => {
    setSelectedButton("signin");
  };

  const handleSignUp = () => {
    setSelectedButton("signup");
  };

  return (
    <nav className="navbar sticky top-0 z-50 bg-base-100 px-2 py-3 shadow-sm lg:px-8">

     
      <div className="navbar-start w-1/4 lg:w-1/4">
        <a className="inline-block cursor-pointer">
          <img
            src={logo}
            alt="Dev Stack Logo"
            className="h-8 object-contain lg:h-10"
          />
        </a>
      </div>

     
      <div className="navbar-center w-2/4 justify-center">

        <div className="flex items-center gap-2 lg:hidden">

          <button
            onClick={handleSignIn}
            className={`rounded-full px-3 py-1 text-[13px] font-semibold transition-colors ${
              selectedButton === "signin"
                ? "bg-pink-600 text-white"
                : "text-pink-600 hover:text-pink-700"
            }`}
          >
            Sign In
          </button>

          <button
            onClick={handleSignUp}
            className={`rounded-full px-3 py-1 text-[13px] font-bold transition-colors ${
              selectedButton === "signup"
                ? "bg-pink-700 text-white"
                : "bg-pink-600 text-white hover:bg-pink-700"
            }`}
          >
            Sign Up
          </button>

        </div>

        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal gap-2 px-1 text-[15px]">

            <li>
              <a className="bg-transparent font-semibold text-pink-600 hover:text-pink-700">
                Home
              </a>
            </li>

            <li>
              <a className="font-medium transition-colors hover:text-pink-600">
                Technologies
              </a>
            </li>

            <li>
              <a className="font-medium transition-colors hover:text-pink-600">
                Projects
              </a>
            </li>

            <li>
              <a className="font-medium transition-colors hover:text-pink-600">
                About
              </a>
            </li>

            <li>
              <a className="font-medium transition-colors hover:text-pink-600">
                Contact
              </a>
            </li>

          </ul>
        </div>

      </div>

      <div className="navbar-end w-1/4 justify-end">

        <div className="dropdown dropdown-end lg:hidden">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost p-1"
          >
            <FiMenu className="text-3xl text-gray-500" />
          </div>

          <ul
            tabIndex={0}
            className="menu dropdown-content z-1 mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
          >
          
          </ul>
        </div>

        <div className="hidden items-center gap-3 lg:flex">

          <button
            onClick={handleSignIn}
            className={`rounded-full px-4 py-2 text-base font-semibold transition-colors ${
              selectedButton === "signin"
                ? "bg-pink-600 text-white"
                : "bg-transparent text-black hover:bg-gray-100"
            }`}
          >
            Sign In
          </button>

          <button
            onClick={handleSignUp}
            className={`rounded-full px-5 py-2 text-base font-semibold transition-colors ${
              selectedButton === "signup"
                ? "bg-pink-600 text-white"
                : "bg-transparent text-black hover:bg-gray-100"
            } `}
          >
            Sign Up
          </button>

        </div>

      </div>

    </nav>
  );
};

export default Navbar;