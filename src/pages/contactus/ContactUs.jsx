import { useState } from 'react';
import SocialMedia from '../../components/Socialmedia/SocialMedia';
import { FaPhoneFlip } from 'react-icons/fa6';
import { MdMail } from 'react-icons/md';
import { IoLocationSharp } from 'react-icons/io5';
import './ContactUs.css';

function ContactUs() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
   
    setSent(true);
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <>
      <SocialMedia />

      <div className="app-container my-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* اطلاعات تماس */}
          <div className="surface p-6">
            <h2 className="text-2xl font-bold mb-6">اطلاعات تماس</h2>

            <div className="contact-row">
              <FaPhoneFlip className="contact-icon" />
              <span dir="ltr">0904 673 7515</span>
            </div>
            <div className="contact-row">
              <MdMail className="contact-icon" />
              <span dir="ltr">info@globalacceltalent.ir</span>
            </div>
            <div className="contact-row items-start">
              <IoLocationSharp className="contact-icon mt-1" />
              <span>تهران، پارادایس هاب، مرکز نوآوری‌های نوفل لوشاتو</span>
            </div>
          </div>

          {/* فرم تماس */}
          <div className="surface p-6">
            <h2 className="text-2xl font-bold mb-6">فرم تماس</h2>

            {sent && (
              <div className="contact-success">
                پیام شما با موفقیت ثبت شد. به‌زودی پاسخ می‌دهیم.
              </div>
            )}

            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <input
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                placeholder="نام و نام خانوادگی"
                className="contact-input"
                required
              />
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="ایمیل"
                className="contact-input"
                required
              />
              <textarea
                name="message"
                rows="5"
                value={form.message}
                onChange={handleChange}
                placeholder="متن پیام"
                className="contact-input resize-none"
                required
              />
              <button type="submit" className="btn-primary">
                ارسال پیام
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
