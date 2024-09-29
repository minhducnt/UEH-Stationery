import { Helmet } from 'react-helmet-async';

//? Thành phần MetaData cho trang web - Đặt tiêu đề cho trang web
const MetaData = ({ title }) => {
    return (
        <Helmet>
            <title>{`${title} | UEH Stationery`}</title>
        </Helmet>
    );
};

export default MetaData;
