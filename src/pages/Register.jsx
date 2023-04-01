import { NavLink } from "react-router-dom";
import backGroundImage from "../assets/icons/background.svg";
import { SButton, SForm, SInput } from "../components/Form.style";
import { SBody, SSection, SImg, SDivTexts } from "../components/Body.style";
import { SH1, SH3, SP1, SP2, SPLink } from "../components/Text.style";

const Register = () => (
  <SBody>
    <SSection>
      <SDivTexts>
        <SH1>Olá</SH1>
        <SP1>Por favor, registre-se para continuar</SP1>
        <SH3>Registro</SH3>
      </SDivTexts>
      <SForm action="" method="post">
        <SInput placeholder="Nome" type="text" name="name" />
        <SInput placeholder="Usuário" type="text" name="user" />
        <SInput placeholder="Nascimento" type="date" name="date" />
        <SInput placeholder="Email" type="e-mail" name="email" />
        <SInput placeholder="Senha" type="password" name="password" />
        <SInput
          placeholder="Confirmar Senha"
          type="password"
          name="password-c"
        />
        <SButton type="submit" value="Logar-se">
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
      <SImg src={backGroundImage} alt="Imagem de fundo" />
    </SSection>
  </SBody>
);

export default Register;
