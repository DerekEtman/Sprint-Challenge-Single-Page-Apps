import React from "react";

export default function LocationCard(data) {

  const { name, type, dimension, residents } = data;
  console.log("location name: ", data.location)

  return (
  <div className="locationCard">
    <h2>{data.location.name} </h2>
    <p>{data.location.type}</p>
    <p>{data.location.dimension}</p>
    {/* <p>{data.location.residents}</p> */}
  </div>
    );
}
