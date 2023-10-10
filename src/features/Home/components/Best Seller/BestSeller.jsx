import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
import './style.scss';

BestSeller.propTypes = {
    bestSeller: PropTypes.object,
};

function BestSeller(props) {
    const { bestSeller } = props;
    const history = useHistory();

    const handleClick = () => {
        //Navigate to detail page /products/:productId
        history.push(`/products/${bestSeller.id}`);
    };

    return (
        <Box className='bestProduct' onClick={handleClick}>
            <img src={bestSeller.img} alt={bestSeller.name} width='90%' />
            <Typography variant='body2' className='bestProduct__title'>{bestSeller.name}</Typography>
            <Box component="span" className='bestProduct__price'>
                {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(bestSeller.price)}
            </Box>
        </Box>
    );
}

export default BestSeller;