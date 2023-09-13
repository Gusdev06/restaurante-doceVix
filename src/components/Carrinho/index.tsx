import * as S from "./styles";
import Modal from "react-modal";
import Comida from "../../models/Comida";
import { toast } from "react-toastify";
import { ChangeEvent, useState } from "react";
import { RootReducer } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import { remover } from "../../store/reducers/carrinho";
Modal.setAppElement("#root");

const Carrinho = () => {
  const dispatch = useDispatch();
  const itens = useSelector((state: RootReducer) => state.carrinho.itens);

  const [modalIsOpen, setIsOpen] = useState(false);
  const [childModalIsOpen, setChildModalIsOpen] = useState(false);
  const [opcaoPagamento, setOpcaoPagamento] = useState("pix");
  const [opcaoEntrega, setOpcaoEntrega] = useState("retirada");

  const valorTotal = itens.reduce((acc: number, item: Comida) => {
    acc += item.preco * item.quantidade;

    return acc;
  }, 0);

  const handleOpcaoPagamentoChange = (event: ChangeEvent<HTMLInputElement>) => {
    setOpcaoPagamento(event.target.value);
  };

  const handleOpcaoEntregaChange = (event: ChangeEvent<HTMLInputElement>) => {
    setOpcaoEntrega(event.target.value);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const openChildModal = () => {
    closeModal();
    setChildModalIsOpen(true);
  };

  const closeChildModal = () => {
    setChildModalIsOpen(false);
  };

  return (
    <>
      <S.CardCarrinho onClick={openModal}>
        <span>Meu carrinho ({itens.length})</span>
        <span>R${valorTotal.toFixed(2)}</span>
      </S.CardCarrinho>
      <S.ModalStyleCart isOpen={modalIsOpen} onRequestClose={closeModal}>
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
            <S.FiXStyle onClick={closeModal}></S.FiXStyle>
          </div>
        </div>
        <S.ModalItens>
          {itens.map((item) => (
            <li key={item.id}>
              <span>{item.quantidade}x</span>
              <span>
                {item.item}{" "}
                <strong>{item.observacao ? `(${item.observacao})` : ""}</strong>
              </span>
              <b>R${item.preco * item.quantidade}</b>
              <S.BotaoDeletarComida
                type="submit"
                onClick={() => {
                  dispatch(remover(item.id));

                  toast.error(`Item removido do carrinho`, {
                    position: toast.POSITION.BOTTOM_LEFT,
                  });
                }}
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
              <input
                type="radio"
                name="payment"
                value="pix"
                checked={opcaoPagamento === "pix"}
                onChange={handleOpcaoPagamentoChange}
              />
              Pix
            </S.ModalLabel>

            <S.ModalLabel>
              <input
                type="radio"
                name="payment"
                value="dinheiro"
                checked={opcaoPagamento === "dinheiro"}
                onChange={handleOpcaoPagamentoChange}
              />
              Dinheiro
            </S.ModalLabel>

            <S.ModalLabel>
              <input
                type="radio"
                name="payment"
                value="cartao"
                checked={opcaoPagamento === "cartao"}
                onChange={handleOpcaoPagamentoChange}
              />
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
            <S.MdDeliveryDiningStyle></S.MdDeliveryDiningStyle>
            <S.ModalTittlePay>Entrega</S.ModalTittlePay>
            <span></span>
          </div>
          <S.ModalForm>
            <S.ModalLabel>
              <input
                type="radio"
                name="entrega"
                value="retirada"
                checked={opcaoEntrega === "retirada"}
                onChange={handleOpcaoEntregaChange}
              />
              Retirada no balcão
            </S.ModalLabel>

            <S.ModalLabel>
              <input
                type="radio"
                name="entrega"
                value="delivery"
                checked={opcaoEntrega === "delivery"}
                onChange={handleOpcaoEntregaChange}
              />
              Delivery
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
            <S.AiOutlineUserStyle></S.AiOutlineUserStyle>
            <S.ModalTittlePay>Dados do cliente</S.ModalTittlePay>
            <span></span>
          </div>
          <S.ModalForm>
            <div>
              <label htmlFor="name">Nome:</label>
              <input type="text" id="name" />
              <label htmlFor="tel">Telefone:</label>
              <input type="tel" id="tel" />
            </div>
            {opcaoEntrega === "delivery" && (
              <div>
                <label htmlFor="address">Endereço:</label>
                <input type="text" id="address" />
              </div>
            )}
          </S.ModalForm>
          <S.ModalPrice>
            <span>TOTAL</span>
            <span>R${valorTotal.toFixed(2)}</span>
          </S.ModalPrice>
          <S.ModalButtons>
            <S.BotaoContinuarComprando onClick={closeModal}>
              <S.BsCart2Style />
              Continuar compra
            </S.BotaoContinuarComprando>
            {itens.length === 0 ? (
              <S.BotaoFinalizar disabled onClick={openChildModal}>
                <S.BsArrowRightCircleStyle />
                Finalizar compra
              </S.BotaoFinalizar>
            ) : (
              <S.BotaoFinalizar onClick={openChildModal}>
                <S.BsArrowRightCircleStyle />
                Finalizar compra
              </S.BotaoFinalizar>
            )}
          </S.ModalButtons>
        </S.ModalPayment>
      </S.ModalStyleCart>
      <S.ModalFinalizarPedido
        isOpen={childModalIsOpen}
        onRequestClose={closeChildModal}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <S.FiCheckCircleStyle />
          <S.FiXStyle onClick={closeChildModal}></S.FiXStyle>
        </div>
        <p>Obrigado por comprar na DoceVix.</p>
        <p>Seu pedido foi encaminhado para o Whatsapp do restaurante :D</p>
        <S.ContainerContinuarParaSite>
          <S.BotaoFinalizar onClick={closeChildModal}>
            Continuar para o site
          </S.BotaoFinalizar>
        </S.ContainerContinuarParaSite>
      </S.ModalFinalizarPedido>
    </>
  );
};

export default Carrinho;
