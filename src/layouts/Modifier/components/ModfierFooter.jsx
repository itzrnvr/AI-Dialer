import React from 'react'
import OutlineButton from '../../../components/OutlineButton'

const ModfierFooter = ({
  children
}) => {
  return (
    <div
      className='
      flex-none
      h-24
      '
    >
      <div className='border-t flex w-full justify-end pr-6 items-center h-full pb-2 space-x-4'>
       {children}
      </div>

    </div>
  )
}

export default ModfierFooter