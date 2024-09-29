import styled from 'styled-components';

import { useNavigate } from 'react-router-dom';

import { Box, Container, Typography } from '@mui/material';
import Button from '../../global/components/buttons/Button';
import MetaData from '../../global/components/common/MetaData';

import { path } from '../../routes/common/GlobalPath';

const CenteredContainer = styled(Container)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    height: '100vh'
});

const StyledBox = styled(Box)({
    backgroundRepeat: 'no-repeat',
    backgroundImage:
        'url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif)',
    minWidth: '100vh',
    height: '350px',
    backgroundPosition: 'center'
});

const StyledHeading = styled(Typography)({
    fontSize: '80px'
});

const NotFoundPage = () => {
    const navigate = useNavigate();

    return (
        <>
            <MetaData title='404'></MetaData>

            <CenteredContainer>
                <Box
                    display='flex'
                    flexDirection='column'
                    alignItems='center'
                    gap='30px'
                >
                    <StyledHeading variant='h1'>404</StyledHeading>

                    <StyledBox />

                    <Typography variant='h3' className='h3'>
                        Woops, có vẻ như trang này không tồn tại
                    </Typography>

                    <Button
                        onClick={() => {
                            navigate(path.home);
                        }}
                        kind='primary'
                    >
                        Trở về
                    </Button>
                </Box>
            </CenteredContainer>
        </>
    );
};

export default NotFoundPage;
