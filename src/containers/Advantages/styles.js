import styled from "styled-components";
import { mxw, breakpoints } from "../../styles/mediaquerySettings";

export const AdvantagesWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    border-top: 1px solid ${({ theme }) => theme.borderColor};
    align-items: center;
    gap: 30px;

    ${mxw(breakpoints.lg)`
        padding-top:10px;
    `}
`
AdvantagesWrapper.displayName='AdvantagesWrapper'