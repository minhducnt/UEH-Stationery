import { Helmet } from 'react-helmet-async';

const MetaData = ({ title }) => {
  return (
    <Helmet>
      <title>{`${title} | UEH Stationery`}</title>
    </Helmet>
  );
};

export default MetaData;
