import React from "react";
import car1 from "../../../assets/img/portfolio/car3.webp";
import car2 from "../../../assets/img/portfolio/car4.webp";
import car3 from "../../../assets/img/portfolio/car5.webp";
import AccentButton from "../../../ui/AccentButton";
import { ReviewsImgWrapper, ReviewsImgList } from "./styles";

export default function ReviewsImg() {
  return (
    <ReviewsImgWrapper>
      <div>
        <AccentButton text={"Confidence"} />
      </div>

      <ReviewsImgList>
        <li>
          <img src={car1} alt="car photo" />
        </li>
        <li>
          <img src={car2} alt="car photo" />
        </li>
        <li>
          <img src={car3} alt="car photo" />
        </li>
      </ReviewsImgList>
    </ReviewsImgWrapper>
  );
}
