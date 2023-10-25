import * as S from './styles'
import { useState } from "react"
import { TextField } from '@mui/material'

const Login = () => {
    const [modalIsOpen, setIsOpen] = useState(false)

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <>
            <button onClick={openModal}>Login</button>
            <S.ModalStyleLogin isOpen={modalIsOpen} onRequestClose={closeModal}>
                <h1>Login</h1>
                <TextField id="outlined-basic" label="Nome" variant="outlined" />
                <TextField id="outlined-basic" label="Senha" variant="outlined" />
                <S.BotaoLogar>Logar</S.BotaoLogar>
                <p>Esqueceu a senha?</p>
                <p>Não possuí uma conta? <span>Criar Conta</span></p>
            </S.ModalStyleLogin>
        </>
    )
}

export default Login