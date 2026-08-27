import './Slider.css';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../../assets/images/slider/slider1.jpg';
import img2 from '../../assets/images/slider/slider2.jpg';

const slides = [
  {
    img: img1,
    title: 'فرش اصیل ایرانی',
    text: 'طرح، رنگ و نقشه‌های اصیل فرش ایرانی',
  },
  {
    img: img2,
    title: 'تنوع محصول',
    text: 'مدل‌های مختلف از اندازه و طرح و رنگ',
  },
];

function Slider() {
  return (
    <div className="app-container mt-4">
      <Carousel fade className="hero-slider">
        {slides.map((slide, i) => (
          <Carousel.Item key={i}>
            <div className="hero-slide">
              <img src={slide.img} className="hero-img" alt={slide.title} />
              <div className="hero-scrim" />
              <Carousel.Caption className="hero-caption">
                <h3 className="lalezar">{slide.title}</h3>
                <p>{slide.text}</p>
              </Carousel.Caption>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default Slider;
