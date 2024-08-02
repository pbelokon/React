import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import fetchPet from "./fetchPet";

export default function Details() {
  const { id } = useParams();
  // cache the or look for it ["details", id] if it is not there call fetchPet
  // you can not await in a render function
  const results = useQuery({ queryKey: ["details", id], queryFn: fetchPet });

  if (results.isLoading) {
    return (
      <div className="loading-pane">
        <h2 className="loader">💫</h2>
      </div>
    );
  }

  const pet = results.data.pets[0];
  return (
    <div className="details">
      <div>
        <h1>{pet.name}</h1>
        <h2>
          {pet.animal} - {pet.breed} - {pet.city}, {pet.state}
        </h2>
        <button>Adopt {pet.name}</button>
        <p>{pet.description}</p>
      </div>
    </div>
  );
}
