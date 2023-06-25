import React, { useState } from 'react'

function SimpleTextInput({
    label = 'input label',
    placeholder = 'input placeholder', 
    onChange = (e) => '',
    type="text",
    value,
}) {

  return (
    <div>
        <label htmlFor="hs-leading-icon" className="block text-sm font-medium mb-2 dark:text-white">{label}</label>
        <div className="relative">
            <input value={value} onChange={(e) => onChange(e)} type={type} className="py-3 px-4 block w-full border  focus:bg-gray-100 border-slate-400 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" placeholder={placeholder}/>
        </div>
    </div>
  )
}

export default SimpleTextInput