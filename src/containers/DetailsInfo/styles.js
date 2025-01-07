import styled from "styled-components";
import { ImgCardsStyles } from "../../styles/styleSheets";
import { mxw, breakpoints } from "../../styles/mediaquerySettings";

export const DetailsInfoList = styled.ul`
  display: flex;
  justify-content: space-between;
  gap: 60px;


  ${mxw(breakpoints.lg)`
     flex-direction: column;
       gap: 20px;
  `}
`;

export const DetailsInfoImg = styled.div`
  ${ImgCardsStyles}
  height: 500px;
  margin-bottom: 30px;
  
  img {
    width: 20%;
    ${mxw(breakpoints.md)`
      width: 40%;
  `}
  }

  ${mxw(breakpoints.md)`
      height: 250px;
  `}

`;

export const DetailsInfoNumber = styled.span`
  display: block;
  font-weight: 600;
  width: 100%;
  margin-bottom: 20px;
  border-bottom: 4px solid ${({ theme }) => theme.backgroundColor};
`;

export const DetailsInfoTitle = styled.span`
  display: block;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 10px;
`;


DetailsInfoList.displayName = "DetailsInfoList";
DetailsInfoNumber.displayName = "DetailsInfoNumber";
DetailsInfoTitle.displayName = "DetailsInfoTitle";
DetailsInfoImg.displayName = "DetailsInfoImg";