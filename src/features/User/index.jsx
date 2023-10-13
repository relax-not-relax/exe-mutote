import { Logout } from '@mui/icons-material';
import { Avatar, Box, Grid, Paper, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import StorageKeys from '../../constants/storage-key';
import { logout } from '../Auth/userSlice';
import ListOrder from './components/ListOrder';
import './style.scss'
//import PropTypes from 'prop-types';

UserFeature.propTypes = {

};

function UserFeature(props) {
    const [userData, setUserData] = useState({});

    useEffect(() => {
        const userDataFromLocalStorage = localStorage.getItem(StorageKeys.USER);

        if (userDataFromLocalStorage) {
            const parsedUserData = JSON.parse(userDataFromLocalStorage);
            setUserData(parsedUserData);
        }

    }, []);

    const dispatch = useDispatch();
    const handleLogout = () => {
        const action = logout();
        dispatch(action);
        window.location.reload();
    };

    return (
        <Box marginTop='90px'>
            <Container>
                <Grid container spacing='20px'>
                    <Grid item md={4} lg={4}>
                        <Box>
                            <Paper className='avatarDiv'>
                                <Box className='avatarDiv__hd'>
                                    <Avatar className='avatar' />
                                </Box>
                                <Typography className='avatarDiv__tt'>
                                    {userData.name}
                                </Typography>
                                {userData.name !== null && (
                                    <>
                                        <Box marginTop='10px' style={{ cursor: 'pointer' }} onClick={handleLogout}>
                                            <Grid container>
                                                <Grid item md={6} lg={6}>
                                                    <Box className='logoutIcon'>
                                                        <Logout />
                                                    </Box>
                                                </Grid>
                                                <Grid item md={6} lg={6} >
                                                    Logout
                                                </Grid>
                                            </Grid>
                                        </Box>
                                    </>
                                )}
                            </Paper>
                        </Box>
                    </Grid>
                    <Grid item md={8} lg={8}>
                        <Box className='historyOrder'>
                            <Grid container>
                                <Grid item md={5} lg={5}>
                                    <Box>
                                        <Typography textAlign='end' variant='body2' style={{ color: '#565656', fontWeight: '700', paddingRight: '32px' }}>Price</Typography>
                                    </Box>
                                </Grid>
                                <Grid item md={3} lg={3}>
                                    <Box>
                                        <Typography textAlign='end' variant='body2' style={{ color: '#565656', fontWeight: '700', paddingRight: '58px' }}>Date</Typography>
                                    </Box>
                                </Grid>
                                <Grid item md={4} lg={4}>
                                    <Box>
                                        <Typography variant='body2' style={{ color: '#565656', fontWeight: '700', paddingLeft: '40px' }}>Status</Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                        <ListOrder user={userData} />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default UserFeature;