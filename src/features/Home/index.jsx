import { Box, Container } from '@mui/material';
import React from 'react';
import BestSellerList from './components/Best Seller/BestSellerList';
import CategoryList from './components/Category/CategoryList';
import './style.scss'

HomeFeature.propTypes = {

};

function HomeFeature(props) {
    return (
        <Box>
            <img src="https://firebasestorage.googleapis.com/v0/b/nearex-1b8f7.appspot.com/o/images%2Fz4463076381426_93c6b513574093fa3e928a34250fe21a.gif?alt=media&token=84a48e93-e05e-4455-afa9-be03ecb8318d"
                alt=""
                className='big-banner' />
            <Container>
                <CategoryList />
            </Container>
            <BestSellerList />

        </Box>
    );
}

export default HomeFeature;