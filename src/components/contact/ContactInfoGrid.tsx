import {  Mail, MapPin, MessageCircle, Phone } from 'lucide-react'

const contactItems = [
  {
    title: 'WhatsApp',
    value: '+254 700 000 000',
    description: 'Chat with us directly for fast and easy ordering.',
    href: 'https://wa.me/254700000000',
    icon: MessageCircle,
  },
  {
    title: 'Phone',
    value: '+254 700 000 000',
    description: 'Call us for product inquiries and customer support.',
    href: 'tel:+254700000000',
    icon: Phone,
  },
  {
    title: 'Email',
    value: 'hello@achiedcloset.com',
    description: 'Send us your questions, feedback, or business inquiries.',
    href: 'mailto:hello@achiedcloset.com',
    icon: Mail,
  },
  {
    title: 'Location',
    value: 'Nairobi, Kenya',
    description: 'Serving customers online with delivery options available.',
    href: '#',
    icon: MapPin,
  },
//   {
//     title: 'Instagram',
//     value: '@achiedcloset',
//     description: 'Follow our latest drops, luxury picks, and updates.',
//     href: 'https://instagram.com',
//     icon: Instagram,
//   },
]

export function ContactInfoGrid() {
  return (
    <section className="bg-[#FAFAFA] py-16 md:py-20">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {contactItems.map((item, index) => {
            const Icon = item.icon

            const animationClass =
              index === 0
                ? 'fade-up'
                : index === 1
                  ? 'fade-up-delay-1'
                  : index === 2
                    ? 'fade-up-delay-2'
                    : index === 3
                      ? 'fade-up-delay-3'
                      : 'fade-up'

            const content = (
              <article
                className={`h-full rounded-[1.5rem] bg-white p-6 shadow-[0_12px_30px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1 ${animationClass}`}
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F8F3EC] text-[#B28A2E]">
                  <Icon size={24} />
                </div>

                <h3 className="mt-5 font-display text-2xl text-[#111111]">{item.title}</h3>
                <p className="mt-2 text-base font-semibold text-[#111111]">{item.value}</p>
                <p className="mt-3 text-sm leading-7 text-[#5f5f5f]">{item.description}</p>
              </article>
            )

            if (item.href === '#') {
              return <div key={item.title}>{content}</div>
            }

            return (
              <a
                key={item.title}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                className="block"
              >
                {content}
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}