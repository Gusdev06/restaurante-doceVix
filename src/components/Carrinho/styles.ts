import styled from "styled-components";
import { ModalStyle } from "../CardFood/styles";
import { BsCart4, BsTrash3, BsWallet2 } from "react-icons/bs";
import { FiX } from "react-icons/fi";

export const BsTrash3Style = styled(BsTrash3)`
  color: #eb3223;
  font-size: 14px;
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
  height: 700px;
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
    padding: 5px;
    margin-bottom: 24px;
    display: flex;
    justify-content: space-between;
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
