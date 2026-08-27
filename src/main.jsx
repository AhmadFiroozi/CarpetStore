import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.rtl.min.css';
import './index.css';
import { ThemeProvider } from 'react-bootstrap';
import { CartProvider } from './context/CartContext';
import { ToastProvider } from './context/ToastContext';
import App from './App';


createRoot(document.getElementById('root')).render(
  <ToastProvider>
    <CartProvider>
      <ThemeProvider dir="rtl">
        <App />
      </ThemeProvider>
    </CartProvider>
  </ToastProvider>
);
