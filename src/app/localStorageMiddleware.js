import { addToCart, removeFromCart, setQuantity } from "../features/Cart/cartSlice";

export const localStorageMiddleware = (store) => (next) => (action) => {
    const currentState = store.getState();

    if (
        action.type === addToCart.type ||
        action.type === setQuantity.type ||
        action.type === removeFromCart.type
    ) {
        const updatedCart = currentState.cart.cartItems;
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    }

    return next(action);
}