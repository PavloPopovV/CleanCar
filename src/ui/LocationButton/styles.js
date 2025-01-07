import styled from "styled-components";
import { ContactsButtonsStyles } from "../../styles/styleSheets";
import locationImg from "../../assets/img/icons/media/location.svg";

export const LocationBtn = styled.a`
 
  ${ContactsButtonsStyles}

  &::after{
    background-image: url(${locationImg});
  
  }
`;
