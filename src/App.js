import React from "react";
// import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage.js";
import CharacterList from "./components/CharacterList.js";
import LocationsList from "./components/LocationsList.js";
import EpisodeList from "./components/EpisodeList.js";
import { Tab } from 'semantic-ui-react';


export default function App() {
  return (
    <main>
      <Header />
      {/* <TabNav /> */}
      <WelcomePage />
      <CharacterList className="characterList" />
      <LocationsList />
      <EpisodeList />
    </main>
  );
}
