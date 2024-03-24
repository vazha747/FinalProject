"use client";
import { useRouter } from "next/navigation"; // Corrected import
import { useEffect, useState } from "react";
import HeaderMain from "@/components/ui/headerForMainPage";
import Skeleton from "@/components/ui/skeleton";
import { ParsedUrlQuery } from "querystring";

interface CustomRouter {
  query?: CarParams | null; // Updated type
}

interface CarParams extends ParsedUrlQuery {
  make: string;
  model: string;
  image: string;
  year: string;
  price: string;
}

const InspectPage = () => {
  const router = useRouter() as CustomRouter; // Updated casting
  const [carInfo, setCarInfo] = useState<CarParams | null>(null);

  useEffect(() => {
    // Check if router.query is defined and has all required fields
    if (router.query && 'make' in router.query && 'model' in router.query && 'image' in router.query && 'year' in router.query && 'price' in router.query) {
      const { make, model, image, year, price } = router.query;
      setCarInfo({ make, model, image, year, price });
    }
  }, [router.query]);

  if (!carInfo) {
    return (
      <div>
        <HeaderMain />
        <div className="flex justify-center items-center text-center">
          <h1 className="text-3xl p-5">Loading...</h1>
        </div>
        <div className="flex justify-center items-center text-center p-10 gap-64">
          <Skeleton />
          <Skeleton />
        </div>
      </div>
    );
  }

  const { make, model, image, year, price } = carInfo;

  return (
    <div>
      <HeaderMain />
      <div className="p-10">
        <h1 className="text-3xl">Car Inspection</h1>
        <div className="border-xl shadow-2xl border-gray-500 p-3 rounded-xl">
          <p>Make: {make}</p>
          <p>Model: {model}</p>
          <img className="h-64 w-96" src={image} alt={`${make} ${model}`} />
          <p>Year: {year}</p>
          <p>Price: ${price}</p>
        </div>
      </div>
    </div>
  );
};

export default InspectPage;
