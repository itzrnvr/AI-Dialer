import React from 'react'
import Logo from '../assets/logo.svg'

const Sidebar = () => {
  return (
    <div id="docs-sidebar" className="hs-overlay hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 left-0 bottom-0 z-[60] w-24 bg-white border-r border-gray-200 pt-6 pb-10 overflow-y-auto scrollbar-y lg:block lg:translate-x-0 lg:right-auto lg:bottom-0 dark:scrollbar-y dark:bg-gray-800 dark:border-gray-700">
  <div className="px-4">
    <a classNameName="flex-none  font-semibold  dark:text-white" href="javascript:;" aria-label="Brand">
      <img className='w-16 h-16 object-fill' src={Logo}></img>
    </a>
  </div>
  <nav className="hs-accordion-group mt-2 p-6 w-full flex flex-col flex-wrap">
    <ul className="items-center w-full flex flex-col space-y-4">
      <li>
        <a className="flex border flex-col h-14 w-16 py-2 px-2.5 text-sky-600 border-sky-600 rounded-md hover:bg-gray-100 dark:bg-gray-900 dark:text-white" href="javascript:;">
        <svg xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
        </svg>
        </a>
      </li>

      <li>
        <a className="flex flex-col h-14 w-16 py-2 px-2.5 text-slate-700 rounded-md hover:bg-gray-100 dark:bg-gray-900 dark:text-white" href="javascript:;">
        <svg xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
        </svg>
        </a>
      </li>
    </ul>
  </nav>
</div>
  )
}

export default Sidebar