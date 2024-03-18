import React from "react";
import Link from "next/link";
const Header = () => {
  return (
    <div>
      <div className="flex">
      <Link className="text-xl flex" href="/login">
        <span className="border border-gray-400 rounded-xl px-3 flex">
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 12H4m12 0-4 4m4-4-4-4m3-4h2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-2"
              />
            </svg>
            Login
        </span>
        </Link>
      </div>
      <div className="p-10 mr-10 ml-10 text-center">
        <h1>We Provide The Best Products</h1>
        <h2>
          Our Company Is Well Known In The World For Its Quality And Reliable
          Products
        </h2>
        <h3 className="text-sm text-gray-500">Log In And See It For Your Self</h3>
      </div>
    </div>
  );
};

export default Header;
