import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import { Box } from '@mui/material';

ProductThumbnail.propTypes = {
    product: PropTypes.object,
};

function ProductThumbnail(props) {
    const { product } = props;
    return (
        <Box>
            <img
                src={product.img}
                alt={product.name}
                width="100%" />
        </Box>
    );
}

export default ProductThumbnail;