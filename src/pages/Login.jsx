import { NavLink } from "react-router-dom";
import backGroundImage from "../assets/icons/background.svg";
import { SButton, SForm, SInput } from "../components/Form.style";
import { SBody, SSection, SImg } from "../components/Body.style";
import { SH1, SP } from "../components/Text.style";

const Login = () => (
  <SBody>
    <SSection>
      <SH1>Olá</SH1>
      <SP>Para continuar navegando de forma segura, efetue o login</SP>
      <SForm action="" method="post">
        <SInput placeholder="Usuário" type="text" name="name" />
        <SInput placeholder="Senha" type="password" name="name" />
        <SButton type="submit">Logar-se</SButton>
      </SForm>
      <SP>
        Novo por aqui?
        <NavLink className="navbar-brand" to="/">
          <b>Registre-se</b>
        </NavLink>
      </SP>
    </SSection>
    <SSection>
      <SImg src={backGroundImage} alt="Imagem de fundo" />
    </SSection>
  </SBody>
);

export default Login;