import React from "react";
// import WelcomePage from "./components/WelcomePage.js";
// import CharacterList from "./components/CharacterList.js";
// import LocationsList from "./components/LocationsList.js";
// import EpisodeList from "./components/EpisodeList.js";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

// TODO: Add missing tabs below
// Take a look at React Semantic UI tabs 
// https://react.semantic-ui.com/modules/tab/

export default function TabNav() {
    return(
    <div>
        <div className="ui attached tabular menu">
        <NavLink className="active item">Home</NavLink>
        <NavLink className="item">Characters</NavLink>
        <NavLink className="item">Locations</NavLink>
        <NavLink className="item">Episodes</NavLink>
        </div>

        {/* <div>
            <WelcomePage />
            <CharacterList className="characterList" />
            <LocationsList />
            <EpisodeList />
        </div> */}
    </div>)
};

