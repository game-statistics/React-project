import React from "react";
import GameList from "../requests/Gamelist";

function Allgames() {
  return (
    <main>
      <div className="allgames">
        <section className=" games-column">
          <GameList />
        </section>
      </div>
    </main>
  );
}

export default Allgames;
