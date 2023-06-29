import React from 'react'
import Header from '../../../layouts/Header'
import BreadCrumb from './BreadCrumb'
import OutlineButton from '../../../components/OutlineButton'
import InputHeader from './InputHeader'


const HeaderCampaign = () => {
  return (
    <Header>
      <div className='px-4 flex space-y-6 flex-col h-full'>

        <div className='flex justify-between'>
          <div className='flex mt-8 ml-2'>
            <BreadCrumb className=""/>
            <div className='mt-0.5 ml-4'>
              <span className='ri-settings-4-line ri-lg py-2.5 px-2.5 hover:bg-gray-100 rounded-full'></span>
            </div>
          </div>
          <div className='mt-6 flex'>
            <OutlineButton dataHsOverlay={"#addCampaignModifier"} className={"mx-2.5"} remixIcon={"ri-add-line"} text={"Add New"}/>
            <OutlineButton dataHsOverlay={"#dialingModifer"} variant={'primary'} remixIcon={"ri-phone-line"} text={"Dialing Mode"}/>
          </div>
          
        </div>
        {/* <div className='py-4'>
          <InputHeader/>
        </div> */}
        
      </div>
    </Header>
  )
}

export default HeaderCampaign