import styled from "styled-components";
import variables from "../../styles/variables";



export const Header = styled.header`
  background: url("https://servidor-estaticos-topaz-eight.vercel.app/Background.png");
  height: 140px;
  position: relative;
`;

export const DivLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: red;
`;

export const Logo = styled.div`
  background: url("https://servidor-estaticos-topaz-eight.vercel.app/Logo.png");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 200px;
  height: 200px;
  position: absolute;


  transition: all 0.4s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

export const DivTitulo = styled.div`
  text-align: center;
  padding-top: 88px;
  padding-bottom: 32px;
  background-color: #fff;
  h1 {
    font-family: "Anton", sans-serif;
    color: ${variables.corPrincipal};
  }

  span {
    color: ${variables.corSecundaria};
  }

  p {
    font-size: 17px;
  }
`;

export const StatusRestaurante = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  right: 18%;
  margin-top: 52px;
  margin-right: 12px;

  width: 101px;
  height: 28px;

  background-color: ${variables.verdeClaro};
  color: #fff;
  font-weight: bold;
  font-size: 14px;
  border-radius: 30px;
`;

export const StatusRestauranteFechado = styled(StatusRestaurante)`
  background-color: ${variables.vermelho};
`;
