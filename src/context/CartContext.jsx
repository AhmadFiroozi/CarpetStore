import { createContext, useState } from "react";
import { useToast } from "./ToastContext";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const { showToast } = useToast();

  // افزودن به سبد: اگر محصول از قبل هست فقط تعداد را زیاد کن
  const addToCart = (product) => {
    if (!product) return;

    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });

    // اعلان یک‌جا و متمرکز: هر جای اپ که addToCart صدا زده شود، پیام می‌آید
    showToast({
      message: `«${product.desc}» به سبد خرید اضافه شد.`,
      actionLabel: "مشاهده سبد خرید",
      actionTo: "/Cart",
    });
  };

  const increaseQty = (id) =>
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );

  const decreaseQty = (id) =>
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, qty: item.qty - 1 } : item
        )
        .filter((item) => item.qty > 0)
    );

  const removeFromCart = (id) =>
    setCartItems((prev) => prev.filter((item) => item.id !== id));

  const totalPrice = cartItems.reduce(
    (total, item) => total + Number(item.price) * item.qty,
    0
  );

  const cartCount = cartItems.reduce((sum, item) => sum + item.qty, 0);

  return (
    <CartContext.Provider
      value={{
        addToCart,
        increaseQty,
        decreaseQty,
        removeFromCart,
        cartItems,
        setCartItems,
        totalPrice,
        cartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
