import React from "react";
import Lottie from "lottie-react";
import animationData from "../../../public/LottieAnimation.json";

interface PreloadAnimationType {
  extraSmall?: boolean;
  small?: boolean;
  medium?: boolean;
  large?: boolean;
  extraLarge?: boolean;
}
const PreloadAnimation = ({
  extraSmall,
  small,
  medium,
  large,
  extraLarge
}: PreloadAnimationType) => {
  return (
    <Lottie
      animationData={animationData}
      loop={true}
      style={{
        width: extraSmall ? 50 : small ? 80 : medium ? 150 : large ? 300 : extraLarge ? 500 : 0,
        height: extraSmall ? 50 : small ? 80 : medium ? 150 : large ?  300 : extraLarge ? 500 : 0,
      }}
    />
  );
};

export default PreloadAnimation;
