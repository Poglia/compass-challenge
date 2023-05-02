import styled from "styled-components";
import { theme } from "./defaultVariables";

// styledTypeAreaSubareaSubarea....

export const SSectionPosts = styled.section`
  background-color: ${theme.colors.backgroundColorSecundary};
  min-height: 60vh;
  margin: 20px;
  border: 2px solid #2e2f36;
  border-radius: 16px;
  padding: 30px;
`;

export const SSectionNewPost = styled.section`
  background-color: ${theme.colors.backgroundColorSecundary};
  height: 19vh;
  border: 2px solid #2e2f36;
  border-radius: 16px;
  margin: 20px;
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

  &:focus {
    outline: none;
    box-shadow: none;
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

export const SSectionPost = styled.section`
  width: 80%;
  min-width: 30%;
`;
// LIST POSTS
export const SSectionHeaderPost = styled.section`
  display: flex;
  font-size: 12px;
`;

export const SImgHeaderPostPhoto = styled.img`
  border-radius: 100%;
  height: 2.5vw;
  width: 2.5vw;
`;

export const SSectionHeaderPostNameDate = styled.section`
  margin: 0 0 1.2vw 1.2vw;
`;
export const STextHeaderPostName = styled.text``;
export const SSectionHeaderPostDateLocal = styled.section`
  display: flex;
  justify-content: left;
  align-items: center;
  width: 300px;
`;

export const SImgHeaderPostDateIcon = styled.img`
  margin-right: 5px;
`;
export const STextHeaderPostDate = styled.text`
  color: rgba(117, 118, 125, 1);
  margin-right: 5px;
`;
export const STextHeaderPostLocal = styled.text``;

export const STextPostText = styled.text`
  font-size: 12px;
`;

export const SImgPost = styled.img`
  margin-top: 15px;
  width: 100%;
  max-height: 400px;
`;

export const SSectionFooterPost = styled.section``;
export const SSectionFooterPostIcons = styled.section`
  display: flex;
  width: 100%;
  justify-content: space-around;
  margin-bottom: 15px;
`;
export const SSectionFooterIconText = styled.section`
  margin-top: 15px;
  display: flex;
  &:hover {
    cursor: pointer;
  }
`;
export const SImgFooterPostIcon = styled.img`
  filter: brightness(0) invert(1);
  margin-right: 10px;
`;
export const STextFooterPostTexticon = styled.text``;
export const SSectionFooterComment = styled.section`
  margin-top: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const SImgFooterCommentPhoto = styled.img`
  border-radius: 100%;
  height: 2.2vw;
  margin-right: 10px;
`;

export const SSectionFooterCommentInput = styled.section`
  ::placeholder {
    font-size: 16px;
    font-family: ${theme.fonts.family.default};
  }

  align-items: center;
  padding: 8px 24px;
  width: 100%;
  height: 25px;

  background: ${theme.colors.inputMessage};
  border: 1px solid ${theme.colors.inputMessage};
  border-radius: 46px;

  display: flex;
`;

export const SInputFooterComment = styled.input`
  &:focus {
    outline: none;
    box-shadow: none;
  }
  border: none;
  background: ${theme.colors.inputMessage};
  width: 70%;
  font-size: 16px;
  color: rgba(117, 118, 125, 1);
`;
export const SSectionFooterIcons = styled.section`
  width: 220px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const SImgFooterIcon = styled.img`
  height: 1.5vw;
  &:hover {
    cursor: pointer;
  }
`;

export const SSectionComments = styled.section`
  margin-top: 15px;
`;
export const STextCommentsTitle = styled.text`
  display: block;
  margin-bottom: 15px;
`;
export const SSectionComment = styled.section`
  display: flex;
  justify-content: flex-start;
`;

export const SImgComments = styled.img`
  border-radius: 100%;
  height: 2.2vw;
  /* display: flex; */
`;
export const STextCommentsName = styled.text`
  font-size: 12px;
  margin-left: 10px;
  min-width: 100px;
`;
export const STextCommentsComment = styled.text`
  color: #a3a3a3;
  font-size: 12px;
`;

export const SSectionButtonComments = styled.section`
  margin-top: 25px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const SButtonComments = styled.button`
  background: none;
  border: none;

  color: #2d86fc;

  font-weight: 500;
  font-size: 16px;
  line-height: 17px;

  &:hover {
    cursor: pointer;
  }
`;
