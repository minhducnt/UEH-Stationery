import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Menu, MenuItem, Button, Typography } from '@mui/material';

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import SearchIcon from '@mui/icons-material/Search';
import CallIcon from '@mui/icons-material/Call';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FacebookIcon from '@mui/icons-material/Facebook';
import PublicIcon from '@mui/icons-material/Public';
import GroupsIcon from '@mui/icons-material/Groups';
import DashboardIcon from '@mui/icons-material/Dashboard';
import DiscountIcon from '@mui/icons-material/Discount';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import LoginIcon from '@mui/icons-material/Login';
import PersonIcon from '@mui/icons-material/Person';
import logo from '../../../assets/imgs/Logo.png';

import { path } from '../../../routes/common/GlobalPath';

const paths = {
    home: path.home,
    products: path.products,
    contact: path.contact,
    about: path.about,
    login: path.signIn
};

const StyledTopHeader = styled.header`
    .header-content {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px 8px;
        background-color: var(--secondary-color);
    }
    .header-auth {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 20px;
    }

    .header-logo {
        display: flex;
        align-items: center;
        gap: 10px;
        margin: 8px 8px;
    }
    .header-logo h2 {
        color: white;
        font-size: 50px;
        font-weight: 400;
        text-shadow: -1px -1px 0 #005f69, 1px -1px 0 #005f69, -1px 1px 0 #005f69, 1px 1px 0 #005f69;
        margin: 0;
        font-family: 'Baloo 2';
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
        border-radius: 20px;
        overflow: hidden;
        height: 50px;
        width: 400px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        justify-content: space-between;
    }
    .search-bar input {
        border: none;
        outline: none;
        padding-left: 8px;
        height: 100%;
        width: 400px;
        font-size: 1.6rem;
    }
    .search-bar .search-icon-prefix {
        display: flex;
        align-items: center;
        color: gray;
        margin-left: 16px;
    }
    .search-bar .search-icon-suffix {
        display: flex;
        align-items: center;
        justify-content: end;
        color: gray;
        margin-right: 16px;
    }

    .header-icons {
        display: flex;
        align-items: center;
        gap: 10px;
    }
    .header-icons svg {
        font-size: 4.5rem;
        color: white;
        background-color: #ff805d;
        padding: 10px;
        border-radius: 50%;
        border: 2px solid white;
    }

    .locale-button {
        display: flex;
        align-items: center;
        background-color: rgba(255, 255, 255, 0.4);
        color: #006666;
        height: 50px;
        border-radius: 20px;
        padding: 5px 15px;
        font-size: 1.8rem;
        gap: 10px;
    }
    .locale-button svg {
        font-size: 3rem;
        background-color: white;
        border: 2px solid #006666;
        border-radius: 50%;
    }
`;

const StyledBottomHeader = styled.div`
    background-color: var(--primary-color);
    display: flex;
    align-items: center;
    justify-content: center;

    .parent-container {
        display: flex;
        align-items: center;
        height: 60px;
        width: 100%;
    }

    .tab,
    .dropdown-button {
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        font-size: 24px;
        color: white;
        text-decoration: none;
        padding: 10px 20px;
        cursor: pointer;
        flex-grow: 1;
        height: 100%;
        font-weight: 500;
        text-transform: none;
    }

    .tab:hover,
    .dropdown-button:hover {
        color: var(--secondary-color);
    }

    .tab svg,
    .dropdown-button svg {
        margin-right: 10px;
        font-size: 28px;
    }

    .vertical-divider {
        width: 1px;
        height: 100%;
        background-color: white;
    }
`;

const Header = () => {
    const [menuState, setMenuState] = useState({
        isShowMenu: false,
        anchorEl: null
    });

    const handleClick = event => {
        setMenuState({
            ...menuState,
            anchorEl: event.currentTarget,
            isShowMenu: true
        });
    };

    const handleClose = () => {
        setMenuState({
            ...menuState,
            anchorEl: null,
            isShowMenu: false
        });
    };

    const handleToggleMenu = () => {
        setMenuState(prevState => ({
            ...prevState,
            isShowMenu: !prevState.isShowMenu
        }));
    };

    return (
        <>
            <StyledTopHeader>
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
                                <span className="search-icon-prefix">
                                    <ArrowBackIosNewIcon
                                        sx={{ fontSize: '1.6rem', color: 'gray' }}
                                    />
                                </span>

                                <input type="text" placeholder="Tìm kiếm" />

                                <span className="search-icon-suffix">
                                    <SearchIcon sx={{ fontSize: '2rem', color: 'gray' }} />
                                </span>
                            </div>
                        </div>

                        {/* Right Section: Icons and Authentication */}
                        <div className="header-auth">
                            <div className="header-icons">
                                <a href="tel:+842873061976">
                                    <CallIcon />
                                </a>
                                <a
                                    href="https://maps.app.goo.gl/AkzGz5j9cfVkbM9p8"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <LocationOnIcon />
                                </a>
                                <a
                                    href="https://www.facebook.com/DHKT.UEH"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FacebookIcon />
                                </a>
                            </div>

                            <div className="locale-button">
                                <span>Vie</span>
                                <PublicIcon />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Overplay when open menu in tablet + mobile */}
                {menuState.isShowMenu && (
                    <div className="header-overplay" onClick={handleToggleMenu}></div>
                )}
            </StyledTopHeader>

            <StyledBottomHeader>
                {/* Navigation Links */}
                <div className="parent-container">
                    <Link to={paths.home} className="tab">
                        <GroupsIcon />
                        Giới thiệu
                    </Link>
                    <div className="vertical-divider" />
                    <Link to={paths.products} className="tab">
                        <DashboardIcon />
                        Danh mục sản phẩm
                    </Link>
                    <div className="vertical-divider" />
                    <Link to={paths.contact} className="tab">
                        <ContactSupportIcon />
                        Khuyến mãi
                    </Link>
                    <div className="vertical-divider" />
                    <Link to={paths.about} className="tab">
                        <DiscountIcon />
                        Hỏi đáp
                    </Link>

                    {/* Dropdown for Login */}
                    <div className="vertical-divider" />
                    <div>
                        <Button
                            aria-controls="logins-menu"
                            aria-haspopup="true"
                            onClick={handleClick}
                            className="dropdown-button"
                            startIcon={<LoginIcon />}
                            endIcon={<ArrowDropDownIcon />}
                        >
                            Đăng nhập
                        </Button>
                        <Menu
                            id="login-menu"
                            anchorEl={menuState.anchorEl}
                            open={Boolean(menuState.anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem>
                                <Link to={path.signIn}>
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            fontSize: '20px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}
                                    >
                                        <PersonIcon
                                            sx={{
                                                fontSize: '28px',
                                                marginRight: '10px'
                                            }}
                                        />
                                        Đăng nhập
                                    </Typography>
                                </Link>
                            </MenuItem>
                            <MenuItem>
                                <Link to={path.signUp}>
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            fontSize: '20px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}
                                    >
                                        <PersonIcon
                                            sx={{
                                                fontSize: '28px',
                                                marginRight: '10px'
                                            }}
                                        />
                                        Đăng ký
                                    </Typography>
                                </Link>
                            </MenuItem>
                        </Menu>
                    </div>
                </div>
            </StyledBottomHeader>
        </>
    );
};

export default Header;
