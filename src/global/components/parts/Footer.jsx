import React from 'react';
import styled from 'styled-components';

import { Container, Image, Row, Col } from 'react-bootstrap';
import { Link, withRouter } from 'react-router-dom';

import { MdAlternateEmail, MdLocationOn } from 'react-icons/md';

import FooterBanner from '../../../assets/imgs/parts/FooterBanner.png';
import FooterLogo from '../../../assets/imgs/parts/FooterLogo.png';

import { path } from '../../../routes/common/GlobalPath';

const SFooter = styled.footer`
    .footer-link {
        text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.8);
    }
    .footer-link:hover {
        color: #f26f33;
    }

    .footer-bottom {
        max-height: auto;
        background-color: #005f6b;
        color: #fff;
        padding: '20px';
    }

    .footer-icon {
        font-size: 22px;
        margin-right: 4px;
    }

    .footer-divider-main {
        border-bottom-width: 2px;
        background-color: gray;
        width: 80px;
        margin: 8px 0 8px 16px;
        height: 3px;
    }

    .footer-divider-child {
        border-bottom-width: 2px;
        background-color: #f26f33;
        width: 160px;
        margin: 16px 6px;
        height: 2px;
    }
`;

const Footer = () => {
    return (
        <SFooter>
            <Container fluid className="footer-bottom text-white py-4">
                <Row className="py-3">
                    <Col md={6} lg={6} className="my-0">
                        <Image src={FooterLogo} alt="" width={400} className="mt-3" />
                        <p className="text-md text-color-white mt-3 mx-3">
                            <MdAlternateEmail className="footer-icon" /> ueh.edu.vn
                        </p>
                        <p className="text-md text-color-white mt-3 mx-3">
                            <MdLocationOn className="footer-icon" /> B1.111 – 279 Đ. Nguyễn Tri Phương, Phường 5, Quận 10, Hồ Chí Minh
                        </p>
                    </Col>

                    <Col md={6} lg={3} className="my-0">
                        <p className="text-display-lg-bold-32 text-color-white mb-2">Chính sách</p>
                        <div className="footer-divider-main mb-4" />

                        <ul className="mx-2">
                            <li className="mx-2 mb-2">
                                <Link to={`${path.about}#huong-dan-mua-hang`} className="text-link-lg-18 text-white footer-link">
                                    Hướng dẫn mua hàng
                                </Link>
                            </li>

                            <div className="footer-divider-child" />
                            <li className="mx-2 mb-2">
                                <Link to={`${path.about}#chinh-sach-doi-tra`} className="text-link-lg-18 text-white footer-link">
                                    Chính sách đổi trả
                                </Link>
                            </li>

                            <div className="footer-divider-child" />
                            <li className="mx-2 mb-2">
                                <Link to={`${path.about}#chinh-sach-bao-mat`} className="text-link-lg-18 text-white footer-link">
                                    Chính sách bảo mật
                                </Link>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </SFooter>
    );
};

export default Footer;
