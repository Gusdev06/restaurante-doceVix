import { FiX } from "react-icons/fi";
import { BiDish } from "react-icons/bi";
import { ImPlus } from "react-icons/im";
import styled from "styled-components";
import Modal from "react-modal";

export const Card = styled.div`
  margin-top: 16px;
  display: flex;
  padding: 4px;
  border-radius: 7px;
  border: 1px solid #cacaca;
  cursor: pointer;
`;

export const DivInfos = styled.div`
  margin-left: 8px;

  p {
    margin-bottom: 24px;
    font-size: 12px;
    color: #928a8a;
  }

  span {
    font-size: 12px;
    color: #189633;
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

  input {
    display: block;
    padding: 6px;
    font-size: 16px;
    max-width: 132px;

    border-radius: 8px;
    border: 1px solid #c3c3c3;
    background-color: #fff;
    color: #000;
  }
`;

export const DivButtons = styled.div`
  display: flex;
  justify-content: right;
  gap: 8px;
`;

export const BotaoAdicionar = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;

  background-color: #20695f;
  border-radius: 5px;

  font-weight: bold;
  color: #fff;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: #2f4f2f;
  }

  div {
    margin-left: 12px;
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