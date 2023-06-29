import React from 'react'
import PageContainer from '../../layouts/PageContainer'
import Header from '../../layouts/Header'
import HeaderCampaign from './components/HeaderCampaign'
import ModifierDialing from './components/modifiers/ModifierDialing'
import ModiferAddCampaign from './components/modifiers/ModiferAddCampaign'
import Dialog from '../../layouts/Dialog'
import AddCategoryDialog from './components/dialogs/AddCategoryDialog'
import TableView from '../../components/TableView'

const Campaign = () => {
  return (
    <PageContainer 
    enablePageSidebar={true} 
    sideBarAddNewText={"New Campaign"}
    sideBarAddNewDataHsOverlay={"#addCampaignModifier"}
    >
        <HeaderCampaign/>
        <div className='h-full mt-4 flex flex-col relative'>
          <TableView/>
          
        </div>

        <ModifierDialing/>
        <ModiferAddCampaign onCreateNewCampaign = {(newCampaignData) => console.log(newCampaignData)}/>
    </PageContainer>
  )
}

export default Campaign