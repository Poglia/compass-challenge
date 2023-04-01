import styled from "styled-components";
import { theme } from "../styles/defaultVariables"

export const SH1 = styled.h1`
  color: ${theme.colors.text};
  font-weight: 500;
  font-size: 3rem;
  `

export const SH3 = styled.h3`
color: ${theme.colors.text};
font-weight: 400;
font-size: ${theme.sizes.small};;
`

export const SP = styled.p`
  color: ${theme.colors.text};
  font-weight: 400;
  font-size: ${theme.sizes.xsmall};
  `

export const SPLink = styled.p`
  display: inline;
  margin-left: 0.3rem;
  font-weight: 500;
`
