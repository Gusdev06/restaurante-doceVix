import styled from "styled-components";
import Modal from "react-modal";
import variables from "../../styles/variables";
import { FiX } from "react-icons/fi";
import { BiDish } from "react-icons/bi";
import { ImPlus } from "react-icons/im";
import { Botao } from "../../styles";

export const DiaSemana = styled.div`
  position: absolute;
  top: 0;
  right: 0;

  display: flex;
  align-items: center;

  white-space: nowrap;
  font-weight: bold;
  padding: 8px;
  height: 20px;

  background-color: #b3365b;
  color: #fff;
  border-radius: 0 5px 0 10px;
  font-size: 10px;
`;

export const Preco = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 8px;
`;

export const Card = styled.div`
  margin-top: 16px;
  display: flex;
  padding: 10px;
  border-radius: 7px;
  border: 1px solid #cacaca;
  cursor: pointer;
  position: relative;
`;

export const DivInfos = styled.div`
  margin-left: 8px;

  p {
    font-size: 12px;
    color: ${variables.cinzaEscuro};
  }

  span {
    font-size: 13px;
    font-weight: bold;
    color: ${variables.verdeClaro};
  }

  div {
    display: flex;
    justify-content: space-between;
  }
`;

export const ImgCard = styled.img`
  width: 106px;
  height: 94px;
  border-radius: 8px;
  border: 1px solid #cacaca;
`;

export const ImgCardModal = styled(ImgCard)`
  width: 200px;
  height: 120px;
  margin-bottom: 20px;
  border: none;

  @media (max-width: 767px) {
    margin-top: 12px;
    width: 100%;
    height: 140px;
  }
`;

export const ModalStyle = styled(Modal)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 600px;
  width: 60%;
  border: 1px solid rgb(204, 204, 204);
  background: #fff;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
  outline: none;
  border-radius: 8px;
  padding: 20px;

  p {
    margin-top: 6px;
    margin-bottom: 16px;
  }

  textarea {
    width: 100%;
    display: block;
    resize: none;

    padding: 10px;
    margin-bottom: 16px;

    border: none;
    border-top: 1px solid #c3c3c3;
    font-weight: bold;
  }

  @media (max-width: 767px) {
    width: 80%;
  }
`;

export const DivButtons = styled.div`
  display: flex;
  justify-content: right;
  gap: 8px;
`;

export const BotaoAdicionar = styled(Botao)`
  gap: 4px;
  background-color: ${variables.corBotoesAceitar};
  font-weight: bold;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${variables.verdeEscuro};
  }

  div {
    margin-left: 12px;
  }

  @media (max-width: 767px) {
    margin-top: 24px;
    width: 100%;
  }
`;

export const FiXStyle = styled(FiX)`
  cursor: pointer;
  transition: all 0.1s ease;

  &:hover {
    color: #c3c3c3;
  }
`;

export const ImPlusStyle = styled(ImPlus)`
  color: #fff;
  font-size: 11px;
`;

export const BiDishStyle = styled(BiDish)`
  font-size: 18px;
`;
