import React from "react";
import { TITLES } from "../../data/titles";
import MainTitle from "../../ui/Title";
import {
  DetailsInfoList,
  DetailsInfoNumber,
  DetailsInfoTitle,
  DetailsInfoImg,
} from "./styles";

export default function DetailsInfo({ car }) {
  const { image, detailsInfo } = car;
  return (
    <section>
      <MainTitle title={TITLES.BODYWORK} />
      <DetailsInfoImg>
        <img src={image} alt="car photo" />
      </DetailsInfoImg>
      <DetailsInfoList>
        {detailsInfo.map((item, index) => (
          <li key={index}>
            <DetailsInfoNumber>{item.number}</DetailsInfoNumber>
            <DetailsInfoTitle>{item.title}</DetailsInfoTitle>
            <p>{item.text}</p>
          </li>
        ))}
      </DetailsInfoList>
    </section>
  );
}
