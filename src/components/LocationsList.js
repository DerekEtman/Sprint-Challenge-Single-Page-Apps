import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import LocationsCard from "./LocationCard.js";

export default function LocationsList() {
    const [location, setLocation] = useState([]);


    useEffect(() =>{

        const getLocation = () => {
            axios
            .get(`https://rickandmortyapi.com/api/location/`)
            .then( resp => {
                setLocation(resp.data.results);
            })
            .catch(error => {
                console.log("Axios err: ", error);
            });
        }
        getLocation();
    },[]);

    return(
        <section className="location-list grid-view">
            {location.map(data =>(
                <LocationsCard key={data.id} location={data} />
            ))}
        </section>
    )
}
