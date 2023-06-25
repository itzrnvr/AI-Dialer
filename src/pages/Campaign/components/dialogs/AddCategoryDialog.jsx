import React, {useState} from 'react'
import Dialog from '../../../../layouts/Dialog'
import SimpleTextInput from '../../../../components/Inputs/SimpleTextInput'

const AddCategoryDialog = (
    {onCreate}
) => {
    const [categoryName, setCategoryName] = useState('')
  return (
    <Dialog 
    id="addCategoryDialog" 
    title ="Create New Category"
    pText='Create'
    nText='Cancel'
    pDataHsOverlay={"#addCampaignModifier"}
    nDataHsOverlay={"#addCampaignModifier"}
    pOnclick={()=> onCreate(categoryName)}
    pDisabled={!(categoryName.length >= 3)}
    >
        <div className='w-[30rem]'>
            <SimpleTextInput
                label='Enter Category Name'
                placeholder='MyNewCategory'
                value={categoryName}
                onChange={(e) => setCategoryName(e.target.value)}
            />
        </div>
    </Dialog>
  )
}

export default AddCategoryDialog