import { toast } from 'react-toastify';

const showError = (error) => toast.error(
    error.response
        ? Object.keys(error.response.data)
            .map((k) => `${k}: ${error.response.data[k]}`)
            .join('\n')
        : error.message,
    {
        position: toast.POSITION.BOTTOM_CENTER,
    },
);

export default showError;
