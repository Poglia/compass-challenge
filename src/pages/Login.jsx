import { NavLink } from "react-router-dom";
import backGroundImage from "../assets/icons/background.svg";
import { SButton, SForm, SInput } from "../components/Form.style";
import { SBody, SSection, SImg, SDivTexts } from "../components/Body.style";
import { SH1, SP1, SP2, SH3, SPLink } from "../components/Text.style";

const Login = () => (
  <SBody>
    <SSection>
      <SDivTexts>
        <SH1>Olá</SH1>
        <SP1>Para continuar navegando de forma segura, efetue o login</SP1>
        <SH3>Login</SH3>
      </SDivTexts>
      <SForm action="" method="post">
        <SInput placeholder="Usuário" type="text" name="name" />
        <SInput placeholder="Senha" type="password" name="name" />
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
      <SImg src={backGroundImage} alt="Imagem de fundo" />
    </SSection>
  </SBody>
);

export default Login;
