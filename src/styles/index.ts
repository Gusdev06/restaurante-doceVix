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

export default EstiloGlobal;
