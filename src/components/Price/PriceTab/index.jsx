import React from "react";
import { PriceTabWrapper, PriceTitle, PriceTabBtn } from "./styles";

export default function PriceTab({ data, isActive, onClick }) {
  const { title, subtitle } = data;
  return (
    <li>
      <PriceTabWrapper >
        <PriceTitle>
          <span>{title}</span>
          <span>{subtitle}</span>
        </PriceTitle>
        <PriceTabBtn aria-label="open description" type="button" onClick={onClick} $isActive={isActive}/>
      </PriceTabWrapper>
    </li>
  );
}
