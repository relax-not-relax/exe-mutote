import React from 'react';
import PropTypes from 'prop-types';
import { Box, Tab, Tabs } from '@mui/material';

ProductSort.propTypes = {
    currentSort: PropTypes.number.isRequired,
    onChange: PropTypes.func
};

function ProductSort(props) {

    const { currentSort, onChange } = props;

    const handleSortChange = (event, newValue) => {
        if (onChange) onChange(newValue);
    }

    return (
        <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
            <Tabs
                value={currentSort}
                onChange={handleSortChange}
                centered
            >
                <Tab label="Giá thấp tới cao" value={0}></Tab>
                <Tab label="Giá cao xuống thấp" value={1}></Tab>
            </Tabs>
        </Box>
    );
}

export default ProductSort;