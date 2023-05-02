import styled, { css } from "styled-components";
import { theme } from "./defaultVariables";

export const SHome = styled.section`
  display: flex;
  background-color: ${theme.colors.backgroundColor};
  color: ${theme.colors.text};
`;

// Area LEFT
export const SSectionLeft = styled.section`
  background-color: ${theme.colors.backgroundColorSecundary};
  min-height: 100vw;
  display: inline-block;
  width: 20%;
  border: 2px solid #2e2f36;

  // Align Logo
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

export const SImgLogo = styled.img`
  height: 5.5vw;
`;

// Area Left END

export const SSectionCenter = styled.section`
  display: flex;
`;

// Area HEADER

export const SSectionHeader = styled.section`
  background-color: ${theme.colors.backgroundColorSecundary};
  display: flex;
  height: 5vw;
  /* max-width: 80%; */
  justify-content: space-between;
  border: 2px solid #2e2f36;
  min-width: 100%;
`;

export const SHeaderAreaHome = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 10%;
  margin-left: 20px;
  min-height: 100%;
`;

export const SHeaderH3 = styled.h3`
  font-weight: 400;
  font-size: 1.2vw;
  line-height: 24px;
`;

export const SHeaderAreaUser = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const SIconHome = styled.img`
  height: 1.5vw;
`;

// Area HEADER  - END

export const SSectionMain = styled.section`
  /* display: flex; */
  width: 80%;
`;



// Area RIGHT
export const SSectionRight = styled.section`
  /* min-height: 100vh; */
  justify-content: space-around;
`;

export const SSectionSquare = styled.section`
  background-color: ${theme.colors.backgroundColorSecundary};
  height: 12.5vw;
  min-width: 14vw;
  border: 2px solid #2e2f36;
  border-radius: 16px;
  margin-top: 20px;

  align-items: start;
  justify-content: left;

`;

export const SAreaRightH3 = styled.h3`
  margin: 10px 0 10px 20px;
  font-weight: 400;
  font-size: 1vw;
  line-height: 24px;
`;

export const SAreaListFriend = styled.div`
  overflow: auto;
  height: 130px;

  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-track {
    background: ${theme.colors.inputMessage};
  }
  ::-webkit-scrollbar-thumb {
    background: ${theme.colors.backgroundColor};
    border-radius: 10px;
  }
`;

export const SFriend = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 10px;
`;

export const SFriendPhoto = styled.img`
  height: 30px;
  width: 30px;
  object-fit: cover;
  border-radius: 50%;
  margin-left: 10px;
`;
export const SFriendName = styled.h3`
  padding-left: 10px;
  font-size: 12px;
  font-weight: 400;
  line-height: 24px;
`;
