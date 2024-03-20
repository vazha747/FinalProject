// pages/inspectPage.js

import { useRouter } from 'next/router';

const InspectPage = () => {
  const router = useRouter();
  const { make, model, image, year, price } = router.query;

  return (
    <div className="p-10">
      <h1 className="text-3xl">Car Inspection</h1>
      <div className="border-xl shadow-2xl border-gray-500 p-3 rounded-xl ">
        <p>Make: {make}</p>
        <p>Model: {model}</p>
        <img
          className="h-64 w-96"
          src={image}
          alt={`${make} ${model}`}
        />
        <p>Year: {year}</p>
        <p>Price: ${price}</p>
      </div>
    </div>
  );
};

export default InspectPage;
