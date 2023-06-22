import React from 'react'

const OutlineButton = ({className, remixIcon, text, variant, onClick, dataHsOverlay}) => {
  return (
    <div className={className}>
        {variant == 'primary' ?  <button data-hs-overlay={dataHsOverlay} onClick={()=> onClick()} type="button" className="w-48 gap-x-3.5 text-slate-700 hover:bg-blue-200 active:bg-blue-300 bg-blue-100 border hover:border-slate-400 py-2.5 inline-flex justify-center items-center  rounded-md  text-sm">
        <span className={`${remixIcon} ri-lg`}></span>
        {text}
        </button> :
        <button data-hs-overlay={dataHsOverlay}  onClick={()=> onClick()} type="button" className="w-48 gap-x-3.5 text-slate-700 hover:bg-gray-100 active:bg-blue-300  border border-slate-200 hover:border-slate-400 py-2.5 inline-flex justify-center items-center  rounded-md  text-sm">
          <span className={`${remixIcon} ri-lg`}></span>
          {text}
        </button>
        }
    </div>
  )
}

export default OutlineButton