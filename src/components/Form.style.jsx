import styled, { css } from "styled-components";
import { theme } from "../styles/defaultVariables";

export const SForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SInput = styled.input`
  ${({ backGroundIcon }) => css`
    background-image: url(${backGroundIcon});
    background-repeat: no-repeat;
    background-position: right, center, center;
    background-position-x: 22.5rem;
    background-position-y: 0.75rem;
    /* webkit-calendar-picker-indicator: opacity: 0;         */
  `}

  ::placeholder {
    color: ${theme.colors.text};
  }

  -webkit-box-shadow: 0 0 0px 1000px transparent inset;
  /* -webkit-text-fill-color: #000000 !important;  */

  background-color: transparent;
  box-sizing: border-box;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;

  width: 25rem;
  height: 3rem;

  font-size: 1rem;

  border: 1px solid #f5f5f5;
  border-radius: 3rem;
  margin-top: 1.5rem;
  color: white;
`;

export const SButton = styled.button`
  margin: 1rem 0 1rem 0;

  width: 25rem;
  height: 3rem;

  background: linear-gradient(180deg, #ad2d14 0%, #f42e07 100%);

  border: 1px solid #fe2e05;
  border-radius: 3rem;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 1rem;

  color: #f5f5f5;
`;
