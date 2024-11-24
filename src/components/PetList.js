import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PetList = () => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    // Fetch data from JSON
    const fetchData = async () => {
      const response = await fetch("/data/petsData.json");
      const data = await response.json();
      setPets(data);
    };
    fetchData();
  }, []);

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold text-center mb-8">Available Dogs</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {pets.map((pet) => (
          <div key={pet.id} className="p-4 bg-white shadow-md rounded-md">
            <img
              src={pet.imageUrl}
              alt={pet.name}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-semibold">{pet.name}</h2>
            <p className="text-gray-600">{pet.species}</p>
            <p className="text-gray-500">Age: {pet.age} years</p>
            <Link
              to={`/pet/${pet.id}`}
              className="mt-4 block text-center text-white bg-blue-500 py-2 rounded-md"
            >
              View Profile
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PetList;
