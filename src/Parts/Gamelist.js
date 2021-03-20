import React from 'react';
import { Link } from 'react-router-dom';
import Gamedetails from '../Json/gamedetail.json';
// import React, { useState, useEffect } from 'react';

function GameList(size) {

  // useEffect(() => {
  //   fetchItems();
  // },[]);

  // const fetchItems = async () => {
  //   const data = await fetch('../Json/gamedetails.json',{
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json'
  //     }
  //   });

  //   // const items = await data.json();
  //   const items = await data.text();
  //   console.log(items);
  // }

  // fetch('../Json/gamedetail.json', )
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

  function IfBig(prop) {
    const item = prop.whatSize;
    if (size.size === 'big') {
      if (item.is_free) {
        return <h6>Бесплатная</h6>;
      } else {
        return <h6>Платная</h6>;
      }
    } else {
      return null;
    }
  }

  function Developers(mass) {
    const devels = mass.developers;
    if (devels.length > 1) {
      return <h5>{devels[0]} ...</h5>;
    } else {
      return <h5>{devels[0]}</h5>;
    }
  }

  return (
    <>
      {Gamedetails.map(item => (
        <Link to={`/games/${item.id}`} key={item.id} className={`game ${size.size}`}>
          <div style={{ backgroundImage: `url(${item.img})` }}>
            <div className='blur'>
              <span className='image'>
                <img src={item.img} alt='Game logo' />
              </span>
              <span>
                <h4>{item.name}</h4>
                <Developers developers={item.developers} />
                {/* <h5>
                  {item.developers.map((dev) =>
                    <div key={dev}>
                      {dev}
                    </div>
                  )}
                </h5> */}
                <IfBig whatSize={item} />
              </span>
            </div>
          </div>
        </Link>
      ))}
    </>
  )
}

export default GameList;