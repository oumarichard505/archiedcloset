type SectionHeadingProps = {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
}: SectionHeadingProps) {
  const alignment = align === 'center' ? 'text-center mx-auto' : 'text-left'

  return (
    <div className={`max-w-3xl ${alignment}`}>
      {eyebrow && (
        <p className="fade-up mb-3 text-sm font-medium uppercase tracking-[0.3em] text-[#B28A2E]">
          {eyebrow}
        </p>
      )}

      <h2 className="fade-up-delay-1 font-display text-4xl leading-tight text-[#111111] md:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="fade-up-delay-2 mt-4 text-base leading-8 text-[#5f5f5f] md:text-lg">
          {description}
        </p>
      )}
    </div>
  )
}