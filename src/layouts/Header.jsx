import React from 'react'

const Header = ({children}) => {
  return (
    <header className='w-full flex flex-col'>{children}</header>
  )
}

export default Header