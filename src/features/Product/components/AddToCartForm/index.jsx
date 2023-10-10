import React from 'react';
import PropTypes from 'prop-types';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import QuantityField from '../../../../components/form-controls/QuantityField';
import { Button, Grid } from '@mui/material';
import './style.scss'

AddToCartForm.propTypes = {
    onSubmit: PropTypes.func,
};

function AddToCartForm(props) {
    const { onSubmit = null } = props;

    const schema = yup.object().shape({
        quantity: yup.number()
            .required('Please enter quantity')
            .min(1, 'Minimum quantity is 1')
            .typeError('Please enter a number')
    });

    const form = useForm({
        defaultValue: {
            quantity: 1,
        },
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
                        <QuantityField name='quantity' label='Quantity' form={form} errors={form.formState.errors} />
                    </Grid>
                    <Grid item className='formDiv__btn'>
                        <Button type='submit' fullWidth variant='contained' style={{ background: '#001B5F' }} size='large'>
                            ADD TO CART
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </div>
    );
}

export default AddToCartForm;