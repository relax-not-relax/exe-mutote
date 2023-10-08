import axiosClient from "./axiosClient";

const userAPI = {

    register(data) {
        //const url = '/auth/local/register';
        const url = '/users';
        return axiosClient.post(url, data);
    },

    login(data) {
        //const url = '/auth/local';
        const url = '/users/authentication';
        return axiosClient.post(url, data);
    },

};

export default userAPI;