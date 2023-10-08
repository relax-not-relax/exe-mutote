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
                        <Typography variant='body1' className='footer-tt'>COMPANY INFO</Typography>
                        <Box>
                            <Link to="/" className='footer-link'>About MUTOTE</Link><br />
                            <Link to="/" className='footer-link'>Social Responsibility</Link><br />
                            <Link to="/" className='footer-link'>Fashion Blogger</Link><br />
                            <Link to="/" className='footer-link'>Careers</Link><br />
                            <Link to="/" className='footer-link'>Student Discount</Link><br />
                        </Box>

                    </Grid>

                    <Grid item md={3}>
                        <Typography variant='body1' className='footer-tt'>HELP & SUPPORT</Typography>
                        <Link to="/" className='footer-link'>Shipping info</Link><br />
                        <Link to="/" className='footer-link'>How to Order</Link><br />
                        <Link to="/" className='footer-link'>how to track</Link><br />
                    </Grid>

                    <Grid item md={3}>
                        <Typography variant='body1' className='footer-tt'>Customer Care</Typography>
                        <Link to="/" className='footer-link'>Contact Us</Link><br />
                        <Link to="/" className='footer-link'>Payment & Tax</Link><br />
                        <Typography variant='body1' className='footer-tt-2'>Focus us on</Typography>
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