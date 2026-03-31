import { Outlet } from 'react-router-dom'
import { Footer } from '../../components/common/Footer'
import { Navbar } from '../../components/common/Navbar'
import { WhatsAppFloat } from '../../components/common/WhatsAppFloat'
import { ScrollToTop } from '../../components/scrollTop'

export function RootLayout() {
  return (
    <div className="min-h-screen bg-[#fafaf6] text-[#111111]">
      <Navbar />
      <ScrollToTop />
      <main className="overflow-x-hidden">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}