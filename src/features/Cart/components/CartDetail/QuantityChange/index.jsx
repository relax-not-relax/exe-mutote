import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Grid } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import QuantityFieldChange from '../../../../../components/form-controls/QuantityFieldChange';

QuantityChange.propTypes = {
    onSubmit: PropTypes.func,
    itemQuantity: PropTypes.number,
};

function QuantityChange(props) {
    const { onSubmit = null, itemQuantity } = props;

    const schema = yup.object().shape({
        quantity: yup.number()
            .required('Please enter quantity')
            .min(1, 'Minimum quantity is 1')
            .typeError('Please enter a number')
    });

    const form = useForm({
        //defaultValue: itemQuantity,
        resolver: yupResolver(schema),
    })

    const handleSubmit = async (values) => {
        if (onSubmit) {
            await onSubmit(values);
        }

        //form.reset();
    }

    return (
        <div className='formDiv'>
            <form onSubmit={form.handleSubmit(handleSubmit)}>
                <Grid container>
                    <Grid item>
                        <QuantityFieldChange name='quantity' label='Quantity' form={form} errors={form.formState.errors} defaultQuantity={itemQuantity} />
                    </Grid>
                    <Grid item className='formDiv__btn' style={{ marginTop: '10px' }}>
                        <Button type='submit' fullWidth variant='contained' style={{ background: '#001B5F' }} size='large'>
                            CHANGE
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </div>
    );
}

export default QuantityChange;