import React from 'react'
import PageSidebar from './PageSidebar'
import Modifier from './Modifier'

const PageContainer = ({children, enablePageSidebar}) => {
  return (
    <div className='ml-20 flex'>
        <PageSidebar/>
        {children}
        <Modifier/>
    </div>
  )
}

export default PageContainer