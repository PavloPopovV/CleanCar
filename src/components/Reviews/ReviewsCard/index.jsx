import React from "react";
import {
  Avatar,
  ReviewCardWrapper,
  ReviewCardTab,
  ReviewCardTop,
  ReviewCardInfo,
  Star,
  StarWrapper,
  ReviewsTabBtn,
  ReviewsCardDescription,
} from "./styles";

export default function ReviewsCard({ data, onClick, active }) {
  const { reviewsText, clientName, clientCar, avatar, rating } = data;

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(<Star key={i} $filled={i < rating}></Star>);
    }
    return stars;
  };

  return (
    <ReviewCardWrapper>
      <ReviewCardTab>
        <ReviewCardTop>
          <Avatar src={avatar} alt="client photo" />
          <ReviewCardInfo>
            <span>{clientName}</span>
            <span>{clientCar}</span>
          </ReviewCardInfo>
        </ReviewCardTop>
        <ReviewsTabBtn aria-label="Open decsription" type="button" onClick={onClick} $isActive={active} />
      </ReviewCardTab>

      <ReviewsCardDescription $isActive={active}>
        <StarWrapper>{renderStars(rating)}</StarWrapper>
        <p>{reviewsText}</p>
      </ReviewsCardDescription>
    </ReviewCardWrapper>
  );
}
