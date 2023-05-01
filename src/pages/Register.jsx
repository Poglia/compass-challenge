import React, { useState, useRef } from "react";
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
import { SH1, SH3, SP1, SP2, SPLink } from "../styles/Text.style";

// Import SVGs
import SvgName from "../assets/icons/name.svg";
import SvgUser from "../assets/icons/user.svg";
import SvgDate from "../assets/icons/date.svg";
import SvgEmail from "../assets/icons/email.svg";
import SvgPassword from "../assets/icons/password.svg";
import SvgConfirmPassword from "../assets/icons/passConfirm.svg";
import SvgLogo from "../assets/icons/logo.svg";

// Import Warning Component
import Warning from "../components/Warning";

// Import Default Variables - Colors, Fonts...
import { theme } from "../styles/defaultVariables";

function Register() {
  fDefault.enableInputs("register");

  const [canSubmit, setCanSubmit] = useState(true); // Submit By Default
  const [errorMessage, setErrorMessage] = useState([]);

  const password = useRef(null);
  const passwordConfirm = useRef(null);
  const user = useRef(null);
  const email = useRef(null);

  const [colorInputPw, setColorInputpw] = useState(theme.colors.text);
  const [colorInputUser, setColorInputUser] = useState(theme.colors.text);
  const [colorInputEmail, setColorInputEmail] = useState(theme.colors.text);

  /**
   * Executes the validations present in the form
   * Call on the onBlur of the fields
   */
  function formValidate() {
    const okUser = userValidate();
    const okEmail = emailValidate();
    const okPassword = passwordValidate();

    setCanSubmit(okUser && okEmail && okPassword);
  }

  /**
   * Checks the input of name=user
   * Validates if there are spaces in the value
   * @returns bool
   */
  function userValidate() {
    const userErrorMessage = "O usuário não pode conter espaços.";
    const validUser = user.current.value;
    if (validUser.indexOf(" ") !== -1) {
      if (!errorMessage.includes(userErrorMessage)) {
        setColorInputUser(theme.colors.textError);
        setErrorMessage([...errorMessage, userErrorMessage]);
      }
      return false;
    } else {
      setColorInputUser(theme.colors.text);
      setErrorMessage(errorMessage.filter((msg) => msg !== userErrorMessage));

      return true; // Submit
    }
  }

  /**
   * Checks the input of name=email
   * Validates if it has the @ character
   * @returns
   */
  function emailValidate() {
    const emailErrorMessage = "Insira um E-mail válido.";
    const validEmail = email.current.value;

    if (validEmail.indexOf("@") === -1 && validEmail !== "") {
      if (!errorMessage.includes(emailErrorMessage)) {
        setErrorMessage([...errorMessage, emailErrorMessage]);
        setColorInputEmail(theme.colors.textError);
      }
      return false;
    } else {
      if (errorMessage.indexOf(emailErrorMessage) !== -1) {
        setErrorMessage(
          errorMessage.filter((msg) => msg !== emailErrorMessage)
        );
        setColorInputEmail(theme.colors.text);
      }
      return true; //Submit
    }
  }

  /**
   * Check the inputs of name=password and name=password-c
   * Validate if they are equal
   * @returns
   */
  function passwordValidate() {
    const errorMsgPassword = "As senhas devem ser iguais.";
    if (
      password.current.value !== passwordConfirm.current.value &&
      passwordConfirm.current.value !== ""
    ) {
      if (!errorMessage.includes(errorMsgPassword)) {
        setErrorMessage([...errorMessage, errorMsgPassword]);
        setColorInputpw(theme.colors.textError);
      }

      return false;
    } else {
      if (errorMessage.indexOf(errorMsgPassword) !== -1) {
        setErrorMessage(errorMessage.filter((msg) => msg !== errorMsgPassword));
        setColorInputpw(theme.colors.text);
      }

      return true;
    }
  }

  return (
    <AppContext.Provider value={{ errorMessage, setErrorMessage }}>
      <SBody>
        <SSection>
          <SDivTexts>
            <SH1>Olá,</SH1>
            <SP1>Por favor, registre-se para continuar</SP1>
            <SH3>Registro</SH3>
          </SDivTexts>
          <SForm action="" method="post">
            <SInput
              placeholder="Nome"
              type="text"
              name="name"
              backGroundIcon={SvgName}
              required
            />
            <SInput
              placeholder="Usuário"
              style={{ borderColor: colorInputUser }}
              ref={user}
              onBlur={formValidate}
              type="text"
              name="user"
              backGroundIcon={SvgUser}
              disabled="disabled"
              required
            />
            <SInput
              placeholder="Nascimento"
              type="text"
              name="date"
              backGroundIcon={SvgDate}
              onFocus={(e) => {
                e.target.type = "date";
              }}
              onBlur={(e) => {
                e.target.type = "text";
              }}
              required
              readonly
            />
            <SInput
              placeholder="Email"
              style={{ borderColor: colorInputEmail }}
              onBlur={formValidate}
              ref={email}
              type="e-mail"
              name="email"
              backGroundIcon={SvgEmail}
              disabled="disabled"
              required
            />
            <SInput
              style={{ borderColor: colorInputPw }}
              placeholder="Senha"
              type="password"
              name="password"
              ref={password}
              onBlur={formValidate}
              backGroundIcon={SvgPassword}
              disabled="disabled"
              required
            />
            <SInput
              style={{ borderColor: colorInputPw }}
              placeholder="Confirmar Senha"
              type="password"
              name="password-c"
              backGroundIcon={SvgConfirmPassword}
              ref={passwordConfirm}
              onBlur={formValidate}
              disabled="disabled"
              required
            />
            <Warning></Warning>
            <SButton type="submit" value="Logar-se" disabled={!canSubmit}>
              Registrar-se
            </SButton>
          </SForm>
          <SP2>
            Já possui uma conta?
            <NavLink className="navbar-brand" to="/login">
              <SPLink>Faça Login</SPLink>
            </NavLink>
          </SP2>
        </SSection>
        <SSection>
          <SImgLogo src={SvgLogo} />
          <SImgBG src={backGroundImage} alt="Imagem de fundo" />
        </SSection>
      </SBody>
    </AppContext.Provider>
  );
}

export default Register;
