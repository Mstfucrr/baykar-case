import React from 'react'

const MobileMenuIcon = ({ isMenuOpen }: { isMenuOpen: boolean }) => {
  return (
    <svg className='flex h-6 w-6 items-end' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
      {isMenuOpen ? (
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
      ) : (
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M16 6h-6M16 12h-10M16 18h-16' />
      )}
    </svg>
  )
}

export default MobileMenuIcon
