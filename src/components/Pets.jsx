const PetItem = ({ pet, handlePetItemClick }) => {
  function handleClick() {
    handlePetItemClick(pet);
  }
  return (
    <div onClick={handleClick} className="details">
      <div className="img">
        <img src={pet.url} alt="" />
      </div>
      <div className="info">
        <h1>{pet.name}</h1>
        <h2>{pet.breed}</h2>
      </div>
    </div>
  );
};

export default PetItem;