// components/Header.js
"use client";
import Link from "next/link";

const Header = () => {
  const handleSearch = () => {
    // Handle search functionality
    console.log("search");
  };

  const handleClear = () => {
    // Handle clearing search input
    console.log("clear");
  };

  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center w-screen">
      <div className="flex items-center space-x-4">
        <Link href="/mainpage">
          <span className="text-xl font-bold border border-gray-500 p-2 hover:bg-orange-500">
            Home
          </span>
        </Link>
        <Link href="/favorites">
          <span className="text-xl font-bold border border-gray-500 p-2 hover:bg-orange-500">
            Favorites
          </span>
        </Link>
      </div>
      <div className="flex items-center space-x-4">
        <input
          type="text"
          placeholder="Search..."
          className="bg-gray-600 px-2 py-1 rounded-md focus:outline-none"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white px-3 py-1 rounded-md"
        >
          Search
        </button>
        <button
          onClick={handleClear}
          className="bg-red-500 text-white px-3 py-1 rounded-md"
        >
          Clear
        </button>
      </div>
    </header>
  );
};

export default Header;
