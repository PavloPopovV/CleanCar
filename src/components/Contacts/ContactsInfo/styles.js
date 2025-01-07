import styled from "styled-components";
import { mxw, breakpoints } from "../../../styles/mediaquerySettings";

export const ContactsDetails = styled.div`
  max-width: 300px;
  width: 100%;
  margin-right: 50px;

  ${mxw(breakpoints.sm)`
      margin-right: 0;
  `}
`;

export const ContactsButtons = styled.div`
  margin-bottom: 30px;


`;
