import styled from "styled-components";

export const SBody = styled.body`
  background: linear-gradient(180deg, #2e2f36 0%, #17181c 100%);
  display: flex;
  font-family: "Poppins", sans-serif;
`;
export const SSection = styled.section`
  width: 50%;
  /* height: 100vw; */
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const SDivTexts = styled.div`
  text-align: left;
`;

export const SImgLogo = styled.img`
 position: absolute;
 max-width: 500px;
`

export const SImgBG = styled.img`
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;

  width: 100%;
  margin-left: 0em;
  margin-top: 0em;
  margin-right: 0em;
  margin-bottom: 0em;
`;
