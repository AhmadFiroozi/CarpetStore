import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMail, FiLock, FiUser, FiEye, FiEyeOff, FiArrowLeft } from 'react-icons/fi';
import { FcGoogle } from 'react-icons/fc';
import authImage from '../../assets/images/slider/slider2.jpg';
import './Auth.css';

function Auth() {
  const [mode, setMode] = useState('login'); // 'login' | 'register'
  const [showPass, setShowPass] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirm: '',
  });

  const isRegister = mode === 'register';

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  // این صفحه صرفاً نمایشی است و جایی ثبت نمی‌شود
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="auth-page app-container">
      <div className="auth-card surface">
        {/* پنل تصویری برند */}
        <div
          className="auth-visual"
          style={{ backgroundImage: `url(${authImage})` }}
        >
          <div className="auth-visual__scrim" />
          <div className="auth-visual__content">
            <h2 className="lalezar">نخ فرنگ</h2>
            <p>
              اصالت فرش ایرانی، در خانهٔ شما. برای پیگیری سفارش‌ها و علاقه‌مندی‌ها
              وارد حساب کاربری خود شوید.
            </p>
            <Link to="/" className="auth-visual__back">
              <FiArrowLeft /> بازگشت به فروشگاه
            </Link>
          </div>
        </div>

        {/* فرم */}
        <div className="auth-form-side">
          <div className="auth-tabs">
            <button
              type="button"
              className={mode === 'login' ? 'is-active' : ''}
              onClick={() => setMode('login')}
            >
              ورود
            </button>
            <button
              type="button"
              className={isRegister ? 'is-active' : ''}
              onClick={() => setMode('register')}
            >
              ثبت‌نام
            </button>
          </div>

          <h1 className="lalezar auth-title">
            {isRegister ? 'ساخت حساب کاربری' : 'خوش آمدید'}
          </h1>
          <p className="auth-subtitle">
            {isRegister
              ? 'برای شروع، اطلاعات زیر را کامل کنید.'
              : 'برای ادامه وارد حساب خود شوید.'}
          </p>

          <form className="auth-form" onSubmit={handleSubmit}>
            {isRegister && (
              <label className="auth-field">
                <span>نام و نام خانوادگی</span>
                <div className="auth-input">
                  <FiUser />
                  <input
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="مثلاً علی رضایی"
                    autoComplete="name"
                  />
                </div>
              </label>
            )}

            <label className="auth-field">
              <span>ایمیل یا شماره موبایل</span>
              <div className="auth-input">
                <FiMail />
                <input
                  name="email"
                  type="text"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="example@email.com"
                  autoComplete="username"
                  dir="ltr"
                />
              </div>
            </label>

            <label className="auth-field">
              <span>رمز عبور</span>
              <div className="auth-input">
                <FiLock />
                <input
                  name="password"
                  type={showPass ? 'text' : 'password'}
                  value={form.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  autoComplete={isRegister ? 'new-password' : 'current-password'}
                  dir="ltr"
                />
                <button
                  type="button"
                  className="auth-eye"
                  onClick={() => setShowPass((s) => !s)}
                  aria-label={showPass ? 'مخفی کردن رمز' : 'نمایش رمز'}
                >
                  {showPass ? <FiEyeOff /> : <FiEye />}
                </button>
              </div>
            </label>

            {isRegister && (
              <label className="auth-field">
                <span>تکرار رمز عبور</span>
                <div className="auth-input">
                  <FiLock />
                  <input
                    name="confirm"
                    type={showPass ? 'text' : 'password'}
                    value={form.confirm}
                    onChange={handleChange}
                    placeholder="••••••••"
                    autoComplete="new-password"
                    dir="ltr"
                  />
                </div>
              </label>
            )}

            {!isRegister && (
              <div className="auth-row">
                <label className="auth-remember">
                  <input type="checkbox" />
                  مرا به خاطر بسپار
                </label>
                <button type="button" className="auth-link">
                  فراموشی رمز؟
                </button>
              </div>
            )}

            <button type="submit" className="btn-primary w-full mt-2">
              {isRegister ? 'ساخت حساب' : 'ورود'}
            </button>
          </form>

          <div className="auth-divider"><span>یا</span></div>

          <button type="button" className="auth-social">
            <FcGoogle /> ادامه با گوگل
          </button>

          <p className="auth-switch">
            {isRegister ? 'قبلاً ثبت‌نام کرده‌اید؟' : 'حساب کاربری ندارید؟'}{' '}
            <button
              type="button"
              className="auth-link"
              onClick={() => setMode(isRegister ? 'login' : 'register')}
            >
              {isRegister ? 'وارد شوید' : 'ثبت‌نام کنید'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Auth;
