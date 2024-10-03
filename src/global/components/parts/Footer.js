import React from 'react';
import styled from 'styled-components';

import { Container, Image, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { MdAlternateEmail, MdLocationOn } from 'react-icons/md';

import FooterBanner from '../../../assets/imgs/parts/FooterBanner.png';
import FooterLogo from '../../../assets/imgs/parts/FooterLogo.png';

import { path } from '../../../routes/common/GlobalPath';

// Styled component for top footer
const STopFooter = styled(Container)`
    max-width: 100%;
    padding: 0; // Ensure no padding on the container

    .footer-images {
        height: 528px;
        object-fit: cover;
        padding: 0;
        margin: 0; // Remove margins and paddings in image container
    }

    .footer-top-divider-top {
        border-bottom-width: 4px;
        background-color: orange;
        margin-bottom: 84px;
        height: 6px;
        padding: 0; // Remove any padding
    }

    .footer-top-divider-bottom {
        border-bottom-width: 2px;
        background-color: #79747e;
        width: 80%;
        margin: 57px auto;
        opacity: 0.5;
        height: 2px;
        padding: 0;
    }
`;

const Footer = () => {
    return (
        <footer style={{
            color: 'red',
            padding: 0, // Remove padding in footer
            margin: 0  // Remove margin in footer
        }}>
            <STopFooter fluid> {/* Use 'fluid' to ensure full-width container */}
                <Row noGutters> {/* Add 'noGutters' to remove row padding */}
                    <Col>
                        <div className='footer-top-divider-top' />
                    </Col>
                </Row>
                <Row noGutters> {/* Remove padding in Row */}
                    <Col>
                        <Image
                            src={FooterBanner}
                            alt="UEH University"
                            fluid
                            className="footer-images" // Make sure to reference the correct class
                            style={{
                                width: '100%',
                                height: '528px',
                                objectFit: 'cover',
                                padding: 0, // Remove padding on Image
                                margin: 0  // Remove margin on Image
                            }}
                        />
                    </Col>
                </Row>
                <Row noGutters> {/* Remove padding in Row */}
                    <Col>
                        <div className='footer-top-divider-bottom' />
                    </Col>
                </Row>
            </STopFooter>
        </footer>
    );
};

export default Footer;
