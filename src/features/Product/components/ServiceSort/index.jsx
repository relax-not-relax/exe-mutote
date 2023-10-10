import React from 'react';
import PropTypes from 'prop-types';
import { Box, Checkbox, FormControlLabel, Typography } from '@mui/material';
import './style.scss'

ServiceSort.propTypes = {
    onChange: PropTypes.func,
    filters: PropTypes.object,
};

function ServiceSort(props) {

    const { onChange, filters = {} } = props;

    const handleChange = (e) => {
        if (!onChange) return;

        const { name, checked } = e.target;
        let updatedFilters = {};

        // Kiểm tra xem name có giá trị 'Status' hay 'isBestSeller' không
        if (name === 'Status') {
            updatedFilters = { ...filters, Status: checked ? 1 : 0 };
        } else if (name === 'isBestSeller') {
            updatedFilters = { ...filters, isBestSeller: checked };
        }

        onChange(updatedFilters);
    };

    return (
        <Box className='serviceDiv'>
            <Typography variant="subtitle2" className='serviceDiv__title'>DỊCH VỤ</Typography>

            <ul>
                {[
                    { value: 'isBestSeller', label: 'Best Seller' },
                    { value: 'Status', label: 'Sản phẩm mới' },
                ].map(service => (
                    <li key={service.value}>
                        <FormControlLabel
                            control={
                                <Checkbox checked={filters[service]} onChange={handleChange} name={service.value} />
                            }
                            label={service.label}
                        />
                    </li>
                ))}

            </ul>
        </Box>
    );
}

export default ServiceSort;