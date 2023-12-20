import React from 'react'

function ServiceCard({imgURL, label, subtext }) {
  return (
    <section>   
        <div className='flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16'>
            <div className='w-11 h-11 flex items-center justify-center bg-coral-red rounded-full'>
                <img src={imgURL} alt="" width={24} height={24}/>
            </div>
            <h3 className='mt-5 font-palanquin text-3xl font-bold leading-normal'>{label}</h3>
            <p className='mt-3 break-words font-montserrat leading-normal text-lg text-slate'>{subtext}</p>

        </div>
    </section>
  )
}

export default ServiceCard