import { useCallback, useEffect, useRef, useState } from 'react';
import ProductCategories from '../../components/Productcategories/ProductCategories';
import Products from '../../components/Products/Products';
import Slider from '../../components/slider/Slider';
import SocialMedia from '../../components/Socialmedia/SocialMedia';
import api from '../../api';
import './Home.css';

function Home() {
  const [selectedType, setSelectedType] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [carpet, setCarpet] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const productsRef = useRef(null);

  const scrollToProducts = useCallback(() => {
    // requestAnimationFrame: بعد از رندر مجدد و اعمال فیلتر اسکرول کن
    requestAnimationFrame(() => {
      productsRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  }, []);

  const handleSelectType = useCallback(
    (type) => {
      setSelectedType(type);
      setSelectedColor(''); // دو فیلتر هم‌زمان معمولاً نتیجهٔ خالی می‌دهد
      scrollToProducts();
    },
    [scrollToProducts]
  );

  const handleSelectColor = useCallback(
    (color) => {
      setSelectedColor(color);
      setSelectedType('');
      scrollToProducts();
    },
    [scrollToProducts]
  );

  useEffect(() => {
    api
      .get('/carpets')
      .then((response) => {
        setCarpet(response.data);
        setError('');
      })
      .catch(() => setError('در دریافت محصولات خطایی رخ داد. اتصال سرور را بررسی کنید.'))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <Slider />
      <ProductCategories
        onSelectType={handleSelectType}
        onSelectColor={handleSelectColor}
      />
      <Products
        ref={productsRef}
        carpets={carpet}
        selectedType={selectedType}
        selectedColor={selectedColor}
        setSelectedType={setSelectedType}
        setSelectedColor={setSelectedColor}
        loading={loading}
        error={error}
      />
      <SocialMedia />
    </>
  );
}

export default Home;
