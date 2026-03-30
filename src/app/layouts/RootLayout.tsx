import { Outlet } from 'react-router-dom'
import { Footer } from '../../components/common/Footer'
import { Navbar } from '../../components/common/Navbar'
import { WhatsAppFloat } from '../../components/common/WhatsAppFloat'

export function RootLayout() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#111111]">
      <Navbar />
      <main className="overflow-x-hidden">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}