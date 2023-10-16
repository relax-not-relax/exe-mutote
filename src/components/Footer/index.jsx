import { Copyright, Facebook, Instagram } from '@mui/icons-material';
import { Box, Container, Divider, Grid, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom';
import './style.scss';

function Footer() {
    return (
        <Box>
            <div className='sub-banner'>
            </div>

            <Container className='footer-dt'>
                <Grid container spacing={2} columns={{ md: 12 }}>
                    <Grid item md={3}>
                        <Typography variant='body1' className='footer-tt'>VỀ MUTOTE</Typography>
                        <Box>
                            <Link to="/about" className='footer-link'>Câu chuyện của chúng tôi</Link><br />
                            <Link to="/faqs" className='footer-link'>FAQs</Link><br />
                        </Box>

                    </Grid>

                    <Grid item md={3}>
                        <Typography variant='body1' className='footer-tt'>Customer Care</Typography>
                        <Link to="/return" className='footer-link'>Chính sách đổi trả</Link><br />
                        <Link to="/" className='footer-link'>Chính sách giao hàng</Link><br />
                        <Link to="/" className='footer-link'>Chính sách thanh toán</Link><br />
                    </Grid>

                    <Grid item md={3}>
                        <Typography variant='body1' className='footer-tt'>Focus us on</Typography>
                        <Link to="/" className='footer-link'>
                            <Facebook />
                        </Link>
                        <Link to="/" className='footer-link'>
                            <Instagram />
                        </Link><br />
                    </Grid>

                    <Grid item md={3}>
                        <Typography variant='body1' className='footer-tt'>DOWNLOAD MOBILE APP</Typography>
                        <img
                            src="https://firebasestorage.googleapis.com/v0/b/nearex-1b8f7.appspot.com/o/images%2Fqrapp.png?alt=media&token=fff364fc-3bcd-49c7-8ba2-dc12771f294d"
                            alt=""
                            className='qrCode'
                        />
                    </Grid>
                </Grid>
            </Container>
            <Divider />
            <div className='footer-cp'>
                <Copyright style={{ color: '#737373' }} />
                <Typography className='copyright'>2023 MUTOTE - All rights reserved</Typography>
            </div>

        </Box>
    );
}

export default Footer;