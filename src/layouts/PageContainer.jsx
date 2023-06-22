import React from 'react'
import PageSidebar from './PageSidebar'
import Modifier from './Modifier'
import ModifierDialing from '../pages/Campaign/components/modifiers/ModifierDialing'
import { Tooltip } from 'react-tooltip'

const PageContainer = ({children, enablePageSidebar}) => {
  return (
    <div className='ml-20 h-screen  flex  bg-[rgb(248,249,250)]'>
        <Tooltip id="my-tooltip" className='z-[200]' />
        <PageSidebar/>
          <main className='h-screen w-full flex flex-col'>

            {children}
          </main>
    
    </div>
  )
}

export default PageContainer