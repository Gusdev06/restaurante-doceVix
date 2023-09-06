import styled from "styled-components";
import { ModalStyle } from "../CardFood/styles";
import {
  BsCart4,
  BsTrash3,
  BsWallet2,
  BsCart2,
  BsArrowRightCircle,
} from "react-icons/bs";
import { FiX } from "react-icons/fi";

export const BsCart2Style = styled(BsCart2)`
  color: #fff;
`;

export const BsArrowRightCircleStyle = styled(BsArrowRightCircle)`
  color: #fff;
`;

export const BsTrash3Style = styled(BsTrash3)`
  color: #eb3223;
  font-size: 18px;
`;

export const FiXStyle = styled(FiX)`
  cursor: pointer;
  transition: all 0.1s ease;
  font-size: 25px;
  &:hover {
    color: #c3c3c3;
  }
`;

export const BsCart4Style = styled(BsCart4)`
  color: #000;
  font-size: 30px;
`;

export const BsWallet2Style = styled(BsWallet2)`
  color: #000;
`;

export const CardCarrinho = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  cursor: pointer;

  padding: 10px;
  margin-top: 50px;

  width: 100%;
  height: 50px;

  color: #fff;
  background-color: #031c32;
  border-radius: 20px 20px 0px 0px;
`;

export const ModalStyleCart = styled(ModalStyle)`
  padding: 40px;
  max-height: 80vh;
  overflow-y: auto;
`;

export const ModalTitle = styled.h1`
  font-size: 25px;
`;

export const ModalButton = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
  padding: 9px;
  text-align: center;
  border-radius: 10px;
  border: 1px solid #e1e1e1;
`;

export const ModalItens = styled.ul`
  li {
    display: flex;
    justify-content: space-between;
    padding: 5px;
    margin-bottom: 24px;
    border-bottom: 1px solid #e1e1e1;
  }
`;

export const ModalPayment = styled.div`
  padding-top: 44px;
  margin-bottom: 30px;
`;

export const ModalTittlePay = styled.h3`
  font-size: 16px;
  text-align: center;
  font-weight: bold;
`;
export const ModalLabel = styled.label`
  display: flex;
  gap: 8px;
  padding-bottom: 10px;
  font-size: 16px;
`;

export const ModalForm = styled.form`
  margin-top: 14px;
`;

export const ModalPrice = styled.div`
  padding-top: 25px;
  padding-bottom: 10px;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #e1e1e1;
`;

export const ModalButtons = styled.div`
  display: grid;
  gap: 6px;
  grid-template-columns: repeat(2, 1fr);
`;

export const BotaoFinalizar = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;

  cursor: pointer;
  margin-top: 14px;
  font-size: 15px;
  padding: 10px 15px;

  color: #fff;
  background-color: #20695f;

  border: none;
  border-radius: 8px;

  &:hover {
    background-color: #2f4f2f;
  }
`;

export const BotaoContinuarComprando = styled(BotaoFinalizar)`
  background-color: #666;

  &:hover {
    background-color: #474a51;
  }
`;

export const BotaoDeletarComida = styled.button`
  cursor: pointer;
  border: none;
`;
