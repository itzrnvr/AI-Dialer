import React from 'react'

const Header = ({children}) => {
  return (
    <header className='h-48 w-full flex flex-col border-b border-gray-200 bg-white'>{children}</header>
  )
}

export default Header