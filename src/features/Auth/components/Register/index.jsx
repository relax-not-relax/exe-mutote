import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useSnackbar } from 'notistack';
import { register } from '../../userSlice';
import { unwrapResult } from '@reduxjs/toolkit';
import RegisterForm from '../RegisterForm';

Register.propTypes = {
    closeDialog: PropTypes.func,
};

function Register(props) {
    const dispatch = useDispatch();
    const { enqueueSnackbar } = useSnackbar();

    const handleSubmit = async (values) => {

        try {
            const action = register(values);
            const resultAction = await dispatch(action);
            const user = unwrapResult(resultAction);

            //close dialog
            const { closeDialog } = props;
            if (closeDialog) {
                closeDialog();
            }

            //do something here on register successfully         
            console.log('New user: ', user);
            enqueueSnackbar('Register successfully', { variant: 'success' });
            setTimeout(() => {
                window.location.reload();
            }, 1500);

        } catch (error) {
            console.log('Failed to register user: ', error);
            enqueueSnackbar('Email or Phone number is invalid!', { variant: 'error' });
        }
    };

    return (
        <div>
            <RegisterForm onSubmit={handleSubmit} />
        </div>
    );
}

export default Register;