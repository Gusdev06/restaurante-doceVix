import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Comida from "../../models/Comida";

type CarrinhoState = {
  itens: Comida[];
};

const initialState: CarrinhoState = {
  itens: [],
};

const carrinhoSlice = createSlice({
  name: "carrinho",
  initialState,

  reducers: {
    adicionar: (state, action: PayloadAction<Comida>) => {
      const novaComida = action.payload;
      const comidaExistente = state.itens.find((comida) => comida.id === novaComida.id)

      if (comidaExistente) {
        comidaExistente.quantidade += 1;
      } else {
        state.itens.push(novaComida);
      }
    },
    remover: (state, action: PayloadAction<number>) => {
      const idItemARemover = action.payload
      state.itens = state.itens.filter((comida) => comida.id !== idItemARemover)
    }
  },
});

export const { adicionar, remover } = carrinhoSlice.actions;
export default carrinhoSlice.reducer;
