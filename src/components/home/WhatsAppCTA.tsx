export function WhatsAppCTA() {
  return (
    <section className="bg-[#FAFAFA] pb-20">
      <div className="mx-auto w-full max-w-4xl px-6 lg:px-10">
        <div className="rounded-[2rem] bg-[#111111] px-6 py-14 text-center text-white shadow-[0_18px_40px_rgba(0,0,0,0.12)]">
          <p className="fade-up text-sm font-medium uppercase tracking-[0.3em] text-[#D4AF37]">
            WhatsApp Orders
          </p>

          <h2 className="fade-up-delay-1 mt-4 font-display text-4xl md:text-5xl">
            Order Easily via WhatsApp
          </h2>

          <p className="fade-up-delay-2 mx-auto mt-4 max-w-2xl text-base leading-8 text-white/75">
            Browse your favorite bags and perfumes, then place your order quickly through
            WhatsApp for a seamless shopping experience.
          </p>

          <a
            href="https://wa.me/254702691978"
            target="_blank"
            rel="noreferrer"
            className="fade-up-delay-3 mt-8 inline-flex items-center justify-center rounded-xl bg-[#25D366] px-8 py-4 text-sm font-semibold text-white transition-transform duration-300 hover:scale-[1.02]"
          >
            Chat Now
          </a>
        </div>
      </div>
    </section>
  )
}