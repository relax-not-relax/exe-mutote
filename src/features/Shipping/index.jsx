import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import './style.scss'

ShippingFeature.propTypes = {

};

function ShippingFeature(props) {
    return (
        <Box style={{ padding: '150px 0 0 0' }}>
            <Container>
                <Typography style={{ color: '#00134c', textAlign: 'center', fontSize: '40px', fontWeight: '700 ', marginBottom: '50px' }}>Dịch vụ giao hàng MUTOTE</Typography>
                <img
                    src='https://firebasestorage.googleapis.com/v0/b/nearex-1b8f7.appspot.com/o/images%2Fmap.png?alt=media&token=299d342e-1b55-4c11-87da-c85b06fb43c2'
                    alt=""
                    width='100%'
                />
                <Typography marginTop={4}><span style={{ fontWeight: '700' }}>Giao hàng nhanh và đúng hẹn</span> cho 95% đơn hàng là mục tiêu mà đội ngũ vận hành của MUTOTE hướng tới. Khách hàng hãy tin ở MUTOTE, chúng tôi sẽ làm được!</Typography>

                <Box marginTop={8}>
                    <Typography style={{ fontWeight: '700' }}>TRUNG TÂM VẬN HÀNH CỦA MUTOTE</Typography>
                    <img
                        src="https://firebasestorage.googleapis.com/v0/b/nearex-1b8f7.appspot.com/o/images%2Fmap2.png?alt=media&token=60bc75cd-9135-4b52-b37a-2ebb0c6b9533"
                        alt=""
                        width='100%'
                        style={{ marginTop: '32px' }}
                    />
                    <Typography marginTop={4}>Hiện tại MUTOTE chỉ có một trung tâm vận hành ở phía Nam nằm ở Thành phố Hồ Chí Minh, trực tiếp tham gia vào quá trình xác nhận và gửi đơn hàng cho các bạn. Các đơn hàng nằm ở nội thành Hồ Chí Minh sẽ được giao cho bạn trong vòng 24h, các đơn ngoại tỉnh bạn vui lòng đợi từ 2-5 ngày sau khi đơn hàng được xác nhận bạn nhé!</Typography>
                </Box>

                <Box marginTop={8}>
                    <Typography style={{ fontWeight: '700' }}>THỜI GIAN VẬN CHUYỂN TRUNG BÌNH</Typography>
                    <ul style={{ marginTop: '32px' }}>
                        <li><span style={{ fontWeight: '700' }}>Đơn nội thành Hồ Chí Minh: </span>Khách hàng sẽ nhận được trong vòng 24h kể từ khi đơn hàng được xác nhận (trừ trường hợp đơn hàng dạng đặt trước hoặc chưa đủ tồn kho, CSKH của Coolmate sẽ thông báo cho khách hàng về vấn đề này qua số điện thoại bạn cung cấp ở đơn order). Thông thường có thể sớm hơn tuỳ thuộc vào thời gian khách hàng đặt (Không tính chủ nhật và ngày lễ)</li>
                    </ul>
                    <img
                        src="https://firebasestorage.googleapis.com/v0/b/nearex-1b8f7.appspot.com/o/images%2Fdistrict.png?alt=media&token=0b3f137b-a872-478b-ad1a-eb6ef4a19e1e"
                        alt=""
                        width='100%'
                    />
                    <ul style={{ marginTop: '32px' }}>
                        <li><span style={{ fontWeight: '700' }}>Các khu vực khác: 2-5 ngày (thường là 2-4 ngày),</span> nếu sau 3 ngày kể từ khi đặt hàng mà Anh/Chị chưa nhận được cuộc gọi giao hàng của bưu tá thì vui lòng xin liên hệ MUTOTE để được hỗ trợ (không bao gồm chủ nhật và ngày lễ).</li>
                    </ul>
                    <Typography marginTop={4}><span style={{ fontWeight: '700' }}>LƯU Ý: </span>
                        Trong trường hợp khách hàng <span style={{ fontWeight: '700' }}>cần nhận hàng gấp</span> thì có thể liên hệ tại <a href="https://www.facebook.com/mutotevn" style={{ textDecoration: 'none', fontWeight: '500' }} target="_blank" rel="noreferrer">fanpage MUTOTE</a> để được hỗ trợ. <span style={{ fontWeight: '700' }}>MUTOTE</span> không cam kết có thể hỗ trợ các trường hợp khẩn cấp 100%, tuy nhiên <span style={{ fontWeight: '700' }}>MUTOTE</span> chắc chắn sẽ làm mọi cách có thể để giúp khách hàng giải quyết công việc của mình.
                    </Typography>
                </Box>

            </Container>
        </Box>
    );
}

export default ShippingFeature;