import { useState } from 'react';

export const useLogin = () => {

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");


    const enviarDatos = (e) => {
        e.preventDefault();
        alert(`${name} & ${password}`);
    }

    const limpiarFormulario = () => {
        setName("");
        setPassword("");

    }

    return {
        enviarDatos,
        name,
        setName,
        password,
        setPassword,
        limpiarFormulario
    }


}