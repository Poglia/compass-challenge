import styled, { css } from "styled-components";
import { theme } from "./defaultVariables";

export const SSectionPosts = styled.section`
  background-color: ${theme.colors.backgroundColorSecundary};
  min-height: 100vh;
  margin: 20px;
  border: 2px solid #2e2f36;
  border-radius: 16px;
`;

// Area POSTS
export const SSectionPost = styled.section`
  width: 80%;
  min-width: 30%;
`;

export const SNewPostLawer1 = styled.div`
  display: flex;
`;

export const SIconUser = styled.img`
  border-radius: 100%;
  height: 2.2vw;
  margin: 1.5vw 0 1.2vw 1.2vw;
`;

export const SVgTools = styled.img`
  margin-top: 2px;
  height: 2vw;
  color: white;

  &:hover {
    cursor: pointer;
  }
`;

export const SInputMessage = styled.input`
  ::placeholder {
    font-size: 16px;
    font-family: ${theme.fonts.family.default};
  }

  flex-direction: row;
  align-items: center;
  padding: 8px 24px;
  margin: 1.2vw;
  font-size: 16px;
  width: 100%;
  height: 25px;
  color: rgba(117, 118, 125, 1);

  background: ${theme.colors.inputMessage};
  border: 1px solid ${theme.colors.inputMessage};
  border-radius: 46px;
`;

export const SNewPostLawer2 = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-left: 2%;
`;

export const SButtonPost = styled.button`
  &:hover {
    cursor: pointer;
  }

  display: flex;
  align-items: center;
  justify-content: center;
  height: 15px;
  padding: 20px 50px;
  font-size: 14px;

  border: 2px solid #27282f;
  border-radius: 8px;
  background-color: ${theme.colors.backgroundColorSecundary};
  color: ${theme.colors.text};
`;

export const SAreaButton = styled.div`
  width: 19%;
`;

export const SAreaTools = styled.div`
  display: flex;
  justify-content: space-between;
  width: 30%;
  margin-left: 2%;
`;

export const SSectionNewPost = styled.section`
  background-color: ${theme.colors.backgroundColorSecundary};
  height: 19vh;
  border: 2px solid #2e2f36;
  border-radius: 16px;
  margin: 20px;
`;