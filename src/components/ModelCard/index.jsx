import React from "react";
import { ModelCardWrapper, ModelCardImg, ModelCardInfo, ModelCardText, ModalCardBtn } from "./styles";


export default function ModelCard({ data }) {
  const { image, price, name, id } = data;
  return (
    <ModelCardWrapper>
      <ModelCardImg src={image} alt="car photo" />
      <ModelCardInfo>
        <ModelCardText>
          <span>{name}</span>
          <span>{price}</span>
        </ModelCardText>
        <ModalCardBtn to={`/model/${id}`} aria-label={`Перейти до моделі ${id}`}/>
      </ModelCardInfo>
    </ModelCardWrapper>
  );
}
