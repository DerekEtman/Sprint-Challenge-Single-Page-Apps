import React from "react";
import { Card } from 'semantic-ui-react';

export default function CharacterCard(data) {
  const { image, name, status, species, gender, location, id } = data;
  // const id = props.match.params.id;

  console.log("data.character: ", data.character);
  console.log("Name: ", data.character.name);

  return (
    <div className="characterCard ui card" key={data.character.id}>
      <img className="image" src={data.character.image} />
        <div className="content">
          <h2 className="header">Name: {data.character.name}</h2>
          <p className="meta">Species: {data.character.species}</p>
          <p className="meta">Status: {data.character.status}</p>
          <p className="meta">Gender: {data.character.gender}</p>
          <p className="meta">Location: {data.character.location.name}</p>
        </div>
    </div>
  
  )
}