'use client'
import React from 'react'
import HeaderMain from "@/components/ui/headerForMainPage"
import { useRouter } from "next/navigation";

const Favorites = () => {
  const router = useRouter();

  // You would typically fetch the favorite cars data from somewhere, such as from a database or local storage
  // For demonstration purposes, let's assume you have a favorites array containing car objects
  const favorites = []; // Array of favorite cars

  return (
    <div>
      <HeaderMain />
      <h1 className="text-3xl p-10">Favorite Cars</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {favorites.length > 0 ? (
          favorites.map((car, index) => (
            <div key={index} className="border p-3 rounded-lg">
              <p>Make: {car.make}</p>
              <p>Model: {car.model}</p>
              <img src={car.image} alt={`${car.make} ${car.model}`} className="w-full h-auto" />
              <p>Year: {car.year}</p>
              <p>Price: ${car.price}</p>
            </div>
          ))
        ) : (
          <p>No favorite cars selected.</p>
        )}
      </div>
      <button
        className="bg-blue-500 text-white px-4 py-2 mt-5 rounded-md"
        onClick={() => router.push("/mainpage")}
      >
        Back to Home
      </button>
    </div>
  );
};

export default Favorites;
