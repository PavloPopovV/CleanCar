import React from "react";
import { useParams } from "react-router-dom";
import { models } from "../../data/models";

import DetailsIntro from "../../containers/DetailsIntro";
import DetailsInfo from "../../containers/DetailsInfo";

export default function ModelDetails() {
  let { id } = useParams();
  const car = models.find((item) => item.id === id);

  if (!car) return <div>Автомобіль не знайдено</div>;

  return (
    <>
      <DetailsIntro car={car} />
      <DetailsInfo car={car}/>
    </>
  );
}
