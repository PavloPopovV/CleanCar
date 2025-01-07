import { css } from "styled-components";
import icon from "../assets/img/icons/arrow.svg";
import { mxw, breakpoints } from "../styles/mediaquerySettings";

export const Container = css`
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  padding: 15px;

  ${mxw(breakpoints.md)`
    padding: 5px;
  `}
`;

export const ArrowBtn = css`
  display: block;
  width: 30px;
  height: 30px;
  background-image: url(${icon});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: 0 0;
  transition: transform 0.3s linear;

  ${mxw(breakpoints.md)`
    width: 20px;
    height: 20px;
  `}
`;

export const StyleSpan = css`
  display: block;
  font-size: 14px;
  color: ${({ theme }) => theme.colorText};
  font-weight: 400;
`;

export const PriceInfoWrapper = css`
  max-width: 140px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  font-weight: 500;
  span:nth-child(2) {
    position: relative;
    &::after,
    &::before {
      content: "";
      position: absolute;
      width: 2px;
      height: 100%;
      background-color: ${({ theme }) => theme.colorText};
    }
    &::after {
      right: -12px;
    }
    &::before {
      left: -12px;
    }
  }
`;

export const FormFieldStyles = css`
  display: block;
  max-width: 500px;
  width: 100%;
  font-size: 14px;
  padding: 0 6px;
`;

export const ContactsButtonsStyles = css`
  position: relative;
  display: block;
  margin-bottom: 15px;
  padding-left: 40px;

  &::after {
    content: "";
    position: absolute;
    width: 20px;
    height: 20px;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    background-repeat: no-repeat;
    background-position: 0 0;
    background-size: contain;
    /* filter: invert(91%) sepia(0%) saturate(2825%) hue-rotate(326deg) brightness(74%) contrast(106%); */
  }
`;

export const ReviewsActiveTabs = css`
  position: relative;
  transform: translateX(0);
  opacity: 1;
`;
export const ReviewsUnActiveTabs = css`
  position: absolute;
  transform: translateX(-100%);
  opacity: 0;
`;

export const ServicesActiveTabs = css`
  position: relative;
  transform: translateY(0);
  opacity: 1;
`;

export const ServicesUnActiveTabs = css`
  position: absolute;
  transform: translateY(-100%);
  opacity: 0;
`;

export const ImgCardsStyles = css`
  background-color: ${({ theme }) => theme.backgroundColor};
  display: flex;
  justify-content: center;
  align-items: center;
`;
