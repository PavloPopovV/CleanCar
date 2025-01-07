import styled from "styled-components";
import { ContactsButtonsStyles } from "../../styles/styleSheets";
import mail from "../../assets/img/icons/media/mail.svg";

export const MailBtn = styled.a`
  ${ContactsButtonsStyles}

  &::after {
    background-image: url(${mail});
  }
`;
