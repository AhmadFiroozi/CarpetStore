import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/home/Home';
import Aboutus from './pages/aboutus/Aboutus';
import Cart from './pages/cart/Cart';
import ContactUs from './pages/contactus/ContactUs';
import Carpet from './pages/carpet/Carpet';
import Auth from './pages/auth/Auth';
import './App.css';

function NotFound() {
  return (
    <div className="app-container py-24 text-center">
      <h1 className="lalezar text-5xl text-brand mb-4">۴۰۴</h1>
      <p className="text-muted mb-6">صفحه‌ای که دنبالش هستید پیدا نشد.</p>
      <Link to="/" className="btn-primary">بازگشت به صفحه اصلی</Link>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/Aboutus" element={<Aboutus />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Login" element={<Auth />} />
          <Route path="/Carpet/:carpetId" element={<Carpet />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
