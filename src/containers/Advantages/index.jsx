import React from "react";
import MainTitle from "../../ui/Title";
import AdvantagesItem from "../../components/Advantages/AdvantagesItem";
import RenderList from "../../components/RenderList";
import AdvantagesImg from "../../components/Advantages/AdvantagesImg";
import { advantages } from "../../data/advantages";
import { AdvantagesWrapper } from "./styles";


export default function Advantages({ title }) {
  return (
    <section>
      <MainTitle title={title} />
      <AdvantagesWrapper>
        <AdvantagesImg/>
        <ul>
          <RenderList items={advantages} Component={AdvantagesItem} />
        </ul>
      </AdvantagesWrapper>
    </section>
  );
}
