import React, { useState } from 'react';
import PropTypes from 'prop-types';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import './style.scss';
import { useForm } from 'react-hook-form';
import { Avatar, Box, Button, Dialog, DialogActions, DialogContent, LinearProgress, Typography } from '@mui/material';
import { LockOutlined } from '@mui/icons-material';
import InputField from '../../../../components/form-controls/InputField';
import PasswordField from '../../../../components/form-controls/PasswordField';

RegisterForm.propTypes = {
    onSubmit: PropTypes.func,
};

function RegisterForm(props) {

    const schema = yup.object().shape({
        name: yup.string()
            .required('Please enter your full name')
            .test('Should has at least two words', 'Please enter at least two words', (value) => {
                return value.split(' ').length >= 2;
            }),
        email: yup.string()
            .required('Please enter your email')
            .email('Please enter a valid email address'),
        phone: yup.string().required('Please enter a valid phone number'),
        password: yup.string()
            .required('Please enter your password')
            .min(6, 'Please enter at least 6 characters'),
        confirmPassword: yup.string()
            .required('Please confirm your password')
            .oneOf([yup.ref('password'), 'Password does not match']),
    });

    const form = useForm({
        defaultValue: {
            name: '',
            email: '',
            phone: '',
            password: '',
            confirmPassword: '',
        },
        resolver: yupResolver(schema),
    })

    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = async (values) => {
        //console.log('TODO FORM: ', values);
        const { onSubmit } = props;
        if (onSubmit) {
            await onSubmit(values);
        }

        //form.reset();
    }

    const { isSubmitting } = form.formState;

    return (
        <div className="registerForm">

            {isSubmitting && <LinearProgress className='registerForm__pg' />}

            <Avatar className="registerForm__ava">
                <LockOutlined></LockOutlined>
            </Avatar>

            <Typography className="registerForm__title" component="h3" variant="h5">
                Create An Account
            </Typography>

            <form onSubmit={form.handleSubmit(handleSubmit)}>
                <InputField name='name' label='Full Name' form={form} errors={form.formState.errors} />
                <InputField name='email' label='Email' form={form} errors={form.formState.errors} />
                <InputField name='phone' label='Phone Number' form={form} errors={form.formState.errors} />
                <PasswordField name='password' label='Password' form={form} errors={form.formState.errors} />
                <PasswordField name='confirmPassword' label='Confirm Password' form={form} errors={form.formState.errors} />

                <Button disabled={isSubmitting} type='submit' fullWidth variant='contained' color='primary' className="registerForm__btn">
                    Sign Up
                </Button>

                <Box textAlign="center">
                    <Button color="primary" onClick={handleClickOpen}>
                        VERIFY PHONE NUMBER
                    </Button>
                </Box>

                <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
                    <DialogContent>

                        Verify

                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                    </DialogActions>
                </Dialog>
            </form>
        </div>
    );
}

export default RegisterForm;