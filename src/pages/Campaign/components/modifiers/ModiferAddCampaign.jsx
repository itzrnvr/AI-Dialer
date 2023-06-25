import React, { useEffect, useState } from 'react'
import Modifier from '../../../../layouts/Modifier'
import ModfierFooter from '../../../../layouts/Modifier/components/ModfierFooter'
import ModifierHeader from '../../../../layouts/Modifier/components/ModifierHeader'
import ModifierContainer from '../../../../layouts/Modifier/components/ModifierContainer'
import OutlineButton from '../../../../components/OutlineButton'
import ElementList from '../../../../components/ElementList'
import SimpleTextInput from '../../../../components/Inputs/SimpleTextInput'
import Dropdown from '../../../../components/Inputs/Dropdown'
import DropdownItem from '../../../../components/Inputs/DropdownItem'
import AddCategoryDialog from '../dialogs/AddCategoryDialog'
import getRandomID from '../../../../utils/getRandomID'

const ModiferAddCampaign = ({
  onCreateNewCampaign,
}) => {
  const data = [
      {
          label: "Campaign Name",
          placeholder: "My New Campaign",
          type: "text", 
          name: 'campaignName',
      },
  ]

  const DropDownData = [
      {
          label: "Active",
          'hasDivider': false,
          'id': getRandomID(),
      },
      {
        label: "Expired",
        'hasDivider': false,
        'id': getRandomID(),
    },
  ]

  const [campaignName, setCampaignName] = useState('')
  const [categories, setCategories] = useState(DropDownData)
  const [currentCategory, setCurrentCategory] = useState(categories[0].label)

  function createNewCategory(name){
    setCategories([ ...categories, {
      label: name,
      hasDivider: false,
      id: getRandomID()
    }])
  }

  useEffect(()=> {
    setCurrentCategory(categories[categories.length - 1].label)
  }, [categories])

  function createNewCampaign(){
    onCreateNewCampaign({
      campaignName: campaignName,
      category: currentCategory
    })
  }

  return (
    <>
      <Modifier id="addCampaignModifier">
      <ModifierHeader title='New Campaign'/>
      <ModifierContainer>
        
      <div className='space-y-6'>
      
      <SimpleTextInput
        label={"Campaign Name"}
        placeholder="My New Campaign"
        value={campaignName}
        onChange={(e) => setCampaignName(e.target.value)}
      />
      
      <Dropdown
        actionItems={[
          <DropdownItem 
                dataHsOverlay={`#addCategoryDialog`}
                label={`Create Category`} 
                hasDivider={true} 
            />
        ]}
        placeholder='Select Category'
        data = {categories}
        currentSelection={currentCategory}
        child= { (item, index) => (
            <DropdownItem 
                label={item.label} 
                hasDivider={item.hasDivider} 
                id={item.id}
                onClick={(id, label) => {
                  setCurrentCategory(label)
                }}
            />
        )}
        />
      </div>

      </ModifierContainer>
      <ModfierFooter>
        <OutlineButton dataHsOverlay={"#addCampaignModifier"} remixIcon='ri-close-line' text='Cancel'/>
        <OutlineButton dataHsOverlay={"#addCampaignModifier"} onClick={()=> createNewCampaign()} variant={"primaryStrong"} remixIcon='ri-add-line' text='Create'/>
      </ModfierFooter>
    </Modifier>
    <AddCategoryDialog onCreate={(name)=> createNewCategory(name)} />
    </>
  )
}

export default ModiferAddCampaign