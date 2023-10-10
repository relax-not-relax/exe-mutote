import React from 'react';
import PropTypes from 'prop-types';
import './style.scss'
import { Box, Typography } from '@mui/material';

ProductInfo.propTypes = {
    product: PropTypes.object,
};

function ProductInfo(props) {
    const { product } = props;

    return (
        <Box className="detailDiv">
            <Typography component="h1" variant='h4' className='detailDiv__title'>{product.name}</Typography>
            <Box className="priceBox">
                <Box component="span" className='priceBox__sale'>
                    {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.price)}
                </Box>
            </Box>
            <Typography variant='body2' className='detailDiv__des'>{product.description}</Typography>
            <Box>
                {product.status === 1 && (
                    <>
                        <div className='detailDiv__status-1'>
                            <Typography style={{ fontWeight: '500' }}>NEW PRODUCT</Typography>
                        </div>
                    </>
                )}
                {product.status === 0 && (
                    <>
                        <div className='detailDiv__status-2'>
                            <Typography style={{ fontWeight: '500' }}>ECO FRIENDLY</Typography>
                        </div>
                    </>
                )}
            </Box>
            <Box className='detailDiv__brand'>
                <Typography variant='body2'><span className='detailDiv__brand-title'>Brand: </span><span className='detailDiv__brand-name'>MUTOTE</span></Typography>
                <Typography variant='body2'><span className='detailDiv__brand-title'>Category: </span><span className='detailDiv__brand-name-category'>{product.categoryProduct.name}</span></Typography>
            </Box>

        </Box>
    );
}

export default ProductInfo;