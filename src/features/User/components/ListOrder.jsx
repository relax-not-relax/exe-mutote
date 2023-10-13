import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useEffect } from 'react';
import orderAPI from '../../../api/orderApi';
import Order from './Order'
import { Box } from '@mui/material';
import './style.scss';

ListOrder.propTypes = {
    user: PropTypes.object,
};

function ListOrder(props) {

    const { user } = props;

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        (async () => {
            const params = {
                PageSize: 100,
                CustomerId: user.id,
                ColName: 'orderDate',
                SortType: 1,
            };

            const response = await orderAPI.getAll(params);
            const result = response.results.map(item => item.orderDetails);
            const list = result.flat();
            console.log(list);
            setOrders(list);
        })();

    }, [user]);

    return (
        <Box className='orderDt'>
            {orders.map(order => (
                <Box key={order.id}>
                    <Order order={order} />
                </Box>
            ))}
        </Box>
    );
}

export default ListOrder;