import React from "react";
import Lottie from "react-lottie";

export default function LottieAnimation({ lotti, classname, width, height, loop }) {
  const defaultOptions = {
    loop: loop,
    autoplay: true,
    controls: false,
    animationData: lotti,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className={classname}>
      <Lottie options={defaultOptions} height={height} width={width}/>
    </div>
  );
};