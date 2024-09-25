import { useNavigate } from 'react-router-dom';

import Button from '../../global/components/buttons/Button';
import MetaData from '../../global/components/dialogs/MetaData';
import Header from '../../global/layout/headers/header';
import Footer from '../../global/layout/footers/footer';

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <MetaData title="Not Found"></MetaData>
      <>
        <Header />
      </>
      <div className="flex flex-col my-[120px] items-center gap-5">
        <h1 className="text-[150px] font-bold">404</h1>
        <div className="flex flex-col items-center">
          <h5 className="text-xl font-semibold">
            Woops, looks like this page does not exist
          </h5>
          <h6>You could either go back or go to homepage</h6>
        </div>
        <Button
          bgColor="bg-black"
          className="text-white w-[200px]"
          onClick={() =>
            navigate('/home')
          }
        >
          Go Back
        </Button>
      </div>
      <>
        <Footer />
      </>
    </>
  );
};

export default NotFoundPage;
