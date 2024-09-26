import { useNavigate } from 'react-router-dom';

import Button from '../../global/components/buttons/Button';
import MetaData from '../../global/components/dialogs/MetaData';

import { path } from '../../global/utils/constants/GlobalPath';

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <MetaData title="404"></MetaData>

      <div className="flex flex-col my-[120px] items-center gap-5">
        <h1 className="text-[150px] font-bold">404</h1>

        <div className="flex flex-col items-center">
          <h5 className="text-xl font-semibold">
            Woops, có vẻ như trang này không tồn tại
          </h5>
          <h6>Bạn có thể trở về hoặc về trang chủ</h6>
        </div>

        <Button
          bgColor="bg-black"
          className="text-white w-[200px]"
          onClick={() => navigate(path.home)}
        >
          Trở về
        </Button>
      </div>
    </>
  );
};

export default NotFoundPage;
