import './SocialMedia.css';
import { FaTelegram, FaSquareInstagram, FaSquareWhatsapp, FaLinkedin } from 'react-icons/fa6';

const socials = [
  { icon: <FaTelegram />, label: 'تلگرام', color: 'hover:text-[#229ED9]' },
  { icon: <FaSquareInstagram />, label: 'اینستاگرام', color: 'hover:text-[#E1306C]' },
  { icon: <FaSquareWhatsapp />, label: 'واتساپ', color: 'hover:text-[#25D366]' },
  { icon: <FaLinkedin />, label: 'لینکدین', color: 'hover:text-[#0A66C2]' },
];

function SocialMedia() {
  return (
    <div className="app-container">
      <div className="text-center my-12">
        <h4 className="lalezar text-2xl mb-6">ما را در فضای مجازی دنبال کنید</h4>
        <div className="flex justify-center items-center gap-5">
          {socials.map((s) => (
            <button
              key={s.label}
              aria-label={s.label}
              className={`text-5xl sm:text-6xl text-ink/70 transition-colors cursor-pointer ${s.color}`}
            >
              {s.icon}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SocialMedia;
