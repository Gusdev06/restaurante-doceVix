import { useState } from "react";
import * as S from "./styles";
import Modal from 'react-modal';
Modal.setAppElement('#root');


export type Props = {
  nome: string;
  descricao: string;
  valor: GLfloat;
  imgComida: string;
};

const CardFood = ({ nome, descricao, valor, imgComida }: Props) => {
  const [modalIsOpen, setIsOpen] = useState(false);

    const AbrirModal = () => {
        setIsOpen(true)
    }

    const FecharModal = () => {
        setIsOpen(false)
    }


  return (
<>
    <S.Card onClick={AbrirModal}>
      <S.ImgCard src={imgComida} />
      <S.DivInfos>
        <label htmlFor={nome}>{nome}</label>
        <p>{descricao}</p>
        <div>
          <span>R${valor.toFixed(2)}</span>
        </div>
      </S.DivInfos>
    </S.Card>
    <Modal isOpen={modalIsOpen} onRequestClose={FecharModal}>
    <h2>Olá</h2>
    <button onClick={FecharModal}>Fechar</button>
    <div>Eu sou oi giane modal</div>
  </Modal>
  </>
  );
};

export default CardFood;
