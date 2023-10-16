import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import './style.scss';

ReturnFeature.propTypes = {

};

function ReturnFeature(props) {
    return (
        <Box style={{ padding: '150px 0 0 0' }}>
            <Container>
                <Box className='returnHeader'>
                    <Box>
                        <Typography className='returnHeader__h1'>Đổi trả miễn phí</Typography>
                        <Typography className='returnHeader__h2'>Trong vòng 2 tuần</Typography>
                    </Box>
                </Box>
                <Box>
                    <Grid container>
                        <Grid item md={6} lg={6} paddingRight={3}>
                            <Typography className='returnHeader__h3'>Đối với những sản phẩm bạn đã mua tại MUTOTE</Typography>
                            <p>Với những sản phẩm bạn đã mua tại MUTOTE, 2 tuần kể từ khi bạn nhận sản phẩm thì bạn sẽ được đổi hàng và trả hàng với bất kỳ lý do gì, bao gồm cả các sản phẩm đã qua giặt và sử dụng.</p>
                            <p style={{ marginBottom: '10px' }}>Một số lưu ý: </p>
                            <ul>
                                <li style={{ marginBottom: '10px' }}>Chính sách đổi trả chỉ được áp dụng với những sản phẩm không phải "Best Seller".</li>
                                <li style={{ marginBottom: '10px' }}>Khách hàng phải chịu phí vận chuyển ngược lại cho MUTOTE.</li>
                                <li style={{ marginBottom: '10px' }}>Mọi thắc mắc về chính sách và quy trình đổi trả vui lòng liên hệ tại <a href="https://www.facebook.com/mutotevn" style={{ textDecoration: 'none', fontWeight: '500' }}>fanpage MUTOTE</a>.</li>
                            </ul>
                        </Grid>
                        <Grid item md={6} lg={6} paddingLeft={2}>
                            <img
                                src="https://firebasestorage.googleapis.com/v0/b/nearex-1b8f7.appspot.com/o/images%2F2tui.png?alt=media&token=1b2a6f30-d49c-491a-80e2-c2155d559494"
                                alt=""
                                width='85%'
                            />
                        </Grid>
                    </Grid>
                </Box>
                <Box className='returnFlow'>
                    <Box>
                        <Typography className='returnFlow__h1'>3 bước nhanh chóng để đổi trả</Typography>
                        <Grid container spacing={2}>
                            <Grid item md={4} lg={4}>
                                <Box className='returnFlow__div'>
                                    <img
                                        src="https://firebasestorage.googleapis.com/v0/b/nearex-1b8f7.appspot.com/o/images%2Fcontact1.png?alt=media&token=6205fde7-619b-4552-ae94-7ca90e4dd05d"
                                        alt=""
                                        width='35%'
                                    />
                                    <Typography>Bước 1</Typography>
                                    <Typography>Liên hệ với MUTOTE qua <a href="https://www.facebook.com/mutotevn" style={{ textDecoration: 'none', fontWeight: '500' }}>fanpage MUTOTE</a></Typography>
                                </Box>
                            </Grid>
                            <Grid item md={4} lg={4}>
                                <Box className='returnFlow__div'>
                                    <img
                                        src="https://firebasestorage.googleapis.com/v0/b/nearex-1b8f7.appspot.com/o/images%2Fcontact2.png?alt=media&token=769b1c84-a34f-40da-b14b-94f679dc4870"
                                        alt=""
                                        width='35%'
                                    />
                                </Box>
                            </Grid>
                            <Grid item md={4} lg={4}>
                                <Box className='returnFlow__div'>
                                    <img
                                        src="https://firebasestorage.googleapis.com/v0/b/nearex-1b8f7.appspot.com/o/images%2Fcontact3.png?alt=media&token=bb4c8292-b43c-4b04-93a7-a830ba6758a2"
                                        alt=""
                                        width='35%'
                                    />
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}

export default ReturnFeature;