<div dir="rtl">

# نخ فرنگ — فروشگاه آنلاین فرش

فروشگاه فرش ایرانی با چیدمان کامل راست‌به‌چپ، ساخته‌شده با **React 19**، **Vite**، **Tailwind CSS v4** و **Context API**. داده‌های محصولات از یک REST API خوانده می‌شود که در محیط توسعه با <code dir="ltr">json-server</code> و در پروداکشن با Vercel Serverless Functions اجرا می‌شود.

**[▶ مشاهدهٔ دمو](https://carpet-store-delta.vercel.app/)** · **[سورس‌کد](https://github.com/AhmadFiroozi/CarpetStore)** · [English README](README.en.md)

![صفحهٔ اصلی](screenshots/home.jpg)

---

## قابلیت‌ها

- **کاتالوگ محصولات** — ۲۸ فرش که از REST API دریافت و در یک گرید ریسپانسیو نمایش داده می‌شوند.
- **فیلتر دوبعدی** — مرور بر اساس نوع فرش (تابلوفرش، ماشینی، دستبافت، مدرن، گرد، کودک) یا بر اساس رنگ، به‌همراه چیپ‌های قابل حذف برای فیلترهای فعال.
- **صفحهٔ اختصاصی محصول** — روت پویا (<code dir="ltr">/Carpet/:carpetId</code>) با جدول مشخصات کامل و حالت «محصول یافت نشد» برای شناسه‌های نامعتبر.
- **سبد خرید** — افزودن کالا، تغییر تعداد، حذف ردیف و محاسبهٔ جمع کل؛ نشانگر تعداد روی هدر در همهٔ صفحه‌ها هماهنگ می‌ماند.
- **سیستم اعلان (Toast)** — متمرکز و قابل فراخوانی از هر جای اپ، با بسته‌شدن خودکار، سقف نمایش هم‌زمان و پاکسازی تایمرها هنگام unmount.
- **حالت‌های loading، error و empty** — کارت‌های اسکلتی هنگام دریافت داده، پیام خوانا در صورت خطای API، و حالت «نتیجه‌ای یافت نشد» به‌همراه دکمهٔ حذف فیلترها.
- **راست‌به‌چپ کامل** — تایپوگرافی فارسی (Lalezar و Yekan)، نسخهٔ RTL بوت‌استرپ، و قالب‌بندی فارسی اعداد.
- **ریسپانسیو** — از موبایل ۳۹۰ پیکسلی تا دسکتاپ عریض، به‌همراه منوی Offcanvas در موبایل.
- **صفحهٔ ۴۰۴ اختصاصی** برای مسیرهای نامعتبر.

| فیلتر محصولات | صفحهٔ محصول | سبد خرید |
|---|---|---|
| ![فیلتر](screenshots/filter.jpg) | ![صفحهٔ محصول](screenshots/product.jpg) | ![سبد خرید](screenshots/cart.jpg) |

<img src="screenshots/mobile.jpg" width="300" alt="نمای موبایل">

*همان کاتالوگ روی نمایشگر ۳۹۰ پیکسلی.*

---

## تکنولوژی‌ها

| بخش | تکنولوژی |
|---|---|
| فریم‌ورک | React 19 |
| ابزار build | Vite |
| مسیریابی | React Router v7 — روت‌های تودرتو با <code dir="ltr">Layout</code> و <code dir="ltr">Outlet</code> |
| مدیریت state | Context API — دو Provider جدا برای سبد خرید و اعلان‌ها |
| استایل | Tailwind CSS v4 با توکن‌های <code dir="ltr">@theme</code> + React-Bootstrap نسخهٔ RTL |
| ارتباط با API | Axios با یک instance متمرکز |
| API در توسعه | json-server روی <code dir="ltr">db.json</code> |
| API در پروداکشن | Vercel Serverless Functions روی همان <code dir="ltr">db.json</code> |
| آیکون | react-icons |

---

## معماری

نکتهٔ اصلی این پروژه، نحوهٔ ارتباط یک کدبیس واحد با دو بک‌اند متفاوت است — بدون حتی یک شرط در کامپوننت‌ها.

</div>

<div dir="ltr">

```
DEVELOPMENT                          PRODUCTION (Vercel)
─────────────────────────            ─────────────────────────
Vite dev server :5173                Static build on the CDN
        │                                    │
        │  VITE_API_URL                      │  no env var set
        │  = http://localhost:3000           │  → falls back to "/api"
        ▼                                    ▼
   json-server :3000                 Serverless Functions
        │                            /api/carpets
        │                            /api/carpets/[id]
        ▼                                    │
     db.json  ◄─────── same file ────────────┘
```

</div>

<div dir="rtl">


همهٔ کامپوننت‌ها یک instance واحد از Axios را از <code dir="ltr">src/api.js</code> می‌گیرند:

</div>

<div dir="ltr">

```js
const BASE_URL = import.meta.env.VITE_API_URL || '/api';
const api = axios.create({ baseURL: BASE_URL });
```

</div>

<div dir="rtl">


در محیط توسعه، فایل <code dir="ltr">.env.development</code> این مقدار را به <code dir="ltr">json-server</code> اشاره می‌دهد. در پروداکشن هیچ متغیری تعریف نشده، پس مقدار پیش‌فرض <code dir="ltr">/api</code> استفاده می‌شود — یعنی همان توابع Serverless که کنار خود اپلیکیشن دیپلوی شده‌اند. چون API روی همان دامنهٔ فرانت‌اند قرار دارد، **مشکل CORS اصلاً پیش نمی‌آید** و سرویس دومی هم وجود ندارد که لازم باشد بیدار نگه داشته شود.

فایل <code dir="ltr">db.json</code> در هر دو محیط تنها منبع داده می‌ماند.

### اندپوینت‌های API

| متد | مسیر | توضیح |
|---|---|---|
| <code dir="ltr">GET</code> | <code dir="ltr">/api/carpets</code> | همهٔ محصولات |
| <code dir="ltr">GET</code> | <code dir="ltr">/api/carpets?Type=<نوع></code> | فیلتر بر اساس نوع فرش |
| <code dir="ltr">GET</code> | <code dir="ltr">/api/carpets?color=<رنگ></code> | فیلتر بر اساس رنگ |
| <code dir="ltr">GET</code> | <code dir="ltr">/api/carpets/:id</code> | یک محصول — در صورت نبود، پاسخ ۴۰۴ |

### مسیریابی SPA

مسیرهای سمت کلاینت مثل <code dir="ltr">/Carpet/5</code> نباید هنگام رفرش صفحه خطای ۴۰۴ بدهند، بنابراین فایل <code dir="ltr">vercel.json</code> هر مسیر غیر از <code dir="ltr">/api</code> را به <code dir="ltr">index.html</code> هدایت می‌کند:

</div>

<div dir="ltr">

```json
{
  "rewrites": [
    { "source": "/((?!api/).*)", "destination": "/index.html" }
  ]
}
```

</div>

<div dir="rtl">


الگوی <code dir="ltr">(?!api/)</code> باعث می‌شود مسیرهای API به توابع Serverless برسند و توسط fallback مربوط به SPA بلعیده نشوند.

---

## ساختار پروژه

</div>

<div dir="ltr">

```
CarpetStore/
├── api/carpets/          # Serverless Functions (production API)
│   ├── index.js
│   └── [id].js
├── public/images/        # product images
├── src/
│   ├── api.js            # single Axios instance
│   ├── components/       # Card, Navbar, Products, Slider, Toast, Layout …
│   ├── context/
│   │   ├── CartContext.jsx    # cart state + derived totals
│   │   └── ToastContext.jsx   # toast queue + timers
│   ├── pages/            # Home, Carpet, Cart, Aboutus, ContactUs, Auth
│   ├── assets/           # fonts and category imagery
│   └── index.css         # Tailwind v4 theme tokens
├── db.json               # product data (shared by both API modes)
└── vercel.json           # SPA rewrite rules
```

</div>

<div dir="rtl">


---

## راه‌اندازی

**پیش‌نیاز:** Node.js نسخهٔ ۲۲٫۱۲ یا بالاتر (نیاز json-server؛ Vite از ۲۰٫۱۹ به بالا را می‌پذیرد).

</div>

<div dir="ltr">

```bash
git clone https://github.com/AhmadFiroozi/CarpetStore.git
cd CarpetStore
npm install
```

</div>

<div dir="rtl">


API و اپلیکیشن را در دو ترمینال جدا اجرا کن:

</div>

<div dir="ltr">

```bash
npm run server   # json-server -> http://localhost:3000
npm run dev      # Vite       -> http://localhost:5173
```

</div>

<div dir="rtl">


هر دو باید هم‌زمان در حال اجرا باشند، چون اپلیکیشن محصولاتش را از API می‌گیرد.

### متغیرهای محیطی

| متغیر | توسعه | پروداکشن |
|---|---|---|
| <code dir="ltr">VITE_API_URL</code> | <code dir="ltr">http://localhost:3000</code> — در فایل <code dir="ltr">.env.development</code> | تعریف نمی‌شود؛ کد به <code dir="ltr">/api</code> برمی‌گردد |

در پنل Vercel متغیر <code dir="ltr">VITE_API_URL</code> را **تعریف نکن**؛ همان مقدار پیش‌فرض است که درخواست‌ها را به توابع Serverless می‌رساند.

### سایر دستورها

</div>

<div dir="ltr">

```bash
npm run build     # production build -> dist/
npm run preview   # preview the build (note: /api is NOT served here)
npm run lint      # ESLint
```

</div>

<div dir="rtl">


> دستور <code dir="ltr">vite preview</code> یک سرور فایل ساده است و پوشهٔ <code dir="ltr">api/</code> را اجرا نمی‌کند، بنابراین محصولات در آن لود نمی‌شوند. این مسیر فقط روی Vercel کار می‌کند.

---

## دیپلوی

دیپلوی‌شده روی **Vercel** (پلن Hobby). کافی است ریپازیتوری را import کنی، پریست تشخیص‌داده‌شدهٔ **Vite** را دست نزنی، بخش Environment Variables را خالی بگذاری و Deploy را بزنی — فایل <code dir="ltr">vercel.json</code> و پوشهٔ <code dir="ltr">api/</code> به‌صورت خودکار شناسایی می‌شوند.

---

## مسیر توسعه

مواردی که می‌دانم هنوز جای کار دارند:

- **ماندگاری سبد خرید** — state سبد فعلاً فقط در حافظه است و با رفرش صفحه پاک می‌شود. قدم بعدی استفاده از <code dir="ltr">localStorage</code> است.
- **جستجو و صفحه‌بندی** — با ۲۸ محصول گرید قابل مدیریت است، ولی قبل از رشد کاتالوگ به فیلد جستجو و صفحه‌بندی نیاز دارد.
- **ترکیب فیلترها** — فیلتر نوع و رنگ در حال حاضر جایگزین هم می‌شوند به‌جای اینکه روی هم اعمال شوند.
- **گرید دوستونی در موبایل** برای کوتاه‌کردن صفحهٔ اصلی روی نمایشگرهای کوچک.
- **احراز هویت واقعی** — صفحهٔ ورود فعلاً فقط نمایشی است.

---

## نکته

این یک پروژهٔ نمونه‌کار است. فروشگاه، برند و قیمت‌ها فرضی هستند و دکمهٔ تکمیل خرید به هیچ درگاه پرداختی متصل نیست. تصاویر محصولات صرفاً جنبهٔ نمایشی دارند.

ساخته‌شده توسط [احمدرضا فیروزی](https://github.com/AhmadFiroozi).


</div>