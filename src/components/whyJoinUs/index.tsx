import React from 'react'
import CustomImage from '../image'
import { motion } from 'framer-motion'

const list = [
  'Est et in pharetra magna adipiscing ornare aliquam.',
  'Tellus arcu sed consequat ac velit ut eu blandit.',
  'Ullamcorper ornare in et egestas dolor orci.'
]

const WhyJoinUs = () => {
  const variants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 }
  }
  return (
    <section id='whyJoinUs' className='py-8 text-slate-900 md:py-40'>
      <div className='container'>
        <div className='flex size-full items-center justify-between gap-x-10 gap-y-8 rounded-4xl bg-white px-5 py-2 drop-shadow-2xl max-lg:flex-col lg:p-20'>
          <div className='flex flex-col gap-y-7 max-lg:items-center max-lg:text-center'>
            <h1 className='-mb-3 text-[56px] font-extrabold'>Why join us</h1>
            <motion.ul
              className='flex list-none flex-col text-xl leading-9'
              variants={variants}
              transition={{ staggerChildren: 0.4, delayChildren: 0.5, type: 'spring', stiffness: 200 }}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true }}
            >
              {list.map((item, index) => (
                <motion.li key={index} className='flex items-center gap-2' variants={variants}>
                  <CustomImage src='icons/whyJoinUs/list-icon.svg' alt='list-icon' /> {item}
                </motion.li>
              ))}
            </motion.ul>
            <motion.button
              className='w-max rounded-lg border-2 border-amber-900 bg-transparent px-8 py-3 text-xl font-medium text-amber-900'
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.5, duration: 0.5, type: 'spring', stiffness: 200 }}
              viewport={{ once: true }}
            >
              Sign up now
            </motion.button>
          </div>
          <div className='relative'>
            <div className='flex flex-col rounded-3xl bg-white p-2 drop-shadow-xl'>
              <div className='flex gap-x-2 pl-5'>
                <span className='size-2 rounded-full bg-rose-600' />
                <span className='size-2 rounded-full bg-amber-400' />
                <span className='size-2 rounded-full bg-green-500' />
              </div>
              <CustomImage src='images/whyJoinUs/video.png' className='rounded-2xl' alt='Why join us' />
            </div>
            <CustomImage
              src='images/whyJoinUs/video-bg.svg'
              className='absolute -left-12 -top-[40%] -z-10 min-w-[135%] sm:-left-20 lg:-left-16 2xl:-left-16'
              alt='Why join us'
            />
            <span className='absolute -bottom-7 left-20 size-[85px] rounded-full bg-green-700/70' />
            <CustomImage
              src='icons/whyJoinUs/video-play.svg'
              className='absolute bottom-1/2 left-1/2 size-1/3 -translate-x-1/2 translate-y-1/2'
              alt='play'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyJoinUs
