import styled from "styled-components";
import { FormFieldStyles } from "../../../styles/styleSheets";


export const LabelStyle = styled.label`
  position: relative;
  display: block;
  margin-bottom: 30px;
`;

export const InputStyle = styled.input`
  ${FormFieldStyles}
  border-bottom: 1px solid ${({ $hasError, theme }) =>
    $hasError ? theme.errorColor : theme.borderColor};
`;

export const TextAreaStyle = styled.textarea`
  ${FormFieldStyles}
  border-bottom: 1px solid ${({ $hasError, theme }) =>
    $hasError ? theme.errorColor : theme.borderColor};
  resize: none;
`;

export const ErrorTextStyle = styled.span`
  position: absolute;
  font-size: 12px;
  color: ${({ theme }) => theme.errorColor};
`;

export const BtnSubmitStyles = styled.button`
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.defaultText};
  color: ${({ theme }) => theme.bodyColor};

`;
InputStyle.displayName = "InputStyle";
TextAreaStyle.displayName = "TextAreaStyle";
LabelStyle.displayName = "LabelStyle";
ErrorTextStyle.displayName = "ErrorTextStyle";
BtnSubmitStyles.displayName = "BtnSubmitStyles";
