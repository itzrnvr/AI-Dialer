import React from 'react'
import OutlineButton from '../components/OutlineButton'

const PageSidebar = () => {
  return (
    <div id="docs-sidebar" className="overflow-visible top-0 left-0 bottom-0 z-[10] w-72 bg-white border-r border-gray-200 pt-4 pb-10 overflow-y-auto scrollbar-y translate-x-0 right-auto dark:scrollbar-y dark:bg-gray-800 dark:border-gray-700">
  <nav className="hs-accordion-group w-full flex flex-col items-center flex-wrap">
    <ul className="space-y-3">
      <li>
        <a className="flex items-center gap-x-3.5 py-2 mb-2 px-2 text-sm text-slate-700 rounded-md  dark:bg-gray-900 dark:text-white" href="javascript:;">
            <input type="text" className="py-2.5 px-4 block w-full outline-none border-gray-200 focus:bg-[#F6F6F6] hover:bg-[#F6F6F6]  rounded-md text-sm  dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" placeholder="search campaigns..."/>
        </a>
        <hr/>
      </li>
      
      <li>
        <a className="w-48 bg-[#F7F7F7] mx-1 flex items-center gap-x-3.5 py-2.5 px-2.5 text-sm text-slate-700 rounded-md hover:bg-[#F7F7F7]  dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300" href="javascript:;">
            <span className='ri-folder-2-line ri-lg'></span>
            Campaign
        </a>
      </li>

      <li>
        <a className="w-48 px-2.5 bg-[#F7F7F7]  mx-1 flex items-center gap-x-3.5 py-2.5 text-sm text-slate-700 rounded-md hover:bg-[#F7F7F7]  dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300" href="javascript:;">
            <span className='ri-folder-2-line ri-lg'></span>
            # Example Campaign
        </a>
      </li>
    </ul>
    <OutlineButton className="mt-6" remixIcon={"ri-add-line"} text={"New Campaign"}/>
  </nav>
</div>
  )
}

export default PageSidebar