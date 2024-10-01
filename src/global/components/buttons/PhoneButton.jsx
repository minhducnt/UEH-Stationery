import React, { useState, useEffect } from 'react';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';

import '../../../styles/phone.css';

const PhoneButton = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        const scrollHeight = document.documentElement.scrollHeight;
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const clientHeight = document.documentElement.clientHeight;

        // Show the button when the user is within 200px of the bottom
        if (scrollTop + clientHeight >= scrollHeight - 200) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div
            className={`footer-float-btn ${isVisible ? 'show' : ''} ${isHovered ? 'hovered' : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <span className="phone-number">8900-4657</span>
            <div className="phone-icon-container">
                <PhoneEnabledIcon className="phone-icon" />
            </div>
        </div>
    );
};

export default PhoneButton;
