import { useNavigate } from "react-router";
import Pets from "./Pets";

const ContainerPets = () => {
  const navigate = useNavigate();
  const pets = [
    {
      name: "Jobi",
      breed: "Tabby",
      url: "https://pets-images.dev-apis.com/pets/cat5.jpg",
    },
    {
      name: "Kesley",
      breed: "Tabby",
      url: "https://pets-images.dev-apis.com/pets/cat7.jpg",
    },
    {
      name: "Jonell",
      breed: "Tabby",
      url: "https://pets-images.dev-apis.com/pets/cat6.jpg",
    },
    {
      name: "Valentino",
      breed: "British Shorthair",
      url: "https://pets-images.dev-apis.com/pets/cat9.jpg",
    },
    {
      name: "Talbert",
      breed: "American Shorthair",
      url: "https://pets-images.dev-apis.com/pets/cat13.jpg",
    },
  ];

  const handlePetItemClick = (pet) => {
    navigate(`/pet/${pet.name}`);
  };

  return (
    <div className="containerReturn">
      {pets.map((pet, index) => (
        <Pets
          key={index}
          pet={pet}
          handlePetItemClick={handlePetItemClick}
        />
      ))}
    </div>
  );
};

export default ContainerPets;
