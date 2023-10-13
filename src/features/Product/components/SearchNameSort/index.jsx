import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/system';
import { Button, TextField, Typography } from '@mui/material';
import './style.scss'

SearchNameSort.propTypes = {
    onChange: PropTypes.func,
};

function SearchNameSort(props) {

    const { onChange } = props;

    const [values, setValues] = useState({
        Name: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues(prevValues => ({
            ...prevValues,
            Page: 1,
            [name]: value,
        }))
    };

    const handleSubmit = () => {
        if (!onChange) return;
        onChange(values);
    };

    return (
        <Box className='searchDiv'>
            <Typography variant="subtitle2" className='searchDiv__title'>TÌM KIẾM SẢN PHẨM</Typography>

            <Box className='searchDiv__range' >
                <TextField label="Search" name='Name' value={values.Name} onChange={handleChange} fullWidth />
            </Box>

            <Button variant='outlined' color='primary' size='small' onClick={handleSubmit}>Tìm kiếm</Button>
        </Box>
    );
}

export default SearchNameSort;