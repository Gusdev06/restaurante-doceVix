import styled from "styled-components";
import variables from "../../styles/variables";
import { ModalStyle } from "../CardFood/styles";
import { Botao } from "../../styles";

export const ModalStyleLogin = styled(ModalStyle)`
    display: flex;
    flex-direction: column;
    padding: 32px;
    gap: 16px;

    h1 {
        text-align: center;
        margin: 12px;
    }

    p {
        text-align: center;
        color: ${variables.corPrincipal};

        span {
            color: ${variables.verdeClaro}
        }
    }
`

export const BotaoLogar = styled(Botao)`
    background-color: ${variables.verdeClaro};
    font-weight: bold;
    font-size: 14px;
    transition: all 0.15s ease;

    &:hover {
        background-color: ${variables.verdeEscuro};
    }
`