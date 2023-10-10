import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
import './style.scss';

Category.propTypes = {
    category: PropTypes.object,
};

function Category(props) {
    const { category } = props;

    const history = useHistory();

    const handleCategoryClick = () => {
        history.push(`/products?CategoryProductId=${category.id}`);
    }

    return (
        <Box padding={1} className="cateDiv" onClick={handleCategoryClick}>
            <img src={category.cateProductImg} alt={category.name} className="cateDiv__img" />
            <Typography className="cateDiv__name">{category.name}</Typography>
        </Box>
    );
}

export default Category;