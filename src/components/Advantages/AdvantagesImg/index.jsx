import React from "react";
import src3 from "../../../assets/img/portfolio/car3.webp";
import src4 from "../../../assets/img/portfolio/car4.webp";
import src5 from "../../../assets/img/portfolio/car5.webp";
import {
  AdvantagesImgWrapper,
  AdvantagesGridBox,
  AdvantagesItemTop,
} from "./styles";
import AccentButton from "../../../ui/AccentButton";

export default function AdvantagesImg() {
  return (
    <AdvantagesImgWrapper>
      <AdvantagesItemTop>
        <span>Lorem ipsum dolor sit</span>
        <AccentButton text={"EXPLORE"} />
      </AdvantagesItemTop>
      <AdvantagesGridBox>
        <li>
          <img src={src3} alt="car photo" />
        </li>
        <li>
          <img src={src4} alt="car photo" />
        </li>
        <li>
          <img src={src5} alt="car photo" />
        </li>
      </AdvantagesGridBox>
    </AdvantagesImgWrapper>
  );
}
