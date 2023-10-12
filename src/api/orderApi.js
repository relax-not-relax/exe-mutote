import axiosClient from "./axiosClient";

const orderAPI = {
    add(data) {
        const url = '/orders';
        return axiosClient.post(url, data);
    },
};

export default orderAPI;