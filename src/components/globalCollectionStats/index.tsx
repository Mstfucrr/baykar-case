import React from 'react'
import CustomImage from '../image'

const GlobalCollectionStats = () => {
  return (
    <section id='globalCollectionStats' className='relative h-[720px] bg-amber-900 py-8 text-white'>
      <div className='container relative flex h-full items-center justify-center'>
        <div className='relative z-10 flex flex-col gap-2 text-center font-extrabold'>
          <h1 className='text-5xl md:text-8xl'>11,658,467</h1>
          <h3 className='text-3xl max-md:font-bold md:text-6xl'>Shoes Collected</h3>
        </div>
      </div>
      <CustomImage
        src='images/globalCollectionStats/map.svg'
        className='absolute left-[13%] top-1/2 z-0 min-w-[1049px] -translate-y-1/2 self-center'
        alt='background'
      />

      <div className='absolute left-[14%] top-[4%] flex w-64 flex-col items-center gap-y-0'>
        <CustomImage
          src='images/globalCollectionStats/Picture.png'
          className='z-20 size-full overflow-visible rounded-2xl object-none'
          alt='Picture'
          height={200}
        />
        <div className='relative'>
          <div className='relative z-10 -mt-5 w-64 rounded-md bg-slate-200 p-4 pb-2 text-sm text-slate-900 drop-shadow-xl'>
            <p className='font-bold'>
              Emma Simpson collected one pair of<b> Cool Shoes</b>
            </p>
          </div>
          <div className='absolute -bottom-6 left-1/2 -z-0 flex -translate-x-1/2 flex-col'>
            <div className='-bottom-2 size-0 border-[15px] border-b-0 border-slate-200 border-x-transparent drop-shadow-xl' />
            <div className='-z-10 -mt-4 size-8 rounded-full border-4 border-lime-400 bg-lime-200'></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GlobalCollectionStats
