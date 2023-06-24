import React from 'react'

const ModifierHeader = ({
    children, 
    title = 'modifier header'
}) => {
  return (
    <div className='text-lg 
    flex-none
    h-16 
    w-full 
    border-b 
    flex 
    items-center 
    px-6 
    font-medium'>
    {title}
    </div>
  )
}

export default ModifierHeader