import CardFood from "../../components/CardFood";
import Carrinho from "../../components/Carrinho";

import * as M from "@mui/material";
import * as S from "./styles";
import * as I from "@mui/icons-material";

import { useEffect, useState } from "react";

const Cardapio = () => {
  const API = "https://apirestaurante.onrender.com/lanches";
  const [food, setNome] = useState([]);

  useEffect(() => {
    async function fetchdata() {
      const response = await fetch(API);
      const data = await response.json();

      setNome(data);
    }

    fetchdata();
  }, []);

  return (
    <>
      <M.Accordion defaultExpanded={true}>
        <M.AccordionSummary expandIcon={<I.ExpandMore />} id="panel1a-header">
          <M.Typography>
            <S.Icon src="https://cdn.discordapp.com/attachments/1101908244559048736/1149044327713095740/bandeja-de-comida.png" />
            Pratos
          </M.Typography>
        </M.AccordionSummary>
        <M.AccordionDetails>
          <M.Typography>
            <S.TabPanelFoods>
              {food.map(
                ({ id, item, preco, img, descricao, sem, quantidade }) => {
                  
                  if (sem === "segunda" || sem === null) {
                    return (
                      <CardFood
                        key={id}
                        id={id}
                        nome={item}
                        valor={preco}
                        descricao={descricao}
                        imgComida={img}
                        semana={sem ? "Prato do dia" : undefined}
                        quantidade={quantidade}
                      />
                    );
                  }
                }
              )}
            </S.TabPanelFoods>
          </M.Typography>
        </M.AccordionDetails>
      </M.Accordion>
      <M.Accordion>
        <M.AccordionSummary expandIcon={<I.ExpandMore />} id="panel1a-header">
          <M.Typography>
            <S.Icon src="https://cdn.discordapp.com/attachments/1101908244559048736/1149044328518402238/lanche.png" />
            Lanches
          </M.Typography>
        </M.AccordionSummary>
        <M.AccordionDetails>
          <M.Typography>
            <S.TabPanelFoods>
              {food.map(
                ({ id, item, preco, img, descricao, sem, quantidade }) => {
                  if (sem === "terca" || sem === null) {
                    return (
                      <CardFood
                        key={id}
                        id={id}
                        nome={item}
                        valor={preco}
                        descricao={descricao}
                        imgComida={img}
                        semana={sem}
                        quantidade={quantidade}
                        />
                    );
                  }
                }
              )}
            
            </S.TabPanelFoods>
          </M.Typography>
        </M.AccordionDetails>
      </M.Accordion>
      <M.Accordion>
        <M.AccordionSummary expandIcon={<I.ExpandMore />} id="panel1a-header">
          <S.TypographyStyle>
            <S.Icon src="https://cdn.discordapp.com/attachments/1101908244559048736/1149044329004945418/sanduiche.png" />
            Beirutes
          </S.TypographyStyle>
        </M.AccordionSummary>
        <M.AccordionDetails>
          <M.Typography>
            <S.TabPanelFoods>
              {food.map(
                ({ id, item, preco, img, descricao, sem, quantidade }) => {
                  if (sem === "segunda" || sem === null) {
                    return (
                      <CardFood
                        key={id}
                        id={id}
                        nome={item}
                        valor={preco}
                        descricao={descricao}
                        imgComida={img}
                        semana={sem}
                        quantidade={quantidade}
                      />
                    );
                  }
                }
              )}
            </S.TabPanelFoods>
          </M.Typography>
        </M.AccordionDetails>
      </M.Accordion>
      <M.Accordion>
        <M.AccordionSummary expandIcon={<I.ExpandMore />} id="panel1a-header">
          <M.Typography>
            <S.Icon src="https://cdn.discordapp.com/attachments/1101908244559048736/1149044327482413137/xicara-de-cafe.png" />
            Café da manhã
          </M.Typography>
        </M.AccordionSummary>
        <M.AccordionDetails>
          <M.Typography>
            <S.TabPanelFoods>
              {food.map(
                ({ id, item, preco, img, descricao, sem, quantidade }) => {
                  if (sem === "segunda" || sem === null) {
                    return (
                      <CardFood
                        key={id}
                        id={id}
                        nome={item}
                        valor={preco}
                        descricao={descricao}
                        imgComida={img}
                        semana={sem}
                        quantidade={quantidade}
                      />
                    );
                  }
                }
              )}
            </S.TabPanelFoods>
          </M.Typography>
        </M.AccordionDetails>
      </M.Accordion>
      <M.Accordion>
        <M.AccordionSummary expandIcon={<I.ExpandMore />} id="panel1a-header">
          <M.Typography>
            <S.Icon src="https://cdn.discordapp.com/attachments/1101908244559048736/1149044328279330826/hamburguer.png" />
            Hambúrguer Artesanal
          </M.Typography>
        </M.AccordionSummary>
        <M.AccordionDetails>
          <M.Typography>
            <S.TabPanelFoods>
              {food.map(
                ({ id, item, preco, img, descricao, sem, quantidade }) => {
                  if (sem === "segunda" || sem === null) {
                    return (
                      <CardFood
                        key={id}
                        id={id}
                        nome={item}
                        valor={preco}
                        descricao={descricao}
                        imgComida={img}
                        semana={sem}
                        quantidade={quantidade}
                      />
                    );
                  }
                }
              )}
            </S.TabPanelFoods>
          </M.Typography>
        </M.AccordionDetails>
      </M.Accordion>
      <M.Accordion>
        <M.AccordionSummary expandIcon={<I.ExpandMore />} id="panel1a-header">
          <M.Typography>
            <S.Icon src="https://cdn.discordapp.com/attachments/1101908244559048736/1149044328023462048/batatas-fritas.png" />
            Porções
          </M.Typography>
        </M.AccordionSummary>
        <M.AccordionDetails>
          <M.Typography>
            <S.TabPanelFoods>
              {food.map(
                ({ id, item, preco, img, descricao, sem, quantidade }) => {
                  if (sem === "segunda" || sem === null) {
                    return (
                      <CardFood
                        key={id}
                        id={id}
                        nome={item}
                        valor={preco}
                        descricao={descricao}
                        imgComida={img}
                        semana={sem}
                        quantidade={quantidade}
                      />
                    );
                  }
                }
              )}
            </S.TabPanelFoods>
          </M.Typography>
        </M.AccordionDetails>
      </M.Accordion>
      <M.Accordion>
        <M.AccordionSummary expandIcon={<I.ExpandMore />} id="panel1a-header">
          <M.Typography>
            <S.Icon src="https://cdn.discordapp.com/attachments/1101908244559048736/1149044328774242314/refrigerante.png" />
            Bebidas
          </M.Typography>
        </M.AccordionSummary>
        <M.AccordionDetails>
          <M.Typography>
            <S.TabPanelFoods>
              {food.map(
                ({ id, item, preco, img, descricao, sem, quantidade }) => {
                  if (sem === "segunda" || sem === null) {
                    return (
                      <CardFood
                        key={id}
                        id={id}
                        nome={item}
                        valor={preco}
                        descricao={descricao}
                        imgComida={img}
                        semana={sem}
                        quantidade={quantidade}
                      />
                    );
                  }
                }
              )}
            </S.TabPanelFoods>
          </M.Typography>
        </M.AccordionDetails>
      </M.Accordion>
      <Carrinho />
    </>
  );
};

export default Cardapio;
