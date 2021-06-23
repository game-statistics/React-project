import React from "react";
import LottieAnimation from "./other/Lottie.js";
import ducks from "../animation/duck.json";

function PageNotFound() {
  return (
    <main className="PageNotFound">
      <LottieAnimation
        lotti={ducks}
        classname={"ManNotFound"}
        height={270}
        width={360}
        loop={true}
      />
    </main>
  );
}

export default PageNotFound;
