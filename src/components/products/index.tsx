import React from 'react'
import CustomImage from '../image'
import { motion } from 'framer-motion'

type ProductCardProps = {
  title: string
  description: string
  image: string
}

const ProductCard = ({ title, description, image }: ProductCardProps) => {
  return (
    <div
      className='max-w-sm flex-col overflow-hidden rounded-xl bg-slate-900'
      style={{
        boxShadow: '0px 25px 50px -12px rgba(255, 255, 255, 0.25)'
      }}
    >
      <CustomImage src={image} alt={title} className='h-56 w-full object-cover' />
      <div className='flex flex-col gap-y-8 p-8'>
        <div className='flex flex-col gap-y-4'>
          <h2 className='text-2xl font-bold'>{title}</h2>
          <p className='text-lg'>{description}</p>
        </div>
        <div className='flex items-center justify-center'>
          <button className='flex w-full items-center justify-center rounded-lg border-2 border-white bg-transparent py-2.5 text-xl font-medium'>
            <CustomImage src='/icons/products/cart-icon.svg' alt='Arrow right' className='h-4 w-4' />
            <span className='ml-2'>Buy now</span>
          </button>
        </div>
      </div>
    </div>
  )
}

const Products = () => {
  const variants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1 }
  }
  return (
    <section id='products' className='bg-slate-900 py-8 md:py-20'>
      <div className='container flex w-full flex-col gap-y-8 text-white md:gap-y-20'>
        {/* header */}
        <div className='flex items-center justify-between gap-y-8 max-md:flex-col'>
          <h1 className='text-5xl font-extrabold max-md:text-[34px] max-md:font-bold'>The best of the best</h1>
          <button className='rounded-lg border-2 border-white bg-transparent px-7 py-2.5 text-xl'>Sign up now</button>
        </div>
        {/* products */}
        <div className='z-10 flex w-full items-center justify-evenly gap-x-12 gap-y-8 max-xl:flex-wrap'>
          <div className='relative'>
            <ProductCard
              title='Title'
              description='Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.'
              image='/images/products/product-1.png'
            />
            <motion.span
              className='absolute -left-8 bottom-4 z-[-1] size-72 rounded-6xl bg-pink-700'
              variants={variants}
              initial='hidden'
              whileInView='visible'
              transition={{ delay: 0.1, duration: 0.3 }}
            />
          </div>
          <div className='relative'>
            <ProductCard
              title='Title'
              description='Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.'
              image='/images/products/product-2.png'
            />
            <motion.span
              className='absolute -left-6 -top-6 z-[-1] size-40 rounded-6xl bg-blue-800/90'
              variants={variants}
              initial='hidden'
              animate='visible'
              transition={{ delay: 0.2, duration: 0.3 }}
            />
            <motion.span
              className='absolute -right-4 bottom-6 z-[-1] size-32 rounded-4xl bg-amber-700'
              variants={variants}
              initial='hidden'
              animate='visible'
              transition={{ delay: 0.4, duration: 0.3 }}
            />
          </div>
          <div className='relative'>
            <ProductCard
              title='Title'
              description='Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.'
              image='/images/products/product-3.png'
            />
            <motion.span
              className='absolute -right-6 top-8 z-[-1] size-56 rounded-6xl bg-green-700'
              variants={variants}
              initial='hidden'
              animate='visible'
              transition={{ delay: 0.3, duration: 0.3 }}
            />
            <motion.span
              className='absolute -bottom-8 left-1/2 z-[-1] size-52 -translate-x-1/2 rounded-6xl bg-fuchsia-700 max-sm:hidden'
              variants={variants}
              initial='hidden'
              animate='visible'
              transition={{ delay: 0.1, duration: 0.3 }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Products
