import React from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

import WelcomePage from "./WelcomePage";
import CharacterList from "./CharacterList.js";
import LocationsList from "./LocationsList.js";
import EpisodeList from "./EpisodeList.js";

// TODO: Add missing tabs below
// Take a look at React Semantic UI tabs 
// https://react.semantic-ui.com/modules/tab/

export default function TabNav() {
    return(
    <div>
        <div className="ui attached tabular menu">

            <NavLink exact className="active item" to="/">Home</NavLink>
            <NavLink className="item" to="/CharacterList">Characters</NavLink>
            <NavLink className="item" to="/LocationsList">Locations</NavLink>
            <NavLink className="item" to="/EpisodeList">Episodes</NavLink> 
        </div>

        <div>
            <Route exact path="/" component={WelcomePage} />
            <Route path="/CharacterList/" component={CharacterList} />
            <Route path="/LocationsList/" component={LocationsList} />
            <Route path="/EpisodeList/" component={EpisodeList} />
        </div>
    </div>)
};

