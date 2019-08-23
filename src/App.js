import React from "react";
// import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
// import WelcomPage from "./components/WelcomePage.js";
import CharacterList from "./components/CharacterList.js";
import LocationsList from "./components/LocationsList.js";


export default function App() {
  return (
    <main>
      <Header />
      {/* <CharacterList /> */}
      <LocationsList />
      {/* <Episodes /> */}
      {/* <WelcomPage /> */}
      {/* <TabNav /> */}
    </main>
  );
}
