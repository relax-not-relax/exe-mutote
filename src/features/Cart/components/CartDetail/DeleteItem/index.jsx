import { DeleteOutlineOutlined } from '@mui/icons-material';
import { Box } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import './style.scss';

DeleteItem.propTypes = {
    onSubmit: PropTypes.func,
};

function DeleteItem(props) {

    const { onSubmit = null } = props;

    const handleSubmit = async () => {
        if (onSubmit) {
            await onSubmit();
        }

        //form.reset();
    }

    return (
        <Box>
            {/* <Button onClick={handleSubmit} className='deleteBtn'>Delete</Button> */}
            <DeleteOutlineOutlined onClick={handleSubmit} style={{ color: '#fd4d4d', marginTop: '10px', cursor: 'pointer' }} />
        </Box>
    );
}

export default DeleteItem;