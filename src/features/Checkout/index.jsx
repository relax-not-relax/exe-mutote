import { Box, Button, Container, Grid, LinearProgress, Paper, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import StorageKeys from '../../constants/storage-key';
//import PropTypes from 'prop-types';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import './style.scss'
import { useForm } from 'react-hook-form';
import InputField from '../../components/form-controls/InputField';
import { useSnackbar } from 'notistack';
import orderAPI from '../../api/orderApi';
import { useSelector } from 'react-redux';
import { cartTotalSelector } from '../Cart/selector';

CheckoutFeature.propTypes = {

};

function CheckoutFeature(props) {

    const [userData, setUserData] = useState({});
    const [cart, setCart] = useState([]);
    const { enqueueSnackbar } = useSnackbar();

    useEffect(() => {
        const userDataFromLocalStorage = localStorage.getItem(StorageKeys.USER);

        if (userDataFromLocalStorage) {
            const parsedUserData = JSON.parse(userDataFromLocalStorage);
            setUserData(parsedUserData);
        }

    }, []);

    useEffect(() => {
        const getCartFromLocalStorage = () => {
            const cart = localStorage.getItem('cart');
            return cart ? JSON.parse(cart) : [];
        };

        const cartFromLocalStorage = getCartFromLocalStorage();
        setCart(cartFromLocalStorage.map(item => ({
            "quantity": item.quantity,
            "productId": item.product.id,
        })));

    }, []);

    const schema = yup.object().shape({
        phone: yup.string().required('Please enter a valid phone number'),
        address: yup.string().required('Please enter sipping address'),
    });

    const form = useForm({
        defaultValue: {
            phone: '',
            address: '',
        },
        resolver: yupResolver(schema),
    })

    const handleSubmit = async (values) => {

        try {
            const request = {
                "customerId": userData.id,
                ...values,
                "orderDetails": cart,
            }
            const response = await orderAPI.add(request);
            console.log(response);
            enqueueSnackbar(`Thank you for your submitting! Please wait for MUTOTE's contact.`, { variant: 'success' });
            localStorage.removeItem('cart');
            setTimeout(() => {
                window.location.reload();
            }, 3000);
        } catch (error) {
            console.log('Failed to submit order', error);
            enqueueSnackbar('Failed to submit order!', { variant: 'error' });
        }
    }

    const { isSubmitting } = form.formState;
    const cartTotal = useSelector(cartTotalSelector);

    return (
        <Box className='checkoutDiv'>
            <Container>
                <Typography className='checkoutDiv__header'>Checkout</Typography>
                {isSubmitting && <LinearProgress />}
                <Paper elevation={0}>
                    <form onSubmit={form.handleSubmit(handleSubmit)}>
                        <Grid container>
                            <Grid item md={8} lg={8} className='checkoutDiv__left'>
                                <Typography variant='h6' marginBottom='20px' style={{ color: '#00134C' }}>Billing Details</Typography>
                                <Typography variant='body1' fontWeight={500}>Name</Typography>
                                <Typography variant='body2' className='name'>{userData.name}</Typography>

                                <Typography variant='body1' fontWeight={500} marginTop='15px'>Email</Typography>
                                <Typography variant='body2' className='name'>{userData.email}</Typography>

                                <Box marginTop='15px'>
                                    <InputField name='phone' label='Phone Number' form={form} errors={form.formState.errors} />
                                    <InputField name='address' label='Address' form={form} errors={form.formState.errors} />
                                </Box>
                                <Box>
                                    <Typography className='checkoutDiv__left-note'>Đừng quên thanh toán trước khi gửi order cho MUTOTE bạn nhé!</Typography>
                                </Box>
                                <Box>
                                    <Typography style={{ marginTop: '8px', fontWeight: '500' }}>
                                        Nội dung chuyển khoản: Tên khách hàng - Thanh toán MUTOTE - Ngày thanh toán
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item md={4} lg={4} className='checkoutDiv__right'>
                                <Typography variant='h6' marginBottom='20px' style={{ color: '#00134C' }}>Your Orders</Typography>
                                <Box className='rightDivCheckout__item'>
                                    <Grid container>
                                        <Grid item md={6} lg={6}>
                                            <Typography className='rightDivCheckout__item-name'>
                                                Shipping
                                            </Typography>
                                        </Grid>
                                        <Grid item md={6} lg={6}>
                                            <Typography className='rightDivCheckout__item-quantity' style={{ textDecoration: 'line-through' }}>
                                                {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(20000)}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Box>
                                <Box className='rightDivCheckout__item'>
                                    <Grid container>
                                        <Grid item md={6} lg={6}>
                                            <Typography className='rightDivCheckout__item-name'>
                                                Subtotal
                                            </Typography>
                                        </Grid>
                                        <Grid item md={6} lg={6}>
                                            <Typography className='rightDivCheckout__item-quantity'>
                                                {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(cartTotal)}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Box>
                                <Box>
                                    <Grid container className='rightDivCart__total'>
                                        <Grid item md={6} lg={6}>
                                            <Typography className='rightDivCart__total-hd'>Total</Typography>
                                        </Grid>
                                        <Grid item md={6} lg={6}>
                                            <Typography className='rightDivCart__total-price'>
                                                {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(cartTotal)}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Box>
                                <Box>
                                    <img
                                        src="https://firebasestorage.googleapis.com/v0/b/nearex-1b8f7.appspot.com/o/images%2Fqr.jpg?alt=media&token=13cc00d8-d409-4bac-b24b-4259fcac733e"
                                        alt="QR Thanh toán"
                                        width='100%' />
                                </Box>
                                <Button type='submit' fullWidth variant='contained' color='primary' style={{ marginTop: '40px' }}>
                                    PLACE ORDER
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Paper>
            </Container>
        </Box>
    );
}

export default CheckoutFeature;