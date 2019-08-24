import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import CharacterCard from "./CharacterCard.js";
import { Card } from 'semantic-ui-react';

export default function CharacterList() {

  const [ char, setChar ] = useState([]);
  console.log("char state: ", char);
  
  // TODO: Add API Request here - must run in `useEffect`
  //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  
  // `https://rickandmortyapi.com/api/character/`
  
  useEffect(() => {
    const getChars = () =>{
      axios
      .get('https://rickandmortyapi.com/api/character/')
      .then( resp => {
        setChar(resp.data.results);
      })
      .catch( error =>{
        console.log("Axios Err: ", error);
      });
    }
    getChars();
  }, []);
  
  return (
    <section className="character-list ui equal width grid">
      { char.map(data => (
        <CharacterCard key={data.id} character={data} />
        ))}
    </section>
  );
};