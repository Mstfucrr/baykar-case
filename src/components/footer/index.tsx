import Link from 'next/link'
import React from 'react'
import CustomImage from '../image'

const FooterColumn = ({ title, links }: { title: string; links: string[] }) => {
  return (
    <div className='flex flex-col'>
      <h3 className='h-10 font-medium'>{title}</h3>
      <ul className='flex flex-col'>
        {links.map(link => (
          <li key={link}>
            <Link href={`/${link}`} className='flex h-12 items-center max-md:justify-center'>
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

const Footer = () => {
  const columns = [
    {
      title: 'Product',
      links: ['Pricing', 'Overview', 'Browse', 'Accessibility', 'Five']
    },
    {
      title: 'Solutions',
      links: ['Brainstorming', 'Ideation', 'Wireframing', 'Research', 'Design']
    },
    {
      title: 'Support',
      links: ['Contact Us', 'Developers', 'Documentation', 'Integrations', 'Reports']
    }
  ]
  return (
    <section id='footer' className='bg-slate-900 text-white'>
      <div className='container flex flex-col'>
        <div className='grid items-center gap-12 max-md:py-12 max-md:justify-items-center max-md:text-center md:grid-cols-4'>
          {columns.map(column => (
            <FooterColumn key={column.title} title={column.title} links={column.links} />
          ))}
          <div className='flex flex-col gap-y-2 py-12'>
            <h3 className='h-10 font-medium'>Get the App</h3>
            <div className='flex flex-col gap-4 gap-y-2 max-md:items-center'>
              <Link href='/' className='py-1'>
                <CustomImage src='/images/footer/appstore.svg' alt='appstore' />
              </Link>
              <Link href='/' className='py-1'>
                <CustomImage src='/images/footer/playstore.svg' alt='playstore' />
              </Link>
            </div>
            <h3 className='pb-3 pt-12 font-medium'>Follow Us</h3>
            <div className='flex gap-x-4'>
              <Link href='/' className='py-1'>
                <CustomImage src='/images/footer/youtube.svg' alt='youtube' />
              </Link>
              <Link href='/' className='py-1'>
                <CustomImage src='/images/footer/facebook.svg' alt='facebook' />
              </Link>
              <Link href='/' className='py-1'>
                <CustomImage src='/images/footer/twitter.svg' alt='twitter' />
              </Link>
              <Link href='/' className='py-1'>
                <CustomImage src='/images/footer/instagram.svg' alt='instagram' />
              </Link>
              <Link href='/' className='py-1'>
                <CustomImage src='/images/footer/linkedin.svg' alt='linkedin' />
              </Link>
            </div>
          </div>
        </div>
        <div className='flex py-9 max-md:flex-col gap-y-3 max-md:text-center items-center border-t border-slate-700'>
          <p className='flex-1'>Collers @ 2023. All rights reserved.</p>
          <div className='flex gap-8 py-3'>
            <Link href='/'>Terms</Link>
            <Link href='/'>Privacy</Link>
            <Link href='/'>Contact</Link>
            <Link href='/' className='flex gap-x-1'>
              <CustomImage src='/images/footer/world.svg' alt='world' />
              <span>EN</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer
