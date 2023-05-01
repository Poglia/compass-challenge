import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import AppContext from "../AppContext";

import backGroundImage from "../assets/icons/background.svg";
import * as fDefault from "../scripts/default";

// Import Component-Styles
import { SButton, SForm, SInput } from "../styles/Form.style";
import {
  SBody,
  SSection,
  SImgBG,
  SImgLogo,
  SDivTexts,
} from "../styles/Body.style";
import { SH1, SP1, SP2, SH3, SPLink } from "../styles/Text.style";

// Import SVGs
import SvgUser from "../assets/icons/user.svg";
import SvgPassword from "../assets/icons/password.svg";
import SvgLogo from "../assets/icons/logo.svg";

// Import Warning Component
import Warning from "../components/Warning";

function Login() {
  fDefault.enableInputs("login");

  // For the future when there are validations!
  const [errorMessage, setErrorMessage] = useState([]);

  return (
    <AppContext.Provider value={{ errorMessage, setErrorMessage }}>
      <SBody>
        <SSection>
          <SDivTexts>
            <SH1>Olá,</SH1>
            <SP1>Para continuar navegando de forma segura, efetue o login</SP1>
            <SH3>Login</SH3>
          </SDivTexts>
          <SForm action="" method="post">
            <SInput
              placeholder="Usuário"
              type="text"
              name="name-login"
              backGroundIcon={SvgUser}
              disabled="disabled"
              required
            />
            <SInput
              placeholder="Senha"
              type="password"
              name="password-login"
              backGroundIcon={SvgPassword}
              disabled="disabled"
              required
            />
            <Warning />
            <SButton type="submit">Logar-se</SButton>
          </SForm>
          <SP2>
            Novo por aqui ?
            <NavLink className="navbar-brand" to="/">
              <SPLink>Registre-se</SPLink>
            </NavLink>
          </SP2>
        </SSection>
        <SSection>
          <SImgLogo src={SvgLogo} />
          <SImgBG src={backGroundImage} alt="Imagem de fundo"></SImgBG>
        </SSection>
      </SBody>
    </AppContext.Provider>
  );
}

export default Login;
