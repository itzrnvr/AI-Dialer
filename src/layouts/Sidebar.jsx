import React from 'react'
import Logo from '../assets/logo.svg'

const Sidebar = () => {
  return (
    <div id="docs-sidebar" className=" hidden fixed top-0 left-0 bottom-0 z-[10] w-20 bg-[#F5F5F5] border-r border-gray-200 pb-10 overflow-y-auto scrollbar-y lg:block lg:translate-x-0 lg:right-auto lg:bottom-0 dark:scrollbar-y dark:bg-gray-800 dark:border-gray-700">
  <div className="px-1.5">
    <a className="flex-none  font-semibold  dark:text-white" href="javascript:;" aria-label="Brand">
      <img className='w-24 h-20 object-contain' src={Logo}></img>
    </a>
  </div>
  <nav className="hs-accordion-group mt-2 p-2 w-full flex flex-col flex-wrap">
    <ul className="items-center w-full flex flex-col space-y-4">
      <li className='hs-tooltip [--placement:bottom]'>
        <a className="text-slate-700 hs-tooltip-toggle box-border ri-line-chart-line ri-xl  py-3 flex border flex-col px-3 border-slate-950 rounded-md hover:bg-gray-100 dark:bg-gray-900 dark:text-white" href="javascript:;">
        </a>
        <span className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-md shadow-sm dark:bg-slate-700" role="tooltip">
          Stats
        </span>
      </li>

      <li>
        <a className="ri-megaphone-line ri-xl py-3 flex  flex-col px-3 text-slate-600 rounded-md hover:bg-gray-200 dark:bg-gray-900 dark:text-white" href="javascript:;">
        </a>
      </li> 

      <li>
        <a className="ri-user-line ri-xl py-3 flex  flex-col px-3 text-slate-600 rounded-md hover:bg-gray-200 dark:bg-gray-900 dark:text-white" href="javascript:;">
        </a>
      </li> 

      <li>
        <a className="ri-tools-line ri-xl py-3 flex  flex-col px-3 text-slate-600 rounded-md hover:bg-gray-200 dark:bg-gray-900 dark:text-white" href="javascript:;">
        </a>
      </li> 
    </ul>
  </nav>
</div>
  )
}

export default Sidebar