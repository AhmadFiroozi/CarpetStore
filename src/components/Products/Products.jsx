import { FiX } from 'react-icons/fi';
import Card from '../Card/Card';
import './Products.css';

function Products({
  ref,
  carpets,
  selectedType,
  selectedColor,
  loading,
  error,
  setSelectedType,
  setSelectedColor,
}) {
  const filteredCarpets = carpets.filter((item) => {
    const typeMatch = selectedType === '' || item.Type === selectedType;
    const colorMatch = selectedColor === '' || item.color === selectedColor;
    return typeMatch && colorMatch;
  });

  const hasFilter = selectedType || selectedColor;

  return (
    <section ref={ref} id="products" className="app-container my-12 products-section">
      <div className="flex items-center justify-between flex-wrap gap-3 mb-6">
        <h3 className="section-title mb-0">محصولات</h3>

        {hasFilter && (
          <div className="flex items-center gap-2 flex-wrap">
            {selectedType && (
              <button
                onClick={() => setSelectedType('')}
                className="filter-chip"
              >
                {selectedType} <FiX />
              </button>
            )}
            {selectedColor && (
              <button
                onClick={() => setSelectedColor('')}
                className="filter-chip"
              >
                {selectedColor} <FiX />
              </button>
            )}
          </div>
        )}
      </div>

      {loading ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="skeleton-card" />
          ))}
        </div>
      ) : error ? (
        <div className="surface p-10 text-center text-brand font-semibold">
          {error}
        </div>
      ) : filteredCarpets.length === 0 ? (
        <div className="surface p-12 text-center">
          <p className="text-lg text-muted mb-4">
            فرشی با این مشخصات پیدا نشد.
          </p>
          {hasFilter && (
            <button
              className="btn-outline"
              onClick={() => {
                setSelectedType('');
                setSelectedColor('');
              }}
            >
              حذف فیلترها
            </button>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredCarpets.map((item) => (
            <Card key={item.id} {...item} />
          ))}
        </div>
      )}
    </section>
  );
}

export default Products;
