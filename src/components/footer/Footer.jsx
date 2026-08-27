import { Link } from "react-router-dom";
import { FaTelegram, FaSquareInstagram, FaSquareWhatsapp } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneFlip } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="mt-20 bg-ink text-cream">
      <div className="app-container py-12 grid grid-cols-1 gap-8 md:grid-cols-3">
        {/* برند */}
        <div>
          <h2 className="lalezar text-2xl mb-3 text-white">نخ فرنگ</h2>
          <p className="text-sand/80 leading-7 text-sm">
            عرضه‌کنندهٔ انواع فرش دستباف، ماشینی، تابلوفرش و فرش کودک با تضمین
            کیفیت و ارسال سریع به سراسر کشور.
          </p>
        </div>

        {/* لینک‌ها */}
        <div>
          <h3 className="font-bold mb-3 text-white">دسترسی سریع</h3>
          <ul className="space-y-2 text-sm text-sand/80">
            <li><Link to="/" className="hover:text-white transition-colors">صفحه اصلی</Link></li>
            <li><Link to="/Aboutus" className="hover:text-white transition-colors">درباره ما</Link></li>
            <li><Link to="/ContactUs" className="hover:text-white transition-colors">ارتباط با ما</Link></li>
            <li><Link to="/Cart" className="hover:text-white transition-colors">سبد خرید</Link></li>
            <li><Link to="/Login" className="hover:text-white transition-colors">ورود / ثبت‌نام</Link></li>
          </ul>
        </div>

        {/* تماس */}
        <div>
          <h3 className="font-bold mb-3 text-white">تماس با ما</h3>
          <ul className="space-y-3 text-sm text-sand/80">
            <li className="flex items-center gap-2">
              <FaPhoneFlip /> <span dir="ltr">0904 673 7515</span>
            </li>
            <li className="flex items-start gap-2">
              <IoLocationSharp className="mt-1 shrink-0" />
              <span>تهران، پارادایس هاب، مرکز نوآوری‌های نوفل لوشاتو</span>
            </li>
          </ul>
          <div className="flex gap-4 mt-4 text-2xl">
            <FaTelegram className="hover:text-white cursor-pointer transition-colors" />
            <FaSquareInstagram className="hover:text-white cursor-pointer transition-colors" />
            <FaSquareWhatsapp className="hover:text-white cursor-pointer transition-colors" />
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <p className="app-container py-4 text-center text-xs text-sand/60">
          © {new Date().getFullYear()} نخ فرنگ — تمامی حقوق محفوظ است.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
