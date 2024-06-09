import React, { useState } from 'react'
import NavbarLinks from './navbarLinks'
import MobileMenuIcon from './mobileMenuIcon'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleMenu = () => setIsMenuOpen(prev => !prev)

  return (
    <nav className='container mx-auto flex items-center justify-between py-5 text-amber-900'>
      <h1 className='text-[32px] font-bold'>Collers</h1>
      <div className='max-md:hidden'>
        <NavbarLinks />
      </div>

      {/* mobile */}
      <div className='md:hidden'>
        <button onClick={handleMenu}>
          <MobileMenuIcon isMenuOpen={isMenuOpen} />
        </button>
        {isMenuOpen && <NavbarLinks />}
      </div>
    </nav>
  )
}

export default Navbar
