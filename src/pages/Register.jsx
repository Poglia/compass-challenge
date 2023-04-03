import React, { useState, useRef } from "react";
import { NavLink } from "react-router-dom";

import backGroundImage from "../assets/icons/background.svg";

import { SButton, SForm, SInput } from "../components/Form.style";
import {
  SBody,
  SSection,
  SImgBG,
  SImgLogo,
  SDivTexts,
} from "../components/Body.style";
import { SH1, SH3, SP1, SP2, SPLink } from "../components/Text.style";

import SvgName from "../assets/icons/name.svg";
import SvgUser from "../assets/icons/user.svg";
import SvgDate from "../assets/icons/date.svg";
import SvgEmail from "../assets/icons/email.svg";
import SvgPassword from "../assets/icons/password.svg";
import SvgConfirmPassword from "../assets/icons/passConfirm.svg";
import SvgLogo from "../assets/icons/logo.svg";

import * as fDefault from "../scripts/default";

import Warning from "../components/react/Warning";
import AppContext from "../AppContext";
import { theme } from "../styles/defaultVariables";

function Register() {
  const [canSubmit, setCanSubmit] = useState(true); // Submit By Default
  fDefault.enableInputs("register");

  const password = useRef(null);
  const passwordConfirm = useRef(null);
  const user = useRef(null);
  const email = useRef("");

  const [colorInputPw, setColorInputpw] = useState("white");
  const [colorInputUser, setColorInputUser] = useState("white");
  const [colorInputEmail, setColorInputEmail] = useState("white");

  const [errorMessage, setErrorMessage] = useState([]);

  function formValidate() {
    const okUser = userValidate();
    const okEmail = emailValidate();
    let okPassword = passwordValidate();

    setCanSubmit(okUser && okEmail && okPassword);
  }

  function userValidate() {
    let userErrorMessage = "O usuário não pode conter espaços.";
    const userValido = user.current.value;
    if (userValido.indexOf(" ") !== -1) {
      // TEM ERRO

      if (!errorMessage.includes(userErrorMessage)) {
        // AINDA NAO EXISTE NO ARRAY
        setColorInputUser(theme.colors.textError);
        setErrorMessage([...errorMessage, userErrorMessage]);
      }

      return false;
    } else {
      setColorInputUser(theme.colors.text);
      setErrorMessage(errorMessage.filter((msg) => msg !== userErrorMessage));
      return true;
    }
  }

  function emailValidate() {
    let emailErrorMessage = "Insira um E-mail válido.";
    const emailValido = email.current.value;
    if (emailValido.indexOf("@") === -1 && emailValido !== "") {
      // TEM ERRO
      console.log("ENTROU NO IF DO EMAIL");
      if (!errorMessage.includes(emailErrorMessage)) {
        console.log("IF -> IF");
        // AINDA NAO EXISTE NO ARRAY
        setErrorMessage([...errorMessage, emailErrorMessage]);
        setColorInputEmail(theme.colors.textError);
      }
      return false;
    } else {
      console.log("ELSE");
      // NAO TEM ERRO
      if (errorMessage.indexOf(emailErrorMessage) !== -1) {
        console.log("ELSE -> IF");
        setErrorMessage(
          errorMessage.filter((msg) => msg !== emailErrorMessage)
        );
        setColorInputEmail(theme.colors.text);
      }
      return true; //Submit
    }
  }

  function passwordValidate() {
    let errorMsgPassword = "As senhas devem ser iguais.";
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

  /*
  const handleRemove = (fruitToRemove) => {
    const index = fruits.indexOf(fruitToRemove);
    if (index !== -1) {
      const newFruits = [...fruits];
      newFruits.splice(index, 1);
      setFruits(newFruits);
    }
  }

  */

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
            <SButton
              // onClick={formValidate}
              type="submit"
              value="Logar-se"
              disabled={!canSubmit}
            >
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
