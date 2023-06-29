import React from 'react'

const OutlineButton = ({
  disabled = false,
  className, 
  remixIcon = 'ri-bilibili-line', 
  text = 'Button', 
  variant = 'outlined', 
  onClick, 
  dataHsOverlay}) => {
  return (
    <div className={className}>
        {variant == 'primary' &&  <button disabled={disabled}  data-hs-overlay={dataHsOverlay} onClick={onClick} type="button" className=" disabled:opacity-50 w-48 gap-x-3.5 text-slate-700 hover:bg-blue-200 active:bg-blue-300 bg-blue-100 border hover:border-slate-400 py-2.5 inline-flex justify-center items-center  rounded-md  text-sm">
        <span className={`${remixIcon} ri-lg`}></span>
        {text}
        </button> }

       { variant=='outlined' && <button disabled={disabled}  data-hs-overlay={dataHsOverlay}  onClick={onClick} type="button" className=" disabled:opacity-50 w-48 gap-x-3.5 text-slate-700 hover:bg-gray-100 active:bg-blue-300  border border-slate-200 hover:border-slate-400 py-2.5 inline-flex justify-center items-center  rounded-md  text-sm">
          <span className={`${remixIcon} ri-lg`}></span>
          {text}
        </button>
        }

        { variant=='primaryStrong' && <button disabled={disabled} data-hs-overlay={dataHsOverlay}  onClick={onClick} type="button" className="disabled:opacity-50 bg-blue-600 w-48 gap-x-3.5 text-slate-50 hover:bg-blue-700 active:bg-blue-600  border border-slate-200 hover:border-slate-400 py-2.5 inline-flex justify-center items-center  rounded-md  text-sm">
          <span className={`${remixIcon} ri-lg`}></span>
          {text}
        </button>
        }

        { variant=='smallPrimaryStrong' && <button disabled={disabled} data-hs-overlay={dataHsOverlay}  onClick={onClick} type="button" className="disabled:opacity-50 bg-blue-600 w-24 gap-x-3.5 text-slate-50 hover:bg-blue-700 active:bg-blue-600  border border-slate-200 hover:border-slate-400 py-3 inline-flex justify-center items-center  rounded-md  text-sm">
          {text}
        </button>
        }
        { variant=='smallOutlined' && <button disabled={disabled} data-hs-overlay={dataHsOverlay}  onClick={onClick} type="button" className= "disabled:opacity-50 w-24 gap-x-3.5 text-slate-700 hover:bg-gray-100 active:bg-blue-300  border border-slate-200 hover:border-slate-400 py-3 inline-flex justify-center items-center  rounded-md  text-sm">
          {text}
        </button>
        }
    </div>
  )
}

export default OutlineButton