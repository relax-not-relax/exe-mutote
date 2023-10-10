import { useEffect, useState } from "react";
import productAPI from '../../../api/productApi'

export default function useProductDetail(productId) {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            try {
                setLoading(true);
                const result = await productAPI.get(productId);
                setProduct(result);
            } catch (error) {
                console.log('Failed to load product', error);
            }

            setLoading(false);
        })();
    }, [productId]);

    return { product, loading };
}