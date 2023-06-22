import React from 'react'

const Modifier = ({children, id}) => {
  return (
    <div id={id} className="hs-overlay hs-overlay-open:translate-x-0 translate-x-full fixed top-0 right-0 transition-all duration-200 transform h-full  w-1/2 z-[60] bg-white border-l dark:bg-gray-800 dark:border-gray-700 hidden" tabIndex="-1">
           {children}
    </div>
  )
}

export default Modifier