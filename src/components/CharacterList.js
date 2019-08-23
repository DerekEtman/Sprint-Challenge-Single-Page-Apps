import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function CharacterList(props) {

  const [ char, setChar ] = useState([]);

  // TODO: Add API Request here - must run in `useEffect`
  //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  
  // `https://rickandmortyapi.com/api/character/`

  useEffect(() => {
    const getChars = () =>{
      axios
        .get('https://rickandmortyapi.com/api/character/')
        .then( resp => {
          setChar(resp.data);
          console.log(resp);
        })
        .catch( error =>{
          console.log("Axios Err: ", error);
        });
    }
    getChars();
  }, []);

  return (
    <section className="character-list grid-view">
      <h2>TODO: `array.map()` over your state here!</h2>
      { char.map(character => (
        <CharDetails key={character.id} character={character} />
      ))}
    </section>
  );
}

function CharDetails({ character }) {

}