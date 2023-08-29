import * as S from "./styles";

const Cabecalho = () => {
  return (
    <>
      <S.Header />
      <S.DivLogo>
        <S.Logo />
        <S.StatusRestaurante>Aberto</S.StatusRestaurante>
      </S.DivLogo>
      <S.DivTitulo>
        <h1>
          Doce<span>Vix</span> Restaurante e Lanchonete
        </h1>
        <p>Restaurante e lanchonete de comida brasileira. Bom almoço!!!</p>
      </S.DivTitulo>
    </>
  );
};

export default Cabecalho;
