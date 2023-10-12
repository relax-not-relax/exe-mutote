import { Box, Button, Container, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
//import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom/cjs/react-router-dom';
import CartList from './components/CartDetail/CarList';
import { cartTotalSelector } from './selector';
import './style.scss';

CartFeature.propTypes = {

};

function CartFeature(props) {
    const cartTotal = useSelector(cartTotalSelector);

    const [cart, setCart] = useState([]);

    useEffect(() => {
        // Trong hàm này, bạn sẽ lấy giỏ hàng từ localStorage và cập nhật state cart.
        const getCartFromLocalStorage = () => {
            const cart = localStorage.getItem('cart');
            return cart ? JSON.parse(cart) : [];
        };

        const cartFromLocalStorage = getCartFromLocalStorage();
        setCart(cartFromLocalStorage);
    }, []);

    return (
        <Box className='cartDiv'>
            <Container>
                <Typography className='cartDiv__header'>Shopping Cart</Typography>
                <Paper elevation={0}>
                    <Grid container>
                        <Grid item className='leftDivCart'>
                            <CartList cartList={cart} />
                        </Grid>
                        <Grid item className='rightDivCart'>
                            {cart.map(item => (
                                <Box key={item.id} className='rightDivCart__item'>
                                    <Grid container>
                                        <Grid item md={11} lg={11}>
                                            <Typography className='rightDivCart__item-name'>
                                                {item.product.name}
                                            </Typography>
                                        </Grid>
                                        <Grid item md={1} lg={1}>
                                            <Typography className='rightDivCart__item-quantity'>
                                                x{item.quantity}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Box>
                            ))}
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
                            <Box className='rightDivCart__btn'>
                                <NavLink className='rightDivCart__btn-dt' to='/checkout'>
                                    <Button fullWidth style={{ padding: '15px 0', background: '#002070', color: '#fff' }}>
                                        CHECKOUT
                                    </Button>
                                </NavLink>
                            </Box>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>

        </Box>
    );
}

export default CartFeature;