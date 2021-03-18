import React, { useState, useEffect } from "react";
import Gamedetails from "../Json/gamedetail.json";

function Allgames() {

  // useEffect(() => {
  //   fetchItems();
  // },[]);

  // const fetchItems = async () => {
  //   const data = await fetch("../Json/gamedetails.json",{
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json'
  //     }
  //   });

  //   // const items = await data.json();
  //   const items = await data.text();
  //   console.log(items);
  // }

  // fetch("../Json/gamedetail.json", )
  //   .then(
  //     function (response) {
  //       response.json().then(function (tasks) {
  //         console.log(tasks);
  //       });
  //     }
  //   )

  // Пример с MDN
  // fetch('../Json/gamedetails.json')
  // // .then((response) => {
  // //   return response.json();
  // // })
  // .then((data) => {
  //   console.log(data);
  // });

  return (
    <main>
      <section className="games-column">
        {Gamedetails.map(item => (
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
      <section>
      </section>
    </main>
  );
}

export default Allgames;