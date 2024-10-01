import React from 'react';
import styled from 'styled-components';

import { Box, Divider } from '@mui/material';
import Grid from '@mui/material/Grid2';

import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FooterLogo from '../../../assets/imgs/Footer.png';
import PhoneButton from '../../components/buttons/PhoneButton';

const StyledFooter = styled.footer`
    .footer-list {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 10px auto;
    }

    .footer-item {
        h3 {
            margin: 8px 0;
            font-size: 40px;
            color: white;
            text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.8);
        }
        p,
        a {
            font-size: 28px;
            color: white;
            text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.8);
            cursor: pointer;
        }
        a: hover {
            color: #f26f33;
        }
    }
    .footer-item:first-child {
        h3 {
            font-size: 60px;
            color: var(--white);
            margin: 0 0 5px;
            font-weight: bold;
            position: relative;
            text-shadow: -2px -2px 0 #ff7f50, 2px -2px 0 #ff7f50, -2px 2px 0 #ff7f50, 2px 2px 0 #ff7f50, 2px 2px 5px rgba(0, 0, 0, 0.8);
        }
        p {
            padding: 0;
            line-height: 2;
        }
    }
    .footer-item-with-icon {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 10px;
    }
    .footer-section {
        display: flex;
        flex-direction: column;
        margin-left: 40px;
        gap: 10px;
    }

    .footer-images {
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
    }
    .footer-image img {
        border-radius: 8px;
        object-fit: cover;
        width: 80px;
        height: 80px;
    }
`;

const footerNav = [
    {
        title: 'UEH STATIONERY',
        path: ['ueh.edu.vn', 'B1.111 – 279 Đ. Nguyễn Tri Phương, Phường 5, Quận 10, Hồ Chí Minh'],
        icon: [
            <AlternateEmailIcon
                sx={{
                    fontSize: '28px'
                }}
            />,
            <LocationOnIcon
                sx={{
                    fontSize: '28px'
                }}
            />
        ]
    },
    {
        title: 'Chính sách',
        isPolicy: true,
        path: ['Hướng dẫn mua hàng ', 'Chính sách đổi trả ', 'Chính sách bảo mật']
    }
];

const Footer = () => {
    return (
        <StyledFooter>
            <Divider
                sx={{
                    borderBottomWidth: 4,
                    backgroundColor: 'orange',
                    width: '100%',
                    mb: '84px'
                }}
            />

            <Box component="img" src={FooterLogo} alt="UEH University" className="footer-images" sx={{ width: '100%', height: '528px' }} />

            <Divider
                sx={{
                    borderBottomWidth: 2,
                    backgroundColor: '#79747E',
                    width: '80%',
                    mx: 'auto',
                    mt: '57px',
                    mb: '57px',
                    opacity: 0.5
                }}
            />

            <Box sx={{ backgroundColor: '#005f6b', color: 'white', padding: '20px' }}>
                <Grid container>
                    <div className="footer-list">
                        <div className="footer-item">
                            <h3 className="footer-title">{footerNav[0].title}</h3>

                            <div className="footer-item-with-icon">
                                {footerNav[0].icon && <span>{footerNav[0].icon[0]}</span>}
                                <p>{footerNav[0].path[0]}</p>
                            </div>
                            <div className="footer-item-with-icon">
                                {footerNav[0].icon && <span>{footerNav[0].icon[1]}</span>}
                                <p>{footerNav[0].path[1]}</p>
                            </div>
                        </div>

                        <div className="footer-item">
                            <h3 className="footer-title">{footerNav[1].title}</h3>
                            <Divider
                                sx={{
                                    borderBottomWidth: 3,
                                    backgroundColor: 'gray',
                                    width: '100px',
                                    ml: '24px',
                                    mt: '12px',
                                    mb: '8px'
                                }}
                            />
                            <div className="footer-section">
                                <div className="footer-item-with-icon">
                                    <a href="/about#huong-dan-mua-hang">{footerNav[1].path[0]}</a>
                                </div>
                                <Divider
                                    sx={{
                                        borderBottomWidth: 2,
                                        backgroundColor: '#F26F33',
                                        width: '160px',
                                        mt: '12px',
                                        mb: '8px'
                                    }}
                                />
                                <div className="footer-item-with-icon">
                                    <a href="/about#chinh-sach-doi-tra">{footerNav[1].path[1]}</a>
                                </div>
                                <Divider
                                    sx={{
                                        borderBottomWidth: 2,
                                        backgroundColor: '#F26F33',
                                        width: '160px',
                                        mt: '12px',
                                        mb: '8px'
                                    }}
                                />
                                <div className="footer-item-with-icon">
                                    <a href="/about#chinh-sach-bao-mat">{footerNav[1].path[2]}</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <PhoneButton />
                </Grid>
            </Box>
        </StyledFooter>
    );
};

export default Footer;
