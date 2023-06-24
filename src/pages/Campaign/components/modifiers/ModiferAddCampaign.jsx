import React from 'react'
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
      }
  ]

  const DropDownData = [
      {
          label: "Campaign Name",
          'hasDivider': false,
          'id': 0
      },
      {
          label: "Bo",
          'hasDivider': false,
          'id': 1
      },
      {
          label: "Campaign Name",
          'hasDivider': true,
          'id': 2
      },
  ]

  return (
    <Modifier id="addCampaignModifier">
      <ModifierHeader title='New Campaign'/>
      <ModifierContainer>
        
      <div className='space-y-6'>
        <ElementList 
          onChangeSate={(state) => console.log(state)}
          data={data}
          child = {(item, state) => (
              (<SimpleTextInput
                  label={item.label}
                  placeholder={item.placeholder}
                  onChange={(e) => state(e.target.value)}
              />)
          )} 
          />

          <div>
      
            <Dropdown
              placeholder='Select Category'
              data = {DropDownData}
              child= { (item, state, index) => (
                  <DropdownItem 
                      label={item.label} 
                      hasDivider={item.hasDivider}
                      id={item.id}
                      onClick={(id, label) => {
                          state(id, label)
                      }}
                  />
              )}
              />
          </div>
          
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