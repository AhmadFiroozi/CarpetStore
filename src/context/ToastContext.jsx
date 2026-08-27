import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';

/**
 * سیستم اعلان (Toast)
 * -------------------
 * چرا Context؟ چون اعلان می‌تواند از هر جای اپ (کارت محصول، صفحهٔ محصول،
 * سبد خرید و ...) صادر شود، ولی فقط باید یک‌جا و روی همهٔ صفحه نمایش داده شود.
 * پس state در بالای درخت نگه‌داری می‌شود و نمایش آن با <ToastViewport /> انجام می‌گیرد.
 */
const ToastContext = createContext(null);

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  // شناسهٔ یکتا و تایمرها را در ref نگه می‌داریم تا باعث رندر دوباره نشوند
  const idRef = useRef(0);
  const timersRef = useRef(new Map());

  const dismissToast = useCallback((id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));

    const timer = timersRef.current.get(id);
    if (timer) {
      clearTimeout(timer);
      timersRef.current.delete(id);
    }
  }, []);

  const showToast = useCallback(
    ({ message, actionLabel, actionTo, duration = 3500 }) => {
      const id = ++idRef.current;

      // حداکثر ۳ اعلان هم‌زمان تا صفحه شلوغ نشود
      setToasts((prev) => [
        ...prev.slice(-2),
        { id, message, actionLabel, actionTo },
      ]);

      timersRef.current.set(
        id,
        setTimeout(() => dismissToast(id), duration)
      );

      return id;
    },
    [dismissToast]
  );

  // پاکسازی تایمرها هنگام unmount تا نشتی حافظه پیش نیاید
  useEffect(() => {
    const timers = timersRef.current;
    return () => {
      timers.forEach(clearTimeout);
      timers.clear();
    };
  }, []);

  return (
    <ToastContext.Provider value={{ toasts, showToast, dismissToast }}>
      {children}
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('useToast باید داخل <ToastProvider> استفاده شود.');
  }

  return context;
}
