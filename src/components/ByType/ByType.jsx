import tablo from '../../assets/images/ProductCategories/Tablofarsh.webp';
import dastbaft from '../../assets/images/ProductCategories/dastbaft.jpg';
import mashini from '../../assets/images/ProductCategories/farshmashini.jpg';
import modern from '../../assets/images/ProductCategories/farshmodrn.jpg';
import gerd from '../../assets/images/ProductCategories/farshgerd.jpg';
import koodak from '../../assets/images/ProductCategories/farshkoodak.webp';
import './ByType.css';


const types = [
  { label: 'تابلو فرش',    value: 'تابلو فرش',   img: tablo,    span: 'lg:col-span-6' },
  { label: 'فرش ماشینی',   value: 'فرش ماشینی',  img: mashini,  span: 'md:col-span-6 lg:col-span-3' },
  { label: 'فرش مدرن',     value: 'ماشینی مدرن', img: modern,   span: 'md:col-span-6 lg:col-span-3' },
  { label: 'فرش دست‌بافت', value: 'فرش دستبافت', img: dastbaft, span: 'lg:col-span-6' },
  { label: 'فرش گرد',      value: 'فرش گرد',     img: gerd,     span: 'md:col-span-6 lg:col-span-3' },
  { label: 'فرش کودک',     value: 'فرش کودک',    img: koodak,   span: 'md:col-span-6 lg:col-span-3' },
];

function ByType({ onSelectType }) {
  return (
    <div className="grid grid-cols-12 gap-4">
      {types.map((item) => (
        <button
          key={item.value}
          type="button"
          onClick={() => onSelectType(item.value)}
          className={`category-tile col-span-12 ${item.span}`}
        >
          <img src={item.img} className="category-img" alt={item.label} />
          <span className="category-overlay" />
          <span className="category-chip">{item.label}</span>
        </button>
      ))}
    </div>
  );
}

export default ByType;
