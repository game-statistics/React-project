import React, { useState, useEffect } from "react";

function Allgames() {

  // useEffect(() => {
  //   fetchItems();
  // },[]);

  // const fetchItems = async () => {
  //   const data = await fetch(
  //     "../Json/gamedetail.json"
  //   );
  //   const items = await data.json();
  //   console.log(data);
  // }

  // fetch('')
  // .then(response => response.json())
  // .then(json => console.log(json))

  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(
      function (response) {
        response.json().then(function (tasks) {
          console.log(tasks);
        });
      }
    )

  // fetch('../Json/gamedetail.json')
  // .then((response) => {
  //   return response.json();
  // })
  // .then((data) => {
  //   console.log(data);
  // });

  return (
    <main>
      <section className="games-column">
        <div className="game">			</div>
        <div className="game">			</div>
        <div className="game">			</div>
        <div className="game">			</div>
        <div className="game">			</div>
        <div className="game">			</div>
        <div className="game">			</div>
        <div className="game">			</div>
        <div className="game">			</div>
      </section>
      <section>
      </section>
    </main>
  );
}

export default Allgames;