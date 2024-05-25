import React, { useState } from "react";
import petsData from "../petsData";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getOnepets } from "../api/pets";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deletePet } from "../api/pets";
const PetDetail = () => {
  // const pet = petsData[0];

  const { petId } = useParams();

  const [pet, setPet] = useState({});

  const fetchOnePets = async () => {
    const response = await getOnepets(petId);
    setPet(response);
  };

  const QueryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: deletePetMutate } = useMutation({
    mutationKey: ["deletePet"],
    mutationFn: () => deletePet(petId),
    onSuccess: () => {
      navigate("/pet");
    },
  });

  return (
    <div className="bg-[#F9E3BE] w-screen h-[100vh] flex justify-center items-center">
      <div className="border border-black rounded-md w-[70%] h-[70%] overflow-hidden flex flex-col md:flex-row p-5">
        <div className="h-full w-full md:w-[35%]">
          <img
            src={pet.image}
            alt={pet.name}
            className="object-contain w-full h-full"
          />
          <button onClick={fetchOnePets}>fetch pets</button>
        </div>
        <div className="w-full md:w-[65%] h-full pt-[30px] flex flex-col p-3">
          <h1>Name: {pet.name}</h1>
          <h1>Type: {pet.type}</h1>
          <h1>adopted: {pet.adopted}</h1>

          <button
            link
            className="w-[70px] border border-black rounded-md  hover:bg-green-400 mb-5"
          >
            Adobt
          </button>

          <button
            className="w-[70px] border border-black rounded-md  hover:bg-red-400"
            onClick={deletePetMutate}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default PetDetail;
