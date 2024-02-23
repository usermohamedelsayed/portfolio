"use client";
import loadingMotion from "../../animation/loading.json";
import { Player } from "@lottiefiles/react-lottie-player";
export default function Loading() {
  return (
    <Player
      className="loddingAnamtionProducts"
      src={loadingMotion}
      autoplay
      loop
      style={{ maxWidth: "440px", width: "100%" }}
    />
  );
}
