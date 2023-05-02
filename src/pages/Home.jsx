import React, { useState, useEffect } from "react";

import SvgLogo from "../assets/icons/logo.svg";
import Macaco from "../assets/icons/macaco.jpg";
import Exemplo from "../assets/icons/exemplo.png";
import SvgClock from "../assets/icons/clock.svg";
// import AppContext from "../AppContext";

// Import SVGs
import SvgHome from "../assets/icons/home.svg";
import SvgCamera from "../assets/icons/camera.svg";
import SvgPhoto from "../assets/icons/photo.svg";
import SvgFile from "../assets/icons/upfile.svg";
import SvgLocal from "../assets/icons/localization.svg";
import SvgEmoji from "../assets/icons/emoji.svg";

import SvgLike from "../assets/icons/like.svg";
import SvgComment from "../assets/icons/comment.svg";
import SvgShare from "../assets/icons/share.svg";

import {
  SHome,
  SSectionLeft,
  SSectionMain,
  SSectionCenter,
  SSectionRight,
  SSectionHeader,
  SSectionSquare,
  SImgLogo,
  SHeaderAreaHome,
  SHeaderAreaUser,
  SIconHome,
  SHeaderH3,
  SAreaRightH3,
  SAreaListFriend,
  SFriend,
  SFriendPhoto,
  SFriendName,
} from "../styles/Home.style";

import {
  SSectionPosts,
  SSectionPost,
  SButtonPost,
  SSectionNewPost,
  SNewPostLawer1,
  SNewPostLawer2,
  SIconUser,
  SInputMessage,
  SVgTools,
  SAreaTools,
  SAreaButton,
  SSectionHeaderPost,
  SImgHeaderPostPhoto,
  SSectionHeaderPostNameDate,
  STextHeaderPostName,
  SSectionHeaderPostDateLocal,
  SImgHeaderPostDateIcon,
  STextHeaderPostDate,
  STextHeaderPostLocal,
  STextPostText,
  SImgPost,
  SSectionFooterPost,
  SSectionFooterPostIcons,
  SSectionFooterIconText,
  SImgFooterPostIcon,
  STextFooterPostTexticon,
  SSectionFooterComment,
  SImgFooterCommentPhoto,
  SSectionFooterCommentInput,
  SInputFooterComment,
  SSectionFooterIcons,
  SImgFooterIcon,
  SSectionComments,
  SSectionComment,
  STextCommentsTitle,
  SImgComments,
  STextCommentsName,
  STextCommentsComment,
  SSectionButtonComments,
  SButtonComments,
} from "../styles/HomePosts.style";

function Home() {
  const [friends, setFriends] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3002/users")
      .then((response) => response.json())
      .then((data) => {
        setFriends(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:3002/posts")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <SHome>
      <SSectionLeft>
        <SImgLogo src={SvgLogo} />
      </SSectionLeft>
      <SSectionMain>
        <SSectionHeader>
          <SHeaderAreaHome>
            <SIconHome src={SvgHome}></SIconHome>
            <SHeaderH3>Home</SHeaderH3>
          </SHeaderAreaHome>
          <SHeaderAreaUser>
            <h2>Name Foto</h2>
          </SHeaderAreaUser>
        </SSectionHeader>
        <SSectionCenter>
          <SSectionPost>
            <SSectionNewPost>
              <SNewPostLawer1>
                <SIconUser src={Macaco}></SIconUser>
                <SInputMessage placeholder="No que você está pesando?"></SInputMessage>
              </SNewPostLawer1>
              <SNewPostLawer2>
                <SAreaTools>
                  <SVgTools src={SvgCamera}></SVgTools>
                  <SVgTools src={SvgPhoto}></SVgTools>
                  <SVgTools src={SvgFile}></SVgTools>
                  <SVgTools src={SvgLocal}></SVgTools>
                  <SVgTools src={SvgEmoji}></SVgTools>
                </SAreaTools>
                <SAreaButton>
                  <SButtonPost>Postar</SButtonPost>
                </SAreaButton>
              </SNewPostLawer2>
            </SSectionNewPost>
            <SSectionPosts>
              <SSectionHeaderPost>
                <SImgHeaderPostPhoto src={Macaco}></SImgHeaderPostPhoto>
                <SSectionHeaderPostNameDate>
                  <STextHeaderPostName>Nome da pessoa</STextHeaderPostName>
                  <SSectionHeaderPostDateLocal>
                    <SImgHeaderPostDateIcon
                      src={SvgClock}
                    ></SImgHeaderPostDateIcon>
                    <STextHeaderPostDate>
                      12 minutos atras em{" "}
                    </STextHeaderPostDate>
                    <STextHeaderPostLocal>
                      Paisagens Exuberantes
                    </STextHeaderPostLocal>
                  </SSectionHeaderPostDateLocal>
                </SSectionHeaderPostNameDate>
              </SSectionHeaderPost>
              <STextPostText>
                Texto do post ahahhah ahahhah ahaha Texto do post ahahhah
                ahahhah ahaha Texto do post ahahhah ahahhah ahaha Texto do post
                ahahhah ahahhah ahaha Texto do post ahahhah ahahhah ahaha Texto
                do post ahahhah ahahhah ahaha Texto do post ahahhah ahahhah
                ahahaTexto do post ahahhah ahahhah ahaha Texto do post ahahhah
                ahahhah ahahaTexto do post ahahhah ahahhah
              </STextPostText>
              <SImgPost src={Exemplo}></SImgPost>
              <SSectionFooterPost>
                <SSectionFooterPostIcons>
                  <SSectionFooterIconText>
                    <SImgFooterPostIcon src={SvgLike}></SImgFooterPostIcon>
                    <STextFooterPostTexticon>Curtiu</STextFooterPostTexticon>
                  </SSectionFooterIconText>
                  <SSectionFooterIconText>
                    <SImgFooterPostIcon src={SvgComment}></SImgFooterPostIcon>
                    <STextFooterPostTexticon>
                      Comentários
                    </STextFooterPostTexticon>
                  </SSectionFooterIconText>
                  <SSectionFooterIconText>
                    <SImgFooterPostIcon src={SvgShare}></SImgFooterPostIcon>
                    <STextFooterPostTexticon>
                      Compartilhar
                    </STextFooterPostTexticon>
                  </SSectionFooterIconText>
                </SSectionFooterPostIcons>
                <SSectionFooterComment>
                  <SImgFooterCommentPhoto src={Macaco}></SImgFooterCommentPhoto>
                  <SSectionFooterCommentInput>
                    <SInputFooterComment placeholder="No que você está pesando?"></SInputFooterComment>
                    <SSectionFooterIcons>
                      <SImgFooterIcon src={SvgCamera}></SImgFooterIcon>
                      <SImgFooterIcon src={SvgPhoto}></SImgFooterIcon>
                      <SImgFooterIcon src={SvgFile}></SImgFooterIcon>
                      <SImgFooterIcon src={SvgLocal}></SImgFooterIcon>
                      <SImgFooterIcon src={SvgEmoji}></SImgFooterIcon>
                    </SSectionFooterIcons>
                  </SSectionFooterCommentInput>
                </SSectionFooterComment>
              </SSectionFooterPost>
              <SSectionComments>
                <STextCommentsTitle>Todos os comentários</STextCommentsTitle>
                <SSectionComment>
                  <SImgComments src={Macaco}></SImgComments>
                  <STextCommentsName>Junior Saraiva: </STextCommentsName>
                  <STextCommentsComment>
                    Que bela paisagem! As cores são simplesmente deslumbrantes..
                    Que bela paisagem! As cores são simplesmente deslumbrantes..
                    Que bela paisagem! As cores são simplesmente deslumbrantes..
                    Que bela paisagem! As cores são simplesmente deslumbrantes..
                    Que bela paisagem! As cores são simplesmente deslumbrantes..
                  </STextCommentsComment>
                </SSectionComment>
              </SSectionComments>
              <SSectionButtonComments>
                <SButtonComments>Ver todos os Comentários</SButtonComments>
              </SSectionButtonComments>
            </SSectionPosts>
          </SSectionPost>
          <SSectionRight>
            <SSectionSquare>
              <SAreaRightH3>Meus Amigos</SAreaRightH3>
              <SAreaListFriend>
                {friends.map((friend) => (
                  <SFriend key={friend.name}>
                    <SFriendPhoto src={Macaco}></SFriendPhoto>
                    <SFriendName>{friend.name}</SFriendName>
                  </SFriend>
                ))}
              </SAreaListFriend>
            </SSectionSquare>
            <SSectionSquare></SSectionSquare>
            <SSectionSquare></SSectionSquare>
          </SSectionRight>
        </SSectionCenter>
      </SSectionMain>
    </SHome>
  );
}

export default Home;
