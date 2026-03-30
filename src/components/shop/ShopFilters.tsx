import type { ProductCategory } from '../../data/products'

type ShopFiltersProps = {
  selectedCategory: ProductCategory | 'all'
  selectedPrice: 'all' | 'below5000' | 'above5000'
  onCategoryChange: (category: ProductCategory | 'all') => void
  onPriceChange: (price: 'all' | 'below5000' | 'above5000') => void
}

function FilterButton({
  active,
  label,
  onClick,
}: {
  active: boolean
  label: string
  onClick: () => void
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full rounded-xl border px-4 py-3 text-left text-sm font-medium transition-all duration-300 ${
        active
          ? 'border-[#D4AF37] bg-[#D4AF37] text-[#111111]'
          : 'border-black/10 bg-white text-[#111111] hover:border-[#D4AF37] hover:text-[#B28A2E]'
      }`}
    >
      {label}
    </button>
  )
}

export function ShopFilters({
  selectedCategory,
  selectedPrice,
  onCategoryChange,
  onPriceChange,
}: ShopFiltersProps) {
  return (
    <aside className="rounded-[1.5rem] bg-[#F8F3EC] p-6 shadow-[0_12px_30px_rgba(0,0,0,0.05)]">
      <div>
        <h3 className="font-display text-2xl text-[#111111]">Category</h3>
        <div className="mt-4 space-y-3">
          <FilterButton
            active={selectedCategory === 'all'}
            label="All Products"
            onClick={() => onCategoryChange('all')}
          />
          <FilterButton
            active={selectedCategory === 'bags'}
            label="Bags"
            onClick={() => onCategoryChange('bags')}
          />
          <FilterButton
            active={selectedCategory === 'perfumes'}
            label="Perfumes"
            onClick={() => onCategoryChange('perfumes')}
          />
          <FilterButton
            active={selectedCategory === 'gift-sets'}
            label="Gift Sets"
            onClick={() => onCategoryChange('gift-sets')}
          />
        </div>
      </div>

      <div className="mt-8">
        <h3 className="font-display text-2xl text-[#111111]">Price</h3>
        <div className="mt-4 space-y-3">
          <FilterButton
            active={selectedPrice === 'all'}
            label="All Prices"
            onClick={() => onPriceChange('all')}
          />
          <FilterButton
            active={selectedPrice === 'below5000'}
            label="Below KSh 5,000"
            onClick={() => onPriceChange('below5000')}
          />
          <FilterButton
            active={selectedPrice === 'above5000'}
            label="Above KSh 5,000"
            onClick={() => onPriceChange('above5000')}
          />
        </div>
      </div>
    </aside>
  )
}