import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import './style.scss'

PaymentFeature.propTypes = {

};

function PaymentFeature(props) {
    return (
        <Box style={{ padding: '100px 0 0 0' }}>
            <Container style={{ padding: '0 40px' }}>
                <Typography style={{ color: '#00134c', textAlign: 'center', fontSize: '40px', fontWeight: '700 ', marginBottom: '100px' }}>Chính sách thanh toán tại MUTOTE</Typography>
                <Box marginBottom={4}>
                    <Grid container spacing={2}>
                        <Grid item md={6} lg={6}>
                            <Typography className='step'>01</Typography>
                            <Typography className='step__des'>Khách hàng chọn sản phẩm muốn mua bằng cách nhấn vào sản phẩm bất kì tại "Shop".</Typography>
                        </Grid>
                        <Grid item md={6} lg={6}>
                            <img
                                src="https://firebasestorage.googleapis.com/v0/b/nearex-1b8f7.appspot.com/o/images%2Fstep1.gif?alt=media&token=c569c5f8-7b2a-4d6d-aaf9-50b7fdd1a150"
                                alt=""
                                width='100%'
                            />
                        </Grid>
                    </Grid>
                </Box>

                <Box marginBottom={4}>
                    <Grid container spacing={2}>
                        <Grid item md={6} lg={6}>
                            <img
                                src="https://firebasestorage.googleapis.com/v0/b/nearex-1b8f7.appspot.com/o/images%2Fstep2.gif?alt=media&token=45424775-fa41-471b-b512-017198a7ed78"
                                alt=""
                                width='100%'
                            />
                        </Grid>
                        <Grid item md={6} lg={6}>
                            <Typography className='step1'>02</Typography>
                            <Typography className='step1__des'>Khách hàng thêm sản phẩm muốn vào giỏ hàng. Bạn có thể chon mua với số lượng tùy thích và nhiều sản phẩm khác nhau và không được vượt quá 100 sản phẩm.</Typography>
                        </Grid>
                    </Grid>
                </Box>

                <Box marginBottom={4}>
                    <Grid container spacing={2}>
                        <Grid item md={6} lg={6}>
                            <Typography className='step'>03</Typography>
                            <Typography className='step__des'>Tại giỏ hàng, khách hàng có thể tùy chỉnh số lượng hoặc loại bỏ sản phẩm. Sau đó bấm "Checkout" để chuyển tới trang thanh toán và gửi order cho MUTOTE</Typography>
                        </Grid>
                        <Grid item md={6} lg={6}>
                            <img
                                src="https://firebasestorage.googleapis.com/v0/b/nearex-1b8f7.appspot.com/o/images%2Fstep3.gif?alt=media&token=037605a9-2e90-49a6-bbbf-36c7dcae6e19"
                                alt=""
                                width='100%'
                            />
                        </Grid>
                    </Grid>
                </Box>

                <Box marginBottom={4}>
                    <Grid container spacing={2}>
                        <Grid item md={6} lg={6}>
                            <img
                                src="https://firebasestorage.googleapis.com/v0/b/nearex-1b8f7.appspot.com/o/images%2Fstep4.png?alt=media&token=11a89280-929d-418e-9686-48871cd79c76"
                                alt=""
                                width='100%'
                            />
                        </Grid>
                        <Grid item md={6} lg={6}>
                            <Typography className='step1'>04</Typography>
                            <Typography className='step1__des'>Tại trang thanh toán khách hàng điền thông tin và đơn order, sau đó thực hiện thanh toán bằng cách chuyển khoản trước khi ấn "Place order".<br />
                                <span style={{ fontWeight: '700' }}>Lưu ý: </span>Khách hàng chuyển khoản với nội dung: Tên khách hàng - Thanh toán MUTOTE - Ngày thanh toán</Typography>
                        </Grid>
                    </Grid>
                </Box>

                <Typography marginTop={9}><span style={{ fontWeight: '700' }}>LƯU Ý: </span>
                    Trong trường hợp khách hàng <span style={{ fontWeight: '700' }}>chưa chuyển khoản</span><span style={{ fontWeight: '700' }}>, MUTOTE</span> sẽ chủ động liên hệ với khách hàng qua thông tin số điện thoại tại đơn hàng để xác nhận. Nếu hình thức chuyển khoản không khả dụng với khách hàng, bạn có thể liên hệ tại <a href="https://www.facebook.com/mutotevn" style={{ textDecoration: 'none', fontWeight: '500' }} target="_blank" rel="noreferrer">fanpage MUTOTE</a> để được hỗ trợ. <span style={{ fontWeight: '700' }}>MUTOTE</span> không cam kết có thể hỗ trợ các trường hợp khẩn cấp 100%, tuy nhiên <span style={{ fontWeight: '700' }}>MUTOTE</span> chắc chắn sẽ làm mọi cách có thể để giúp khách hàng giải quyết vấn đề của mình.
                </Typography>
            </Container>
        </Box>
    );
}

export default PaymentFeature;