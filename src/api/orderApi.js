import axiosClient from "./axiosClient";

const orderAPI = {
    add(data) {
        const url = '/orders';
        return axiosClient.post(url, data);
    },

    getAll(params) {
        const url = '/orders';
        return axiosClient.get(url, { params });
    },

    get(id) {
        const url = `/orders/${id}`;
        return axiosClient.get(url);
    },
};

export default orderAPI;