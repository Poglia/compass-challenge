import styled, { css } from "styled-components";
import { theme } from "../styles/defaultVariables";

export const SForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* min-height: 700px; */
`;

export const SInput = styled.input`
  ${({ backGroundIcon }) => css`
    background-image: url(${backGroundIcon});
    background-repeat: no-repeat;
    background-position: 19vw, center;
    background-size: 1vw;
    /* webkit-calendar-picker-indicator: opacity: 0;         */
  `}

  ::placeholder {
    color: ${theme.colors.text};
    font-size: 0.8vw;
    justify-content: center;
  }

  font-size: 0.8vw;

  /* -webkit-box-shadow: 0 0 0px 1000px transparent inset; */
  /* -webkit-text-fill-color: #000000 !important;  */

  background-color: transparent;
  box-sizing: border-box;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1.5vw 1.5vw;

  width: 22vw;
  height: 2.5vw;
  min-width: 100px;
  max-width: 500px;
  min-height: 25px;

  /* font-size: 0.8pw; */

  border: 1px solid #f5f5f5;
  border-radius: 100px;
  margin-top: 1.5vw;
  color: white;
`;

export const SButton = styled.button`
  margin: 1vw 0vw 1vw 0vw;
  width: 22vw;
  height: 2.5vw;
  /* min-width: 150px; */
  max-width: 500px;

  background: linear-gradient(180deg, #ad2d14 0%, #f42e07 100%);

  border: 1px solid #fe2e05;
  border-radius: 3rem;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 1vw;

  color: #f5f5f5;
`;
