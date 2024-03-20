'use client'
import React from "react";
import { useRouter } from "next/navigation";
import cars from "@/app/content/cars.json";
import { Button } from "@/components/ui/button";

const Home = () => {
  const router = useRouter();

  const handleInspect = (car) => {
    // Navigate to the "/inspectPage" and pass car information as query parameters
    router.push({
      pathname: "/inspectPage",
      query: { 
        make: car.make,
        model: car.model,
        image: car.image,
        year: car.year,
        price: car.price
      }
    });
  };

  return (
    <div className="gap-5 ">
      <h1 className="text-3xl p-10">Car List</h1>
      <div className="flex  justify-evenly ">
        <ul>
          {cars.map((car) => (
            <li key={car.id} className="p-6">
              <div className="border-xl shadow-2xl border-gray-500 p-3 rounded-xl ">
                <p>Make: {car.make}</p>
                <p>Model: {car.model}</p>
                <img
                  className="h-64 w-96 "
                  src={car.image}
                  alt={`${car.make} ${car.model}`}
                />
                <p>Year: {car.year}</p>
                <p>Price: ${car.price}</p>
                <div className="flex gap-5 justify-center">
                  <Button onClick={() => handleInspect(car)}>Inspect</Button>
                  <Button className="">Favorite</Button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
