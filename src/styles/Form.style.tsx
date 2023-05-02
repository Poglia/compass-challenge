import styled, { css } from "styled-components";
import { theme } from "../styles/defaultVariables";

interface Props {
  backGroundIcon: string;
}

export const SForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* min-height: 700px; */
`;

export const SInput = styled.input`
  font-size: 0.8vw;
  color: white;

  background-color: transparent;
  box-sizing: border-box;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 22vw;
  height: 2.5vw;
  min-width: 50px;
  max-width: 500px;
  min-height: 15px;

  border: 0.1vw solid #f5f5f5;
  border-radius: 100px;

  margin-top: 1.2vw;
  padding: 1.5vw 1.5vw;

  ${({ backGroundIcon }: Props) => css`
    background-image: url(${backGroundIcon});
    background-repeat: no-repeat;
    background-position: 19vw, center;
    background-size: 1vw;
  `}

  ::placeholder {
    color: ${theme.colors.text};
    font-size: 0.8vw;
    justify-content: center;
  }

  &:focus {
    outline: none;
  }
`;

export const SButton = styled.button`
  width: 22vw;
  height: 2.5vw;
  max-width: 500px;

  color: #f5f5f5;

  margin: 1.5vw 0vw 1vw 0vw;
  padding: 1.5vw 1.5vw;

  display: flex;
  align-items: center;
  justify-content: center;

  background: linear-gradient(180deg, #ad2d14 0%, #f42e07 100%);

  border: 1px solid #fe2e05;
  border-radius: 100px;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 0.8vw;

  &:hover {
    cursor: pointer;
  }
`;

export const SDivError = styled.div`
  margin-top: 10px;
  color: ${theme.colors.textError};
  display: flex;
`;
