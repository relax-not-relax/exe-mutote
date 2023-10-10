import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Button, TextField, Typography } from '@mui/material';
import './style.scss';

PriceSort.propTypes = {
    onChange: PropTypes.func,
};

function PriceSort(props) {

    const { onChange } = props;

    const [values, setValues] = useState({
        minPrice: 0,
        maxPrice: 0,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues(prevValues => ({
            ...prevValues,
            [name]: value,
        }))
    };

    const handleSubmit = () => {
        if (!onChange) return;
        onChange(values);
    };

    return (
        <Box className='priceDiv'>
            <Typography variant="subtitle2" className='priceDiv__title'>GIÁ</Typography>

            <Box className='priceDiv__range' >
                <TextField label="Min" name='minPrice' value={values.minPrice} onChange={handleChange} />
                <span>-</span>
                <TextField label="Max" name='maxPrice' value={values.maxPrice} onChange={handleChange} />
            </Box>

            <Button variant='outlined' color='primary' size='small' onClick={handleSubmit}>Áp dụng</Button>
        </Box>
    );
}

export default PriceSort;