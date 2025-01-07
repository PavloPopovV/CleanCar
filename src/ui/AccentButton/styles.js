import styled from "styled-components";

export const AccentBtn = styled.button`
  position: relative;
  text-transform: uppercase;
  padding: 9px 44px 9px 14px;
  border: 1px solid #000;
  border-radius: 30px;

  &::after {
    content: "";
    position: absolute;
    width: 10px;
    height: 10px;
    background-color: #000;
    border-radius: 50%;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
  }
`;

AccentBtn.displayName = "AccentBtn";
