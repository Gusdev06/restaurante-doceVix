import styled from 'styled-components' 
import {ModalStyle} from '../CardFood/styles'


export const CardCarrinho = styled.div`
margin-top: 50px;
cursor: pointer;
display: flex;
padding: 10px;
align-items: center;
justify-content: space-between;
width: 100%;
height: 50px;
color: #fff;
background-color:#031c32;
border-radius: 20px 20px 0px 0px;

`

export const ModalStyleCart = styled(ModalStyle)`
padding: 40px;
height: 700px;
text-align: center;
`

export const ModalTitle = styled.h1 `
border-bottom: 1px #E1E1E1 solid;
padding-bottom: 28px;
`

export const ModalButton = styled.div`
margin-top: 24px;
padding: 9px;
text-align: center;
border-radius: 10px;
border: 1px solid #E1E1E1;
`

