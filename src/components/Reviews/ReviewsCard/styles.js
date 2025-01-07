import styled from "styled-components";
import star from "../../../assets/img/icons/star.svg";
import {
  ReviewsActiveTabs,
  ReviewsUnActiveTabs,
} from "../../../styles/styleSheets";

export const ReviewCardWrapper = styled.li`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid ${({ theme }) => theme.borderColor};
  padding: 10px 0;
`;

export const ReviewCardTab = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ReviewCardTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
`;

export const ReviewCardInfo = styled.div`
  span {
    display: block;
    margin-bottom: 5px;
    &:nth-child(2) {
      color: ${({ theme }) => theme.colorText};
    }
  }
`;


export const Avatar = styled.img`
  max-width: 100%;
  width: 60px;
  max-height: 100%;
  height: 60px;
  border-radius: 50%;
  display: block;
  object-fit: cover;
`;

export const StarWrapper = styled.div`
  display: flex;
  gap: 4px;
  margin-bottom: 5px;
`;

export const Star = styled.span`
  position: relative;
  display: block;
  width: 16px;
  height: 16px;

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url(${star});
    background-repeat: no-repeat;
    background-position: 0 0;
    background-size: contain;
    filter: ${(props) =>
      props.$filled
        ? "invert(69%) sepia(82%) saturate(537%) hue-rotate(1deg) brightness(107%) contrast(102%);"
        : "invert(86%) sepia(85%) saturate(1%) hue-rotate(313deg) brightness(92%) contrast(106%);"};
  }
`;

export const ReviewsTabBtn = styled.button`
  position: relative;
  display: block;
  width: 20px;
  height: 20px;

  &::after,
  &::before {
    content: "";
    position: absolute;
    width: 20px;
    height: 4px;
    background-color: ${({ theme }) => theme.borderColor};
    top: 50%;
    left: 50%;
  }

  &::after {
    transform: translate(-50%, -50%) rotate(90deg);
    transform: ${({ $isActive }) =>
      $isActive
        ? "translate(-50%, -50%) rotate(0)"
        : "translate(-50%, -50%) rotate(90deg)"};
    transition: all 0.3s linear;
  }
  &::before {
    transform: translate(-50%, -50%) rotate(0);
  }
`;

export const ReviewsCardDescription = styled.div`
  ${({ $isActive }) => ($isActive ? ReviewsActiveTabs : ReviewsUnActiveTabs)};
  transition: transform 0.3s linear;
  padding: 10px 20px 0 0;
`;

Avatar.displayName = "Avatar";
ReviewCardWrapper.displayName = "ReviewCardWrapper";
ReviewCardTab.displayName = "ReviewCardTab";
ReviewCardTop.displayName = "ReviewCardTop";
ReviewCardInfo.displayName = "ReviewCardInfo";
Star.displayName = "Star";
StarWrapper.displayName = "StarWrapper";
ReviewsTabBtn.displayName = "ReviewsTabBtn";
ReviewsCardDescription.displayName = "ReviewsCardDescription";
