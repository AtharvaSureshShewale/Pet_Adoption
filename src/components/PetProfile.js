import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PetProfile = () => {
  const { id } = useParams();
  const [pet, setPet] = useState(null);

  useEffect(() => {
    const fetchPet = async () => {
      const response = await fetch("/data/petsData.json");
      const data = await response.json();
      const foundPet = data.find((pet) => pet.id === parseInt(id));
      setPet(foundPet);
    };
    fetchPet();
  }, [id]);

  if (!pet) {
    return <div className="text-center py-10">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div 
        className="relative bg-cover bg-center h-96"
        style={{ 
          backgroundImage: `url(${pet.imageUrl})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="absolute inset-0 flex justify-center items-center text-white">
          <h1 className="text-4xl md:text-6xl font-extrabold">{pet.name}</h1>
        </div>
      </div>

      <div className="container mx-auto px-6 py-10 max-w-4xl bg-white rounded-lg shadow-lg -mt-24 z-10 relative">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-3xl font-bold text-gray-800">{pet.name}</h2>
            <p className="text-lg text-gray-600">{pet.species} • {pet.age} years old</p>
          </div>
          <div className="text-gray-500 text-sm">
            <p className="font-semibold text-xl text-blue-600">Adoption Fee: ${pet.adoptionFee}</p>
          </div>
        </div>

        <div className="text-gray-700 mb-6">
          <p>{pet.description}</p>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Behavior Traits</h3>
          <div className="flex flex-wrap gap-3">
            {pet.behaviorTags.map((tag, index) => (
              <span 
                key={index} 
                className="px-4 py-2 bg-blue-200 text-blue-800 rounded-full text-sm font-semibold"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Contact Info</h3>
          <div>
            <p className="font-semibold text-gray-800">Name: {pet.contactInfo.name}</p>
            <p className="text-gray-600">Phone: {pet.contactInfo.phone}</p>
            <p className="text-gray-600">Email: {pet.contactInfo.email}</p>
          </div>
        </div>

        <div className="mt-8">
          <button 
            className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors duration-200"
            onClick={() => window.alert(`Thank you for your interest in adopting ${pet.name}!`)}
          >
            Adopt {pet.name}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PetProfile;
