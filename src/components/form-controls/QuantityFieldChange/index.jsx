import React from 'react';
import PropTypes from 'prop-types';
import { Box, FormControl, FormHelperText, IconButton, OutlinedInput, Typography } from '@mui/material';
import { Controller } from 'react-hook-form';
import { AddCircleOutline, RemoveCircleOutline } from '@mui/icons-material';
import './style.scss'

QuantityFieldChange.propTypes = {
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,

    label: PropTypes.string,
    disabled: PropTypes.bool,
    errors: PropTypes.object,
    defaultQuantity: PropTypes.number,
};

function QuantityFieldChange(props) {
    const { form, name, label, disabled, errors, defaultQuantity } = props;
    const hasError = errors[name];

    return (
        <div>
            <FormControl error={Boolean(hasError)} fullWidth variant="outlined" size='small'>
                <Typography>{label}</Typography>
                <Controller
                    name={name}
                    control={form.control}
                    defaultValue={defaultQuantity}
                    render={({ field }) => (

                        <Box className="box">
                            <IconButton onClick={() => field.onChange(Number.parseInt(field.value) ? Number.parseInt(field.value) - 1 : 1)}>
                                <RemoveCircleOutline />
                            </IconButton>

                            <OutlinedInput
                                id={name}
                                type="number"
                                disabled={disabled}
                                {...field}
                                className="form-control"

                            />

                            <IconButton onClick={() => field.onChange(Number.parseInt(field.value) ? Number.parseInt(field.value) + 1 : 1)}>
                                <AddCircleOutline />
                            </IconButton>
                        </Box>
                    )}
                />

                <FormHelperText error={Boolean(hasError)}>{hasError?.message}</FormHelperText>
            </FormControl>
        </div>
    );
}

export default QuantityFieldChange;