import React, { useState } from 'react'
import Modifier from '../../../../layouts/Modifier'
import ModfierFooter from '../../../../layouts/Modifier/components/ModfierFooter'
import ModifierHeader from '../../../../layouts/Modifier/components/ModifierHeader'
import ModifierContainer from '../../../../layouts/Modifier/components/ModifierContainer'
import OutlineButton from '../../../../components/OutlineButton'
import ElementList from '../../../../components/ElementList'
import SimpleTextInput from '../../../../components/Inputs/SimpleTextInput'
import Dropdown from '../../../../components/Inputs/Dropdown'
import DropdownItem from '../../../../components/Inputs/DropdownItem'

const ModiferAddCampaign = () => {
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
          label: "Campaign Name",
          'hasDivider': false,
          'id': 0
      },
      {
          label: "Create Category",
          'hasDivider': true,
          'id': 2
      },
  ]

  const [campaignName, setCampaignName] = useState('')
  const [category, setCategory] = useState(DropDownData[0].label)
  const [isNewCategoryInputVisible, setNewCategoryInputVisible] = useState(false)

  return (
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
        placeholder='Select Category'
        data = {DropDownData}
        currentSelection={category}
        child= { (item, index) => (
            <DropdownItem 
                dataHsOverlay={item.id == 2 && `#hs-vertically-centered-modal`}
                label={item.label} 
                hasDivider={item.hasDivider}
                id={item.id}
                onClick={(id, label) => {
                    setCategory(label)
                }}
            />
        )}
        />

        <SimpleTextInput 
          label={"Create New Category"}
          placeholder="New Category"
        />
          
      </div>

      </ModifierContainer>
      <ModfierFooter>
        <OutlineButton  remixIcon='ri-close-line' text='Cancel'/>
        <OutlineButton variant={"primaryStrong"} remixIcon='ri-add-line' text='Create'/>
      </ModfierFooter>
    </Modifier>
  )
}

export default ModiferAddCampaign