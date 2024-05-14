import './Toast.css';

const Toast = ({ toasts }) => {
  return (
    <div className="toasts-container">
      {toasts.map((toast) => (
        <div key={toast.id} className="Toast">
          <h1>{toast.title}</h1>
          <p>{toast.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Toast;
