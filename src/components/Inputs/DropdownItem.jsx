import React from 'react'

const DropdownItem = ({label = '', id = '',onClick = () => '', hasDivider = false}) => {
  return (
    <>
        <a onClick={() => onClick(id, label)} className={`${hasDivider ? `border-t` : `rounded-md`} flex items-center gap-x-3.5 py-2 px-3 text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300`} href="#">
            {label}
        </a>
    </>

  )
}

export default DropdownItem