import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router";

const Pet = () => {
  const { id } = useParams();
  const [petData, setPetData] = useState(null);

  useEffect(() => {
    fetch(`https://pets-v2.dev-apis.com/pets?animal=cat&name=${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.pets && data.pets.length > 0) {
          setPetData(data.pets[0]);
        }
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [id]);

  return (
    <div className="details-container">
      <h1>Pet page</h1>
      {petData ? (
        <>
          <img src={petData.images[0]} alt={petData.name} />
          <h2 className="pets-name">{petData.name}</h2>
          <h3 className="pets-location">{petData.city}</h3>
          <p className="pets-description">{petData.description}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
      <NavLink to="/">
        <button className="back-button">Go Back</button>
      </NavLink>
    </div>
  );
};

export default Pet;
