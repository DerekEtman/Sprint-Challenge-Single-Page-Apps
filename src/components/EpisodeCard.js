import React from "react";
import { Card } from "semantic-ui-react";


export default function EpisodeCard(data) {
    
    return(
        <div className="ui cards" key={data.episode.id}>
            <div className="ui card">
                <div className="content">
                    <h2 className="header">Episode name: {data.episode.name} </h2>
                    <h2 className="meta">No: {data.episode.episode}</h2>
                    <h2 className="meta">Characters:</h2>
                    <p className="description">{data.episode.characters.name}</p>
                </div>
            </div>

        </div>
    )
}