import React from 'react';
import PropTypes from 'prop-types';
import { Box, Chip, Grid, Typography } from '@mui/material';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
import './style.scss';
import { Whatshot } from '@mui/icons-material';

Product.propTypes = {
    product: PropTypes.object,
};

function Product(props) {
    const history = useHistory();
    const { product } = props;

    const handleClick = () => {
        //Navigate to detail page /products/:productId
        history.push(`/products/${product.id}`);
    };

    return (
        <Box className='productCtn' onClick={handleClick} >
            <Box padding={1} className="productDiv">
                <Box minHeight="146px">
                    <img
                        src={product.img}
                        alt={product.name}
                        width="100%" />
                </Box>

                <Typography variant='body2' className='productDiv__title'>{product.name}</Typography>
                <Typography variant='body2'>
                    <Box component="span" className='productDiv__price' >
                        {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.price)}
                    </Box>
                </Typography>

                <Grid container style={{ marginTop: '15px' }}>
                    <Grid item>
                        {product.status === 1 && <Chip label="Sản phẩm mới" color="primary" />}
                    </Grid>
                    <Grid item style={{ paddingTop: '5px' }}>
                        {product.isBestSeller === true && <Whatshot style={{ color: '#FB7421' }} />}
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}

export default Product;