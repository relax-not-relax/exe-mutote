import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import Cart from '../Cart';

CartList.propTypes = {
    cartList: PropTypes.array,
};

CartList.defaultProps = {
    cartList: [],
};

function CartList(props) {

    const { cartList } = props;

    return (
        <Box>
            {cartList.map((cart) => (
                <Box key={cart.id}>
                    <Cart cartItem={cart} />
                </Box>
            ))}
        </Box>
    );
}

export default CartList;