import React from "react";
import {
  PriceDescText,
  PriceDescTime,
  PriceDesc,
  PriceDescWrapper,
  PriceDescInfo,
} from "./styles";

export default function PriceDescription({ data }) {
  const {
    serviceName,
    serviceTime,
    servicePriceM,
    servicePriceXL,
    serviceText,
  } = data;

  return (
    <PriceDescWrapper>
      <PriceDescInfo>
        <span>{serviceName}</span>
        <PriceDescText>{serviceText}</PriceDescText>
      </PriceDescInfo>
      <PriceDesc>
        <PriceDescTime>{serviceTime}</PriceDescTime>
        <span>{servicePriceM}</span>
        <span>{servicePriceXL}</span>
      </PriceDesc>
    </PriceDescWrapper>
  );
}
