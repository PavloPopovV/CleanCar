import React from "react";
import PriceDescription from "../PriceDescription";
import RenderList from "../../RenderList";
import {
  PriceDesc,
  PriceDescList,
  PriceDescWarning,
  PriceDescTerms,
} from "./styles";

export default function PriceItem({ data }) {
  const { description } = data;

  return (
    <>
      <PriceDesc>
        <PriceDescTerms>
          <span>Terms *</span>
          <span>M</span>
          <span>XL</span>
        </PriceDescTerms>

        <PriceDescList>
          <RenderList items={description} Component={PriceDescription} />
        </PriceDescList>
        
        <PriceDescWarning>
          * Delivery time is approximate and may depend on the condition of the
          car
        </PriceDescWarning>
      </PriceDesc>
    </>
  );
}
