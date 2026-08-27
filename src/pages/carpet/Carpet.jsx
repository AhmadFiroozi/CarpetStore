import { useParams, Link } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import { FiShoppingCart, FiCheck } from 'react-icons/fi';
import api from '../../api';
import { CartContext } from '../../context/CartContext';
import './Carpet.css';

function Carpet() {
  const { carpetId } = useParams();
  const [carpetData, setCarpetData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [added, setAdded] = useState(false);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    api
      .get(`/carpets/${carpetId}`)
      .then((response) => setCarpetData(response.data))
      .finally(() => setLoading(false));
  }, [carpetId]);

  const handleAdd = () => {
    addToCart(carpetData);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  if (loading) {
    return (
      <div className="app-container py-24 text-center text-muted">
        در حال بارگذاری…
      </div>
    );
  }

  if (!carpetData) {
    return (
      <div className="app-container py-24 text-center">
        <p className="text-muted mb-6">محصول مورد نظر یافت نشد.</p>
        <Link to="/" className="btn-primary">بازگشت به فروشگاه</Link>
      </div>
    );
  }

  const specs = [
    { label: 'نوع', value: carpetData.Type },
    { label: 'تراکم الیاف', value: carpetData.comb },
    { label: 'اندازه', value: carpetData.size },
    { label: 'رنگ', value: carpetData.color },
    { label: 'جنس الیاف', value: carpetData.Typeoffiber },
  ];

  return (
    <div className="app-container my-10">
      {/* مسیر راهنما */}
      <nav className="text-sm text-muted mb-6">
        <Link to="/" className="hover:text-brand">فروشگاه</Link>
        <span className="mx-2">/</span>
        <span className="text-ink">{carpetData.desc}</span>
      </nav>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="carpet-image surface">
          <img src={carpetData.image} alt={carpetData.desc} />
        </div>

        <div>
          <h1 className="lalezar text-3xl mb-4">{carpetData.desc}</h1>

          <div className="carpet-price mb-6">
            {carpetData.price?.toLocaleString()}
            <span className="unit"> تومان</span>
          </div>

          <h2 className="font-bold text-lg mb-3">مشخصات</h2>
          <ul className="carpet-specs">
            {specs.map((spec) => (
              <li key={spec.label}>
                <span className="spec-label">{spec.label}</span>
                <span className="spec-value">{spec.value}</span>
              </li>
            ))}
          </ul>

          <button
            className={`btn-primary w-full mt-8 text-lg ${added ? 'is-added' : ''}`}
            onClick={handleAdd}
          >
            {added ? (
              <><FiCheck /> به سبد خرید اضافه شد</>
            ) : (
              <><FiShoppingCart /> افزودن به سبد خرید</>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Carpet;
