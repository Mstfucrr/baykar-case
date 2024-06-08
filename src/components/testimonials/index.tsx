import React from 'react'
import CustomImage from '../image'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import { ITestimonialCard, testimonialsData } from './data'
import { Autoplay, Navigation } from 'swiper/modules'
import SwiperCore from 'swiper'

interface TestimonialCardProps extends ITestimonialCard {}

const TestimonialCard = ({ testimonial }: { testimonial: TestimonialCardProps }) => {
  return (
    <div className='flex h-full flex-col justify-between gap-y-4'>
      <div className='flex gap-x-2 text-slate-600'>
        <CustomImage src={testimonial.icon} width={32} height={32} alt='icon' />
        <h2 className='text-2xl font-bold'>{testimonial.name}</h2>
      </div>
      <p className='text-lg'>{testimonial.message}</p>
      <div className='flex items-center gap-x-5'>
        <CustomImage src={testimonial.userImage} width={48} height={48} alt='user' className='rounded-full' />
        <div>
          <h3 className='text-xl font-bold'>{testimonial.userName}</h3>
          <p className='text-lg'>{testimonial.userRole}</p>
        </div>
      </div>
    </div>
  )
}

SwiperCore.use([Navigation, Autoplay])

const Testimonials = () => {
  const swiper = useSwiper()
  const handleNext = () => {
    if (swiper) swiper.slideNext()
  }
  const handlePrev = () => {
    if (swiper) swiper.slidePrev()
  }

  return (
    <section id='testimonials' className='py-40 text-slate-900'>
      <div className='relative flex flex-col gap-y-10'>
        <div className='container flex justify-between max-sm:justify-center'>
          <h1 className='text-3xl font-extrabold max-sm:text-center md:text-5xl'>Because they love us</h1>
          <div className='flex items-center gap-x-5 max-sm:hidden'>
            <button
              className='swiper-button-prev static mt-0 w-auto after:hidden'
              onClick={handlePrev}
              aria-label='swiper-prev'
            >
              <CustomImage src='icons/testimonials/swiper-back.svg' width={48} height={48} alt='swiper-back' />
            </button>
            <button
              className='swiper-button-next static mt-0 w-auto after:hidden'
              onClick={handleNext}
              aria-label='swiper-next'
            >
              <CustomImage
                src='icons/testimonials/swiper-back.svg'
                className='rotate-180 transform'
                alt='swiper-next'
                width={48}
                height={48}
              />
            </button>
          </div>
        </div>

        <div className='absolute top-16 z-0 size-full md:px-10'>
          <div className='h-72 bg-amber-200 max-sm:h-64 2xl:h-64' />
        </div>
        <div className='relative'>
          <Swiper
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev'
            }}
            spaceBetween={24}
            loop
            breakpoints={{
              0: {
                slidesPerView: 1.2
              },
              650: {
                slidesPerView: 2.4
              },
              1024: {
                slidesPerView: 3
              },
              1400: {
                slidesPerView: 4
              }
            }}
          >
            {testimonialsData.map((testimonial, index) => (
              <SwiperSlide className='!h-full rounded-3xl bg-white p-6 md:p-8' key={index}>
                <TestimonialCard testimonial={testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
