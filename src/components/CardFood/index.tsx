import { useState } from "react";
import * as S from "./styles";
import Modal from "react-modal";
import { useDispatch } from "react-redux";
import { adicionar } from "../../store/reducers/carrinho";
import Comida from "../../models/Comida";
Modal.setAppElement("#root");

export type Props = Comida;

const CardFood = ({ nome, descricao, valor, imgComida, semana, id }: Props) => {
  const dispatch = useDispatch();
  const [modalIsOpen, setIsOpen] = useState(false);

  const AbrirModal = () => {
    setIsOpen(true);
  };

  const FecharModal = () => {
    setIsOpen(false);
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
          <S.BotaoAdicionar
            type="button"
            onClick={() =>
              dispatch(
                adicionar({ nome, descricao, imgComida, semana, valor, id, quantidade: 1 })
              )
            }
          >
            <S.ImPlusStyle />
            Adicionar
            <div>R${valor.toFixed(2)}</div>
          </S.BotaoAdicionar>
        </S.DivButtons>
      </S.ModalStyle>
    </>
  );
};

export default CardFood;
