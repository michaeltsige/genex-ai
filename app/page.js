import dynamic from 'next/dynamic'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Contact from './components/Contact'
import Footer from './components/Footer'

const Pricing = dynamic(
  () => import('./components/Pricing'),
  { 
    loading: () => <div className="min-h-[500px] bg-gray-100 animate-pulse" />,
    ssr: false 
  }
)

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <Features />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  )
}