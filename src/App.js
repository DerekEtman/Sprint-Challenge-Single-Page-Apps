import React from "react";
import { Link } from "react-router-dom";
import { Tab } from 'semantic-ui-react';
import "./index.css";


import Header from "./components/Header.js";
import TabNav from "./components/TabNav.js";

// import WelcomePage from "./components/WelcomePage.js";
// import CharacterList from "./components/CharacterList.js";
// import LocationsList from "./components/LocationsList.js";
// import EpisodeList from "./components/EpisodeList.js";


export default function App() {
  return (
    <main>
      <div>
      <Header className="pageHeader" />
      <TabNav />
      </div>

      {/* <div>
        <WelcomePage />
        <CharacterList />
        <LocationsList />
        <EpisodeList />
      </div> */}
     
    </main>
  );
}
