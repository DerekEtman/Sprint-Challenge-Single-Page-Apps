import React, { useEffect, useState } from "react";
import axios from "axios";
import EpisodeCard from "./EpisodeCard.js";
import { Grid, Segment } from 'semantic-ui-react'
// https://rickandmortyapi.com/api/episode/

export default function EpisodeList(){
    const [episode, setEpisode] = useState([]);
    console.log("Episode state:", episode);

    useEffect(() =>{
        const getEpisode = () => {
            axios.get('https://rickandmortyapi.com/api/episode/')
            .then( resp => {
                setEpisode(resp.data.results);
            })
            .catch( error => {
                console.log("Axios Err: ", error);
            });
        }
        getEpisode();
    },[]);

    return (
        <section className = "episode-list ui equal width grid">
            {episode.map(data => (
                <EpisodeCard key={data.id} episode={data} />
            ))}
        </section>
    );

};