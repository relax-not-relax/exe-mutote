import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';
import './style.scss';

Category.propTypes = {
    category: PropTypes.object,
};

function Category(props) {
    const { category } = props;
    return (
        <Box padding={1} className="cateDiv">
            <img src={category.cateProductImg} alt={category.name} className="cateDiv__img" />
            <Typography className="cateDiv__name">{category.name}</Typography>
        </Box>
    );
}

export default Category;