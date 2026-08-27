import img1 from '../../assets/images/slider/slider1.jpg';
import { FaShieldHalved, FaTruckFast, FaLayerGroup } from 'react-icons/fa6';
import './Aboutus.css';

const features = [
  {
    icon: <FaShieldHalved />,
    title: 'تضمین کیفیت',
    text: 'اصالت و کیفیت تمام محصولات پیش از عرضه بررسی می‌شود.',
  },
  {
    icon: <FaTruckFast />,
    title: 'ارسال سریع',
    text: 'بسته‌بندی ایمن و ارسال مطمئن به سراسر کشور.',
  },
  {
    icon: <FaLayerGroup />,
    title: 'تنوع محصولات',
    text: 'از تابلوفرش و دستباف تا فرش ماشینی و کودک.',
  },
];

function Aboutus() {
  return (
    <div className="app-container py-12">
      <div className="grid grid-cols-1 gap-10 items-center md:grid-cols-2">
        <div>
          <h1 className="lalezar text-4xl mb-6">درباره ما</h1>
          <p className="text-lg leading-8 text-justify text-ink/90">
            فروشگاه فرش نخ فرنگ با هدف ارائهٔ انواع فرش دستباف، ماشینی، کودک و
            تابلوفرش فعالیت خود را آغاز کرده است. ما تلاش می‌کنیم با ارائهٔ
            محصولات متنوع، کیفیت بالا و قیمت مناسب، تجربه‌ای مطمئن و لذت‌بخش از
            خرید فرش را برای مشتریان فراهم کنیم.
          </p>

          <ul className="mt-6 space-y-3 text-lg">
            <li>✅ تضمین کیفیت و اصالت محصولات</li>
            <li>✅ تنوع گستردهٔ فرش‌های دستباف و ماشینی</li>
            <li>✅ قیمت‌گذاری منصفانه و رقابتی</li>
            <li>✅ پشتیبانی و پاسخگویی به مشتریان</li>
            <li>✅ ارسال سریع و مطمئن به سراسر کشور</li>
          </ul>
        </div>

        <div>
          <img
            src={img1}
            alt="فرش اصیل ایرانی"
            className="rounded-2xl shadow-lg w-full h-[400px] object-cover"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 mt-20 md:grid-cols-3">
        {features.map((f) => (
          <div key={f.title} className="surface p-8 text-center">
            <div className="text-brand text-4xl mb-4 flex justify-center">
              {f.icon}
            </div>
            <h3 className="font-bold text-xl mb-2">{f.title}</h3>
            <p className="text-muted leading-7">{f.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Aboutus;
