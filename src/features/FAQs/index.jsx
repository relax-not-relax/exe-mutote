import React from 'react';
import './style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Box, Container, Typography } from '@mui/material';

FaqsFeature.propTypes = {

};

function FaqsFeature(props) {
    return (
        <Box>
            <Box className='about-banner'>
                <Box>
                    <Typography className='about-banner__header'>MUTOTE</Typography>
                    <Typography className='about-banner__title'>Những câu hỏi thường gặp</Typography>
                </Box>
            </Box>
            <Container style={{ padding: '150px 0 0 0' }}>
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Bao lâu từ lúc đặt hàng thì tôi có thể nhận được hàng?
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <strong>Trong vòng 24h sau khi đơn hàng của bạn được MUTOTE xác nhận. </strong>
                                Nếu ở nội thành Thành phố Hồ Chí Minh, đơn hàng của bạn sẽ được giao sớm nhất từ 3-5 ngày, các đơn hàng ở tỉnh khác sẽ được giao trước 1 tuần kể từ khi đơn hàng xác nhận bạn nhé!
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Làm sao tôi có thể biết đơn hàng đã xác nhận hay chưa?
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <strong>Đơn hàng sẽ được MUTOTE xác nhận sớm nhất có thể </strong>
                                sau khi bạn đã thanh toán và gửi order thành công cho tụi mình, bạn có thể theo dõi tại mục "Profile" ở thanh menu bạn nhé!
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Khung giờ giao hàng của MUTOTE?
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <strong>MUTOTE giao giờ hành chính. </strong>
                                Đối với nội thành Thành phố Hồ Chí Mình các bạn có thể liên hệ với tụi mình qua <a href="https://www.facebook.com/mutotevn" target="_blank" rel="noreferrer">fanpage</a> thời gian phù hợp để giao hàng nhé!
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                MUTOTE có cửa hàng không?
                            </button>
                        </h2>
                        <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <strong>Hiện tại MUTOTE không có cửa hàng, </strong>
                                Chúng mình hiện đang kinh doanh dưới hình thức online qua <a href="https://www.facebook.com/mutotevn" target="_blank" rel="noreferrer">fanpage</a> và website. <br />
                                Bạn hãy theo dõi <a href="https://www.facebook.com/mutotevn" target="_blank" rel="noreferrer">fanpage</a> để được cập nhật những sản phẩm mới nhất nha!
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                Các hình thức thanh toán khi tôi mua hàng trực tuyến là gì?
                            </button>
                        </h2>
                        <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <strong>Chúng mình chỉ hỗ trợ chuyển khoản e-banking! </strong>
                                Rất tiếc vì sự bất cập trong hình thức thanh toán này, chúng mình sẽ cố gắng tối ưu và hỗ trợ thêm các hình thức thanh toán online khác trong tương lai.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                Tôi muốn đổi hàng thì quy trình sẽ như thế nào?
                            </button>
                        </h2>
                        <div id="collapseSix" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                Quy trình đổi hàng tại MUTOTE rất dễ dàng <br />
                                <strong>Bước 1: </strong>
                                Bạn hãy liên hệ với MUTOTE tại <a href="https://www.facebook.com/mutotevn" target="_blank" rel="noreferrer">fanpage</a> bằng cách nhắn tin hoặc để lại lời nhắn ở bình luận, chúng mình sẽ trực tiếp liên hệ. <br />
                                <strong>Bước 2: </strong>
                                Sau khi nhận được phản hồi từ MUTOTE, bạn hãy dẫn link sản phẩm bạn muốn thay đổi cho tụi mình. <br />
                                <strong>Bước 3: </strong>
                                MUTOTE sẽ xác nhận về tình trạng đơn hàng của bạn, nếu bạn chưa thanh toán, rất tiếc quá trình thay đổi đơn hàng sẽ không được diễn ra. Với các trường hợp
                                đơn hàng mới có giá tiền nhiều hoặc ít hơn giá tiền sản phẩm ban đầu, bạn sẽ được các staff của MUTOTE hướng dẫn chi tiết hơn ở tin nhắn fanpage bạn nhé! <br />
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                Tôi muốn trả hàng thì quy trình sẽ như thế nào?
                            </button>
                        </h2>
                        <div id="collapseSeven" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                Quy trình trả hàng tại MUTOTE rất dễ dàng <br />
                                <strong>Bước 1: </strong>
                                Bạn hãy liên hệ với MUTOTE tại <a href="https://www.facebook.com/mutotevn" target="_blank" rel="noreferrer">fanpage</a> bằng cách nhắn tin hoặc để lại lời nhắn ở bình luận, chúng mình sẽ trực tiếp liên hệ. <br />
                                <strong>Bước 2: </strong>
                                Sau khi nhận được phản hồi từ MUTOTE, MUTOTE sẽ xác nhận về tình trạng đơn hàng của bạn, nếu bạn chưa thanh toán, rất tiếc quá trình thay đổi đơn hàng sẽ không được diễn ra.
                                Nếu bạn đã thanh toán đơn hàng cho MUTOTE, nếu như đơn hàng đã được giao thành công cho bạn, bạn sẽ phải chịu phần phí ship để gửi trả hàng cho tụi mình! <br />
                                <strong>Bước 3: </strong>
                                MUTOTE sẽ xác nhận STK Ngân hàng của bạn hoặc các hình thức giao dịch khác để thực hiện hoàn 70% số tiền sản phẩm ban đầu bạn nhé! <br />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>

        </Box>
    );
}

export default FaqsFeature;