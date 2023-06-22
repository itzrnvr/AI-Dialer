import React, {useState, useEffect} from 'react'
import { Tooltip } from 'react-tooltip'


const SidebarList = () => {

    const [active, setActive] = useState(0)
    const [sideBarItems, setSideBarItems] = useState([
        {
            icon: 'ri-line-chart-line',
            route: 'stats',
            tooltip: 'stats'
        },
        {
            icon: 'ri-megaphone-line',
            route: 'campaign',
            tooltip: 'campaign'
        },
        {
            icon: 'ri-user-line',
            route: 'accounts',
            tooltip: 'Accounts'
        },
        {
            icon: 'ri-tools-line',
            route: 'settings',
            tooltip: 'settings'
        }
    ])

  return (
    <ul className="items-center w-full flex flex-col space-y-4">

    {sideBarItems.map((item, index) => {
        return (
            <li 
            data-tooltip-id="my-tooltip" 
            data-tooltip-content={item.tooltip} 
            data-tooltip-place="right"
            >
                <a key={index} onClick={()=> setActive(index)} className={`${item.icon} ${active == index ? `border border-slate-950` : 'border border-transparent '} ri-xl box-border text-slate-700 hs-tooltip-toggle py-3 flex flex-col px-3  rounded-md hover:bg-gray-200 dark:bg-gray-200 dark:text-white`} href="javascript:;">
                 </a>
                 
            </li>
        )
    })}
  </ul>
  )
}

export default SidebarList