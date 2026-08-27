import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { CartContext } from '../../context/CartContext';
import './Card.css';

function Card({ image, desc, price, id, Type, color }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="product-card">
      <div className="product-card__media">
        <img src={image} className="product-card__img" alt={desc} loading="lazy" />
        {Type && <span className="product-card__badge">{Type}</span>}
      </div>

      <div className="product-card__body">
        <p className="product-card__title">{desc}</p>

        <div className="product-card__meta">
          <span className="product-card__price">
            {price.toLocaleString()} <span className="unit">تومان</span>
          </span>
          {color && <span className="product-card__color">{color}</span>}
        </div>

        <div className="product-card__actions">
          <Link to={`/Carpet/${id}`} className="btn-outline flex-1">
            جزئیات
          </Link>
          <button
            className="product-card__cart"
            onClick={() => addToCart({ image, desc, price, id, Type, color })}
            aria-label="افزودن به سبد خرید"
          >
            <FiShoppingCart />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
