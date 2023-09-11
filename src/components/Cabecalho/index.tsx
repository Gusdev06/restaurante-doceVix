import * as S from "./styles";
import * as M from "@mui/material";
import * as I from "@mui/icons-material";

const Cabecalho = () => {
  return (
    <S.Content>
      <S.DivLogo>
        <S.Logo />
      </S.DivLogo>
      <S.StatusRestaurante>Aberto</S.StatusRestaurante>

      <S.DivTitulo>
        <h1>
          Doce<span>Vix</span> Restaurante e Lanchonete
        </h1>
        <p>Restaurante e lanchonete de comida brasileira. Bom almoço!!!</p>
      </S.DivTitulo>
      <M.Accordion>
        <M.AccordionSummary expandIcon={<I.ExpandMore />}>
          <M.Typography><strong>Informações do restaurante</strong></M.Typography>
        </M.AccordionSummary>
        <M.AccordionDetails>
          <M.Typography>
            <S.InfosList>
              <li>
                <strong>Endereço:</strong> R. José de Magalhães, 256 - Vila
                Clementino, São Paulo - SP, 04026-090
              </li>
              <li>
                <strong>Horário:</strong> Segunda a Sexta das 07:00 às 15:00 | Fechado aos finais de semana
              </li>
              <li>
                <strong>Telefone:</strong> (11) 5082-5179
              </li>
              <li>
                <strong>WhatsApp:</strong> (11) 976728089
              </li>
            </S.InfosList>
          </M.Typography>
        </M.AccordionDetails>
      </M.Accordion>
    </S.Content>
  );
};

export default Cabecalho;
