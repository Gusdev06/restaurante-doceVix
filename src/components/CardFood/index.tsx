import * as S from "./styles";

export type Props = {
  nome: string;
  descricao: string;
  valor: GLfloat;
  imgComida: string;
};

const CardFood = ({ nome, descricao, valor, imgComida }: Props) => {

  return (
    <S.Card>
      <S.ImgCard src={imgComida} />
      <S.DivInfos>
        <label htmlFor={nome}>{nome}</label>
        <p>{descricao}</p>
        <div>
          <span>R${valor.toFixed(2)}</span>
        </div>
      </S.DivInfos>
    </S.Card>
  );
};

export default CardFood;
