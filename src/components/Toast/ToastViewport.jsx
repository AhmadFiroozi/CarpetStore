import { Link } from 'react-router-dom';
import { FiCheckCircle, FiX } from 'react-icons/fi';
import { useToast } from '../../context/ToastContext';
import './Toast.css';


function ToastViewport() {
  const { toasts, dismissToast } = useToast();

  return (
    <div
      className="toast-viewport"
      role="region"
      aria-live="polite"
      aria-label="اعلان‌ها"
      dir="rtl"
    >
      {toasts.map((toast) => (
        <div key={toast.id} className="toast-item">
          <FiCheckCircle className="toast-item__icon" aria-hidden="true" />

          <div className="toast-item__content">
            <p className="toast-item__message">{toast.message}</p>

            {toast.actionTo && (
              <Link
                to={toast.actionTo}
                className="toast-item__action"
                onClick={() => dismissToast(toast.id)}
              >
                {toast.actionLabel}
              </Link>
            )}
          </div>

          <button
            type="button"
            className="toast-item__close"
            onClick={() => dismissToast(toast.id)}
            aria-label="بستن اعلان"
          >
            <FiX />
          </button>
        </div>
      ))}
    </div>
  );
}

export default ToastViewport;
