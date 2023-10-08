import { Button, Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom/cjs/react-router-dom';
import productAPI from '../../../../api/productApi';
import BestSeller from './BestSeller';
import './style.scss';

BestSellerList.propTypes = {

};

function BestSellerList(props) {
    const [bestList, setBestList] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const list = await productAPI.getBestSeller();
                setBestList(list.results.map(x => ({
                    id: x.id,
                    name: x.name,
                    img: x.img,
                    price: x.price
                })));
            } catch (error) {
                console.log('Failed to get best seller list', error);
            }
        })();
    }, []);

    return (
        <div className='bestSellerDiv'>
            <Container>
                <Typography variant='h4' className='bestSellerDiv__title'>BEST SELLER</Typography>
                <Typography variant='h6' className='bestSellerDiv__cap'>
                    Chúng tôi tự hào mang đến cho bạn những sản phẩm tốt nhất và được yêu thích nhất trong một loạt các danh mục sản phẩm. Với các loại túi trendy, hợp thời trang, và bảo vệ môi trường.
                </Typography>
                <Grid container spacing={10}>
                    {bestList.map((best) => (
                        <Grid item key={best.id}>
                            <BestSeller bestSeller={best} />
                        </Grid>
                    ))}
                </Grid>
                <div className='actBtnDiv'>
                    <NavLink className="act-btn" to='/'>
                        <Button color="inherit" className="act-btn-dt">See more</Button>
                    </NavLink>
                </div>
                <img src="https://firebasestorage.googleapis.com/v0/b/nearex-1b8f7.appspot.com/o/images%2Fbanner-des.png?alt=media&token=9b538690-710c-4d92-8c8e-0d0a107430d8"
                    alt="Shopping"
                />
            </Container>
        </div>
    );
}

export default BestSellerList;