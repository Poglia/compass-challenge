import styled from "styled-components";
import { theme } from "../styles/defaultVariables";

export const SH1 = styled.h1`
  color: ${theme.colors.text};
  font-weight: 500;
  font-size: 3vw;
`;

export const SH3 = styled.h3`
  color: ${theme.colors.text};
  font-weight: 400;
  font-size: ${theme.sizes.small}; ;
`;

export const SP1 = styled.p`
  color: ${theme.colors.text};
  font-weight: 400;
  font-size: ${theme.sizes.xsmall};
  width: 25vw;
`;

export const SP2 = styled.p`
  color: ${theme.colors.text};
  font-weight: 400;
  font-size: ${theme.sizes.xsmall};
`;

export const SPLink = styled.p`
  display: inline;
  margin-left: 0.3vw;
  font-weight: 500;
`;
