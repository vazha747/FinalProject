"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // Fixed import
import cars from "@/app/content/cars.json";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Skeleton } from "@nextui-org/react";

const Header = () => {
  const [query, setQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(cars);

  const handleChange = (event) => {
    const searchQuery = event.target.value.toLowerCase();
    setQuery(searchQuery); // Update the query state
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      const filteredData = cars.filter((car) => {
        return (
          car.make.toLowerCase().includes(query) ||
          car.model.toLowerCase().includes(query)
        );
      });
      setFilteredProducts(filteredData);
    }, 500);

    return () => clearTimeout(timer);
  }, [query]);

  const router = useRouter();

  const handleInspect = (car) => {
    // Navigate to the "/inspectPage" and pass car information as query parameters
    router.push(
      `/inspectPage/?make=${encodeURIComponent(
        car.make
      )}&model=${encodeURIComponent(car.model)}`
    );
  };

  const handleClear = () => {
    setQuery(""); // Clear the input text
    setFilteredProducts(cars); // Reset filtered products to original state
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
          value={query} // Bind input value to query state
          onChange={handleChange}
          className="bg-gray-600 px-2 py-1 rounded-md focus:outline-none"
        />
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
