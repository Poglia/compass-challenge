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

const Register = () => (
  <SBody>
    <SSection>
      <SDivTexts>
        <SH1>Olá</SH1>
        <SP1>Por favor, registre-se para continuar</SP1>
        <SH3>Registro</SH3>
      </SDivTexts>
      <SForm action="" method="post">
        <SInput
          placeholder="Nome"
          type="text"
          name="name"
          backGroundIcon={SvgName}
        />
        <SInput
          placeholder="Usuário"
          type="text"
          name="user"
          backGroundIcon={SvgUser}
        />
        <SInput
          placeholder="Nascimento"
          type="text"
          name="date"
          backGroundIcon={SvgDate}
          onFocus={(e) => {e.target.type = "date"}}
          onBlur={(e) => {e.target.type = "text"}}
        />
        <SInput
          placeholder="Email"
          type="e-mail"
          name="email"
          backGroundIcon={SvgEmail}
        />
        <SInput
          placeholder="Senha"
          type="password"
          name="password"
          backGroundIcon={SvgPassword}
        />
        <SInput
          placeholder="Confirmar Senha"
          type="password"
          name="password-c"
          backGroundIcon={SvgConfirmPassword}
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
      
        <SImgLogo src={SvgLogo} />
      <SImgBG src={backGroundImage} alt="Imagem de fundo" />
    </SSection>
  </SBody>
);

export default Register;
