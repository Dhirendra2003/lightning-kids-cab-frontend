import React from 'react'

const CardPackage = (props) => {

  return (
    <div>
        <div className=' border border-gray-300 bg-white  shadow rounded-xl p-3 font-geist'>
                <div className="flex flex-col gap-3  text-left p-5 rounded"> <h1 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 '>{props.heading}</h1>
                <p className='font-normal text-black text-lg'>{props.information}</p>
                <span className='w-1/2 items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800'>{props.pay}</span></div>
        
            
        </div>
    </div>
  )
}

export default CardPackage