import userReducer from '../features/Auth/userSlice'
import cartReducer from '../features/Cart/cartSlice'
import { localStorageMiddleware } from './localStorageMiddleware';
import { loadCartFromLocalStorage } from './middleware';
const { configureStore } = require("@reduxjs/toolkit");

const rootReducer = {
    user: userReducer,
    cart: cartReducer,
}

const initialCartState = {
    cartItems: loadCartFromLocalStorage(),
};

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ['user/login', 'users/register'], // Thêm tên action liên quan đến user vào danh sách bỏ qua
            },
        }).concat(localStorageMiddleware),
    preloadedState: {
        cart: initialCartState,
    }
});

export default store;