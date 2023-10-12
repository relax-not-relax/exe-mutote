import { Box, Grid, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
import { removeFromCart, setQuantity } from '../../../cartSlice';
import DeleteItem from '../DeleteItem';
import QuantityChange from '../QuantityChange';
import './style.scss';

Cart.propTypes = {
    cartItem: PropTypes.object,
};

function Cart(props) {
    const { cartItem } = props;
    const history = useHistory();
    const dispatch = useDispatch();

    const handleClick = () => {
        //Navigate to detail page /products/:productId
        history.push(`/products/${cartItem.product.id}`);
    };

    const handleQuantityChange = ({ quantity }) => {
        const action = setQuantity({
            id: cartItem.product.id,
            quantity,
        });
        dispatch(action);
        window.location.reload();
    }

    const handleCancel = () => {
        const action = removeFromCart({
            idNeedToRemove: cartItem.product.id,
        });
        dispatch(action);
        window.location.reload();
    }

    return (
        <Box className='cartItemDiv' >
            <Grid container>
                <Grid item md={4} lg={4}>
                    <Box className='cartItemDiv__img' onClick={handleClick}>
                        <img src={cartItem.product.img} alt={cartItem.product.name} width="80%" />
                    </Box>
                </Grid>
                <Grid item md={5} lg={5}>
                    <Box>
                        <Typography variant='h6'>{cartItem.product.name}</Typography>
                        <Typography className='cartItemDiv__price'>
                            {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(cartItem.product.price)}
                        </Typography>
                        {/* <Button className='deleteBtn' onClick={handleCancel}>Delete</Button> */}
                        <DeleteItem onSubmit={handleCancel} />
                    </Box>
                </Grid>
                <Grid item md={3} lg={3}>
                    {/* <Typography variant='body2'>{cartItem.quantity}</Typography> */}
                    <QuantityChange onSubmit={handleQuantityChange} itemQuantity={cartItem.quantity} />
                </Grid>
            </Grid>
        </Box>
    );
}

export default Cart;