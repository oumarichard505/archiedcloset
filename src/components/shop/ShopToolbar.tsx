type SortOption = 'default' | 'price-low' | 'price-high' | 'name'

type ShopToolbarProps = {
  count: number
  sortBy: SortOption
  onSortChange: (value: SortOption) => void
}

export function ShopToolbar({ count, sortBy, onSortChange }: ShopToolbarProps) {
  return (
    <div className="flex flex-col gap-4 rounded-[1.5rem] bg-white p-5 shadow-[0_12px_30px_rgba(0,0,0,0.05)] md:flex-row md:items-center md:justify-between">
      <p className="text-sm font-medium text-[#5f5f5f]">
        Showing <span className="font-semibold text-[#111111]">{count}</span> products
      </p>

      <div className="flex items-center gap-3">
        <label htmlFor="sort" className="text-sm font-medium text-[#111111]">
          Sort by
        </label>

        <select
          id="sort"
          value={sortBy}
          onChange={(event) => onSortChange(event.target.value as SortOption)}
          className="rounded-xl border border-black/10 bg-[#FAFAFA] px-4 py-3 text-sm text-[#111111] outline-none transition-colors focus:border-[#D4AF37]"
        >
          <option value="default">Featured</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="name">Name</option>
        </select>
      </div>
    </div>
  )
}