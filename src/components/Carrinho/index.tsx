import { useState } from "react";
import * as S from "./styles";
import Modal from "react-modal";
import { RootReducer } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import Comida from "../../models/Comida";
import { adicionar, remover } from "../../store/reducers/carrinho";
Modal.setAppElement("#root");

const Carrinho = () => {
  const dispatch = useDispatch();
  const itens = useSelector((state: RootReducer) => state.carrinho.itens);
  const [modalIsOpen, setIsOpen] = useState(false);


  const AdcComida = (item: Comida) => {
    dispatch(adicionar(item))
  }

  const RemoverComida = (item: Comida) => {
    // Verifique se a quantidade atual é maior que 0 antes de remover
    if (item.quantidade > 0) {
      // Despache a ação 'remover' para diminuir a quantidade de comida
      dispatch(remover(item.id));
    }
  }
  
  

  const valorTotal = itens.reduce((acc: number, item: Comida) => {
    acc += item.valor * item.quantidade;

    return acc;
  }, 0);

  const AbrirModal = () => {
    setIsOpen(true);
  };

  const FecharModal = () => {
    setIsOpen(false);
  };





  return (
    <>
      <S.CardCarrinho onClick={AbrirModal}>
        <span>Meu carrinho({itens.length})</span>
        <span>R${valorTotal.toFixed(2)}</span>
      </S.CardCarrinho>
      <S.ModalStyleCart isOpen={modalIsOpen} onRequestClose={FecharModal}>
        <div
          style={{ borderBottom: "1px solid #E1E1E1", marginBottom: "24px" }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              borderBottom: "1px solid #E1E1E1",
              alignItems: "center",
              paddingBottom: "20px",
            }}
          >
            <S.BsCart4Style></S.BsCart4Style>
            <S.ModalTitle>Carrinho</S.ModalTitle>
            <S.FiXStyle onClick={FecharModal}></S.FiXStyle>
          </div>
        </div>
        <S.ModalItens>
          {itens.map((item) => (
            <li key={item.id}>
              <span>{item.quantidade}x</span>
              <span>{item.nome}</span>
              <b>R${item.valor}</b>
              <S.BotaoDeletarComida
                onClick={() => dispatch(remover(item.id))}
                type="submit"
              >
                <S.BsTrash3Style />
              </S.BotaoDeletarComida>
            </li>
          ))}
        </S.ModalItens>

        <S.ModalPayment>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              borderBottom: "1px solid #E1E1E1",
              alignItems: "center",
              paddingBottom: "10px",
            }}
          >
            <S.BsWallet2Style></S.BsWallet2Style>
            <S.ModalTittlePay>Forma de pagamento</S.ModalTittlePay>
            <span></span>
          </div>
          <S.ModalForm>
            <S.ModalLabel>
              <input type="radio" name="payment" value="pix" />
              Pix
            </S.ModalLabel>

            <S.ModalLabel>
              <input type="radio" name="payment" value="dinheiro" />
              Dinheiro
            </S.ModalLabel>

            <S.ModalLabel>
              <input type="radio" name="payment" value="cartao" />
              Máquina de cartão
            </S.ModalLabel>
          </S.ModalForm>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              borderBottom: "1px solid #E1E1E1",
              alignItems: "center",
              paddingBottom: "10px",
              marginTop: "15px",
            }}
          >
            <S.BsWallet2Style></S.BsWallet2Style>
            <S.ModalTittlePay>Entrega</S.ModalTittlePay>
            <span></span>
          </div>
          <S.ModalForm>
            <S.ModalLabel>
              <input type="radio" name="entrega" value="retirada" />
              Retirada no balcão
            </S.ModalLabel>

            <S.ModalLabel>
              <input type="radio" name="entrega" value="delivey" />
              Delivery
            </S.ModalLabel>
          </S.ModalForm>
          <S.ModalPrice>
            <span>TOTAL</span>
            <span>R${valorTotal.toFixed(2)}</span>
          </S.ModalPrice>
          <S.ModalButtons>
            <S.BotaoContinuarComprando onClick={FecharModal}>
              <S.BsCart2Style />
              Continuar comprando
            </S.BotaoContinuarComprando>
            <S.BotaoFinalizar>
              <S.BsArrowRightCircleStyle />
              Finalizar compra
            </S.BotaoFinalizar>
          </S.ModalButtons>
        </S.ModalPayment>
      </S.ModalStyleCart>
    </>
  );
};

export default Carrinho;
