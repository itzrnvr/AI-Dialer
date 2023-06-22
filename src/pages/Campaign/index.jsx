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
          Lead Tables Shows Here, only admins are allowed to import
          
        </div>

        <ModifierDialing/>
    </PageContainer>
  )
}

export default Campaign