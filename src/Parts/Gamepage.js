import React from 'react';
// import { Link } from 'react-router-dom';
// import Gamedetails from '../Json/gamedetail.json';

// match.params.id

function GameName() {
  return (
    <div className='block gameName Montserrat'>Game Name</div>
  )
}

function GameLogo(params) {
  let match = params.match;
  return (
    <div className='block'>
      <span className='imagelogo'>
        <img src={`https://cdn.akamai.steamstatic.com/steam/apps/${match.params.id}/header.jpg`} alt='Game logo' />
      </span>
    </div>
  )
}

function Metacritic() {
  return (
    <div className='metacritic block'>
      <span className='metascore marginRight'>99</span>
      <img className='marginRight' src='https://www.metacritic.com/images/icons/metacritic-icon.svg'
        alt='Metacritic logo icon' id='Metaicon' />
      <span className='marginRight'>
        <img src='https://www.metacritic.com/images/icons/metacritic-wordmark.svg'
          alt='Metacritic logo text' id='Metatext' />
      </span>
    </div>
  )
}

function GameDetails(params) {
  let match = params.match;
  return (
    <div className='block details'>
      <div className='row'> <div className='subtitle'>DEVELOPER:</div><div>Developer</div> </div>
      <div className='row'> <div className='subtitle'>GENRE:</div><div>Gemre</div> </div>
      <div className='row'> <div className='subtitle'>P/F:</div><div>Free</div> </div>
      <a target='_blank' rel='noreferrer' href={`https://store.steampowered.com/app/${match.params.id}/`}> Steam Link </a>
    </div>
  )
}

function Gamepage({ match }) {

  return (
    <main>
      <section>
        <div className='ver'>

          <span className='verrow'>
            <GameLogo match={match} />
            <Metacritic />
          </span>
          <span className='verrow'>
            <GameName />
            <GameDetails match={match} />
          </span>

        </div>
        <div className='description'>
          <h2>Об этой игре</h2>
          <h2 className="bb_tag">Покажите, чего вы стоите!</h2>
          Откроются ли перед вами врата Вальгаллы? Сейчас вы в Вальхейме — 10-м мире викингов. Одолейте могучих чудовищ этих земель и добейтесь расположения богов! На своем пути вы побываете в самых дальних уголках этого мира, от дремучих лесов до высочайших горных вершин. Создавайте могущественное оружие, стройте неприступные замки и отправляйтесь под парусами драккаров к самому горизонту.
          <h2 className="bb_tag">Описание</h2>
          Вальхейм — это игра, в которой вам предстоит исследовать огромный фэнтезийный мир, пропитанный скандинавской мифологией и культурой викингов. Ваше приключение начнется в самом сердце Вальхейма, месте довольно спокойном. Но берегитесь, ведь чем дальше вы будете продвигаться, тем опаснее будет становиться мир вокруг. К счастью, по пути вас будут ждать не только опасности — вы также будете чаще находить ценные материалы, которые весьма пригодятся для создания смертоносного оружия и крепкой брони. Возводите крепости и заставы по всему миру! А со временем постройте несокрушимый драккар и отправьтесь покорять бескрайние океаны в поиске чужестранных земель... Но постарайтесь не заплыть слишком далеко...
          <br />
          <br />
          <strong>Особенности игры:</strong>
          <ul className="bb_ul">
            <li>Гибкая система строительства домов и базы.<br /></li>
            <li>Интуитивное меню создания предметов (оружия, брони, еды и прочего).<br /></li>
            <li>Огромный генерируемый мир.<br /></li>
            <li>Боевая система на основе ударов и блокировок с широким выбором разнообразного оружия.<br /></li>
            <li>Схватки с боссами и уникальные трофеи.<br /></li>
            <li>Увлекательная система питания и здоровья.<br /></li>
            <li>Возможность строительства и передвижения на кораблях.<br /></li>
            <li>Многопользовательский режим (с акцентом на совместную игру).<br /></li>
            <li>Выделенный сервер.</li>
          </ul>
        </div>
      </section>
    </main>
  )
}

export default Gamepage;