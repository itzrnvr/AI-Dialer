import React from 'react'
import PageContainer from '../../layouts/PageContainer'
import Header from '../../layouts/Header'
import HeaderCampaign from './components/HeaderCampaign'
import ModifierDialing from './components/modifiers/ModifierDialing'
import ModiferAddCampaign from './components/modifiers/ModiferAddCampaign'

const Campaign = () => {
  return (
    <PageContainer 
    enablePageSidebar={true} 
    sideBarAddNewText={"New Campaign"}
    sideBarAddNewDataHsOverlay={"#addCampaignModifier"}
    >
        <HeaderCampaign/>
        <div className='h-full flex justify-center items-center'>
          Lead Tables Shows Here, only admins are allowed to import
          
        </div>

        <ModifierDialing/>
        <ModiferAddCampaign/>
    </PageContainer>
  )
}

export default Campaign