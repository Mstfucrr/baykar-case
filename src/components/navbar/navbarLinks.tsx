import Link from 'next/link'
import React from 'react'

const NavbarLinks = () => {
  return (
    <div className='right-0 z-20 flex items-center gap-x-7 gap-y-2 font-medium max-md:absolute max-md:h-screen max-md:flex-col max-md:bg-amber-50 max-md:px-10'>
      <Link href='#'>Products</Link>
      <Link href='#'>Solutions</Link>
      <Link href='#'>Pricing</Link>
      <Link href='#'>Resources</Link>
      <Link href='#'>Log In</Link>
      <Link href='#' className='rounded-lg border-2 border-[#78350F] bg-transparent px-5 py-2'>
        Sign up now
      </Link>
    </div>
  )
}

export default NavbarLinks
