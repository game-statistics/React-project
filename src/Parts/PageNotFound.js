import React from "react";
import LottieAnimation from "./other/Lottie.js";
import ducks from "../Animation/duck.json";

function PageNotFound() {
  return (
    <main className="PageNotFound">
      <LottieAnimation
        lotti={ducks}
        classname={"pageNotFound"}
        height={360}
        width={360}
        loop={false}
      />
    </main>
  );
}

export default PageNotFound;
