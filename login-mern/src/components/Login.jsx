import { useLogin } from '../hooks/useLogin';
import Formulario from './Formulario';
import './Login.css'

const Login = () => {

    const { setName, setPassword, enviarDatos, limpiarFormulario } = useLogin();

    return (
        <>
            <Formulario setName={setName} setPassword={setPassword} enviarDatos={enviarDatos} limpiarFormulario={limpiarFormulario} />
        </>
    );
}

export default Login;