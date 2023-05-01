import React from "react";

import SvgLogo from "../assets/icons/logo.svg";
import Macaco from "../assets/icons/macaco.jpg";
// import AppContext from "../AppContext";

// Import SVGs
import SvgHome from "../assets/icons/home.svg";
import SvgCamera from "../assets/icons/camera.svg";
import SvgPhoto from "../assets/icons/photo.svg";
import SvgFile from "../assets/icons/upfile.svg";
import SvgLocal from "../assets/icons/localization.svg";
import SvgEmoji from "../assets/icons/emoji.svg";

import {
  SHome,
  SSectionLeft,
  SSectionMain,
  SSectionCenter,
  SSectionNewPost,
  SSectionPosts,
  SSectionRight,
  SSectionHeader,
  SSectionPost,
  SSectionSquare,
  SImgLogo,
  SIconUser,
  SInputMessage,
  SNewPostLawer1,
  SNewPostLawer2,
  SVgTools,
  SButtonPost,
  SAreaTools,
  SAreaButton,
  SHeaderAreaHome,
  SHeaderAreaUser,
  SIconHome,
  SHeaderH3,
  SAreaRightH3,
  SAreaListFriend,
  SFriend,
  SFriendPhoto,
  SFriendName
} from "../styles/Home.style";

function Home() {
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
          <SHeaderAreaUser><h2>Name Foto</h2></SHeaderAreaUser>
          
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
              <h3>posts</h3>
              <h3>posts</h3>
              <h3>posts</h3>
              <h3>posts</h3>
              <h3>posts</h3>
            </SSectionPosts>
          </SSectionPost>
          <SSectionRight>
            <SSectionSquare>
              <SAreaRightH3>Meus Amigos</SAreaRightH3>
              <SAreaListFriend>
                <SFriend>
                  <SFriendPhoto src={Macaco}></SFriendPhoto>
                  <SFriendName>Pedro F. Poglia</SFriendName>
                </SFriend>
                <SFriend>
                  <SFriendPhoto src={Macaco}></SFriendPhoto>
                  <SFriendName>Pedro F. Poglia</SFriendName>
                </SFriend>
                <SFriend>
                  <SFriendPhoto src={Macaco}></SFriendPhoto>
                  <SFriendName>Pedro F. Poglia</SFriendName>
                </SFriend>
                <SFriend>
                  <SFriendPhoto src={Macaco}></SFriendPhoto>
                  <SFriendName>Pedro F. Poglia</SFriendName>
                </SFriend>
              </SAreaListFriend>
            </SSectionSquare>
            <SSectionSquare>
            </SSectionSquare>
            <SSectionSquare>
            </SSectionSquare>
          </SSectionRight>
        </SSectionCenter>
      </SSectionMain>
    </SHome>
  );
}

export default Home;
