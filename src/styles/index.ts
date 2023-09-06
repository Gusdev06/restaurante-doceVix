import styled, { createGlobalStyle } from "styled-components";

const EstiloGlobal = createGlobalStyle`
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Quicksand', sans-serif;
    list-style: none;
}
`;

export const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
`;

export const Botao = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  
  cursor: pointer;
  padding: 10px 15px;
  color: #fff;
  border: none;
  border-radius: 5px;
`

export default EstiloGlobal;
