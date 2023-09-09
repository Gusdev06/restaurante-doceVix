  import styled, { createGlobalStyle } from "styled-components";

  const EstiloGlobal = createGlobalStyle`
  * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
      font-family: 'Quicksand', sans-serif;
      list-style: none;
  }


  body {
    background-color: #FFF;
  }
  `;

  export const Container = styled.div`
    max-width: 1200px;  
    width: 100%;
    margin: 0 auto;
    box-shadow: -1px 2px 18px -3px rgba(0,0,0,0.53);



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

  export const  CabecalhoImg = styled.header`
  background: url("https://servidor-estaticos-topaz-eight.vercel.app/Background.png");
  height: 140px;
  position: relative;
  `

  export default EstiloGlobal;
