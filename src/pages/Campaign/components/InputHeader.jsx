import React from 'react'

const InputHeader = ({value, onChange}) => {
  return (
    <input value={value} onChange={onChange} type="text" className=" bg-white border w-full py-3 px-4 rounded-full border-gray-300 focus:border-gray-400 focus:outline-none  text-sm dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" 
          placeholder="Search leads..."/>
  )
}

export default InputHeader