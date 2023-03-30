import { NavLink } from "react-router-dom";

const Register = () => (
  <section>
    <h1>Olá</h1>
    <p>Por favor, registre-se para continuar</p>
    <form action="" method="post">
        <input placeholder="Nome" type="text" name="name" />
        <input placeholder="Usuário" type="text" name="name" />
        <input placeholder="Nascimento" type="date" name="name" />
        <input placeholder="Email" type="e-mail" name="name" />
        <input placeholder="Senha" type="password" name="name" />
        <input placeholder="Confirmar Senha" type="password" name="name" />
        <input type="submit" value="Registrar-se" />
    </form>
    <p>Já possui uma conta?  <NavLink className="navbar-brand" to="/login"><b>Faça Login</b></NavLink></p>
  </section>
);

export default Register;
