import React, { useState } from 'react'
import { list } from './data'
import CustomImage from '../image'
import { motion } from 'framer-motion'

const CollectionShowcase = () => {
  const [activeListElementId, setActiveListElementId] = useState(1)

  const handleListElementActive = (id: number) => setActiveListElementId(id)
  const variants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 }
  }
  return (
    <section id='collectionShowcase' className='relative z-10 py-8 pb-32 text-slate-900'>
      <div className='container md:py-40'>
        <div className='flex flex-col gap-y-8 md:gap-y-20'>
          {/* Title & Description */}
          <div className='flex flex-col gap-y-8'>
            <h1 className='text-4xl font-bold md:text-5xl md:font-extrabold'>Grow your collection</h1>
            <p className='text-lg'>
              Enim neque massa porta adipiscing elit. Sem libero id faucibus nibh amet dictum pellentesque sed. Eu non
              turpis risus odio sapien, fames sit rhoncus. Nec magna sed interdum sit purus tellus. Et volutpat proin
              neque placerat at bibendum quam tellus.
            </p>
          </div>
          <div className='grid gap-x-20 gap-y-8 lg:grid-cols-7'>
            <div className='col-span-7 overflow-hidden max-lg:overflow-x-auto lg:col-span-2'>
              <motion.ul
                className='flex min-w-max gap-4 max-lg:py-2 lg:flex-col'
                variants={variants}
                transition={{ staggerChildren: 0.3, delayChildren: 0.5, type: 'spring', stiffness: 200 }}
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true }}
              >
                {list.map(item => (
                  <motion.li
                    variants={variants}
                    key={item.id}
                    className={`flex w-full min-w-max items-center justify-between rounded-xl transition-shadow duration-300 hover:shadow-md ${activeListElementId === item.id ? 'shadow-md' : ''}`}
                  >
                    <button
                      className='flex w-full items-center gap-x-3 px-4 py-3'
                      onClick={() => handleListElementActive(item.id)}
                    >
                      <CustomImage src={item.icon} alt='list-icon' />
                      <span className='text-xl'>{item.title}</span>
                    </button>
                    {activeListElementId === item.id && (
                      <CustomImage src='icons/collectionShowcase/arrow-right.svg' className='mr-3' alt='arrow-right' />
                    )}
                  </motion.li>
                ))}
              </motion.ul>
            </div>
            <div className='relative col-span-7 flex w-full lg:col-span-5'>
              {/* Picture1 */}
              <motion.div
                className='flex h-min w-2/3 flex-col rounded-3xl bg-white p-2 drop-shadow-xl sm:w-[85%]'
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <div className='flex gap-x-2 py-2 pl-3'>
                  <span className='size-2 rounded-full bg-rose-600' />
                  <span className='size-2 rounded-full bg-amber-400' />
                  <span className='size-2 rounded-full bg-green-500' />
                </div>
                <CustomImage
                  src='images/collectionShowcase/Picture.png'
                  className='-mt-2 rounded-2xl object-cover lg:-mt-4'
                  alt='picture1'
                />
              </motion.div>
              {/* Picture2 */}
              <motion.div
                className='absolute left-[10%] top-1/4 flex h-min w-2/3 flex-col rounded-3xl bg-white p-2 drop-shadow-xl sm:w-[85%]'
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <div className='flex gap-x-2 py-2 pl-3'>
                  <span className='size-2 rounded-full bg-rose-600' />
                  <span className='size-2 rounded-full bg-amber-400' />
                  <span className='size-2 rounded-full bg-green-500' />
                </div>
                <CustomImage
                  src='images/collectionShowcase/Picture2.png'
                  className='-mt-2 rounded-2xl object-cover lg:-mt-4'
                  alt='picture2'
                />
              </motion.div>
              {/* Picture3 */}
              <motion.div className='absolute right-[15%] top-1/2 w-1/4 rounded-3xl bg-white p-2 drop-shadow-xl sm:-right-2'
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                <CustomImage
                  src='images/collectionShowcase/Picture3.png'
                  className='rounded-2xl object-none'
                  alt='picture3'
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <CustomImage
        src='images/collectionShowcase/bg-waves.svg'
        className='absolute -bottom-[3%] left-0 -z-10 min-w-full overflow-visible object-cover'
        alt='CollectionShowcase-bg'
      />
    </section>
  )
}

export default CollectionShowcase
