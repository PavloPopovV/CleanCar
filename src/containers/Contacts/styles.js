import styled from "styled-components";
import { mxw, breakpoints } from "../../styles/mediaquerySettings";

export const ContactsWrapper = styled.div`
  position: relative;
`;

export const ContactsFormWrapper = styled.div`
  max-width: 500px;
  width: 100%;
`;
export const ContactsMapImg = styled.img`
  width: 100%;
  height: 500px;
  object-fit: cover;

  ${mxw(breakpoints.sm)`
    height:620px;
  `}
`;

export const ContactsBoxInfo = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;
  display: flex;
  padding: 40px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.bodyColor};
  p {
    margin-bottom: 30px;

    ${mxw(breakpoints.sm)`
      margin-bottom: 10px;
    `}

    span {
      color: ${({ theme }) => theme.defaultText};
      font-size: 18px;
    }
  }

  ${mxw(breakpoints.lg)`
    bottom: 10px;
    left: 0;
    width:100%;
    border-radius: 0;
  `}

  ${mxw(breakpoints.md)`
    padding: 20px 10px;
  `}
 
  ${mxw(breakpoints.sm)`
    top:100px;
    bottom: 10px;
    flex-direction:column;
    gap:35px;
  `}
`;
