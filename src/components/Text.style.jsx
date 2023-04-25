import styled from "styled-components";
import { theme } from "../styles/defaultVariables";

export const SH1 = styled.h1`
  color: ${theme.colors.text};
  font-weight: 500;
  font-size: 2.5vw;
`;

export const SH3 = styled.h3`
  color: ${theme.colors.text};
  font-weight: 400;
  font-size: 1.5vw;
`;

export const SP1 = styled.p`
  color: ${theme.colors.text};
  font-weight: 400;
  font-size: 0.8vw;
  width: 20vw;
`;

export const SP2 = styled.p`
  color: ${theme.colors.text};
  font-weight: 400;
  font-size: 0.8vw;
`;

export const SPLink = styled.span`
  display: inline;
  margin-left: 0.3vw;
  font-weight: 500;
`;
