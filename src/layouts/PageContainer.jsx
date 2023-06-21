import React from 'react'
import PageSidebar from './PageSidebar'

const PageContainer = ({children, enablePageSidebar}) => {
  return (
    <div className='ml-24 flex'>
        <PageSidebar/>
        {children}
    </div>
  )
}

export default PageContainer