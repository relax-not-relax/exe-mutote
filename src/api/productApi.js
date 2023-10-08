import axiosClient from "./axiosClient";

const productAPI = {
    getAll(params) {
        const url = '/products';
        return axiosClient.get(url, { params });
    },

    getBestSeller(params) {
        const url = "/products?Page=1&PageSize=10&isBestSeller=true";
        return axiosClient.get(url, { params });
    },

    get(id) {
        const url = `/products/${id}`;
        return axiosClient.get(url);
    },

    add(data) {
        const url = '/products';
        return axiosClient.post(url, data);
    },

    update(data) {
        const url = `/products/${data.id}`;
        return axiosClient.patch(url, data);
    },

    remove(id) {
        const url = `/products/${id}`;
        return axiosClient.delete(url);
    }
};

export default productAPI;