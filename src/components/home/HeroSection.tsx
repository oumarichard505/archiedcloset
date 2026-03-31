export function HeroSection() {
  return (
    <section className="bg-[#FAFAFA]">
      <div className="mx-auto grid min-h-[calc(100vh-80px)] w-full max-w-7xl items-center gap-10 px-6 py-14 lg:grid-cols-2 lg:px-10 lg:py-20">
        <div className="max-w-xl">
          <p className="fade-up mb-4 text-sm font-medium uppercase tracking-[0.3em] text-[#B28A2E]">
            Female-Focused Luxury
          </p>

          <h1 className="fade-up-delay-1 font-display text-5xl leading-tight text-[#111111] md:text-6xl lg:text-7xl">
            Luxury Bags &amp; Signature Scents
          </h1>

          <p className="fade-up-delay-2 mt-6 max-w-lg text-base leading-8 text-[#5f5f5f] md:text-lg">
            Affordable elegance for your everyday lifestyle. Discover chic bags, premium
            perfumes, and gift-ready pieces curated to elevate confidence and style.
          </p>

          <div className="fade-up-delay-3 mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#featured-bags"
              className="btn-dark-force inline-flex items-center justify-center rounded-xl bg-[#111111] px-8 py-4 text-sm font-semibold transition-all duration-300 hover:bg-[#D4AF37]">
              Shop Bags
              </a>

            <a
              href="#featured-perfumes"
              className="inline-flex items-center justify-center rounded-xl border border-[#D4AF37] px-8 py-4 text-sm font-semibold text-[#B28A2E] transition-all duration-300 hover:bg-[#D4AF37] hover:text-[#111111]"
            >
              Explore Perfumes
            </a>
          </div>
        </div>

        <div className="fade-up-delay-2 relative">
          <div className="overflow-hidden rounded-[2rem] shadow-[0_20px_60px_rgba(0,0,0,0.12)]">
            <img
              src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1400&q=80"
              alt="Elegant woman holding a luxury handbag"
              className="h-[520px] w-full object-cover"
            />
          </div>

          <div className="absolute -bottom-6 -left-6 hidden rounded-3xl bg-white/90 p-5 shadow-xl backdrop-blur md:block">
            <p className="font-display text-xl text-[#111111]">Affordable Luxury</p>
            <p className="mt-1 text-sm text-[#5f5f5f]">Curated for confidence and beauty</p>
          </div>
        </div>
      </div>
    </section>
  )
}