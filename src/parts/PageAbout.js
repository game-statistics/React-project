import React from "react";
import LottieAnimation from "./other/Lottie.js";
import struc from "../animation/Structure-screenshot.json";
import nadya from "../animation/Nadya.json";
import vova from "../animation/Vova.json";

function PageAbout() {
  return (
    <main className="PageAbout">
      <h1 className="Montserrat">О проекте Game Statistics</h1>

      <LottieAnimation
        lotti={struc}
        classname={"StructureScreenshot"}
        height={360}
        width={360}
        loop={true}
      />

      <p>Этот сайт разработанный как дипломный проект в 2021 году.</p>
      <p>Идея сайта — Надежда Швец. <br/>
      Поддержал инициативу я — Владимир Ярошенко.</p>

      <div className="left">
        <LottieAnimation
          lotti={vova}
          classname={"vova"}
          height={360}
          width={360}
          loop={true}
        />
        <h2>Fronted — Вова</h2>
      </div>

      <div className="right">
        <LottieAnimation
          lotti={nadya}
          classname={"nadya"}
          height={360}
          width={360}
          loop={true}
        />
        <h2>Backend — Надя</h2>
      </div>

      <p>
        Фронтент сделан на React и SCSS. Бекенд сделан с помощью Python и
        библиотек beautiful soup, sql alchemy для работы с БД PostgreSQL.
      </p>
      <p>
        Информация об играх берётся со Steam API и идёт в БД от куда идёт на
        этот сайт.
      </p>
    </main>
  );
}

export default PageAbout;
