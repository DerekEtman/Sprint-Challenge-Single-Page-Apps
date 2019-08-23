import React from "react";

export default function CharacterCard(data) {
  const { image, name, status, species, gender, location, id } = data;
  // const id = props.match.params.id;

  console.log("data.character: ", data.character);
  console.log("Name: ", data.character.name);

  return (
    <div className="characterCard" key={data.character.id}>
      <img src={data.character.image} />
      <h2>{data.character.name}</h2>
      <p>{data.character.species}</p>
      <p>{data.character.status}</p>
      <p>{data.character.gender}</p>
      <p>{data.character.location.name}</p>
    </div>
  
  )
}