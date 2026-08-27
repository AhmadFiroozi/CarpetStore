import axios from "axios";

// آدرس پایهٔ سرور در یک نقطه — به‌جای هاردکد کردن در هر کامپوننت.
// در محیط واقعی می‌توانید از متغیر محیطی استفاده کنید:
// const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";
const BASE_URL = "http://localhost:3000";

const api = axios.create({ baseURL: BASE_URL });

export default api;
