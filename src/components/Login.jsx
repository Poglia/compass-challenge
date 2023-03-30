import { NavLink } from "react-router-dom";


const Login = () => (
    <section>
        <h1>Olá</h1>
        <p>Para continuar navegando de forma segura, efetue o login</p>
        <form action="" method="post">
            <input placeholder="Usuário" type="text" name="name" />
            <input placeholder="Senha" type="password" name="name" />
            <input type="submit" value="Logar-se" />
        </form>
        <p>Novo por aqui? <NavLink className="navbar-brand" to="/"><b>Registre-se</b></NavLink></p>
    </section>
)

export default Login;