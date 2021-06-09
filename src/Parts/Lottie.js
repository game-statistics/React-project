import React from "react";
import Lottie from "react-lottie";

export default function LottieAnimation({ lotti, classname }) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: lotti,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className={classname}>
      <Lottie options={defaultOptions}/>
    </div>
  );
};