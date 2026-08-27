import { useState } from 'react';
import { LuLayoutGrid } from 'react-icons/lu';
import BasedOnColor from '../BasedOnColor/BasedOnColor';
import ByType from '../ByType/ByType';
import './ProductCategories.css';

function ProductCategories({ onSelectType, onSelectColor }) {
  const [activeTab, setActiveTab] = useState('type');

  const tabs = [
    { id: 'type', label: 'براساس نوع' },
    { id: 'color', label: 'براساس رنگ' },
  ];

  return (
    <section className="app-container my-12">
      <div className="surface p-4 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="lalezar text-xl flex items-center gap-2">
          <LuLayoutGrid className="text-brand" />
          دسته‌بندی محصولات
        </div>

        <div className="flex gap-2 items-center bg-cream rounded-xl p-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-2 px-5 rounded-lg font-semibold transition-colors ${
                activeTab === tab.id
                  ? 'bg-brand text-white shadow'
                  : 'text-muted hover:bg-brand-50 hover:text-brand'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6">
        {activeTab === 'type' ? (
          <ByType onSelectType={onSelectType} />
        ) : (
          <BasedOnColor onSelectColor={onSelectColor} />
        )}
      </div>
    </section>
  );
}

export default ProductCategories;
