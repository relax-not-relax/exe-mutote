import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import StorageKeys from "../../constants/storage-key";
import userAPI from "../../api/userApi";


export const register = createAsyncThunk(
    'users/register',
    async (payload) => { //payload: tham so truyen vao
        //call API to register
        const data = await userAPI.register(payload);

        //save data to local storage
        localStorage.setItem(StorageKeys.TOKEN, data.token);
        localStorage.setItem(StorageKeys.USER, JSON.stringify(data.customer));

        //return user data
        return data.customer;
    }
)

export const login = createAsyncThunk(
    'users/login',
    async (payload) => { //payload: tham so truyen vao
        //call API to register
        const data = await userAPI.login(payload);

        //save data to local storage
        //localStorage.setItem(StorageKeys.TOKEN, data.jwt);
        localStorage.setItem(StorageKeys.TOKEN, data.token);
        //localStorage.setItem(StorageKeys.USER, JSON.stringify(data.user));
        localStorage.setItem(StorageKeys.USER, JSON.stringify(data.customer));

        //return user data
        return data.customer;
        //return data;
    }
)

const userSlice = createSlice({
    name: 'user',
    initialState: {
        current: JSON.parse(localStorage.getItem(StorageKeys.USER)) || {},
        settings: {},
    },
    reducers: {
        logout(state) {
            //clear local storage
            localStorage.removeItem(StorageKeys.USER);
            localStorage.removeItem(StorageKeys.TOKEN);
            localStorage.removeItem('cart');

            state.current = {};
        }
    },
    extraReducers: {
        [register.fulfilled]: (state, action) => {
            state.current = action.payload;
        },
        [login.fulfilled]: (state, action) => {
            state.current = action.payload;
        },
    }
});

const { actions, reducer } = userSlice;
export const { logout } = actions;
export default reducer;