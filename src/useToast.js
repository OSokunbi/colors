import { useState } from 'react';

const useToast = () => {
  const [toasts, setToasts] = useState([]);

  const toast = ({ title, description }) => {
    const newToast = {
      id: Date.now(),
      title,
      description,
    };
    setToasts((prevToasts) => [...prevToasts, newToast]);

    setTimeout(() => hideToast(newToast.id), 3000);
  };

  const hideToast = (id) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  };

  return { toasts, toast };
};

export default useToast;
