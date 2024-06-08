import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between py-5 text-amber-900 container mx-auto'>
      <h1 className='text-[32px] font-bold'>Collers</h1>
      <div className='flex items-center gap-x-7 font-medium max-md:flex-col'>
        <Link href='#'>Products</Link>
        <Link href='#'>Solutions</Link>
        <Link href='#'>Pricing</Link>
        <Link href='#'>Resources</Link>
        <Link href='#'>Log In</Link>
        <Link href='#' passHref legacyBehavior>
          <button className='rounded-lg border-2 border-[#78350F] bg-transparent px-5 py-2'>Sign up now</button>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
