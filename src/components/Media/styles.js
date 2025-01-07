import styled from "styled-components";
import inst from '/icons/inst.svg';
import fb from "../../assets/img/icons/media/fb.svg";
import tg from "/icons/tg.svg";


export const MediaWrapper = styled.ul`
  max-width: 100px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const MediaBtn = styled.a`
  display: block;
  width: 24px;
  height: 24px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 0 0;

  &.inst {
    background-image: url(${inst});
  }

  &.fb {
    background-image: url(${fb});
  }
  &.tg {
    background-image: url(${tg});
  }
`;

MediaWrapper.displayName = "MediaWrapper";
MediaBtn.displayName = "MediaBtn";
