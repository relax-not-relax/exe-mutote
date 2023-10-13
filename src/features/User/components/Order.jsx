import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Grid, Typography } from '@mui/material';
import './style.scss';
import orderAPI from '../../../api/orderApi';
import { format } from 'date-fns';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';


Order.propTypes = {
    order: PropTypes.object,
};

function Order(props) {

    const { order } = props;

    const [date, setDate] = useState('');
    const [status, setStatus] = useState(0);

    useEffect(() => {
        (async () => {
            const response = await orderAPI.get(order.orderId);
            setDate(format(new Date(response.orderDate), 'dd/MM/yyyy'));
            setStatus(response.status);
        })();
    }, [order.orderId]);

    const history = useHistory();

    const handleProductClick = () => {
        history.push(`/products/${order.productId}`);
    }

    return (
        <Box className='orderDtDiv' marginTop='20px' style={{ borderBottom: '1px #D2D2D2 solid', paddingBottom: '20px' }}>
            <Grid container>
                <Grid item md={2} lg={2}>
                    <Box onClick={handleProductClick} style={{ cursor: 'pointer' }}>
                        <img src={order.img} alt="" width='95%' />
                    </Box>
                </Grid>
                <Grid item md={3} lg={3}>
                    <Typography textAlign='end' className='orderItem__price'>
                        {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(order.price)}
                    </Typography>
                </Grid>

                <Grid item md={3} lg={3}>
                    <Typography textAlign='end' className='orderItem__date' variant='body2' style={{ color: '#A3A3A3' }}>
                        {date}
                    </Typography>
                </Grid>
                <Grid item md={4} lg={4}>
                    {status === 0 && (
                        <>
                            <Box className='status-pending'>
                                <Typography textAlign='center' style={{ color: '#00134c', fontWeight: '500', fontSize: '15px' }}>
                                    PENDING
                                </Typography>
                            </Box>
                        </>
                    )}
                    {status === 1 && (
                        <>
                            <Box className='status-done'>
                                <Typography textAlign='center' style={{ color: '#10DBA8', fontWeight: '500', fontSize: '15px' }}>
                                    DONE
                                </Typography>
                            </Box>
                        </>
                    )}
                </Grid>
            </Grid>
        </Box>
    );
}

export default Order;