import { css } from "styled-components";

export const breakpoints = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400,
};

export const mxw = (width) => (...args) => css`
  @media (max-width: ${width}px) {
    ${css(...args)}
  }
`;

export const lineClamp = (lines = 1) => css`
  overflow: hidden;
  text-overflow: ellipsis;
  ${lines <= 1
    ? "white-space: nowrap;"
    : `
    display: -webkit-box;
    -webkit-line-clamp: ${lines};
    -webkit-box-orient: vertical;
  `}
`;
