import { Box, Container, Grid, LinearProgress, Paper, Typography } from '@mui/material';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useRouteMatch } from 'react-router-dom/cjs/react-router-dom';
import StorageKeys from '../../../constants/storage-key.js';
import { addToCart } from '../../Cart/cartSlice.js';
import AddToCartForm from '../components/AddToCartForm/index.jsx';
import ProductInfo from '../components/ProductInfo/index.jsx';
import ProductThumbnail from '../components/ProductThumnail.jsx';
import RelatedProduct from '../components/RelatedProduct/index.jsx';
import useProductDetail from '../hooks/useProductDetail';
import { useSnackbar } from 'notistack';

DetailPage.propTypes = {

};

function DetailPage(props) {

    const {
        params: { productId },

    } = useRouteMatch();
    const { enqueueSnackbar } = useSnackbar();

    const [userData, setUserData] = useState({});

    useEffect(() => {
        const userDataFromLocalStorage = localStorage.getItem(StorageKeys.USER);

        if (userDataFromLocalStorage) {
            const parsedUserData = JSON.parse(userDataFromLocalStorage);
            setUserData(parsedUserData);
        }

    }, []);

    const { product, loading } = useProductDetail(productId);
    const dispatch = useDispatch();

    if (loading) {
        return <Box className="loading">
            <LinearProgress />
        </Box>
    }

    const handleAddToCartSubmit = ({ quantity }) => {
        //console.log('Form submit', formValues);
        if (userData.phone) {
            const action = addToCart({
                id: product.id,
                product,
                quantity,
            });
            //console.log(action);
            dispatch(action);
        } else {
            enqueueSnackbar('Vui lòng đăng nhập để thêm giỏ hàng!', { variant: 'error' });
        }

    };

    return (
        <Box pt={6}>
            <Container className='productDtDiv'>

                <Paper elevation={0}>
                    <Grid container>
                        <Grid item className='leftDivDt'>
                            <ProductThumbnail product={product} />
                        </Grid>
                        <Grid item className='centerDivDt'>
                            <ProductInfo product={product} />
                            <AddToCartForm onSubmit={handleAddToCartSubmit} />
                            {/* <AddToCartForm onSubmit={handleAddToCartSubmit} /> */}
                        </Grid>
                        <Grid item className='rightDivDt'>
                            <Box>
                                <img src="https://firebasestorage.googleapis.com/v0/b/nearex-1b8f7.appspot.com/o/images%2FVisit%20Us.png?alt=media&token=8176f069-0759-4c40-b85f-6e10615de0fd" alt="" />
                            </Box>
                        </Grid>
                    </Grid>
                </Paper>

                <Paper elevation={0} className='relatedList'>
                    <Typography variant='h5' className='relatedList__title' style={{ fontWeight: '500', color: '#00134C' }}>RELATED PRODUCTS</Typography>
                    <RelatedProduct categoryID={product.categoryProduct.id} />
                </Paper>

            </Container>
        </Box>
    );
}

export default DetailPage;