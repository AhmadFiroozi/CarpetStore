import db from '../../db.json' with { type: 'json' };

/**
 * GET /api/carpets/:id
 * پاسخ ۴۰۴ استاندارد برای شناسهٔ نامعتبر تا صفحهٔ محصول بتواند
 * حالت «محصول یافت نشد» را درست نمایش دهد.
 */
export default function handler(request, response) {
  if (request.method !== 'GET') {
    response.setHeader('Allow', 'GET');
    return response.status(405).json({ message: 'Method Not Allowed' });
  }

  const { id } = request.query;

  // در json-server نسخهٔ ۱، id به‌صورت رشته برمی‌گردد ولی در db.json عدد است.
  // مقایسه را روی رشته انجام می‌دهیم تا هر دو حالت کار کند.
  const carpet = db.carpets.find((item) => String(item.id) === String(id));

  if (!carpet) {
    return response.status(404).json({ message: 'Carpet not found' });
  }

  response.setHeader('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=86400');

  return response.status(200).json(carpet);
}
