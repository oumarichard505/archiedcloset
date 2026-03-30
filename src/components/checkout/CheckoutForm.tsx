import { useState } from 'react'

export type CheckoutFormValues = {
  fullName: string
  phone: string
  location: string
  note: string
}

type CheckoutFormProps = {
  onSubmit: (values: CheckoutFormValues) => void
}

export function CheckoutForm({ onSubmit }: CheckoutFormProps) {
  const [values, setValues] = useState<CheckoutFormValues>({
    fullName: '',
    phone: '',
    location: '',
    note: '',
  })

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target

    setValues((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    onSubmit(values)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[1.5rem] bg-white p-6 shadow-[0_12px_30px_rgba(0,0,0,0.05)] md:p-8"
    >
      <div className="grid gap-6">
        <div>
          <label
            htmlFor="fullName"
            className="mb-2 block text-sm font-medium text-[#111111]"
          >
            Full Name
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            value={values.fullName}
            onChange={handleChange}
            placeholder="Enter your full name"
            className="w-full rounded-xl border border-black/10 bg-[#FAFAFA] px-4 py-3 text-sm text-[#111111] outline-none transition-colors placeholder:text-[#8a8a8a] focus:border-[#D4AF37]"
            required
          />
        </div>

        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-medium text-[#111111]">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={values.phone}
            onChange={handleChange}
            placeholder="e.g. 07XXXXXXXX"
            className="w-full rounded-xl border border-black/10 bg-[#FAFAFA] px-4 py-3 text-sm text-[#111111] outline-none transition-colors placeholder:text-[#8a8a8a] focus:border-[#D4AF37]"
            required
          />
        </div>

        <div>
          <label
            htmlFor="location"
            className="mb-2 block text-sm font-medium text-[#111111]"
          >
            Delivery Location
          </label>
          <input
            id="location"
            name="location"
            type="text"
            value={values.location}
            onChange={handleChange}
            placeholder="Enter your location"
            className="w-full rounded-xl border border-black/10 bg-[#FAFAFA] px-4 py-3 text-sm text-[#111111] outline-none transition-colors placeholder:text-[#8a8a8a] focus:border-[#D4AF37]"
            required
          />
        </div>

        <div>
          <label htmlFor="note" className="mb-2 block text-sm font-medium text-[#111111]">
            Note (Optional)
          </label>
          <textarea
            id="note"
            name="note"
            value={values.note}
            onChange={handleChange}
            rows={5}
            placeholder="Any extra delivery or order notes"
            className="w-full resize-none rounded-xl border border-black/10 bg-[#FAFAFA] px-4 py-3 text-sm text-[#111111] outline-none transition-colors placeholder:text-[#8a8a8a] focus:border-[#D4AF37]"
          />
        </div>

        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-xl bg-[#111111] px-6 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#D4AF37] hover:text-[#111111]"
        >
          Place Order
        </button>
      </div>
    </form>
  )
}