import { createSlice } from "@reduxjs/toolkit";

const saveCartToLocalStorage = (cart) => {
    localStorage.setItem('cart', JSON.stringify(cart));
};


const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        showMiniCart: false,
        cartItems: [],
    },
    reducers: {
        showMiniCart(state) {
            state.showMiniCart = true;
        },

        hideMiniCart(state) {
            state.showMiniCart = false;
        },

        addToCart(state, action) {
            //newItem = { id, product, quantity }
            const newItem = action.payload;
            const updatedCart = [...state.cartItems];
            const index = updatedCart.findIndex((x) => x.id === newItem.id);
            if (index >= 0) {
                //increase quantity
                updatedCart[index].quantity += newItem.quantity;
            } else {
                //add to cart
                updatedCart.push(newItem);
            }
            state.cartItems = updatedCart;
            saveCartToLocalStorage(updatedCart);
        },

        setQuantity(state, action) {
            const { id, quantity } = action.payload;
            //check if product is available in cart
            const updatedCart = [...state.cartItems];
            const index = updatedCart.findIndex((x) => x.id === id);
            if (index >= 0) {
                updatedCart[index].quantity = quantity;
            }
            state.cartItems = updatedCart;
            saveCartToLocalStorage(updatedCart);
        },

        removeFromCart(state, action) {
            const idNeedToRemove = action.payload.idNeedToRemove;
            const updatedCart = [...state.cartItems];
            const newCart = updatedCart.filter((x) => x.id !== Number.parseInt(idNeedToRemove));
            //console.log(Number.parseInt(idNeedToRemove));
            //console.log(newCart);
            state.cartItems = newCart;
            saveCartToLocalStorage(newCart);
        },
    }
});

const { actions, reducer } = cartSlice;
export const { showMiniCart, hideMiniCart, addToCart, setQuantity, removeFromCart } = actions;
export default reducer;