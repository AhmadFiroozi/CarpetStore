import db from '../../db.json' with { type: 'json' };

/**
 * GET /api/carpets
 * GET /api/carpets?Type=فرش%20گرد
 * GET /api/carpets?color=آبی
 *
 * جایگزین پروداکشنِ json-server. داده از همان db.json خوانده می‌شود،
 * پس محیط توسعه و پروداکشن یک منبع داده دارند.
 */
export default function handler(request, response) {
  if (request.method !== 'GET') {
    response.setHeader('Allow', 'GET');
    return response.status(405).json({ message: 'Method Not Allowed' });
  }

  const { Type, color } = request.query;

  let carpets = db.carpets;

  if (Type) carpets = carpets.filter((item) => item.Type === Type);
  if (color) carpets = carpets.filter((item) => item.color === color);

  // داده ثابت است؛ روی CDN کش می‌شود تا پاسخ‌ها فوری برگردند
  response.setHeader('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=86400');

  return response.status(200).json(carpets);
}
