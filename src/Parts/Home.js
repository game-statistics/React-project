import React from "react";
import Gamedetop from "../Json/gametop.json";

function Home() {
  return (
    <main>
      <section>
        <h1>Game Statistics</h1>
        <div className="box">
          <h2>HOT</h2>
          <section className="games">
            <section className="games-column">
              {Gamedetop.map(item => (
                <div style={{ backgroundImage: `url(${item.img})` }} className="game" key={item.id}>
                  <div className="blur">
                    <span className="image">
                      <img src={item.img} />
                    </span>
                    <span>
                      <h4>{item.name}</h4>
                      <h5>{item.developers}</h5>
                    </span>
                  </div>
                </div>
              ))}
            </section>
            <section className="games-column">

            </section>
          </section>
        </div>
        {/* <div className="box">
          <h2>NEW</h2>
          <section className="games">
            <section className="games-column">
              <div className="game">Pic / Name game / 10/10 / </div>
              <div className="game">Pic / Name game / 10/10 / </div>
              <div className="game">Pic / Name game / 10/10 / </div>
              <div className="game">Pic / Name game / 10/10 / </div>
            </section>
            <section className="games-column">
              <div className="game">Pic / Name game / 10/10 / </div>
              <div className="game">Pic / Name game / 10/10 / </div>
              <div className="game">Pic / Name game / 10/10 / </div>
              <div className="game">Pic / Name game / 10/10 / </div>
            </section>
          </section>
        </div> */}
      </section>
    </main>
  );
}

export default Home;