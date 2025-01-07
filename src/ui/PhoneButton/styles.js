import styled from "styled-components";
import { ContactsButtonsStyles } from "../../styles/styleSheets";
import phone from "../../assets/img/icons/media/phone.svg";

export const PhoneBtn = styled.a`
  ${ContactsButtonsStyles}

  &::after {
    background-image: url(${phone});
  }
`;
