import { ChangeEvent, useState } from "react";
import * as S from "./styles";
import Modal from "react-modal";
Modal.setAppElement("#root");

export type Props = {
  nome: string;
  descricao: string;
  valor: GLfloat;
  imgComida: string;
  semana: string;
};

const CardFood = ({ nome, descricao, valor, imgComida, semana }: Props) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [valorFinal, setValorFinal] = useState(valor);
  const [carrinho, setCarrinho] = useState(0);


  const adcCarrinho = (preco: number) => {
    
    setCarrinho(preco)
    console.log()
  }

  const AbrirModal = () => {
    setIsOpen(true);
  };

  const FecharModal = () => {
    setIsOpen(false);
  };

  const alteraValor = (event: ChangeEvent<HTMLInputElement>) => {
    setValorFinal(Number(event.target.value) * valor);
  };

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
      <S.ModalStyle isOpen={modalIsOpen} onRequestClose={FecharModal}>
        <div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <S.BiDishStyle />
            <S.FiXStyle onClick={FecharModal} />
          </div>
          <div style={{ textAlign: "center" }}>
            <S.ImgCardModal src={imgComida} />
          </div>
        </div>
        <h2>{nome}</h2>
        <p>{descricao}</p>
        <textarea placeholder="Observações (opcional)" />
        <S.DivButtons>
          <input
            onChange={alteraValor}
            type="number"
            placeholder="Quantidade"
            min={1}
            required
          />
          <S.BotaoAdicionar  onClick={() => adcCarrinho(valor)} type="button">
            <S.ImPlusStyle   />
            Adicionar
            <div>R${valorFinal.toFixed(2)}</div>
          </S.BotaoAdicionar>
          <p>{carrinho}</p>
        </S.DivButtons>
      </S.ModalStyle>
    </>
  );
};

export default CardFood;
