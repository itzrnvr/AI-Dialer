import React from 'react'
import PageContainer from '../../layouts/PageContainer'
import Header from '../../layouts/Header'
import HeaderCampaign from './components/HeaderCampaign'
import ModifierDialing from './components/modifiers/ModifierDialing'

const Campaign = () => {
  return (
    <PageContainer enablePageSidebar={true}>
        <HeaderCampaign/>
        <div className='h-full flex justify-center items-center'>
          This is campaigns page.
          <button type="button" className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800" data-hs-overlay="#hs-overlay-right">
              Toggle right offcanvas
          </button>
        </div>

        <ModifierDialing/>
    </PageContainer>
  )
}

export default Campaign