"use client";
import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import cars from "@/app/content/cars.json";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Home = () => {
  const [query, setQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(cars);
  const searchParams = useSearchParams() as any;
  const queryParams = searchParams.get("query") || "";
  const pathname = usePathname();
  const { replace } = useRouter();

  useEffect(() => {
    const params = new URLSearchParams(searchParams);

    if (query) {
      params.set("query", query);
      replace(`${pathname}?${params.toString()}`);
    } else {
      params.delete("query");
    }
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

  const handleChange = (event: { target: { value: string; }; }) => {
    const searchQuery = event.target.value.toLowerCase();
    setQuery(searchQuery); // Update the query state
  };

  const router = useRouter();

  const handleInspect = (car: { id: any; make: any; model: any; year: any; image: any; price: any; overview: any; }): any => {
    const selectedCar = {
      id: car.id,
      make: car.make,
      model: car.model,
      year: car.year,
      image: car.image,
      price: car.price,
      overview: car.overview,
    };
    console.log("Selected car ID:", selectedCar.id);
    localStorage.setItem("selectedCar", JSON.stringify(selectedCar));
    router.push("/inspectPage"); // Navigate to the inspect page
  };

  const handleClear = () => {
    setQuery(""); // Clear the input text
    setFilteredProducts(cars); // Reset filtered products to original state
  };

  return (
    <div>
      <div className="bg-gray-800 text-white p-4 flex justify-between items-center w-screen">
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
            name="input"
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
      </div>
      <div className="gap-3 ">
        <h1 className="text-3xl p-10">Car List</h1>
        <div className="flex  justify-evenly ">
          <ul className="flex flex-wrap justify-evenly ">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((car) => (
                <li key={car.id} className="p-5">
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
                      <Button onClick={() => handleInspect(car)}>
                        Inspect
                      </Button>
                      <Button className="">Favorite</Button>
                    </div>
                  </div>
                </li>
              ))
            ) : (
              <li>
                <div className="border-xl shadow-2xl border-gray-500 p-3 rounded-xl ">
                  <h1 className="text-3xl">No car found</h1>
                </div>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
