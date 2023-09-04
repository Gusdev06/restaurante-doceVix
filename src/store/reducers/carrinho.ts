import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Comida from "../../models/Comida";

type CarrinhoState = {
  itens: Comida[];
}

const initialState: CarrinhoState = {
  itens: [],
}

const carrinhoSlice = createSlice({
  name: "carrinho",
  initialState,

  reducers: {
    adicionar: (state, action: PayloadAction<Comida>) => {
      const comida = action.payload
        state.itens.push(comida);
    }
  }
})

export const { adicionar } = carrinhoSlice.actions
export default carrinhoSlice.reducer