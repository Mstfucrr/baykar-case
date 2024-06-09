import Link from 'next/link'
import React from 'react'
import CustomImage from '@/components/image'
import { motion } from 'framer-motion'

type HeroCardProps = {
  title: string
  description: string
  icon: string
  iconRectangle: string
}

const HeroCard = ({ title, description, icon, iconRectangle }: HeroCardProps) => {
  return (
    <div className='relative flex max-w-96 flex-col gap-2 max-md:items-center max-md:text-center'>
      <div className='relative'>
        <CustomImage src={icon} alt='hero-icon' width={64} height={64} />
        <CustomImage
          src={iconRectangle}
          alt='hero-icon'
          width={55}
          className='absolute -top-3 left-6 -z-10'
          height={55}
        />
      </div>

      <h2 className='text-xl font-medium'>{title}</h2>
      <p className='text-md'>{description}</p>
    </div>
  )
}

const Hero = () => {
  return (
    <section id='hero' className='relative py-20'>
      <CustomImage
        src='/images/hero/hero-background.svg'
        alt='Hero Background'
        className='absolute bottom-0 right-0 -z-10 w-screen min-w-[1400px] object-cover'
        width={1920}
      />
      <div className='container mx-auto flex flex-col gap-y-14 text-slate-900 md:gap-y-20'>
        <div className='flex items-center justify-between gap-x-10 gap-y-20 max-lg:flex-col'>
          <div className='flex basis-2/3 flex-col gap-y-5'>
            <motion.h1
              className='text-7xl font-extrabold'
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              Collectible Sneakers
            </motion.h1>
            <motion.p
              className='text-lg'
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              Sit elit feugiat turpis sed integer integer accumsan turpis. Sed suspendisse nec lorem mauris. Pharetra,
              eu imperdiet ipsum ultrices amet.
            </motion.p>
            <motion.div
              className='flex items-center gap-x-6 font-medium text-amber-900'
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <Link href='#' className='rounded-lg border-2 border-amber-900 bg-transparent px-7 py-2 text-xl'>
                Sign up now
              </Link>
              <Link href='#' className='flex gap-x-3'>
                <CustomImage src='/icons/hero/hero-watch.svg' alt='Watch' width={20} height={20} />
                <span className='font-medium'>Watch Demo</span>
              </Link>
            </motion.div>
          </div>
          <div className='relative flex w-full basis-1/3 items-center justify-center max-sm:p-5'>
            <motion.div className='max-xs:w-full relative h-[372px] w-[367px] rounded-[50px] bg-amber-400 max-sm:size-[300px]'
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <motion.img
                src='/images/hero/hero-sneaker.png'
                alt='Sneaker'
                className='absolute -left-9 bottom-10 min-w-[130%] object-contain'
                initial={{ rotate: -15 }}
                animate={{ rotate: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              />
            </motion.div>
          </div>
        </div>
        <div className='grid justify-center gap-x-12 gap-y-8 md:grid-cols-3'>
          <HeroCard
            title='Track your collection'
            description='Sit elit feugiat turpis sed integer integer accumsan turpis. Sed suspendisse nec lorem mauris.'
            icon='/icons/hero/icon1.svg'
            iconRectangle='/icons/hero/icon1-rectangle.svg'
          />
          <HeroCard
            title='Get notified'
            description='Sit elit feugiat turpis sed integer integer accumsan turpis. Sed suspendisse nec lorem mauris.'
            icon='/icons/hero/icon2.svg'
            iconRectangle='/icons/hero/icon2-rectangle.svg'
          />
          <HeroCard
            title='Discover new sneakers'
            description='Sit elit feugiat turpis sed integer integer accumsan turpis. Sed suspendisse nec lorem mauris.'
            icon='/icons/hero/icon3.svg'
            iconRectangle='/icons/hero/icon3-rectangle.svg'
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
