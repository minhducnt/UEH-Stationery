import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { path } from '../../utils/constants/GlobalPath';

import logo from '../../../assets/imgs/Logo.png';

const StyledHeader = styled.header`
    .header-content {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px 0;
        background-color: var(--secondary-color);
    }
    .header-logo {
        display: flex;
        align-items: center;
        gap: 10px;
        margin: 8px 16px;
    }
    .header-logo h2 {
        color: white;
        font-size: 2.6rem;
        font-weight: 700;
        text-shadow: -1px -1px 0 #226b68, 1px -1px 0 #226b68, -1px 1px 0 #226b68, 1px 1px 0 #226b68;
        margin: 0;
        borderwidth: 'thick';
        bordercolor: var(--primary-color);
        font-family: 'Baloo';
    }
    .header-center {
        display: flex;
        align-items: center;
        gap: 20px;
    }
    .search-bar {
        display: flex;
        align-items: center;
        background-color: white;
        border-radius: 16px;
        overflow: hidden;
        height: 40px;
        width: 400px;
    }
    .search-bar input {
        border: none;
        outline: none;
        padding: 0 10px;
        height: 100%;
        width: 200px;
    }
    .search-bar button {
        background-color: #ddd;
        border: none;
        padding: 0 10px;
        cursor: pointer;
    }
    .navbar-list {
        display: flex;
        align-items: center;
        gap: 30px;
        margin: 0;
    }
    .navbar-link {
        font-size: 1.6rem;
        color: white;
        text-decoration: none;
    }
    .header-auth {
        display: flex;
        align-items: center;
        gap: 20px;
    }
    .header-icons {
        display: flex;
        align-items: center;
        gap: 10px;
        color: white;
    }
    .header-open {
        display: none;
    }
    @media screen and (max-width: 1023.98px) {
        .header-open {
            display: flex;
        }
        .navbar-list {
            position: fixed;
            top: 0;
            right: 0;
            z-index: 100;
            background-color: #280f4c;
            width: 300px;
            height: 100vh;
            flex-direction: column;
            transform: translateX(100%);
            transition: transform 0.3s linear;
        }
        .navbar-list.show {
            transform: translateX(0);
        }
    }
`;

const headerNav = [
    { id: 1, display: 'Profile', path: path.profile },
    { id: 2, display: 'History', path: path.history },
    { id: 3, display: 'Search', path: path.search }
];

const Header = () => {
    const { user } = useSelector(state => state.auth);
    const [isShowMenu, setIsShowMenu] = useState(false);

    const handleToggleMenu = () => {
        setIsShowMenu(!isShowMenu);
    };

    return (
        <StyledHeader>
            <div className="container">
                <div className="header-content">
                    {/* Left Section: Logo */}
                    <Link to={path.home} className="header-logo">
                        <img alt="" src={logo} height={72} />
                        <h2>STATIONERY</h2>
                    </Link>

                    {/* Center Section: Search and Navbar */}
                    <div className="header-center">
                        <div className="search-bar">
                            <input type="text" placeholder="Tìm kiếm" />
                            <button type="button">
                                <ion-icon name="search-outline"></ion-icon>
                            </button>
                        </div>
                    </div>

                    {/* Right Section: Icons and Authentication */}
                    <div className="header-auth">
                        <div className="header-icons">
                            <ion-icon name="call-outline"></ion-icon>
                            <ion-icon name="location-outline"></ion-icon>
                            <ion-icon name="logo-facebook"></ion-icon>
                        </div>

                        <div className="header-open" onClick={handleToggleMenu}>
                            <ion-icon name="list-outline"></ion-icon>
                        </div>
                    </div>
                </div>
            </div>

            {/* Overplay when open menu in tablet + mobile */}
            {isShowMenu && <div className="header-overplay" onClick={handleToggleMenu}></div>}
        </StyledHeader>
    );
};

export default Header;
