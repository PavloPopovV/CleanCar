import React from "react";
import { AboutCarImg } from "./styles";

export default function ImgComponent({ data }) {
  const { car, alt } = data;
  return <AboutCarImg src={car} alt={alt} />;
}
