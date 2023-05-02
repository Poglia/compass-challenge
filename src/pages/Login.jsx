import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
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
import useAuth from "../hooks/useAuth";

function Login() {
  fDefault.enableInputs("login");

  const { signin } = useAuth();
  const navigate = useNavigate();

  const [arrUsers, setArrUsers] = useState([]);
  const [errorMessage, setErrorMessage] = useState([]);
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const [canSubmit, setCanSubmit] = useState(false);

  const handleLogin = () => {
    const errorMsgRegister = "Usuario não cadastrado";
    const res = userPasswordValidate();

    if(res)
    {
      navigate("/");
    }

    if (!res) {
      setErrorMessage([...errorMessage, errorMsgRegister]);
      return;
    }

   
  };

    function userPasswordValidate(){
      const userValidade = arrUsers.find((username) =>( username.user) === user);
      if(userValidade){
        console.log("Encontrou");
        return true;
      }

      return false;
    }

    useEffect(() => {
      fetch("http://localhost:3002/users")
        .then((response) => response.json())
        .then((data) => {
          setArrUsers(data);
          console.log(arrUsers)
        })
        .catch((error) => {
          console.error(error);
        });
    }, []);

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
              onChange={(event) => setUser(event.target.value)}

            />
            <SInput
              placeholder="Senha"
              type="password"
              name="password-login"
              backGroundIcon={SvgPassword}
              disabled="disabled"
              required
              onChange={(event) => setPassword(event.target.value)}
            />
            <Warning />
            <SButton type="button" onClick={handleLogin}>Logar-se</SButton>
          </SForm>
          <SP2>
            Novo por aqui ?
            <NavLink className="navbar-brand" to="/register">
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
