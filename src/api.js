import axios from 'axios';

/**
 * آدرس پایهٔ API در یک نقطه نگه‌داری می‌شود.
 *
 * توسعه (npm run dev)  → VITE_API_URL از فایل .env.development خوانده می‌شود
 *                        و به json-server روی http://localhost:3000 وصل می‌شویم.
 * پروداکشن (Vercel)    → متغیر تعریف نشده است و مقدار پیش‌فرض «/api» استفاده می‌شود؛
 *                        یعنی Serverless Function های همین پروژه روی همان دامنه.
 *                        چون دامنه یکی است، هیچ خطای CORS رخ نمی‌دهد.
 */
const BASE_URL = import.meta.env.VITE_API_URL || '/api';

const api = axios.create({ baseURL: BASE_URL });

export default api;
