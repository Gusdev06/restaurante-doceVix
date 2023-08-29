import styled from "styled-components";

export const Card = styled.div`
  margin-top: 16px;
  display: flex;
  padding: 4px;
  border-radius: 7px;
  border: 1px solid #cacaca;
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
