import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Snackbar thông báo thành công
const notifySuccess = message =>
    toast.success(message, {
        position: 'bottom-left',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
    });

// Snackbar thông báo lỗi
const notifyError = message =>
    toast.error(message, {
        position: 'bottom-left',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
    });

<ToastContainer
    position="bottom-left"
    autoClose={3000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
/>;

export { ToastContainer, notifySuccess, notifyError };
