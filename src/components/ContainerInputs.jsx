import React from "react";
import { Location, SelectAnimal } from "./Inputs&Selects";
import SearchBtn from "./ButtonSearch";

const ContainerInputs = () => {
  return (
    <div className="containerInputs">
      <h1>Pet Finder</h1>

      <img
        src="https://i.postimg.cc/t4Rzcsbd/pexels-pet-foto-644780685-17802938.jpg"
        alt=""
        className="url"
      />

      <p>Location</p>
      <Location placeholder="Enter Location"></Location>

      <p>Animal</p>
      <SelectAnimal>
        <option value="">Select an animal</option>
      </SelectAnimal>

      <p>Breed</p>
      <SelectAnimal>
        <option value="">Select a breed</option>
      </SelectAnimal>

      <SearchBtn>Search</SearchBtn>
    </div>
  );
};

export default ContainerInputs;
