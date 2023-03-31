import { NavLink } from "react-router-dom";
import backGroundImage from "../assets/icons/background.svg";
import { SButton, SForm, SInput } from "../components/Form.style";
import { SBody, SSection, SImg } from "../components/Body.style";
import { SH1, SP } from "../components/Text.style";

const Register  = () => (
  <SBody>
    <SSection>
      <SH1>Olá</SH1>
      <SP>Por favor, registre-se para continuar</SP>
      <SForm action="" method="post">
        <SInput placeholder="Nome" type="text" name="name" />
        <SInput placeholder="Usuário" type="text" name="name" />
        <SInput placeholder="Nascimento" type="date" name="name" />
        <SInput placeholder="Email" type="e-mail" name="name" />
        <SInput placeholder="Senha" type="password" name="name" />
        <SInput placeholder="Confirmar Senha" type="password" name="name" />
        <SButton type="submit" value="Logar-se">
          Registrar-se
        </SButton>
      </SForm>
      <SP>
        Já possui uma conta?
        <NavLink className="navbar-brand" to="/login">
          <b>Faça Login</b>
        </NavLink>
      </SP>
    </SSection>
    <SSection>
      <SImg src={backGroundImage} alt="Imagem de fundo" />
    </SSection>
  </SBody>
);

export default Register;