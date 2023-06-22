import React, { useDebugValue, useEffect, useState } from 'react'
import OutlineButton from '../components/OutlineButton'

const PageSidebar = ({data, onClickAddNew}) => {
  const [searchQuery, setSearchQuery] = useState('')
  const [active, setActive] = useState(null)
  const itemList = [
    {
      icon: 'ri-folder-line',
      name: 'Campaign',
      id:'0',
    },
    {
      icon: 'ri-folder-line',
      name: '2nd Campaign',
      id:'1',
    },
  ]
  const [items, setItems] = useState(itemList)

  const filterBySearch = (query) => {
    // Create copy of item list
    let updatedList = [...itemList];
    // Include all elements which includes the search query
    updatedList = updatedList.filter((item) => {
      return item.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });
    // Trigger render with updated values
    setItems(updatedList);
  };

  useEffect(() => {
    filterBySearch(searchQuery)
  }, [searchQuery])

  return (
    <div id="docs-sidebar" className="overflow-visible top-0 left-0 bottom-0 z-[10] w-72 bg-white border-r border-gray-200 pt-4 pb-10 overflow-y-auto scrollbar-y translate-x-0 right-auto dark:scrollbar-y dark:bg-gray-800 dark:border-gray-700">
    <nav className="hs-accordion-group w-full flex flex-col items-center flex-wrap">
    <ul className="space-y-3">
      <li>
        <a className="flex items-center gap-x-3.5 py-2 mb-2 px-2 text-sm text-slate-700 rounded-md  dark:bg-gray-900 dark:text-white" href="javascript:;">
            <input value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} type="text" className="py-2.5 px-4 block w-full outline-none border-gray-200 focus:bg-[#F6F6F6] hover:bg-[#F6F6F6]  rounded-md text-sm  dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" placeholder="search campaigns..."/>
        </a>
        <hr/>
      </li>

      {items.map((item, index)=> {
        return (
          <li>
            <a onClick={() => setActive(index)} className={`${active == index ? `bg-[#ebe9e9]` : 'hover:bg-[#F7F7F7]'} w-48  mx-1 flex items-center gap-x-3.5 py-2.5 px-2.5 text-sm text-slate-700 rounded-md   dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300`} href="javascript:;">
                <span className={`${item.icon} ri-lg`}></span>
                {item.name}
            </a>
          </li>
        )
      })}
      
    </ul>
    <OutlineButton className="mt-6" remixIcon={"ri-add-line"} text={"New Campaign"}/>
  </nav>
</div>
  )
}

export default PageSidebar