import React from "react";
import LottieAnimation from "./other/Lottie.js";
import ducks from "../Animation/duck.json";

function P404() {
  return (
    <main className='p404'> 
      <LottieAnimation lotti={ducks} classname={'pageNotFound'} height={360} width={360} />
    </main>
  );
}

export default P404;
