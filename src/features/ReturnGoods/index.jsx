import { Facebook, Instagram } from '@mui/icons-material';
import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom';
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
                                <li style={{ marginBottom: '10px' }}>Mọi thắc mắc về chính sách và quy trình đổi trả vui lòng liên hệ tại <a href="https://www.facebook.com/mutotevn" style={{ textDecoration: 'none', fontWeight: '500' }} target="_blank" rel="noreferrer">fanpage MUTOTE</a>.</li>
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
                        <Grid container spacing={3}>
                            <Grid item md={4} lg={4}>
                                <Box className='returnFlow__div'>
                                    <img
                                        src="https://firebasestorage.googleapis.com/v0/b/nearex-1b8f7.appspot.com/o/images%2Fcontact1.png?alt=media&token=6205fde7-619b-4552-ae94-7ca90e4dd05d"
                                        alt=""
                                        width='35%'
                                    />
                                    <Typography className='returnFlow__div-hd'>Bước 1</Typography>
                                    <Typography className='returnFlow__div-pag'>Liên hệ với MUTOTE qua <a href="https://www.facebook.com/mutotevn" style={{ textDecoration: 'none', fontWeight: '500' }} target="_blank" rel="noreferrer">fanpage MUTOTE</a></Typography>
                                </Box>
                            </Grid>
                            <Grid item md={4} lg={4}>
                                <Box className='returnFlow__div'>
                                    <img
                                        src="https://firebasestorage.googleapis.com/v0/b/nearex-1b8f7.appspot.com/o/images%2Fcontact2.png?alt=media&token=769b1c84-a34f-40da-b14b-94f679dc4870"
                                        alt=""
                                        width='35%'
                                    />
                                    <Typography className='returnFlow__div-hd'>Bước 2</Typography>
                                    <Typography className='returnFlow__div-pag'>Nhận hỗ trợ của staff và chờ xác nhận đơn hàng</Typography>
                                </Box>
                            </Grid>
                            <Grid item md={4} lg={4}>
                                <Box className='returnFlow__div'>
                                    <img
                                        src="https://firebasestorage.googleapis.com/v0/b/nearex-1b8f7.appspot.com/o/images%2Fcontact3.png?alt=media&token=bb4c8292-b43c-4b04-93a7-a830ba6758a2"
                                        alt=""
                                        width='35%'
                                    />
                                    <Typography className='returnFlow__div-hd'>Bước 3</Typography>
                                    <Typography className='returnFlow__div-pag'>Ngay khi xác nhận chúng tôi sẽ gửi bạn đơn hàng mới (hoặc lấy đơn hàng về), bạn chỉ cần gởi hàng cần đổi/trả cho shipper là được </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Box style={{ marginTop: '100px' }}>
                    <Grid container>
                        <Grid item md={6} lg={6} style={{ padding: '50px 50px 0 0' }}>
                            <Typography className='returnHeader__h3'>Đối với việc trả hàng</Typography>
                            <p style={{ marginBottom: '35px' }}>Chúng tôi sẽ hoàn lại 70% giá của sản phẩm ban đầu vào tài khoản mà bạn cung cấp tối đa trong 24h làm việc (không tính thứ 7 & Chủ Nhật) sau khi yêu cầu hoàn tiền được các staff MUTOTE xác nhận.</p>

                            <Typography className='returnHeader__h3'>Lưu ý</Typography>
                            <ul style={{ marginBottom: '35px' }}>
                                <li style={{ marginBottom: '10px' }}>MUTOTE hỗ trợ tối đa 2 lần/1 khách hàng</li>
                                <li style={{ marginBottom: '10px' }}>MUTOTE có quyền quyết định dừng việc hỗ trợ đổi trả và trả lại tiền cho khách hàng nếu phát hiện khách hàng sử dụng chính sách để trục lợi (như việc đổi quá nhiều lần).</li>
                            </ul>

                            <Typography className='returnHeader__h3'>Chúng tôi làm gì với hàng đổi trả</Typography>
                            <ul style={{ marginBottom: '35px' }}>
                                <li style={{ marginBottom: '10px' }}>Với các sản phẩm mới khi qua kiểm định sẽ được bán lại cho khách hàng khác với giá ưu đãi.</li>
                                <li style={{ marginBottom: '10px' }}>Với các sản phẩm được trả lại có vài vấn đề nhỏ như bung chỉ, phai màu,... sẽ được quyên góp cho các tổ chức từ thiện.</li>
                            </ul>
                        </Grid>
                        <Grid item md={6} lg={6} style={{ padding: '50px 0 50px 50px' }}>
                            <img
                                src="https://firebasestorage.googleapis.com/v0/b/nearex-1b8f7.appspot.com/o/images%2Freturns.png?alt=media&token=b0d12406-5f2a-45a6-8e1e-d1997529fff1"
                                alt=""
                                width='100%'
                            />
                        </Grid>
                    </Grid>
                </Box>
                <Box style={{ marginTop: '100px' }}>
                    <Typography style={{ textAlign: 'center', fontSize: '20px', fontWeight: '500', marginBottom: '20px' }}>Theo dõi MUTOTE tại các nền tảng khác</Typography>
                    <Box className='socialContacts'>
                        <Box>
                            <Link to="/" className='footer-link' style={{ marginRight: '5px' }}>
                                <Facebook fontSize='large' />
                            </Link>
                            <Link to="/" className='footer-link' style={{ marginLeft: '5px' }}>
                                <Instagram fontSize='large' />
                            </Link>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}

export default ReturnFeature;