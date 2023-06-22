import React from 'react'
import Logo from '../assets/logo.svg'
import SidebarList from './SidebarList'

const Sidebar = () => {
  return (
    <div id="docs-sidebar" className="fixed top-0 left-0 z-[0] w-20 bg-[#F5F5F5] border-r border-sky-300 pb-10 overflow-y-auto scrollbar-y block translate-x-0 right-auto bottom-0 dark:scrollbar-y dark:bg-gray-800 dark:border-gray-700">
  <div className="px-1.5">
    <a className="flex-none  font-semibold  dark:text-white" href="javascript:;" aria-label="Brand">
      <img className='w-24 h-20 object-contain' src={Logo}></img>
    </a>
  </div>
  <nav className="hs-accordion-group mt-2 p-2 w-full flex flex-col flex-wrap">
      <SidebarList/>
  </nav>


</div>
  )
}

export default Sidebar