import React from "react";
import GameList from "../requests/Gamelist";

function Allgames() {
  return (
    <main>
      <section className="games-column">
        <GameList />
      </section>
      <section></section>
    </main>
  );
}

export default Allgames;
