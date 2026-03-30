import { useMemo, useState } from 'react'
import { ProductCard } from '../components/common/ProductCard'
import { ShopFilters } from '../components/shop/ShopFilters'
import { ShopHero } from '../components/shop/ShopHero'
import { ShopToolbar } from '../components/shop/ShopToolbar'
import { products, type ProductCategory } from '../data/products'

type PriceFilter = 'all' | 'below5000' | 'above5000'
type SortOption = 'default' | 'price-low' | 'price-high' | 'name'

export function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | 'all'>('all')
  const [selectedPrice, setSelectedPrice] = useState<PriceFilter>('all')
  const [sortBy, setSortBy] = useState<SortOption>('default')

  const filteredProducts = useMemo(() => {
    const filtered = products.filter((product) => {
      const matchesCategory =
        selectedCategory === 'all' ? true : product.category === selectedCategory

      const matchesPrice =
        selectedPrice === 'all'
          ? true
          : selectedPrice === 'below5000'
            ? product.price < 5000
            : product.price >= 5000

      return matchesCategory && matchesPrice
    })

    const sorted = [...filtered]

    if (sortBy === 'price-low') {
      sorted.sort((a, b) => a.price - b.price)
    } else if (sortBy === 'price-high') {
      sorted.sort((a, b) => b.price - a.price)
    } else if (sortBy === 'name') {
      sorted.sort((a, b) => a.name.localeCompare(b.name))
    }

    return sorted
  }, [selectedCategory, selectedPrice, sortBy])

  const animationClasses = ['fade-up', 'fade-up-delay-1', 'fade-up-delay-2', 'fade-up-delay-3']

  return (
    <>
      <ShopHero />

      <section className="bg-[#FAFAFA] py-16 md:py-20">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-6 lg:grid-cols-[280px_minmax(0,1fr)] lg:px-10">
          <div className="fade-up">
            <ShopFilters
              selectedCategory={selectedCategory}
              selectedPrice={selectedPrice}
              onCategoryChange={setSelectedCategory}
              onPriceChange={setSelectedPrice}
            />
          </div>

          <div className="space-y-6">
            <div className="fade-up-delay-1">
              <ShopToolbar
                count={filteredProducts.length}
                sortBy={sortBy}
                onSortChange={setSortBy}
              />
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {filteredProducts.map((product, index) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    animationClass={animationClasses[index % animationClasses.length]}
                  />
                ))}
              </div>
            ) : (
              <div className="rounded-[1.5rem] bg-white px-6 py-14 text-center shadow-[0_12px_30px_rgba(0,0,0,0.05)]">
                <h3 className="font-display text-3xl text-[#111111]">No products found</h3>
                <p className="mt-3 text-base leading-7 text-[#5f5f5f]">
                  Try changing your category or price filters.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  )
}