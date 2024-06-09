"use client"
import CollectionShowcase from '@/components/collectionShowcase'
import Footer from '@/components/footer'
import GlobalCollectionStats from '@/components/globalCollectionStats'
import Hero from '@/components/hero'
import Navbar from '@/components/navbar'
import Products from '@/components/products'
import Testimonials from '@/components/testimonials'
import WhyJoinUs from '@/components/whyJoinUs'

export default function Home() {
  return (
    <div className='flex flex-col justify-center'>
      <Navbar />
      <Hero />
      <Products />
      <WhyJoinUs />
      <Testimonials />
      <CollectionShowcase />
      <GlobalCollectionStats />
      <Footer />
    </div>
  )
}
