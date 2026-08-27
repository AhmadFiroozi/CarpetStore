import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MdDeleteForever } from 'react-icons/md';
import { FiPlus, FiMinus, FiShoppingCart } from 'react-icons/fi';
import { CartContext } from '../../context/CartContext';
import './Cart.css';

function Cart() {
  const {
    removeFromCart,
    increaseQty,
    decreaseQty,
    cartItems,
    totalPrice,
    cartCount,
  } = useContext(CartContext);

  if (!cartItems.length) {
    return (
      <div className="app-container py-24 text-center">
        <FiShoppingCart className="mx-auto text-6xl text-sand mb-4" />
        <h1 className="lalezar text-2xl mb-2">سبد خرید شما خالی است</h1>
        <p className="text-muted mb-6">
          هنوز محصولی اضافه نکرده‌اید. فرش دلخواهتان را انتخاب کنید.
        </p>
        <Link to="/" className="btn-primary">مشاهده محصولات</Link>
      </div>
    );
  }

  return (
    <div className="app-container my-10">
      <h1 className="section-title">سبد خرید ({cartCount} کالا)</h1>

      <div className="grid grid-cols-12 gap-6">
        {/* لیست اقلام */}
        <div className="col-span-12 lg:col-span-8 flex flex-col gap-4">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item surface">
              <div className="cart-item__img">
                <img src={item.image} alt={item.desc} />
              </div>

              <div className="cart-item__info">
                <p className="cart-item__title">{item.desc}</p>
                <p className="cart-item__unit-price">
                  قیمت واحد: {item.price.toLocaleString()} تومان
                </p>

                <div className="cart-item__footer">
                  <div className="qty-control">
                    <button onClick={() => increaseQty(item.id)} aria-label="افزایش">
                      <FiPlus />
                    </button>
                    <span>{item.qty}</span>
                    <button onClick={() => decreaseQty(item.id)} aria-label="کاهش">
                      <FiMinus />
                    </button>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="cart-item__line-total">
                      {(item.price * item.qty).toLocaleString()} تومان
                    </span>
                    <button
                      className="cart-item__remove"
                      onClick={() => removeFromCart(item.id)}
                      aria-label="حذف"
                    >
                      <MdDeleteForever />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* خلاصهٔ سفارش */}
        <div className="col-span-12 lg:col-span-4">
          <div className="cart-summary surface">
            <h2 className="font-bold text-lg mb-4">خلاصهٔ سفارش</h2>
            <div className="flex justify-between text-muted mb-2">
              <span>تعداد کالا</span>
              <span>{cartCount}</span>
            </div>
            <div className="flex justify-between font-bold text-lg border-t border-sand pt-3 mt-3">
              <span>مبلغ قابل پرداخت</span>
              <span className="text-brand">{totalPrice.toLocaleString()} تومان</span>
            </div>
            <button className="btn-primary w-full mt-6">تکمیل خرید و پرداخت</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
