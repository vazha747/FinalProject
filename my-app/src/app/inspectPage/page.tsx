"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import cars from "@/app/content/cars.json"; 
import Header from '@/components/ui/headerForMainPage'



const InspectPage = () => {

  const router = useRouter()
   useEffect (() => {
    const token = sessionStorage.getItem("token")
    if (!token) {
      location.href = "/login"
    }
   }, [router])

  const [carId, setCarId] = useState<string  | null>(null);
  const [carInfo, setCarInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Access search params using URLSearchParams directly
    const url = new URL(window.location.href); // Create a URL object
    const searchParams = url.searchParams; // Extract search params
    const id = searchParams.get("id"); // Get ID from search params

    setCarId(id);

    if (id) {
      setIsLoading(true);
      setError(null);
      
      const fetchCarData = async () => {
        try {
          const response = await fetch(`/api/cars/getById?id=${id}`); // Descriptive endpoint
          if (!response.ok) {
            throw new Error(`Error fetching car data: ${response.statusText}`);
          }
          const data = await response.json();
          setCarInfo(data);
        } catch (error) {
        setError(error?.message); // Optional chaining operator
        } finally {
          setIsLoading(false);
        }
      };
      console.log(id);
      fetchCarData();
    }
  }, [router]);

  //// Trying to get the information form Local Storage 
    
  useEffect(() => {
    const storedInfo = localStorage.getItem("selectedCar")
    
  try {
    if (storedInfo) {
      const parsedInfo = JSON.parse(storedInfo); // Parse JSON string
      setCarInfo(parsedInfo); // Set car information in state
    }
  } catch (error) {
    console.error("Error parsing car information:", error);
    // Handle potential parsing errors gracefully (e.g., display an error message)
  }
  }, [router])

  return (
    <div>
      <Header />
      {carInfo ? (
        <>
          <h1 className="text-3xl p-10">Car Inspection</h1>
          <div className="border-xl shadow-2xl border-gray-500 p-3 rounded-xl">
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
          </div>
        </>
      ) : (
        <p>No car information found in localStorage.</p>
      )}
    </div>
  );
};

export default InspectPage;
