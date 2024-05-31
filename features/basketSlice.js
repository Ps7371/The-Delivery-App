import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: (state, action) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      //will find if the item your'e trying to remove is there or not if its there it will perform the desired operation
      let newBasket = [...state.items];
      //if item to be removed there then slice it off
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cant Remove product(id: ${action.payload.id}) as its not in the basket!!`
        );
      }
      state.items = newBasket;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToBasket, removeFromBasket } = basketSlice.actions;

//selector(accesing global store)
export  const selectBasketItems=(state)=>state.basket.items
export const selectBasketItemsWithId = (state, id) =>
  state.basket.items.filter((item) => item.id == id);
//go to basket items matches with array whose is specified and creates a  new array

export const selectBasketTotal = (state) =>
state.basket.items.reduce((total, item) => (total += item.price), 0);

export default basketSlice.reducer;
