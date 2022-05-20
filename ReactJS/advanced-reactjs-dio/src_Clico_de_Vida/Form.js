import React, { useContext } from 'react';
import { ThemeContext } from './Theme';

function Form() {
    const context = useContext(ThemeContext);

    const renderForm = (
        <form>
            <label>Nome:</label>
            <input />
            <label>E-mail:</label>
            <input />
            <label>Idade:</label>
            <input />
            <label>Telefone:</label>
            <input />
        </form>
    )

    const renderNotLogged = (
        <h1>
            Você não está logado.
        </h1>
    )

    return (
        <>
            {!context.token ? renderNotLogged : renderForm}
        </>
    );
}

export default Form;
