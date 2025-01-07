import React from "react";
import MainTitle from "../../ui/Title";
import PriceList from "../../components/Price/PriceList";
import { PriceListWrapper } from "./styles";

export default function Price({ title }) {
  return (
    <section>
      <MainTitle title={title} />
      <PriceListWrapper>
        <PriceList />
      </PriceListWrapper>
    </section>
  );
}
