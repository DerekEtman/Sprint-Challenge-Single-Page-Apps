import React from "react";
import { Card } from "semantic-ui-react";

export default function LocationCard(data) {

  const { name, type, dimension, residents } = data;
  console.log("location name: ", data.location)

  return (
  <div className="locationCard ui cards" key={data.location.id}>
    <div className="ui card">
      <div className="content">
        <h2 className="header">{data.location.name} </h2>
        <p  className="description">Location Type: {data.location.type}</p>
        <p  className="description">Dimension: {data.location.dimension}</p>
        {/* <p>{data.location.residents}</p> */}
      </div>
    </div>
  </div>
    );
}
