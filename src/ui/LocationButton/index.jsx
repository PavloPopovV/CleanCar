import React from "react";
import { LocationBtn } from "./styles";

export default function LocationButton({ data }) {
  const { link, area } = data;
  return (
    <>
      <LocationBtn href={link} target="blank">
        {area}
      </LocationBtn>
    </>
  );
}
