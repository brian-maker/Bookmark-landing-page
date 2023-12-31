import React from 'react'
import chrome from '../images/logo-chrome.svg'
import dots from '../images/bg-dots.svg'
import firefox from '../images/logo-firefox.svg'
import opera from '../images/logo-opera.svg'
function Downloads() {
  return (
    <>
    <section className="max-w-7 mx-auto px-8 py-20">
        <article className='text-center mb-10'>
        <h2 className='text-3xl mb-8 lg:text-4xl'>Download the extension</h2>
        <p>We’ve got more browsers in the pipeline. Please do let us know if you’ve got a favourite you’d like us to prioritize.</p>
        </article>

        <article className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
          {/* chrome */}
            <div className='bg-white   shadow-2xl text-center p-8'>
                <img src={chrome} alt="" className='block mx-auto my-4' />
                <h3 className='text-xl mb-4'>Add to chrome</h3>
                <p className='text-sm'>Minimum version 62</p>
                <img src={dots} alt="" className='block mx-auto my-6' />
                <button className='btn-blue text-white py-2 px-4 rounded shadow-lg lg:hover:bg-transparent border-2 border-blue-600  lg:hover:text-blue-600'>Add & install Extension</button>
            </div>

            {/* firefox */}
            <div className='bg-white shadow-2xl text-center p-8 lg:translate-y-10'>
                <img src={firefox} alt="" className='block mx-auto my-4' />
                <h3 className='text-xl mb-4'>
                Add to Firefox
                </h3>
                <p className='text-sm'>Minimum version 55</p>
                <img src={dots} alt="" className='block mx-auto my-6' />
                <button className='btn-blue text-white py-2 px-4 rounded shadow-lg lg:hover:bg-transparent border-2 border-blue-600  lg:hover:text-blue-600 '>Add & install Extension</button>
            </div>
            {/* opera */}
            <div className='bg-white shadow-2xl text-center p-8 lg:translate-y-20'>
                <img src={opera} alt="" className='block mx-auto my-4' />
                <h3 className='text-xl mb-4'>Add to Opera</h3>
                <p className='text-sm'>Minimum version 46</p>
                <img src={dots} alt="" className='block mx-auto my-6' />
                <button className='btn-blue text-white py-2 px-4 rounded shadow-lg lg:hover:bg-transparent border-2 border-blue-600  lg:hover:text-blue-600'>Add & install Extension</button>
            </div>
        </article>
    </section>
    </>
  )
}

export default Downloads