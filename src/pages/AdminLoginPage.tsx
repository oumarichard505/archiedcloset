import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ADMIN_PASSWORD = 'admin123' // In a real app, this would be secure

export function AdminLoginPage() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === ADMIN_PASSWORD) {
      localStorage.setItem('admin-auth', 'true')
      navigate('/admin/products')
    } else {
      setError('Invalid password')
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#FAFAFA]">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-lg">
        <h1 className="mb-6 text-center text-2xl font-bold text-[#111111]">
          Admin Login
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-[#111111]"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-[#D4AF37] focus:outline-none focus:ring-[#D4AF37]"
              required
            />
          </div>
          {error && (
            <p className="mb-4 text-sm text-red-600">{error}</p>
          )}
          <button
            type="submit"
            className="w-full rounded-md bg-[#111111] px-4 py-2 text-white hover:bg-[#D4AF37] hover:text-[#111111] focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:ring-offset-2"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  )
}