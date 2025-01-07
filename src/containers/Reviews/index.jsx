import React, { useState } from "react";
import MainTitle from "../../ui/Title";
import ReviewsCard from "../../components/Reviews/ReviewsCard";
import { reviews } from "../../data/reviews";
import { ReviewsWrapper, ReviewsListWrapper } from "./styles";
import ReviewsImg from "../../components/Reviews/ReviewsImg";

export default function Reviews({ title }) {
  const [activeCard, setActiveCard] = useState(reviews.id);
  
  const handleCardClick = (id) => {
    setActiveCard(id === activeCard ? null : id);
  };
  
  return (
    <section>
      <MainTitle title={title} />
      <ReviewsWrapper>
        <ReviewsListWrapper>
          {reviews.map((review) => (
            <ReviewsCard
              key={review.id}
              data={review}
              active={activeCard === review.id}
              onClick={() => handleCardClick(review.id)}
            />
          ))}
        </ReviewsListWrapper>
        <ReviewsImg />
      </ReviewsWrapper>
    </section>
  );
}
