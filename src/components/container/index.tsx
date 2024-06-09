import React from 'react'

type ContainerProps = {
  children: React.ReactNode
}
const Container = ({ children }: ContainerProps) => {
  return (
    <div className='mx-auto size-full relative flex justify-center overflow-hidden'>
      <div className='w-full'>{children}</div>
    </div>
  )
}

export default Container
