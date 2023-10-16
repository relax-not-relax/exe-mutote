import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import './style.scss';

AboutUsFeature.propTypes = {

};

function AboutUsFeature(props) {
    return (
        <Box>
            <Box className='about-banner'>
                <Box>
                    <Typography className='about-banner__header'>MUTOTE</Typography>
                    <Typography className='about-banner__title'>Tất cả những gì bạn cần biết</Typography>
                </Box>
            </Box>
            <Container>
                <Box className='about-us'>
                    <Grid container>
                        <Grid item md={6} lg={6} >
                            <img
                                src="https://firebasestorage.googleapis.com/v0/b/nearex-1b8f7.appspot.com/o/images%2Fgroup.png?alt=media&token=e85821a4-e748-4eb1-98df-41547b313fa4"
                                alt=""
                                width='100%'
                            />
                        </Grid>
                        <Grid item md={6} lg={6} >
                            <Typography className='about-us__header'>Mong muốn của chúng tôi</Typography>
                            <Typography className='about-us__sub'>Những Chiếc Túi Tote Tiện Dụng Và Độc Đáo</Typography>
                            <Typography className='about-us__pag'>MUTOTE chỉ là một thương hiệu “nho nhỏ” được tạo ra với mong muốn giúp bạn sở hữu những chiếc túi tote tiện dụng và độc đáo. Chúng mình hiểu rằng túi tote không chỉ là một món đồ mà còn là một phần tạo nên phong cách cá nhân của bạn.</Typography>
                            <Box className='about-us__bonus'>
                                <Grid container>
                                    <Grid item md={2} lg={2}>
                                        <img
                                            src="https://firebasestorage.googleapis.com/v0/b/nearex-1b8f7.appspot.com/o/images%2Fleaf.png?alt=media&token=23392cb9-3aa8-467e-a54b-6601033e674e"
                                            alt=""
                                            width='80%'
                                        />
                                    </Grid>
                                    <Grid item md={10} lg={10}>
                                        <Typography className='about-us__bonus-header'>Thân thiện với môi trường</Typography>
                                        <Typography className='about-us__bonus-pag'>
                                            MUTOTE lựa chọn những vật liệu thân thiện, dễ dàng phân hủy để làm nên những chiếc túi
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Box>
                            <Box className='about-us__bonus'>
                                <Grid container>
                                    <Grid item md={2} lg={2}>
                                        <img
                                            src="https://firebasestorage.googleapis.com/v0/b/nearex-1b8f7.appspot.com/o/images%2Fquality.png?alt=media&token=75b3d42f-1ec7-4150-ada0-770d5a8d37fb"
                                            alt=""
                                            width='80%'
                                        />
                                    </Grid>
                                    <Grid item md={10} lg={10}>
                                        <Typography className='about-us__bonus-header'>Chất lượng và Tận tâm</Typography>
                                        <Typography className='about-us__bonus-pag-2'>
                                            MUTOTE tự tin rằng sẽ mang đến cho bạn những chiếc túi “chất lượng” cùng trải nghiệm tuyệt vời nhất!
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>

                    </Grid>
                </Box>
            </Container>
            <Box>
                <Grid container>
                    <Grid item md={4} lg={4}>
                        <img
                            src="https://firebasestorage.googleapis.com/v0/b/nearex-1b8f7.appspot.com/o/images%2Fstyle1.png?alt=media&token=1a9a417b-7586-414e-ba53-00da9fd86638"
                            alt=""
                            width='100%'
                            height='100%'
                        />
                    </Grid>
                    <Grid item md={4} lg={4} className='style2'>
                        <Box>
                            <Typography
                                style={{ textAlign: 'center', fontSize: '40px', fontWeight: '700', color: '#fff' }}
                            >
                                Your Tote, Your Style
                            </Typography>
                            <Typography
                                style={{ textAlign: 'center', fontSize: '20px', color: '#fff' }}
                            >
                                Mỗi cá tính, một câu chuyện
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item md={4} lg={4}>
                        <img
                            src="https://firebasestorage.googleapis.com/v0/b/nearex-1b8f7.appspot.com/o/images%2Fstyle2.png?alt=media&token=69e7dfa8-6ed5-448b-bc3e-e3f2f22a7895"
                            alt=""
                            width='100%'
                            height='100%'
                        />
                    </Grid>
                </Grid>
            </Box>
            <Container>
                <Box style={{ padding: '150px 0 0 0' }}>
                    <Grid container>
                        <Grid item md={6} lg={6} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '500px' }}>
                            <Box>
                                <Typography className='about-us__header'>Mục tiêu của chúng tôi</Typography>
                                <Typography className='about-us__sub'>"Vạn dặm bắt đầu từ một bước chân."</Typography>
                                <Typography className='about-us__pag'>MuTote là một chiếc tiệm “nho nhỏ” nơi mang đến cho bạn những chiếc túi tote cực kỳ “đa zi năng”. Không dừng lại là một chiếc túi, MuTote hứa hẹn sẽ là người đồng hành của bạn trên mọi cung đường đó.</Typography>
                            </Box>
                        </Grid>
                        <Grid item md={6} lg={6}>
                            <img
                                src="https://firebasestorage.googleapis.com/v0/b/nearex-1b8f7.appspot.com/o/images%2Fteam.png?alt=media&token=d6067bb4-baad-4354-b623-76a1057f3d92"
                                alt=""
                                width='100%'
                            />
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
}

export default AboutUsFeature;