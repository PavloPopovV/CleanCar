import React from "react";
import {
  AdvantagesItemWrapper,
  AdvantagesText,
  AdvantagesTitle,
} from "./styles";

export default function AdvantagesItem({ data }) {
  const { title, text, className } = data;

  return (
    <AdvantagesItemWrapper className={className}>
      <AdvantagesTitle>{title}</AdvantagesTitle>
      <div>
        <AdvantagesText>{text}</AdvantagesText>
      </div>
    </AdvantagesItemWrapper>
  );
}
