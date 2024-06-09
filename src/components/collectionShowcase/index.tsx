import React, { useState } from 'react'
import { list } from './data'
import CustomImage from '../image'

const CollectionShowcase = () => {
  const [activeListElementId, setActiveListElementId] = useState(1)

  const handleListElementActive = (id: number) => setActiveListElementId(id)

  return (
    <section id='collectionShowcase' className='relative py-8 pb-32 text-slate-900 z-10'>
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
            <div className='col-span-7 max-lg:overflow-x-auto overflow-y-hidden lg:col-span-2'>
              <ul className='flex min-w-max gap-4 max-lg:py-2 lg:flex-col'>
                {list.map(item => (
                  <li
                    key={item.id}
                    className={`flex w-full min-w-max items-center justify-between rounded-xl transition-all duration-300 hover:shadow-md ${activeListElementId === item.id ? 'shadow-md' : ''}`}
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
                  </li>
                ))}
              </ul>
            </div>
            <div className='relative col-span-7 flex w-full lg:col-span-5'>
              {/* Picture1 */}
              <div className='flex h-min w-2/3 flex-col rounded-3xl bg-white p-2 drop-shadow-xl sm:w-[85%]'>
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
              </div>
              {/* Picture2 */}
              <div className='absolute left-[10%] top-1/4 flex h-min w-2/3 flex-col rounded-3xl bg-white p-2 drop-shadow-xl sm:w-[85%]'>
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
              </div>
              {/* Picture3 */}
              <div className='absolute right-[15%] top-1/2 w-1/4 rounded-3xl bg-white p-2 drop-shadow-xl sm:-right-2'>
                <CustomImage
                  src='images/collectionShowcase/Picture3.png'
                  className='rounded-2xl object-none'
                  alt='picture3'
                />
              </div>
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
