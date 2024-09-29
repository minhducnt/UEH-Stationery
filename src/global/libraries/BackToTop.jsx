import ScrollToTop from 'react-scroll-to-top';

const BackToTop = () => {
    return (
        <ScrollToTop
            smooth
            viewBox="0 0 24 24"
            svgPath="M18 15l-6-6-6 6"
            color="white"
            style={{
                background: 'linear-gradient(94.43deg, #084147FF 0%, #005f69 96.94%)',
                borderRadius: '100%'
            }}
        />
    );
};

export default BackToTop;
