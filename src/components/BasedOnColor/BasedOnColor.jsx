import './BasedOnColor.css';
import redcarpet from '../../assets/images/ProductCategories/red-carpet.jpg';
import graycarpet from '../../assets/images/ProductCategories/gray-carpet.webp';
import bluecarpet from '../../assets/images/ProductCategories/blue-carpet.webp';
import greencarpet from '../../assets/images/ProductCategories/green-carpet.webp';
import navyblue from '../../assets/images/ProductCategories/navy-blue.webp';
import pinkcarpet from '../../assets/images/ProductCategories/pink-carpet.webp';
import blackcarpet from '../../assets/images/ProductCategories/black-carpet.webp';
import creamcarpet from '../../assets/images/ProductCategories/cream-carpet.webp';

// value باید دقیقاً با فیلد color در دیتابیس یکی باشد
const colors = [
  { label: 'قرمز',    value: 'قرمز',    img: redcarpet,   dot: '#c0392b' },
  { label: 'طوسی',    value: 'طوسی',    img: graycarpet,  dot: '#8c8c8c' },
  { label: 'آبی',     value: 'آبی',     img: bluecarpet,  dot: '#2e6fb0' },
  { label: 'سبز',     value: 'سبز',     img: greencarpet, dot: '#3a8f4f' },
  { label: 'سرمه‌ای', value: 'سرمه ای', img: navyblue,    dot: '#1f3a5f' },
  { label: 'صورتی',   value: 'صورتی',   img: pinkcarpet,  dot: '#d76a94' },
  { label: 'مشکی',    value: 'مشکی',    img: blackcarpet, dot: '#222' },
  { label: 'کرمی',    value: 'کرم',     img: creamcarpet, dot: '#e6d9bf' },
];

function BasedOnColor({ onSelectColor }) {
  return (
    <div className="grid grid-cols-12 gap-4">
      {colors.map((item) => (
        <button
          key={item.value}
          type="button"
          onClick={() => onSelectColor(item.value)}
          className="category-tile col-span-12 sm:col-span-6 lg:col-span-3"
        >
          <img src={item.img} className="category-img" alt={`فرش ${item.label}`} />
          <span className="category-overlay" />
          <span className="category-chip flex items-center gap-2">
            <span
              className="inline-block w-3.5 h-3.5 rounded-full border border-black/10"
              style={{ backgroundColor: item.dot }}
            />
            {item.label}
          </span>
        </button>
      ))}
    </div>
  );
}

export default BasedOnColor;
