import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';
import './style.scss';

BestSeller.propTypes = {
    bestSeller: PropTypes.object,
};

function BestSeller(props) {
    const { bestSeller } = props;

    return (
        <Box className='bestProduct'>
            <img src={bestSeller.img} alt={bestSeller.name} />
            <Typography variant='body2' className='bestProduct__title'>{bestSeller.name}</Typography>
            <Box component="span" className='bestProduct__price'>
                {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(bestSeller.price)}
            </Box>
        </Box>
    );
}

export default BestSeller;