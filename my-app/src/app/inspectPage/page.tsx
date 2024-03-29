"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import cars from "@/app/content/cars.json";
import Header from "@/components/ui/headerForMainPage";

const InspectPage = () => {
  const router = useRouter();

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (!token) {
      location.href = "/login";
    }
  }, [router]);

  const [carId, setCarId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | string | null>(null); // Define error type
  const [carInfo, setCarInfo] = useState<CarInfo | null>(null);

  interface CarInfo {
    make: string;
    model: string;
    image: string;
    year: string;
    price: string;
    overview: string;
  }


  useEffect(() => {
    const url = new URL(window.location.href);
    const searchParams = url.searchParams;
    const id = searchParams.get("id");

    setCarId(id);

    if (id) {
      setIsLoading(true);
      setError(null);

      const fetchCarData = async () => {
        try {
          const response = await fetch(`/api/cars/getById?id=${id}`);
          if (!response.ok) {
            throw new Error(`Error fetching car data: ${response.statusText}`);
          }
          const data = await response.json();
          setCarInfo(data);
        } catch (error) {
          // Handle errors gracefully
          if (error instanceof Error) {
            setError(error.message); // Use error message if available
          } else {
            setError("An unexpected error occurred."); // Default error message
          }
        } finally {
          setIsLoading(false);
        }
      };

      fetchCarData();
    }
  }, [router]);

  useEffect(() => {
    const storedInfo = localStorage.getItem("selectedCar");

    try {
      if (storedInfo) {
        const parsedInfo = JSON.parse(storedInfo);
        setCarInfo(parsedInfo);
      }
    } catch (error) {
      console.error("Error parsing car information:", error);
      // Handle potential parsing errors gracefully (e.g., display an error message)
    }
  }, [router]);

  return (
    <div>
      <Header />
      {isLoading ? (
        <p>Loading car information...</p>
      ) : (
        <>
          {carInfo ? (
            <>
              <h1 className="text-3xl p-10">Car Inspection</h1>
              <div className="border-xl shadow-2xl border-gray-500 p-3 rounded-xl">
                {carInfo && ( // Ensure carInfo is not undefined
                  <>
                    <p>Make: {carInfo.make}</p>
                    <p>Model: {carInfo.model}</p>
                    <img
                      className="h-64 w-96"
                      src={carInfo.image}
                      alt={`${carInfo.make} ${carInfo.model}`}
                    />
                    <p>Year: {carInfo.year}</p>
                    <p>Price: ${carInfo.price}</p>
                    <p>overview: {carInfo.overview}</p>
                  </>
                )}
              </div>
            </>
          ) : (
            <p>
              {error ? (
                <p className="text-red-500">Error:</p>
              ) : (
                <p>No car information found in localStorage or URL.</p>
              )}
            </p>
          )}
        </>
      )}
    </div>
  );
};

export default InspectPage;
