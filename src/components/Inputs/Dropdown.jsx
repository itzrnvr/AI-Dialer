import React, {useEffect, useState} from 'react'
import DropdownItem from './DropdownItem'

const Dropdown = ({
    actionItems = [],
    placeholder = "dropDown",
    currentSelection = "ITEM",
    data = [
        {
            label: "Item One",
            'hasDivider': false,
            'id': 0
        },
        {
            label: "Create",
            'hasDivider': true,
            'id': 2
        },
    ],
    child = (item, state, index) => (
        <DropdownItem 
            label={item.label} 
            hasDivider={item.hasDivider}
            key={item.id}
            onClick={(id, label) => {
                state(id, label)
            }}
        />
    )
}) => {

    const elementList = []

    data.forEach((dat, index) => {
        elementList.push(
            child(dat, index)
        )
    })
    
  return (
    <div>
        <label htmlFor="hs-leading-icon" className="mb-2 block text-sm font-medium dark:text-white">{placeholder}</label>
        <div className="hs-dropdown relative inline-flex">
            <button id="hs-dropdown-default" type="button" className="relative hs-dropdown-toggle w-44 py-3 px-4 inline-flex justify-start items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
                {currentSelection}
                <svg className="absolute right-4 hs-dropdown-open:rotate-180 w-2.5 h-2.5 text-gray-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
            </button>

            <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] hs-dropdown-open:opacity-100 opacity-0 w-72 hidden z-10 mt-2 min-w-[15rem] bg-white shadow-md rounded-lg p-2 dark:bg-gray-800 dark:border dark:border-gray-700 dark:divide-gray-700" aria-labelledby="hs-dropdown-default">
                {elementList}
                {actionItems}
            </div>
        </div>
    </div>          
  )
}

export default Dropdown