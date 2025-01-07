import React from "react";
import {
  DetailsIntoTitle,
  DetailsIntoText,
  DetailsIntroImg,
  DetailsIntroList,
} from "./styles";

export default function DetailsIntro({ car }) {
  const { name, detailsIntro } = car;
  const { text, photos } = detailsIntro;

  return (
    <section>
      <DetailsIntoTitle>{name}</DetailsIntoTitle>
      <DetailsIntoText>
        <p>{text}</p>
      </DetailsIntoText>
      <DetailsIntroList>
        {photos.map((item, index) => (
          <DetailsIntroImg key={index}>
            <img src={item} alt="car photo" />
          </DetailsIntroImg>
        ))}
      </DetailsIntroList>
    </section>
  );
}
