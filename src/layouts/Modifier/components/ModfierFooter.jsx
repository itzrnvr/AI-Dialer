import React from 'react'
import OutlineButton from '../../../components/OutlineButton'

const ModfierFooter = ({
  children
}) => {
  return (
    <div
      className='
      flex-none
      h-16
      '
    >
      <div className='flex w-full justify-end pr-6 space-x-4'>
       {children}
      </div>

    </div>
  )
}

export default ModfierFooter