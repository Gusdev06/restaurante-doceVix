import React from "react";
import EstiloGlobal, { Container } from "./styles";
import Cabecalho from "./components/Cabecalho";
import Cardapio from "./containers/Cardapio";

function App() {
  return (
    <>
      <EstiloGlobal />
        <Cabecalho />
      <Container>
        <Cardapio />
      </Container>
    </>
  );
}

export default App;
