import React from "react";
import AccentButton from "../../ui/AccentButton";
import { heroData } from "../../data/hero";
import {
  HeroWrapper,
  HeroImg,
  HeroTitle,
  HeroLeftSide,
  HeroInfo,
} from "./styles";

export default function Hero() {
  const { title, img, subtitle, price, text } = heroData;

  return (
    <HeroWrapper>
      <HeroLeftSide>
        <HeroInfo>
          <HeroTitle>{title}</HeroTitle>
          <span>{subtitle}</span>
          <span>From {price}</span>
        </HeroInfo>
        <AccentButton text={"Explore"} />
      </HeroLeftSide>
      <div>
        <picture>
          <source srcSet={img} media="(min-width: 800px)" />
          <HeroImg src={img} alt="car picture" />
        <link rel="preload" href={img} as="image" />
        </picture>
        <div>
          <p>{text}</p>
        </div>
      </div>
    </HeroWrapper>
  );
}
